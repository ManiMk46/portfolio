import { CodeRain } from '../components/CodeRain'
import './Skills.scss'

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section__label">Skills</div>
      <h2 className="section__title">What I work with</h2>
      <div className="section__content">
        <p>
          My skills are still growing, but these are the main areas I&apos;m
          practicing and improving.
        </p>
      </div>

      <div className="skills-layout">
        <div className="skills-list">
          <div>
            <div className="skills-list__group-title">Core</div>
            <ul className="skills-list__items">
              <li>TypeScript</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML &amp; CSS</li>
            </ul>
          </div>
          <div>
            <div className="skills-list__group-title">Frontend</div>
            <ul className="skills-list__items">
              <li>React</li>
              <li>SCSS / Sass</li>
              <li>Responsive layouts</li>
            </ul>
          </div>
          <div>
            <div className="skills-list__group-title">Mindset</div>
            <ul className="skills-list__items">
              <li>Learning by building</li>
              <li>Clean, simple UI</li>
              <li>Multi-language communication</li>
            </ul>
          </div>
        </div>

        <div className="skills-animation">
          <CodeRain />
        </div>
      </div>
    </section>
  )
}

