import React, { useState, useMemo, useCallback } from 'react'
import { Button, DataTable, Column, InputText, ConfirmDialog } from 'shared/lib'
import { Loading } from 'shared/ui'
import { useDebounce, usePerformanceMonitor } from 'shared/hooks'
import { DeletePostButton } from 'features/post-delete'
import { usePosts } from '../model/usePosts'
import type { Post } from 'entities/post'
import styles from './PostsList.module.css'

interface PostsListProps {
  onCreatePost?: () => void
  onEditPost?: (postId: number) => void
  onDeletePost?: (postId: number) => void
}

// Función de comparación personalizada para optimizar re-renders
const arePostsListPropsEqual = (
  prevProps: PostsListProps, 
  nextProps: PostsListProps
): boolean => {
  // Comparar funciones callback por referencia
  return (
    prevProps.onCreatePost === nextProps.onCreatePost &&
    prevProps.onEditPost === nextProps.onEditPost &&
    prevProps.onDeletePost === nextProps.onDeletePost
  )
}

function PostsList({ 
  onCreatePost, 
  onEditPost, 
  onDeletePost
}: PostsListProps) {
  // TODOS LOS HOOKS DEBEN IR AL PRINCIPIO - RULES OF HOOKS
  const { posts, isLoading, error, refetch } = usePosts()
  const [globalFilter, setGlobalFilter] = useState<string>('')
  
  // OPTIMIZACIÓN 1: Debouncing para búsqueda (mejora performance crítica)
  const debouncedGlobalFilter = useDebounce(globalFilter, 300)
  
  // MONITOREO DE PERFORMANCE: Validar optimizaciones implementadas
  usePerformanceMonitor({ 
    componentName: 'PostsList',
    onMetrics: (metrics) => {
      // Log de métricas para validar las optimizaciones del agente performance
      if (import.meta.env.DEV) {
        console.log('📊 PostsList Performance Metrics:', metrics)
      }
    }
  })
  
  // OPTIMIZACIÓN 2: Memoizar posts filtrados para evitar re-cálculos innecesarios
  const filteredPosts = useMemo(() => {
    if (!debouncedGlobalFilter) return posts
    
    const filterLower = debouncedGlobalFilter.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(filterLower) ||
      post.body.toLowerCase().includes(filterLower) ||
      post.userId.toString().includes(filterLower)
    )
  }, [posts, debouncedGlobalFilter])

  // OPTIMIZACIÓN 3: Memoizar callbacks para evitar re-renders de componentes hijos
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value)
  }, [])

  const handleCreatePost = useCallback(() => {
    onCreatePost?.()
  }, [onCreatePost])

  const handleEditPost = useCallback((postId: number) => {
    onEditPost?.(postId)
  }, [onEditPost])

  const handleDeletePost = useCallback((postId: number) => {
    onDeletePost?.(postId)
  }, [onDeletePost])

  // OPTIMIZACIÓN 4: Memoizar templates para evitar re-renders innecesarios
  // Template para la columna ID - Memoizado
  const idBodyTemplate = useCallback((rowData: Post) => {
    return (
      <div className="flex align-items-center">
        <div className={`bg-primary-50 border-round-lg px-3 py-1 border-1 border-primary-200 ${styles['status-badge']}`}>
          <span className="text-sm font-semibold text-primary-700">#{rowData.id}</span>
        </div>
      </div>
    )
  }, [])

  // Template para la columna título - Memoizado
  const titleBodyTemplate = useCallback((rowData: Post) => {
    return (
      <div className="flex flex-column">
        <span className="font-semibold text-900 line-height-3 mb-1">
          {rowData.title}
        </span>
        <div className="flex align-items-center gap-1">
          <i className="pi pi-bookmark-fill text-xs text-primary-500"></i>
          <span className="text-xs text-500">Post #{rowData.id}</span>
        </div>
      </div>
    )
  }, [])

  // Template para la columna contenido con truncado - Memoizado
  const contentBodyTemplate = useCallback((rowData: Post) => {
    const truncatedContent = rowData.body.length > 100 
      ? `${rowData.body.substring(0, 100)}...` 
      : rowData.body
    
    return (
      <div className="flex flex-column">
        <span className="text-600 line-height-3">
          {truncatedContent}
        </span>
        {rowData.body.length > 100 && (
          <small className="text-400 mt-1">
            +{rowData.body.length - 100} caracteres más
          </small>
        )}
      </div>
    )
  }, [])

  // Template para la columna autor - Memoizado
  const authorBodyTemplate = useCallback((rowData: Post) => {
    return (
      <div className="flex align-items-center gap-2">
        <div className="bg-surface-100 border-round-full w-2rem h-2rem flex align-items-center justify-content-center">
          <i className="pi pi-user text-surface-600 text-sm"></i>
        </div>
        <div className="flex flex-column">
          <span className="text-900 font-medium text-sm">Usuario {rowData.userId}</span>
          <span className="text-500 text-xs">Autor</span>
        </div>
      </div>
    )
  }, [])

  // Template para la columna fecha (mock) - Memoizado
  const dateBodyTemplate = useCallback(() => {
    return (
      <div className="flex align-items-center gap-2">
        <div className="bg-orange-50 border-round p-1">
          <i className="pi pi-calendar text-orange-600 text-sm"></i>
        </div>
        <div className="flex flex-column">
          <span className="text-900 text-sm">JSONPlaceholder</span>
          <span className="text-500 text-xs">API Simulada</span>
        </div>
      </div>
    )
  }, [])

  // Template para la columna de acciones - Memoizado
  const actionsBodyTemplate = useCallback((rowData: Post) => {
    return (
      <div className="flex gap-2">
        {onEditPost && (
          <Button
            icon="pi pi-pencil"
            tooltip="Editar"
            tooltipOptions={{ position: 'top' }}
            onClick={() => handleEditPost(rowData.id)}
            className="p-button-rounded p-button-text p-button-warning"
            size="small"
          />
        )}
        {onDeletePost && (
          <DeletePostButton
            postId={rowData.id}
            postTitle={rowData.title}
            onSuccess={handleDeletePost}
            className="p-button-rounded p-button-text p-button-danger"
            size="small"
          />
        )}
      </div>
    )
  }, [onEditPost, onDeletePost, handleEditPost, handleDeletePost])

  // Template del paginador personalizado - string válido para PrimeReact
  const paginatorTemplate = 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
  
  // Template para el reporte actual de página - debe ser string
  const currentPageReportTemplate = 'Mostrando {first} a {last} de {totalRecords} posts'

  if (isLoading) {
    return (
      <div className="text-center p-6">
        <Loading size="large" message="Cargando posts..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-6">
        <div className="bg-red-50 border-1 border-red-200 border-round p-4 mb-4">
          <i className="pi pi-exclamation-triangle text-red-600 text-2xl mb-2"></i>
          <p className="text-red-800 font-semibold mb-2">Error al cargar posts</p>
          <p className="text-red-600 text-sm mb-3">{error}</p>
          <Button 
            label="Reintentar" 
            icon="pi pi-refresh" 
            onClick={refetch}
            className="p-button-danger p-button-sm"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles['posts-module']} posts-module`}>
      {/* Header del Módulo */}
      <div className={`surface-card border-round-lg p-4 mb-4 shadow-1 ${styles['module-header']}`}>
        <div className="flex align-items-start justify-content-between">
          <div className="flex align-items-start gap-3">
            <div className={`bg-primary-100 border-round-lg p-2 ${styles['module-icon-container']}`}>
              <i className="pi pi-file-edit text-primary-600 text-2xl"></i>
            </div>
            <div>
              <div className="flex align-items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-900 m-0">Posts</h1>
                <div className="bg-primary-500 border-round-xl px-2 py-1">
                  <span className="text-xs font-semibold text-white">{filteredPosts.length}</span>
                </div>
              </div>
              <p className="text-600 m-0 line-height-3">Gestiona y organiza todos tus posts</p>
            </div>
          </div>
          <div className="hidden md:block">
            <i className="pi pi-bookmark text-300 text-3xl"></i>
          </div>
        </div>
      </div>

      {/* Barra de Acciones */}
      <div className={`surface-card border-round-lg p-3 mb-4 shadow-1 ${styles['actions-toolbar']}`}>
        <div className="flex flex-column md:flex-row gap-3 md:align-items-center md:justify-content-between">
          {/* Buscador Mejorado */}
          <div className={`flex-1 md:max-w-20rem ${styles['search-input-container']}`}>
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search text-400" style={{ left: '1rem' }}></i>
              <InputText
                id="search-posts"
                name="searchPosts"
                value={globalFilter}
                onChange={handleFilterChange}
                placeholder="Buscar en posts..."
                aria-label="Buscar posts por título, contenido o autor"
                className={`w-full ${styles['search-input-enhanced']}`}
              />
            </span>
          </div>
          
          {/* Botones de Acción */}
          <div className="flex gap-2">
            {onCreatePost && (
              <Button
                label="Crear Post"
                icon="pi pi-plus"
                onClick={handleCreatePost}
                className={`p-button-primary font-semibold ${styles['action-button']}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      {filteredPosts.length === 0 && !isLoading ? (
        <div className="surface-card border-round-lg p-6 text-center shadow-1">
          <div className="mb-4">
            <i className={`pi pi-inbox text-6xl text-300 mb-3 ${styles['empty-state-icon']}`}></i>
          </div>
          <h3 className="text-900 font-semibold mb-2">
            {globalFilter ? 'No se encontraron posts' : 'No hay posts disponibles'}
          </h3>
          <p className="text-600 mb-4 line-height-3">
            {globalFilter 
              ? `No hay posts que coincidan con "${globalFilter}"`
              : 'Comienza creando tu primer post para gestionar tu contenido'
            }
          </p>
          {onCreatePost && !globalFilter && (
            <Button
              label="Crear mi primer post"
              icon="pi pi-plus"
              onClick={handleCreatePost}
              className={`p-button-primary p-button-lg ${styles['action-button']}`}
            />
          )}
        </div>
      ) : (
        <div className={`surface-card border-round-lg shadow-1 ${styles['table-container']}`}>
          <DataTable
            value={filteredPosts}
            paginator={true}
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            paginatorTemplate={paginatorTemplate}
            currentPageReportTemplate={currentPageReportTemplate}
            className="p-datatable-sm border-none"
            stripedRows={true}
            responsiveLayout="stack"
            breakpoint="768px"
            emptyMessage={
              <div className="text-center py-6">
                <i className="pi pi-search text-3xl text-300 mb-3"></i>
                <p className="text-600">No se encontraron posts que coincidan con tu búsqueda</p>
              </div>
            }
            loading={isLoading}
            tableStyle={{ minWidth: '50rem' }}
            // OPTIMIZACIÓN 5: Usar filtros locales en lugar de globalFilter para mejor performance
            globalFilterFields={['title', 'body', 'userId']}
          >
          <Column 
            field="id" 
            header="ID" 
            body={idBodyTemplate}
            sortable 
            style={{ width: '80px', minWidth: '80px' }}
          />
          <Column 
            field="title" 
            header="Título" 
            body={titleBodyTemplate}
            sortable 
            style={{ minWidth: '200px' }}
          />
          <Column 
            field="body" 
            header="Contenido" 
            body={contentBodyTemplate}
            style={{ minWidth: '300px' }}
          />
          <Column 
            field="userId" 
            header="Autor" 
            body={authorBodyTemplate}
            sortable 
            style={{ width: '120px', minWidth: '120px' }}
          />
          <Column 
            header="Fecha" 
            body={dateBodyTemplate}
            style={{ width: '140px', minWidth: '140px' }}
          />
          <Column 
            header="Acciones" 
            body={actionsBodyTemplate}
            exportable={false}
            style={{ width: '120px', minWidth: '120px' }}
          />
          </DataTable>
        </div>
      )}
      <ConfirmDialog />
    </div>
  )
}

// Memoizar el componente con comparación personalizada
// Beneficios: Evita re-renders cuando las props callback no cambian por referencia
// Especialmente útil cuando renderiza listas grandes de posts
export default React.memo(PostsList, arePostsListPropsEqual)