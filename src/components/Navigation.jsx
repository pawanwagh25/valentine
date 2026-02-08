import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          💕 Valentine
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/messages" className="nav-link">Messages</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
