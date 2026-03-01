// Mock AI service for development - replace with real OpenAI API
const mockResponses = [
  {
    keywords: ['skills', 'technical', 'technology', 'programming', 'languages', 'frameworks'],
    response: "I'm skilled in React, TypeScript, Node.js, Python, and full-stack development! I'm also currently diving deep into Data Science and Machine Learning. My tech stack includes Supabase, MongoDB, Firebase, and various Google APIs. I'm particularly proud of my Exam Sheet Scanner project that uses AI/OCR technology."
  },
  {
    keywords: ['react', 'what is react', 'explain react', 'reactjs'],
    response: "React is one of my favorite technologies! It's a JavaScript library for building user interfaces, especially for web applications. What I love about React is its component-based architecture - you can build reusable UI components that manage their own state. I've used React extensively in my projects, including this portfolio! The virtual DOM makes it super efficient for updates."
  },
  {
    keywords: ['javascript', 'js', 'what is javascript', 'explain javascript'],
    response: "JavaScript is the language that brings websites to life! It's what I use to add interactivity to web pages. As a full-stack developer, I work with JavaScript both on the frontend (in browsers) and backend (with Node.js). It's incredibly versatile - from simple animations to complex web applications. I've been working with JS for a while now and still find new things to learn!"
  },
  {
    keywords: ['python', 'what is python', 'explain python', 'machine learning'],
    response: "Python is amazing! It's the language I'm using to dive into Data Science and Machine Learning. What makes Python special is its simplicity and readability - the syntax is so clean. I use it for everything from web development with frameworks like Django/Flask to data analysis with Pandas and NumPy. It's also perfect for AI/ML work, which aligns with my career goals!"
  },
  {
    keywords: ['typescript', 'what is typescript', 'explain typescript'],
    response: "TypeScript is JavaScript with superpowers! I absolutely love using it because it adds static typing to JavaScript, which catches errors early and makes code more maintainable. In my projects, TypeScript helps me write more reliable code and provides excellent IDE support. It's especially great for larger applications - once you try it, it's hard to go back to plain JavaScript!"
  },
  {
    keywords: ['node', 'nodejs', 'node.js', 'what is node', 'backend'],
    response: "Node.js lets me use JavaScript on the server side, which is fantastic! I love that I can use the same language for both frontend and backend development. With Node.js and Express, I can build APIs, handle databases, and create full-stack applications. It's perfect for real-time applications too. I've used it in several of my projects for building robust backend services."
  },
  {
    keywords: ['ai', 'artificial intelligence', 'what is ai', 'machine learning', 'ml'],
    response: "AI and Machine Learning are fascinating fields that I'm diving into! AI is about creating systems that can perform tasks that typically require human intelligence. I'm particularly interested in how AI can solve real-world problems - like my Exam Sheet Scanner project using Google Gemini AI for OCR. I'm currently learning Python, data science, and ML algorithms to prepare for a career in this field!"
  },
  {
    keywords: ['database', 'sql', 'mongodb', 'what is database'],
    response: "Databases are where I store and organize data for my applications! I work with both SQL databases like PostgreSQL (through Supabase) and NoSQL databases like MongoDB. Each has its strengths - SQL is great for structured data and complex relationships, while NoSQL is flexible for varied data structures. I choose based on the project's needs. Database design is crucial for application performance!"
  },
  {
    keywords: ['web development', 'frontend', 'backend', 'full stack', 'how to learn'],
    response: "Web development is my passion! I started with frontend (HTML, CSS, JavaScript) and then moved to backend (Node.js, databases). My advice? Start with the basics, build lots of projects, and don't be afraid to break things - that's how you learn! I'm constantly learning new technologies. Focus on understanding concepts rather than just frameworks. The key is consistent practice and curiosity!"
  },
  {
    keywords: ['career advice', 'how to start', 'learning path', 'beginner'],
    response: "Great question! My journey started with curiosity and lots of hands-on practice. I'd recommend starting with HTML/CSS/JavaScript, then picking a framework like React. Build projects constantly - even small ones teach you a lot! I'm still learning every day. Join communities, contribute to open source, and don't be afraid to ask questions. The tech community is very supportive!"
  },
  {
    keywords: ['projects', 'work', 'built', 'portfolio', 'exam', 'scanner', 'lms', 'guardian'],
    response: "I've built several projects that I'm really excited about! My latest is the Exam Sheet Scanner - an AI-powered OCR system using Google Gemini Flash that extracts 13+ fields from scanned answer sheets automatically. I've also created an LMS system and Guardian Track application. Feel free to explore all my projects in the Projects section!"
  },
  {
    keywords: ['education', 'college', 'school', 'study', 'cgpa', 'grades', 'academic'],
    response: "I'm currently pursuing B.E. Computer Science & Engineering at Stella Mary's College of Engineering here in Nagercoil, and I'm maintaining an 8.5 CGPA! I completed my Higher Secondary Education in Computer Science from Carmel Higher Secondary School in 2024."
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github'],
    response: "I'd love to connect with you! You can reach me at geonithincr7@gmail.com or call me at +91 8248566027. I'm always active on LinkedIn (linkedin.com/in/geo-nithin-046a05331) and you can check out my code on GitHub (github.com/geonithin). I'm always open to discussing opportunities and collaborations!"
  },
  {
    keywords: ['experience', 'work', 'internship', 'job', 'career', 'future', 'goals', 'ambition'],
    response: "I'm an aspiring full-stack developer with big plans to expand into Data Science and ML! My ultimate goal is to join global tech giants like Google, Apple, or Microsoft. I'm constantly building my expertise through practical projects and staying up-to-date with cutting-edge technologies."
  },
  {
    keywords: ['sports', 'awards', 'achievements', 'personal', 'interests', 'hobbies'],
    response: "Beyond coding, I'm quite active in sports and have won 7 sports awards! I've achieved 19+ milestones across various areas. I believe in maintaining a healthy balance between technical excellence and personal development - it keeps me energized and creative!"
  },
  {
    keywords: ['location', 'where', 'nagercoil', 'tamil nadu', 'india'],
    response: "I'm based in Nagercoil, Tamil Nadu, India! I'm studying locally at Stella Mary's College of Engineering while building a global perspective through my projects and aspirations. It's a beautiful place to learn and grow."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greeting'],
    response: "Hey there! I'm Geo Nithin J, welcome to my portfolio! I'm really glad you're here. Feel free to ask me anything about my projects, skills, background, or even general tech questions - I love chatting about technology and sharing knowledge!"
  }
];

