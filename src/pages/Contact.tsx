import { useState } from 'react'
import './Contact.scss'

const CONTACT_EMAIL = 'mwnimk136@gmail.com'

export const Contact = () => {
  const [fromEmail, setFromEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${fromEmail || 'visitor'}`)
    const body = encodeURIComponent(message || '')
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="section">
      <div className="section__label">Contact</div>
      <h2 className="section__title">Get in touch</h2>

      <div className="contact">
        <p className="contact__intro">
          If you want to reach me for projects, collaboration, or questions about
          my work, send me a message here.
        </p>

        <form className="contact-form">
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="contact-form__input"
              placeholder="you@example.com"
              value={fromEmail}
              onChange={(event) => setFromEmail(event.target.value)}
            />
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="contact-form__textarea"
              rows={4}
              placeholder="Write your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button type="button" className="contact-form__submit" onClick={handleSend}>
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

