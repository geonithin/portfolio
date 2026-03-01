import { useEffect, useRef } from 'react'
import { ChatMessage } from '../hooks/useAIChat'

interface ChatInterfaceProps {
  messages: ChatMessage[]
  isLoading: boolean
  onClear: () => void
}

export default function ChatInterface({ messages, isLoading, onClear }: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (messages.length === 0 && !isLoading) {
    return null
  }

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="chat-title">
          <div className="geo-avatar">
            <img src="/images/profile/geo-profile.jpg" alt="Geo" />
          </div>
          <div className="chat-title-info">
            <span className="chat-name">Geo Nithin J</span>
            <span className="chat-status">Online now</span>
          </div>
        </div>
        {messages.length > 0 && (
          <button 
            onClick={onClear} 
            className="chat-clear-btn"
            aria-label="Clear chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        )}
      </div>
      
      <div className="chat-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`chat-message ${message.isUser ? 'chat-message--user' : 'chat-message--ai chat-message--geo'}`}
          >
            <div className="chat-message__avatar">
              {message.isUser ? (
                <div className="visitor-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              ) : (
                <div className="geo-avatar">
                  <img src="/images/profile/geo-profile.jpg" alt="Geo" />
                </div>
              )}
            </div>
            <div className="chat-message__content">
              <p>{message.text}</p>
              <time className="chat-message__time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </time>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="chat-message chat-message--ai chat-message--geo">
            <div className="chat-message__avatar">
              <div className="geo-avatar">
                <img src="/images/profile/geo-profile.jpg" alt="Geo" />
              </div>
            </div>
            <div className="chat-message__content">
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}