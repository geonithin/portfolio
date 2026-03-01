import { Link } from 'react-router-dom'

export default function Dreams() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">dreams</div>
      <main className="page-main">
        <Link to="/personal" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Personal
        </Link>

        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          </div>
          <h1>Whimsical Dreams</h1>
          <p>"Dreams woven from starlight and time — the essence of my endless quest."</p>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <div className="icon-box" style={{ marginBottom: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
          </div>
          <h3>What is a whimsical dream?</h3>
          <p>A personal fantasy that lights up my imagination — not bound by practicality, but full of inspiration and wonder.</p>
        </div>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <div className="icon-box" style={{ marginBottom: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
          </div>
          <h3>A Celestial Calling: To Explore the Cosmos</h3>
          <div className="tags" style={{ marginBottom: '1rem' }}>
            <span className="tag">Space</span><span className="tag">Exploration</span><span className="tag">Cosmos</span><span className="tag">Philosophy</span>
          </div>
          <p>In the quiet corners of my imagination, I dream of being an <strong>astronaut</strong> — a lone traveler of infinity. I see myself drifting through the vast ocean of the cosmos, not bound by gravity nor time. I wish to sail among the galaxies, tracing constellations with my fingertips, whispering to the stars, and learning the silent language of light.</p>
          <p style={{ marginTop: '0.75rem' }}>I long to explore the uncharted corners of the universe, to go beyond the known and into the unknowable, where mystery itself takes form. My heart yearns to dive into <strong>black holes</strong> — those majestic cosmic whirlpools that defy logic, swallowing light and time, yet holding secrets older than creation.</p>
          <p style={{ marginTop: '0.75rem' }}>In my fantasy, I drift through nebulae of colors unseen by human eyes, witness the birth of stars, and touch the cold silence where even echoes fade. It's not merely about exploring space — it's about <strong>understanding existence</strong>, finding meaning in the endless expanse.</p>
          <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--clr-primary)' }}>Though my path on Earth belongs to a different field, this dream — this celestial calling — will always live within me, quietly burning like a distant star that never stops shining.</p>
        </div>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <div className="icon-box" style={{ marginBottom: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3>My Fantasy Ambition — The Time Voyager</h3>
          <div className="tags" style={{ marginBottom: '1rem' }}>
            <span className="tag">Time Travel</span><span className="tag">History</span><span className="tag">Future</span><span className="tag">Curiosity</span>
          </div>
          <p>Beyond my cosmic dreams lies another — a fascination not with space, but with <strong>time itself</strong>. I dream of creating a <strong>time machine</strong>, a vessel of destiny that can pierce the veil of ages and traverse the endless river of moments.</p>
          <p style={{ marginTop: '0.75rem' }}>I wish to journey through the <strong>past</strong>, to witness the birth of civilizations, to stand beside the great minds who shaped humanity's path. I long to wander through the <strong>present</strong> as an observer of how beautifully chaos and order intertwine. And then, I yearn to voyage into the <strong>future</strong> — to witness what we will become.</p>
          <p style={{ marginTop: '0.75rem' }}>My time machine is not merely a creation of metal and code — it is the embodiment of <strong>curiosity</strong>, the desire to understand every fragment of existence, every echo of "what was," "what is," and "what will be."</p>
          <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--clr-primary)' }}>Though this ambition lies in the realm of fantasy, it fuels my imagination, my creativity, and my belief that even impossibilities begin as dreams.</p>
        </div>

        <div className="quote-block" style={{ marginTop: '2rem' }}>
          <p>"Dream beyond stars, build with courage, wander through wonder, and let the universe itself be your companion in the grand adventure of life."</p>
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
