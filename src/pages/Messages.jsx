import { useState } from 'react'
import '../styles/Messages.css'
import { Link } from 'react-router-dom'

export default function Messages() {
  const [selectedMessage, setSelectedMessage] = useState(0)

  const messages = [
    {
      title: 'Forever With You',
      text: 'Every moment spent with you is a treasure. You make my heart skip a beat every single day. I love you more than words can express.',
      emoji: '💑'
    },
    {
      title: 'My Beautiful Dream',
      text: 'You are the most beautiful thing that ever happened to me. Your smile brightens my darkest days. Thank you for being my everything.',
      emoji: '✨'
    },
    {
      title: 'Love Never Fails',
      text: 'In a world full of chaos, you are my calm. Your love is my strength, your smile is my peace. Forever is not enough time with you.',
      emoji: '💕'
    },
    {
      title: 'My Perfect Match',
      text: 'You complete me in every way. Your love transformed my life. I promise to cherish every moment we share together.',
      emoji: '💖'
    },
    {
      title: 'Soulmate Forever',
      text: 'They say soulmates are rare, but I found mine in you. You are my today and all my tomorrows. I love you endlessly.',
      emoji: '💗'
    },
  ]

  return (
    <div className="messages-container">
      <div className="messages-header">
        <Link to="/" className="back-link">← Back Home</Link>
        <h1>💌 Love Messages</h1>
        <p>Beautiful words to express your feelings</p>
      </div>

      <div className="messages-content">
        <div className="message-display">
          <div className="message-card">
            <div className="message-emoji">{messages[selectedMessage].emoji}</div>
            <h2>{messages[selectedMessage].title}</h2>
            <p className="message-text">{messages[selectedMessage].text}</p>
          </div>
        </div>

        <div className="message-buttons">
          {messages.map((msg, index) => (
            <button
              key={index}
              className={`msg-btn ${selectedMessage === index ? 'active' : ''}`}
              onClick={() => setSelectedMessage(index)}
            >
              {msg.emoji}
            </button>
          ))}
        </div>

        <button className="copy-btn">
          📋 Copy Message
        </button>
      </div>
    </div>
  )
}
