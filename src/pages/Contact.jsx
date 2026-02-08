import { useState } from 'react'
import '../styles/Contact.css'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <Link to="/" className="back-link">← Back Home</Link>
        <h1>💕 Get In Touch</h1>
        <p>Share your love story with us</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <span className="info-icon">💌</span>
            <h3>Email</h3>
            <p>love@valentine.com</p>
          </div>
          <div className="info-card">
            <span className="info-icon">📍</span>
            <h3>Location</h3>
            <p>Everywhere Love Exists</p>
          </div>
          <div className="info-card">
            <span className="info-icon">🕒</span>
            <h3>Available</h3>
            <p>24/7 For Your Love</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your beautiful name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your love story..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            💝 Send Your Love Message
          </button>

          {submitted && (
            <div className="success-message">
              ✨ Your message was sent with love! ✨
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
