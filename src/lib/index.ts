// Main Library Exports
// Punto único de entrada para todas las librerías externas

// PrimeReact Components
export * from './primereact'

// Re-export React Router (si necesitas centralizarlo también)
export { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  Navigate,
  useNavigate,
  useParams,
  useLocation,
  Outlet
} from 'react-router-dom'

// Re-export React hooks más comunes (opcional)
export { 
  useState, 
  useEffect, 
  useContext, 
  useReducer,
  useMemo,
  useCallback,
  useRef
} from 'react'