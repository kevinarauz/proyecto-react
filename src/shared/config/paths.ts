export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
} as const

export type AppPath = typeof PATHS[keyof typeof PATHS]