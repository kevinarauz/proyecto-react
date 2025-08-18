import { Routes, Route } from 'shared/lib'
import { PATHS } from 'shared/config'
import { WithRouter } from './app/providers'
import { Navbar } from 'widgets/Navbar'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import { ContactPage } from 'pages/contact'

function App() {
  return (
    <WithRouter>
      <div className="min-h-screen">
        <Navbar />
        <main className="p-2">
          <Routes>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </WithRouter>
  )
}

export default App
