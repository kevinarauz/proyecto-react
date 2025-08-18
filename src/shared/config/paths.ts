export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const

export type AppPath = typeof PATHS[keyof typeof PATHS]