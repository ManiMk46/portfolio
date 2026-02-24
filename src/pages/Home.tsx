import './Home.scss'

export const Home = () => {
  return (
    <section id="home" className="section">
      <div className="hero">
        <div>
          <p className="hero__intro">Software Engineering Student</p>
          <h1 className="hero__name">
            <span>Mani</span>
            <span>Khosh Ghalb</span>
          </h1>
          <p className="hero__role">Istanbul · Nisantasi University</p>
          <p className="hero__details">
            I&apos;m a software engineering student at Nisantasi University in
            Istanbul. I enjoy building clean, minimal interfaces and learning how
            things work behind the scenes — from frontend details to the logic
            that powers applications.
          </p>
        </div>

        <aside className="hero__meta">
          <div className="hero__meta-row">
            <div className="hero__meta-label">Languages</div>
            <div className="hero__meta-value">
              Native Persian (Farsi)
              <br />
              Fluent Turkish
              <br />
              Good English
            </div>
          </div>
          <div className="hero__meta-row">
            <div className="hero__meta-label">Focus</div>
            <div className="hero__meta-value">
              Learning modern web development,
              <br />
              improving problem solving,
              <br />
              and growing as a software engineer.
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

