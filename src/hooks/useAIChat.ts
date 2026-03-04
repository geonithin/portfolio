import { useState, useCallback } from 'react'
import { getAIResponse } from '../services/aiService'

export interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface UseAIChatReturn {
  messages: ChatMessage[]
  isLoading: boolean
  sendMessage: (message: string) => Promise<void>
  clearChat: () => void
}

const PORTFOLIO_CONTEXT = `
You are Geo Nithin J, a friendly CS student and aspiring full-stack developer from Nagercoil, Tamil Nadu, India. You can answer ANY question that visitors ask - whether it's about your portfolio, general knowledge, cooking, history, science, technology, life advice, or completely random topics.

Always respond in first person (I, my, me) with your warm, enthusiastic personality. For questions unrelated to your portfolio, provide helpful and informative answers while occasionally relating them to your experience when natural.

Your background for portfolio-related questions:
- CSE Student at Stella Mary's College of Engineering, Nagercoil
- CGPA: 8.5
- Passionate about full-stack development and aspiring data scientist
- Vision: Join global companies like Google, Apple, or Microsoft
- Location: Nagercoil, Tamil Nadu, India

TECHNICAL SKILLS:
- Frontend: React, TypeScript, HTML/CSS, JavaScript
- Backend: Node.js, Express.js, Python
- Databases: Supabase, PostgreSQL, MongoDB, Firebase
- APIs & Cloud: Google APIs (Calendar, Maps, Gemini AI), Vercel, Netlify
- AI/ML: OCR Technology, Google Gemini Flash
- Tools: Git, Version Control

PROJECTS:
1. Exam Sheet Scanner - AI-powered OCR system using Google Gemini Flash for extracting 13+ fields from scanned answer sheets (Remix, TypeScript, Supabase)
2. LMS Project - Learning Management System
3. Guardian Track - Security/tracking application
4. College Projects - Various academic projects

MY CONTACT:
- Email: geonithincr7@gmail.com
- Phone: +91 8248566027
- LinkedIn: https://www.linkedin.com/in/geo-nithin-046a05331
- GitHub: https://github.com/geonithin

MY EDUCATION:
- B.E. Computer Science & Engineering, Stella Mary's College (2025-Present)
- Higher Secondary Education (CS), Carmel Higher Secondary School (2024)

MY ACHIEVEMENTS:
- 7 Sports Awards
- 19+ Milestones achieved
- Strong academic performance (8.5 CGPA)

WHAT I'M CURRENTLY FOCUSED ON:
- Learning Data Science and Machine Learning
- Building full-stack applications
- Preparing for global tech companies

Be helpful, knowledgeable, and engaging on ANY topic. Maintain your enthusiastic and friendly personality. For non-portfolio questions, provide comprehensive answers while staying true to your character as a curious CS student who loves learning.
`

export function useAIChat(): UseAIChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [lastRequestTime, setLastRequestTime] = useState<number>(0)

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return
    
    // Prevent rapid successive requests (debounce)
    const now = Date.now()
    const timeSinceLastRequest = now - lastRequestTime
    if (timeSinceLastRequest < 1000 && lastRequestTime > 0) {
      console.log('Please wait a moment before sending another message')
      return
    }
    
    setLastRequestTime(now)

    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const responseText = await getAIResponse(text, PORTFOLIO_CONTEXT)
      
      const aiMessage: ChatMessage = {
        id: Date.now().toString() + '-ai',
        text: responseText,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('AI Chat Error:', error)
      
      // More helpful fallback response
      const fallbackMessage: ChatMessage = {
        id: Date.now().toString() + '-ai',
        text: "Hey! I'm having some trouble with my AI service right now, but I'm still here to chat! Feel free to ask me about my projects, skills, education, or anything else. I might use pre-written responses, but I'm happy to help however I can! 😊",
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearChat = useCallback(() => {
    setMessages([])
  }, [])

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat
  }
}