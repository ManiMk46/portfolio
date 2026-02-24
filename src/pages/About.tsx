import './About.scss'

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="section__label">About</div>
      <h2 className="section__title">Who I am</h2>
      <div className="about-grid">
        <div className="about-grid__block">
          <div className="about-grid__label">Background</div>
          <p>
            I&apos;m currently studying Software Engineering at Nisantasi
            University. Living in Istanbul gives me a mix of cultures and
            languages every day, and that variety influences how I think about
            technology and design.
          </p>
        </div>
        <div className="about-grid__block">
          <div className="about-grid__label">Today</div>
          <p>
            Right now, I&apos;m focused on becoming a stronger developer: writing
            cleaner code, understanding core concepts deeply, and building small
            projects that actually feel good to use.
          </p>
        </div>
      </div>
    </section>
  )
}

