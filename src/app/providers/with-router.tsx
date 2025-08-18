import { Router } from 'shared/lib'
import type { ReactNode } from 'react'

interface WithRouterProps {
  children: ReactNode
}

export const withRouter = (component: () => ReactNode) => () => (
  <Router>
    {component()}
  </Router>
)

export function WithRouter({ children }: WithRouterProps) {
  return <Router>{children}</Router>
}