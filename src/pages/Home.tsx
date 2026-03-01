import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import GradientText from '../components/GradientText'
import ChatWidget from '../components/ChatWidget'
import LogoLoop from '../components/LogoLoop'
import { useAIChat } from '../hooks/useAIChat'

type SectionId = 'me' | 'projects' | 'skills' | 'contact' | 'resume' | null

export default function Home() {
  const [searchParams] = useSearchParams()
  const activeSection = (searchParams.get('s') as SectionId) ?? null
  const [isChatOpen, setIsChatOpen] = useState(false)
  const { messages, isLoading, sendMessage, clearChat } = useAIChat()

  return (
    <>
      <div className="bg-watermark" aria-hidden="true">geo</div>

      <main className="main-centered" style={{ paddingBottom: '6rem' }}>
        {/* Hero */}
        <section className="hero" id="hero">
          <h2 className="hero__tagline">
            Hey <GradientText colors={['#5227FF','#FF9FFC','#B19EEF']} animationSpeed={8}>Guys</GradientText>, I'm <GradientText colors={['#5227FF','#FF9FFC','#B19EEF']} animationSpeed={8}>Geo Nithin J</GradientText><br />
            A <GradientText colors={['#5227FF','#FF9FFC','#B19EEF']} animationSpeed={8}>student</GradientText> driven by <GradientText colors={['#5227FF','#FF9FFC','#B19EEF']} animationSpeed={8}>curiosity</GradientText> and <GradientText colors={['#5227FF','#FF9FFC','#B19EEF']} animationSpeed={8}>passion</GradientText>
          </h2>
        </section>

        {/* Avatar */}
        <div className="avatar">
          <img src="/images/profile/geo-profile.jpg" alt="Geo Nithin J" width={400} height={400} />
        </div>

        {/* Type in here prompt */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div className="type-here-prompt" onClick={() => setIsChatOpen(true)}>
            <div className="type-here-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <span><span className="type-here-cursor"></span>Ask me anything</span>
          </div>
        </div>

        {/* Default highlights – visible when no section is open */}
        {!activeSection && (
          <div style={{ width: '100%', maxWidth: '680px', margin: '0 auto' }}>
            <div className="stats-grid" style={{ marginBottom: '1.25rem' }}>
              <div className="stat-card"><div className="stat-card__value">4+</div><div className="stat-card__label">Projects Built</div></div>
              <div className="stat-card"><div className="stat-card__value">8.5</div><div className="stat-card__label">CGPA</div></div>
              <div className="stat-card"><div className="stat-card__value">7</div><div className="stat-card__label">Sports Awards</div></div>
              <div className="stat-card"><div className="stat-card__value">19+</div><div className="stat-card__label">Milestones</div></div>
            </div>

            <div className="card" style={{ marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Latest Project</h3>
              <p><strong>Exam Sheet Scanner</strong> — AI-powered OCR system using Google Gemini Flash. Extracts 13+ fields from scanned answer sheets automatically.</p>
              <div className="tags" style={{ marginTop: '0.5rem' }}>
                <span className="tag">Remix</span><span className="tag">Gemini AI</span><span className="tag">TypeScript</span><span className="tag">Supabase</span>
              </div>
              <div className="project-links" style={{ marginTop: '0.75rem' }}>
                <a href="https://examsheetscan.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <Link className="btn" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', textDecoration: 'none' }} to="/?s=projects">All Projects</Link>
              </div>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Currently Learning</h3>
              <div className="tags">
                <span className="tag">Data Science</span><span className="tag">Machine Learning</span><span className="tag">Python</span><span className="tag">Pandas</span><span className="tag">NumPy</span>
              </div>
              <p style={{ marginTop: '0.65rem', fontSize: '0.875rem', color: 'var(--clr-muted)' }}>Expanding beyond full-stack into AI/ML — preparing for the next frontier.</p>
            </div>
          </div>
        )}

        {/* About Me Section */}
        {activeSection === 'me' && (
          <section className="section active" id="section-me">
            <h2 className="section__title">About Me</h2>
            <div className="card">
              <h3>Geo Nithin J</h3>
              <p>A CSE Student at <strong>Stella Mary's College of Engineering</strong>, Nagercoil, journeying through the world of full-stack web development and ready to embrace the frontier of data science. <em>"Jack of all trades, master at nothing"</em> — but working hard to master each skill, one step at a time.</p>
              <div className="tags">
                <span className="tag">CSE</span><span className="tag">Full-Stack</span><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Supabase</span>
              </div>
            </div>
            <div className="card">
              <h3>Education</h3>
              <p><strong>B.E. Computer Science &amp; Engineering</strong> — Stella Mary's College of Engineering, Nagercoil<br />2025 – Present &bull; CGPA: 8.5</p>
              <p style={{ marginTop: '0.75rem' }}><strong>Higher Secondary Education (CS)</strong> — Carmel Higher Secondary School, Nagercoil<br />Completed 2024</p>
            </div>
            <div className="card">
              <h3>Career Vision</h3>
              <p>My journey begins with mastering <strong>Full-Stack Development</strong>, building robust web applications from front to back. Then, I aim to dive deep into <strong>Data Science</strong>, leveraging data to create intelligent solutions. My ultimate goal? To join global giants like <strong>Google, Apple, or Microsoft</strong>, contributing to innovations that impact millions.</p>
            </div>
            <div className="card">
              <h3>Beyond the Code</h3>
              <p><strong>Football Enthusiast</strong> — Huge fan of Cristiano Ronaldo. His discipline and work ethic inspire my coding journey every day.</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Avid Reader</strong> — "It Starts With Us" holds a special place in my heart.</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Cinema Lover</strong> — Fight Club (all-time favorite movie) &amp; Peaky Blinders (all-time favorite series).</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Nature Photography &amp; Creative Art</strong> — Capturing beauty through lens.</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Retro Music</strong> — Lost in nostalgic melodies. <a href="https://open.spotify.com/playlist/1P98DutYI9bZGNr2vUTnVp?si=QMX1TQzvQvSxX-eTN4YUSg" target="_blank" rel="noopener noreferrer">My Playlist</a></p>
            </div>
            <div className="quote-block">
              "The only way to do great work is to love what you do. Stay curious, stay passionate, and keep building."
              <cite>— Passionate about crafting digital experiences</cite>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="section active" id="section-projects">
            <h2 className="section__title">Projects</h2>
            <div className="card">
              <h3>Library Management System <span className="badge badge--green">Completed</span></h3>
              <p>Full-stack library platform with real-time messaging, Google Calendar integration, and role-based access control. 2,500+ lines, 8 database tables, 95% type coverage.</p>
              <div className="tags"><span className="tag">React Router v7</span><span className="tag">TypeScript</span><span className="tag">Supabase</span><span className="tag">Google Calendar API</span></div>
              <div className="project-links">
                <Link to="/lms-project">Details</Link>
                <a href="https://lms-geo-nithin-js-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
            <div className="card">
              <h3>Class Management System <span className="badge badge--green">Completed</span></h3>
              <p>Comprehensive class management system with student/admin authentication, event scheduling, academic records, and analytics dashboard.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span><span className="tag">Remix</span><span className="tag">Supabase</span></div>
              <div className="project-links">
                <Link to="/clg-project">Details</Link>
                <a href="https://smce-cseb.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
            <div className="card">
              <h3>Exam Sheet Scanner <span className="badge badge--green">Completed</span></h3>
              <p>AI-powered exam sheet scanning system with multi-method input, Google Gemini Flash OCR, hierarchical dashboard, and advanced filtering.</p>
              <div className="tags"><span className="tag">Remix</span><span className="tag">React 18</span><span className="tag">TypeScript</span><span className="tag">Google Gemini AI</span><span className="tag">Supabase</span></div>
              <div className="project-links">
                <Link to="/exam-scanner">Details</Link>
                <a href="https://examsheetscan.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
            <div className="card">
              <h3>GuardianTrack <span className="badge badge--amber">In Development</span></h3>
              <p>Smart safety &amp; tracking system with tamper-proof location sharing, AI movement prediction, SOS panic button, and emergency escalation to authorities.</p>
              <div className="tags"><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">React</span><span className="tag">Firebase</span><span className="tag">Google Maps</span></div>
              <div className="project-links">
                <Link to="/guardiantrack">Details</Link>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section active" id="section-skills">
            <h2 className="section__title">Skills</h2>
            <div className="card">
              {[
                { title: 'Programming Languages', items: ['Python', 'C', 'Java', 'JavaScript'] },
                { title: 'Web Technologies & Frontend', items: ['HTML', 'CSS & Tailwind CSS', 'React & React Router', 'Remix Framework', 'TypeScript', 'Responsive Design'] },
                { title: 'Backend & Database', items: ['Node.js & Express.js', 'Supabase & PostgreSQL', 'MongoDB & Firebase', 'Git & Version Control'] },
                { title: 'APIs & Cloud', items: ['Google APIs (Calendar, Maps, Gemini AI)', 'AI/ML & OCR Technology', 'Vercel & Netlify Deployment'] },
                { title: 'Soft Skills', items: ['Leadership', 'Teamwork', 'Communication'] },
              ].map(cat => (
                <div key={cat.title} className="skill-category">
                  <h3>{cat.title}</h3>
                  <ul className="skill-list">
                    {cat.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section active" id="section-contact">
            <h2 className="section__title">Contact</h2>

            {/* Contact info rows */}
            <div className="card contact-card">
              <div className="contact-item">
                <span className="contact-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Email</span>
                  <a href="mailto:geonithincr7@gmail.com">geonithincr7@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Phone</span>
                  <a href="tel:+918248566027">+91 8248566027</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Location</span>
                  <span>Nagercoil, Tamil Nadu, India — 629002</span>
                </div>
              </div>
            </div>

            {/* Social links with LogoLoop */}
            <div className="logoloop-container" style={{ position: 'relative', marginTop: '3rem', paddingBottom: '50px' }}>
              <div className="logoloop-wrapper" style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={[
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
                    title: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/geo-nithin-046a05331',
                    ariaLabel: 'Visit LinkedIn profile'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>,
                    title: 'GitHub',
                    href: 'https://github.com/geonithin',
                    ariaLabel: 'Visit GitHub profile'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                    title: 'Instagram',
                    href: 'https://www.instagram.com/geonithin_',
                    ariaLabel: 'Visit Instagram profile'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>,
                    title: 'Discord',
                    href: 'https://discord.com/channels/@geonithin_',
                    ariaLabel: 'Visit Discord profile'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>,
                    title: 'WhatsApp',
                    href: 'https://wa.me/918248566027',
                    ariaLabel: 'Message on WhatsApp'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>,
                    title: 'LeetCode',
                    href: 'https://leetcode.com/u/geonithin',
                    ariaLabel: 'Visit LeetCode profile'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg>,
                    title: 'MS Learn',
                    href: 'https://learn.microsoft.com/en-us/users/geonithin-3229/',
                    ariaLabel: 'Visit Microsoft Learn profile'
                  },
                  {
                    node: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M19 4H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM6 6c.5-.5 1-.8 1.5-1 .3-.1.5.1.6.3L9 7c.3.5.5 1 .8 1.5-.8.3-1.5.8-2 1.5-.3-.5-.5-1-.8-1.5L6 6.5c-.1-.2 0-.4.2-.5H6zm12 0h.2c.2.1.3.3.2.5L17.5 8c-.3.5-.5 1-.8 1.5-.5-.7-1.2-1.2-2-1.5.3-.5.5-1 .8-1.5l.9-1.7c.1-.2.3-.3.6-.3.5.2 1 .5 1.5 1zM8 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 5c1.2 0 2.2.5 3 1.2.2.2.2.5 0 .7-.2.2-.5.2-.7 0-.6-.5-1.3-.9-2.3-.9s-1.7.4-2.3.9c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7.8-.7 1.8-1.2 3-1.2z"/></svg>,
                    title: 'Duolingo',
                    href: 'https://duolingo.com/profile/GEONITHIN',
                    ariaLabel: 'Visit Duolingo profile'
                  },
                ]}
                speed={45}
                direction="left"
                logoHeight={40}
                gap={20}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                ariaLabel="Connection platforms"
              />
              </div>
            </div>

            <div className="stats-grid mt-2">
              {[['24-48h', 'Response Time'], ['3+', 'Projects Done'], ['Full-Stack', 'Development'], ['Remote', 'Work Ready']].map(([v, l]) => (
                <div key={l} className="stat-card"><div className="stat-card__value">{v}</div><div className="stat-card__label">{l}</div></div>
              ))}
            </div>
          </section>
        )}

        {/* Resume Section */}
        {activeSection === 'resume' && (
          <section className="section active" id="section-resume">
            <h2 className="section__title">Resume</h2>
            <div className="card resume-card">
              <h3>Geo Nithin J — Resume</h3>
              <p>CSE Student &bull; Stella Mary's College &bull; Updated 2026</p>
              <a className="download-btn" href="/Geo-Nithin-Resume.pdf" download="Geo-Nithin-Resume.pdf" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download Resume
              </a>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Geo Nithin J. All rights reserved.</p>
      </footer>

      {/* Floating AI Chat Widget */}
      <ChatWidget
        messages={messages}
        isLoading={isLoading}
        onClear={clearChat}
        onSendMessage={sendMessage}
        isOpen={isChatOpen}
        onToggle={setIsChatOpen}
      />
    </>
  )
}
