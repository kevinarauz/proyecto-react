import { Routes, Route } from 'shared/lib'
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
            <Route path={PATHS.HOME} element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow-1 p-2">
                  <HomePage />
                </main>
                <Footer />
              </ProtectedRoute>
            } />
            <Route path={PATHS.ABOUT} element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow-1 p-2">
                  <AboutPage />
                </main>
                <Footer />
              </ProtectedRoute>
            } />
            <Route path={PATHS.CONTACT} element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow-1 p-2">
                  <ContactPage />
                </main>
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </WithRouter>
  )
}

export default App
