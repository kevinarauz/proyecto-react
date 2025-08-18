import { Routes, Route, Navigate } from 'shared/lib'
import { PATHS } from 'shared/config'
import { WithRouter, AuthProvider, ProtectedRoute } from './app/providers'
import { Navbar } from 'widgets/Navbar'
import { Footer } from 'widgets/Footer'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import { ContactPage } from 'pages/contact'
import { LoginPage } from 'pages/login'

function App() {
  return (
    <WithRouter>
      <AuthProvider>
        <div className="min-h-screen flex flex-column">
          <Routes>
            <Route path={PATHS.LOGIN} element={<LoginPage />} />
            <Route 
              path="/" 
              element={<Navigate to={PATHS.LOGIN} replace />} 
            />
            <Route path="*" element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow-1 p-2">
                  <Routes>
                    <Route path={PATHS.HOME} element={<HomePage />} />
                    <Route path={PATHS.ABOUT} element={<AboutPage />} />
                    <Route path={PATHS.CONTACT} element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </WithRouter>
  )
}

export default App
