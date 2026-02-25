import { useState } from 'react'
import './Navbar.scss'

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const Navbar = () => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    return typeof document !== 'undefined' && document.body.classList.contains('theme-light')
  })

  const toggleTheme = () => {
    const next = !isLight
    setIsLight(next)
    document.body.classList.toggle('theme-light', next)
    localStorage.setItem('theme', next ? 'light' : 'dark')
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <span>Portfolio</span>
        </div>
        <nav className="navbar__links">
          <button
            type="button"
            className="navbar__link"
            onClick={() => scrollToId('home')}
          >
            Home
          </button>
          <button
            type="button"
            className="navbar__link"
            onClick={() => scrollToId('about')}
          >
            About
          </button>
          <button
            type="button"
            className="navbar__link"
            onClick={() => scrollToId('skills')}
          >
            Skills
          </button>
          <button
            type="button"
            className="navbar__link"
            onClick={() => scrollToId('contact')}
          >
            Contact
          </button>
          <button
            type="button"
            className="navbar__theme-toggle"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={toggleTheme}
          >
            {isLight ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
