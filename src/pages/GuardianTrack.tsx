import { Link } from 'react-router-dom'

export default function GuardianTrack() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">guard</div>
      <main className="page-main">
        <Link to="/?s=projects" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Projects
        </Link>
        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          </div>
          <h1>GuardianTrack</h1>
          <p>Smart child safety tracking system with AI prediction, geo-fencing, and emergency escalation</p>
        </div>

        <div className="card" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <span className="badge badge--amber" style={{ fontSize: '1rem', padding: '0.5rem 1.25rem' }}>In Development</span>
          <p style={{ marginTop: '0.75rem' }}>GuardianTrack is actively under development. Check back soon for the live demo!</p>
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Core Features</h2>
          <div className="card-grid">
            <div className="card"><h3>Unstoppable Tracking</h3><p>Children cannot disable location unless parent explicitly allows. Ensures continuous monitoring.</p></div>
            <div className="card"><h3>Signal/Device Loss Alert</h3><p>If GPS or internet signal is cut, an instant alert is sent to parents and police with last known location.</p></div>
            <div className="card"><h3>Geo-Fencing Zones</h3><p>Parents define safe zones. Leaving or entering unexpectedly triggers instant alerts.</p></div>
            <div className="card"><h3>SOS Panic Button</h3><p>One button to alert parents &amp; emergency responders with live GPS and optional audio/video stream.</p></div>
            <div className="card"><h3>AI Movement Prediction</h3><p>If updates stop, AI predicts possible movement routes based on last direction &amp; speed.</p></div>
            <div className="card"><h3>Offline Logging</h3><p>Stores location data offline when connectivity is lost and syncs automatically when back online.</p></div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Development Status</h2>
          <div className="card">
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong>Backend API (Node.js + Express)</strong>
                <span style={{ color: 'var(--clr-primary)', fontWeight: 700 }}>95%</span>
              </div>
              <div className="progress-bar"><div className="progress-bar__fill" style={{ width: '95%' }} /></div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong>Frontend Web App (React)</strong>
                <span style={{ color: 'var(--clr-primary)', fontWeight: 700 }}>80%</span>
              </div>
              <div className="progress-bar"><div className="progress-bar__fill" style={{ width: '80%' }} /></div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Technology Stack</h2>
          <div className="card">
            <div className="tags">
              <span className="tag">React</span><span className="tag">React Native / Flutter</span>
              <span className="tag">Node.js</span><span className="tag">Express.js</span>
              <span className="tag">Firebase / MongoDB</span><span className="tag">Google Maps API</span>
              <span className="tag">Firebase Cloud Messaging</span><span className="tag">Twilio</span>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/?s=projects" className="btn">Back to Projects</Link>
        </div>
      </main>
      <footer className="footer"><p>&copy; 2025 Geo Nithin J. All rights reserved.</p></footer>
    </>
  )
}
