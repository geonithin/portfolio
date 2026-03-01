import { Link } from 'react-router-dom'

export default function Personal() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">personal</div>
      <main className="page-main">
        <Link to="/" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Portfolio
        </Link>

        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h1>Personal Journey</h1>
          <p>Explore my certificates, reading adventures, dreams, and college life</p>
        </div>

        <div className="card-grid card-grid--2" style={{ marginTop: '2rem' }}>
          <Link to="/certificates" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <h3 style={{ marginBottom: 0 }}>My Certificates</h3>
            </div>
            <p>Professional certifications and achievements in technology</p>
            <div className="tags"><span className="tag">7 Certifications</span><span className="tag">Microsoft</span><span className="tag">LinkedIn</span></div>
          </Link>

          <Link to="/reading-list" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3 style={{ marginBottom: 0 }}>Books I've Read</h3>
            </div>
            <p>Literary adventures that expanded my horizons and shaped my thinking</p>
            <div className="tags"><span className="tag">4 Books</span><span className="tag">Romance</span><span className="tag">Classic</span><span className="tag">Mystery</span></div>
          </Link>

          <Link to="/dreams" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 style={{ marginBottom: 0 }}>Whimsical Dreams</h3>
            </div>
            <p>Dreams woven from starlight and time — the essence of my endless quest</p>
            <div className="tags"><span className="tag">Space</span><span className="tag">Time Travel</span><span className="tag">Imagination</span></div>
          </Link>

          <Link to="/college-activities" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 6 3 12 0v-5"/></svg>
              </div>
              <h3 style={{ marginBottom: 0 }}>Campus Journey</h3>
            </div>
            <p>Clubs, events, leadership roles, and memorable campus experiences</p>
            <div className="tags"><span className="tag">19+ Milestones</span><span className="tag">Sports</span><span className="tag">Basher</span></div>
          </Link>
        </div>

        <div className="quote-block" style={{ marginTop: '2rem' }}>
          "Get to know me better — click on any section above to explore different facets of my personal and professional journey."
        </div>
      </main>
      <footer className="footer"><p>Built with ♥ by Geo Nithin J &bull; Exploring life, one page at a time</p></footer>
    </>
  )
}
