import { Routes, Route } from 'shared/lib'
import { PATHS } from 'shared/config'
import { WithRouter } from './app/providers'
import { Navbar } from 'widgets/Navbar'
import { Footer } from 'widgets/Footer'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import { ContactPage } from 'pages/contact'

function App() {
  return (
    <WithRouter>
      <div className="min-h-screen flex flex-column">
        <Navbar />
        <main className="flex-grow-1 p-2">
          <Routes>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WithRouter>
  )
}

export default App
