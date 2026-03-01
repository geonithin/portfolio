import { Link } from 'react-router-dom'

const certs = [
  { img: '/images/certificates/microsoft-security.jpg', title: 'Microsoft Security Essentials', issuer: 'Professional Certificate', tags: ['Security', 'Microsoft'] },
  { img: '/images/certificates/generative-ai.jpg', title: 'Career Essentials in Generative AI', issuer: 'LinkedIn Learning', tags: ['AI', 'GenAI'] },
  { img: '/images/certificates/software-development.jpg', title: 'Career Essentials in Software Development', issuer: 'LinkedIn Learning', tags: ['Development', 'Career'] },
  { img: '/images/certificates/azure-ai.jpg', title: 'Microsoft Azure AI Essentials', issuer: 'Professional Certificate', tags: ['Azure', 'AI', 'Cloud'] },
  { img: '/images/certificates/c7.jpg', title: 'Career Essentials in System Administration', issuer: 'LinkedIn Learning', tags: ['Systems', 'Administration'] },
  { img: '/images/certificates/c6.jpg', title: 'Operating System Basics', issuer: 'Cisco Network Academy', tags: ['OS', 'Networking'] },
  { img: '/images/certificates/c5.jpg', title: 'Career Essentials in Cybersecurity', issuer: 'LinkedIn Learning', tags: ['Cybersecurity', 'Security'] },
]

export default function Certificates() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">certs</div>
      <main className="page-main">
        <Link to="/personal" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Personal
        </Link>

        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <h1>My Certificates</h1>
          <p>Professional certifications and achievements in technology</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          {certs.map(c => (
            <div key={c.title} className="card">
              <div className="cert-card">
                <img className="cert-card__img" src={c.img} alt={c.title} />
                <div className="cert-card__info">
                  <div className="cert-card__title">{c.title}</div>
                  <div className="cert-card__issuer">{c.issuer}</div>
                  <div className="tags">{c.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-grid">
          <div className="stat-card"><div className="stat-card__value">7</div><div className="stat-card__label">Certifications Earned</div></div>
          <div className="stat-card"><div className="stat-card__value">2</div><div className="stat-card__label">Platforms</div></div>
          <div className="stat-card"><div className="stat-card__value">Growing</div><div className="stat-card__label">Continuous Learning</div></div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/personal" className="btn">Back to Personal</Link>
          <Link to="/" className="btn" style={{ marginLeft: '0.5rem' }}>Home</Link>
        </div>
      </main>
      <footer className="footer"><p>Built with ♥ by Geo Nithin J</p></footer>
    </>
  )
}
