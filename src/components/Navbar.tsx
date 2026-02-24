import './Navbar.scss'

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const Navbar = () => {
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
        </nav>
      </div>
    </header>
  )
}

