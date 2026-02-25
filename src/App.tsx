import { useEffect } from 'react'
import './App.scss'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Contact } from './pages/Contact'
import { SectionDivider } from './components/SectionDivider'

function App() {
  useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault()
    }

    const initTheme = () => {
      const stored = localStorage.getItem('theme')
      let theme: 'light' | 'dark'
      if (stored === 'light' || stored === 'dark') {
        theme = stored
      } else {
        const prefersLight = window.matchMedia
          ? window.matchMedia('(prefers-color-scheme: light)').matches
          : false
        theme = prefersLight ? 'light' : 'dark'
      }
      document.body.classList.toggle('theme-light', theme === 'light')
    }
    initTheme()

    document.addEventListener('copy', handleCopy)

    return () => {
      document.removeEventListener('copy', handleCopy)
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="app__inner">
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
