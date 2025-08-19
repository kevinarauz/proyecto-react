import { PATHS } from 'shared/config'
import type { NavigationItems } from './types'

export const navigationItems: NavigationItems = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    path: PATHS.HOME
  },
  {
    label: 'Posts', 
    icon: 'pi pi-file-edit',
    path: PATHS.POSTS
  },
  {
    label: 'Acerca de', 
    icon: 'pi pi-info-circle',
    path: PATHS.ABOUT
  },
  {
    label: 'Contacto',
    icon: 'pi pi-envelope', 
    path: PATHS.CONTACT
  },
  {
    label: 'Login',
    icon: 'pi pi-sign-in', 
    path: PATHS.LOGIN
  }
]