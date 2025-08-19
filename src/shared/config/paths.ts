export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  POSTS: '/posts',
  LOGIN: '/login',
} as const

export type AppPath = typeof PATHS[keyof typeof PATHS]