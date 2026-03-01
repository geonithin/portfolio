# AI Assistant Integration Guide

## Overview
Your portfolio now includes an intelligent AI assistant that can answer questions about your background, skills, projects, and experience. The assistant appears when users interact with the "Ask me anything..." input field.

## Features
- ✨ **Intelligent Responses**: Answers questions about your portfolio, skills, and projects
- 💬 **Real-time Chat**: Interactive conversation interface with typing indicators
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🎨 **Beautiful Design**: Matches your existing portfolio aesthetics
- � **Fallback System**: Works with mock responses even without API key

## How It Works
1. Users type questions in the "Ask me anything..." field
2. The AI assistant provides contextual responses about your portfolio
3. Chat history is maintained during the session
4. Users can clear the chat and start fresh

## Setup for Real AI Integration with Google Gemini (FREE!)

### Step 1: Get Google Gemini API Key (100% Free)
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy the API key

### Step 2: Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your API key:
   ```env
   VITE_GEMINI_API_KEY=your-actual-api-key-here
   VITE_GEMINI_MODEL=gemini-2.0-flash-exp
   ```

### Step 3: Restart Development Server
```bash
npm run dev
```

## Current Implementation
- **Mock Responses**: The system currently works with intelligent mock responses
- **Google Gemini Ready**: Full Google Gemini API integration is ready when you add your key
- **100% FREE**: Google Gemini has a generous free tier with no restrictions
- **Very Powerful**: Gemini 2.0 Flash is fast and capable of answering any question
- **Error Handling**: Gracefully falls back to mock responses if API fails

## Available Gemini Models (All Free)
- `gemini-2.0-flash-exp` (Default - Latest & Fastest)
- `gemini-1.5-flash` (Fast and efficient)
- `gemini-1.5-pro` (Most capable)

## Customization

### Update Portfolio Information
Edit the context in `src/hooks/useAIChat.ts` to reflect any changes to your:
- Skills and technologies
- Project descriptions
- Contact information
- Educational background
- Career goals

### Modify Mock Responses
Update `src/services/aiService.ts` to add more specific responses for common questions.

### Styling
Chat interface styles are in `src/index.css` under "AI Chat Interface Styles" section.

## Cost Considerations
- **Completely FREE**: Google Gemini API has a generous free tier
- **High Limits**: 15 requests per minute, 1500 per day on free tier
- **No Credit Card**: Free tier doesn't require payment setup
- **Fallback**: App works perfectly without API key using smart mock responses

## Security Notes
- ✅ API key is stored in environment variables (not in code)
- ✅ Client-side implementation is acceptable for personal portfolios
- ⚠️ For production applications with sensitive data, consider server-side API calls

## Troubleshooting
- **No responses**: Check API key is correctly set in `.env.local`
- **Mock responses only**: This is normal without API key - features still work!
- **Errors in console**: Check API key validity at Google AI Studio
- **Rate limits**: Free tier has generous limits (15/min, 1500/day)

Your AI assistant is now ready to help visitors learn about your portfolio! 🎉