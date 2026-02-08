import '../styles/Gallery.css'
import { Link } from 'react-router-dom'

export default function Gallery() {
  const images = [
    { id: 1, title: 'Romantic Sunset', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop' },
    { id: 2, title: 'Couple in Love', url: 'https://images.unsplash.com/photo-1514888286974-6c03bf1ce847?w=500&h=500&fit=crop' },
    { id: 3, title: 'Rose Flowers', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop' },
    { id: 4, title: 'Hearts & Love', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
    { id: 5, title: 'Champagne & Roses', url: 'https://images.unsplash.com/photo-1516524913408-f7a94eb56e10?w=500&h=500&fit=crop' },
    { id: 6, title: 'Love & Dreams', url: 'https://images.unsplash.com/photo-1514888286974-6c03bf1ce847?w=500&h=500&fit=crop' },
  ]

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <Link to="/" className="back-link">← Back Home</Link>
        <h1>Love Gallery</h1>
        <p>A collection of beautiful moments and inspirations</p>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <div className="image-wrapper">
              <img src={image.url} alt={image.title} />
              <div className="overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <p>✨ Every moment with you is magical ✨</p>
      </div>
    </div>
  )
}
