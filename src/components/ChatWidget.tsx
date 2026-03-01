import { useState, useEffect, useRef } from 'react'
import { ChatMessage } from '../hooks/useAIChat'

interface ChatWidgetProps {
  messages: ChatMessage[]
  isLoading: boolean
  onClear: () => void
  onSendMessage: (message: string) => Promise<void>
  isOpen: boolean
  onToggle: (open: boolean) => void
}

export default function ChatWidget({ messages, isLoading, onClear, onSendMessage, isOpen, onToggle }: ChatWidgetProps) {
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return
    
    const message = inputValue
    setInputValue('')
    await onSendMessage(message)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className={`chat-widget-button ${isOpen ? 'chat-widget-button--open' : ''}`}
        onClick={() => onToggle(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {messages.length > 0 && (
              <span className="chat-widget-badge">{messages.length}</span>
            )}
          </>
        )}
      </button>

      {/* Chat Panel */}
      <div className={`chat-widget-panel ${isOpen ? 'chat-widget-panel--open' : ''}`}>
        {/* Header */}
        <div className="chat-widget-header">
          <div className="chat-widget-profile">
            <img src="/images/profile/geo-profile.jpg" alt="Geo Nithin J" className="chat-widget-avatar" />
            <div className="chat-widget-info">
              <h3>Geo Nithin J</h3>
              <span className="chat-widget-status">
                <span className="chat-widget-status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <div className="chat-widget-header-actions">
            {messages.length > 0 && (
              <button 
                onClick={onClear}
                className="chat-widget-clear"
                aria-label="Clear chat"
                title="Clear conversation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"/>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                </svg>
              </button>
            )}
            <button 
              onClick={() => onToggle(false)}
              className="chat-widget-close"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-widget-messages">
          {messages.length === 0 && !isLoading && (
            <div className="chat-widget-welcome">
              <div className="chat-widget-welcome-avatar">
                <img src="/images/profile/geo-profile.jpg" alt="Geo Nithin J" />
              </div>
              <h4>Hey! I'm Geo 👋</h4>
              <p>Ask me anything about my projects, skills, or just chat about tech and beyond!</p>
            </div>
          )}

          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`chat-widget-message ${message.isUser ? 'chat-widget-message--user' : 'chat-widget-message--geo'}`}
            >
              {!message.isUser && (
                <img src="/images/profile/geo-profile.jpg" alt="Geo" className="chat-widget-message-avatar" />
              )}
              <div className="chat-widget-message-bubble">
                <p>{message.text}</p>
                <time>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-widget-message chat-widget-message--geo">
              <img src="/images/profile/geo-profile.jpg" alt="Geo" className="chat-widget-message-avatar" />
              <div className="chat-widget-message-bubble">
                <div className="chat-widget-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="chat-widget-input-form">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="chat-widget-input"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim() || isLoading}
            className="chat-widget-send"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </button>
        </form>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="chat-widget-backdrop"
          onClick={() => onToggle(false)}
        />
      )}
    </>
  )
}
