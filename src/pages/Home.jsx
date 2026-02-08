import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="hearts-background">
        <span className="heart">❤️</span>
        <span className="heart">💕</span>
        <span className="heart">💖</span>
        <span className="heart">💗</span>
        <span className="heart">💝</span>
      </div>
      
      <div className="home-content">
        <h1 className="main-title">Happy Valentine's Day</h1>
        <p className="subtitle">Celebrate Love & Romance</p>
        
        <div className="cta-buttons">
          <Link to="/gallery" className="btn btn-primary">
            💐 View Gallery
          </Link>
          <Link to="/messages" className="btn btn-secondary">
            💌 Love Messages
          </Link>
          <Link to="/contact" className="btn btn-tertiary">
            💑 Get in Touch
          </Link>
        </div>
        
        <div className="features">
          <div className="feature-card">
            <span className="feature-icon">✨</span>
            <h3>Beautiful Designs</h3>
            <p>Stunning visuals to celebrate your love</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎁</span>
            <h3>Special Gifts</h3>
            <p>Find the perfect gift for your special one</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💑</span>
            <h3>Romantic Ideas</h3>
            <p>Inspiration for an unforgettable day</p>
          </div>
        </div>
      </div>
    </div>
  )
}