const defaultResponse = "Hey! I'm Geo, and I love chatting about all kinds of topics! Whether you want to know about my projects, programming, or just have a general question, I'm here to help. What would you like to talk about?";

export async function getMockAIResponse(message: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
  
  const lowerMessage = message.toLowerCase();
  
  // Check for portfolio-specific questions first
  for (const { keywords, response } of mockResponses) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return response;
    }
  }
  
  // For any other question, provide a general helpful response as Geo
  return `That's an interesting question! I'd love to help with that. As a CS student who's always curious about learning new things, I enjoy discussing all kinds of topics! While I might not have access to the latest information like ChatGPT, I'm happy to share my thoughts and perspectives. Feel free to ask me about anything - whether it's tech-related, general knowledge, or just casual conversation!`;
}

// Google Gemini API integration (free and powerful!)
export async function getAIResponse(message: string, context: string): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.log('No Gemini API key found - using mock responses');
      return await getMockAIResponse(message);
    }

    const model = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash';
    console.log('Calling Google Gemini API with model:', model);

    // Google Gemini API format
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${context}\n\nUser question: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          }
        })
      }
    );

    const data = await response.json();
    console.log('Gemini response status:', response.status);

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return await getMockAIResponse(message);
    }

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (aiText) {
      return aiText;
    }
    
    console.warn('No content in Gemini response, using mock');
    return await getMockAIResponse(message);
    
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return await getMockAIResponse(message);
  }
}