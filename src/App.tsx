import { useEffect } from 'react'
import './App.scss'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Contact } from './pages/Contact'

function App() {
  useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault()
    }

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
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
