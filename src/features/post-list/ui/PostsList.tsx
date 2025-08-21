import React, { useState } from 'react'
import { Button, DataTable, Column, InputText } from 'shared/lib'
import { Loading } from 'shared/ui'
import { DeletePostButton } from 'features/post-delete'
import { usePosts } from '../model/usePosts'
import type { Post } from 'entities/post'

interface PostsListProps {
  onCreatePost?: () => void
  onEditPost?: (postId: number) => void
  onDeletePost?: (postId: number) => void
  renderPost?: (post: unknown) => React.ReactNode
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
    prevProps.onDeletePost === nextProps.onDeletePost &&
    prevProps.renderPost === nextProps.renderPost
  )
}

function PostsList({ 
  onCreatePost, 
  onEditPost, 
  onDeletePost,
  renderPost 
}: PostsListProps) {
  const { posts, isLoading, error, refetch } = usePosts()
  const [globalFilter, setGlobalFilter] = useState<string>('')

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

  // Template para la columna ID
  const idBodyTemplate = (rowData: Post) => {
    return (
      <div className="flex align-items-center">
        <div className="bg-blue-100 border-round px-2 py-1">
          <span className="text-sm font-semibold text-blue-800">#{rowData.id}</span>
        </div>
      </div>
    )
  }

  // Template para la columna título
  const titleBodyTemplate = (rowData: Post) => {
    return (
      <div className="flex flex-column">
        <span className="font-semibold text-900 line-height-3">
          {rowData.title}
        </span>
      </div>
    )
  }

  // Template para la columna contenido con truncado
  const contentBodyTemplate = (rowData: Post) => {
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
  }

  // Template para la columna autor
  const authorBodyTemplate = (rowData: Post) => {
    return (
      <div className="flex align-items-center gap-2">
        <i className="pi pi-user text-400"></i>
        <span className="text-600">Usuario {rowData.userId}</span>
      </div>
    )
  }

  // Template para la columna fecha (mock)
  const dateBodyTemplate = (rowData: Post) => {
    return (
      <div className="flex align-items-center gap-2">
        <i className="pi pi-calendar text-400"></i>
        <span className="text-600 text-sm">JSONPlaceholder</span>
      </div>
    )
  }

  // Template para la columna de acciones
  const actionsBodyTemplate = (rowData: Post) => {
    return (
      <div className="flex gap-2">
        {onEditPost && (
          <Button
            icon="pi pi-pencil"
            tooltip="Editar"
            tooltipOptions={{ position: 'top' }}
            onClick={() => onEditPost(rowData.id)}
            className="p-button-rounded p-button-text p-button-warning"
            size="small"
          />
        )}
        {onDeletePost && (
          <DeletePostButton
            postId={rowData.id}
            postTitle={rowData.title}
            onSuccess={onDeletePost}
            className="p-button-rounded p-button-text p-button-danger"
            size="small"
          />
        )}
      </div>
    )
  }

  // Template del paginador personalizado - string válido para PrimeReact
  const paginatorTemplate = 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
  
  // Template para el reporte actual de página - debe ser string
  const currentPageReportTemplate = 'Mostrando {first} a {last} de {totalRecords} posts'

  return (
    <div>
      <div className="flex justify-content-between align-items-center mb-4">
        <h2 className="text-2xl font-semibold text-900 m-0">
          Posts ({posts.length})
        </h2>
        {onCreatePost && (
          <Button
            label="Crear Post"
            icon="pi pi-plus"
            onClick={onCreatePost}
            className="p-button-success"
          />
        )}
      </div>

      {/* Buscador Global */}
      <div className="mb-4">
        <div className="p-input-icon-left w-full md:w-20rem">
          <i className="pi pi-search" />
          <InputText
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Buscar posts..."
            className="w-full"
          />
        </div>
      </div>

      {posts.length === 0 && !isLoading ? (
        <div className="text-center p-6">
          <i className="pi pi-inbox text-4xl text-400 mb-3"></i>
          <p className="text-600 text-lg">No hay posts disponibles</p>
        </div>
      ) : (
        <DataTable
          value={posts}
          paginator={true}
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          paginatorTemplate={paginatorTemplate}
          currentPageReportTemplate={currentPageReportTemplate}
          className="p-datatable-sm"
          stripedRows={true}
          responsiveLayout="stack"
          breakpoint="768px"
          emptyMessage="No se encontraron posts"
          loading={isLoading}
          tableStyle={{ minWidth: '50rem' }}
          globalFilter={globalFilter}
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
      )}
    </div>
  )
}

// Memoizar el componente con comparación personalizada
// Beneficios: Evita re-renders cuando las props callback no cambian por referencia
// Especialmente útil cuando renderiza listas grandes de posts
export default React.memo(PostsList, arePostsListPropsEqual)