import { Link } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'

export default function ExamScanner() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">scan</div>
      <main className="page-main">
        <Link to="/?s=projects" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Projects
        </Link>
        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/><path d="M12 7v10"/></svg>
          </div>
          <h1>Exam Sheet Scanner</h1>
          <p>AI-powered exam sheet processing with Google Gemini OCR, hierarchical dashboards, and advanced filtering</p>
        </div>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <span className="badge badge--green">Completed</span>
          <p style={{ marginTop: '0.75rem' }}>An intelligent exam sheet processing system that automates OCR-based data extraction from scanned answer sheets using Google Gemini Flash AI. Supports multiple input methods, hierarchical dashboards for staff/admin, and comprehensive data export.</p>
          <div className="project-links" style={{ marginTop: '1rem' }}>
            <a href="https://examsheetscan.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Core Features</h2>
          <div className="card-grid">
            <div className="card"><h3>Multi-Method Input</h3><p>Camera capture, file upload, and direct URL input for exam sheets.</p></div>
            <div className="card"><h3>AI OCR Extraction</h3><p>Google Gemini Flash AI extracts 13+ data fields from exam sheets automatically.</p></div>
            <div className="card"><h3>Hierarchical Dashboard</h3><p>Role-based views for staff, HOD, and admin with drill-down analytics.</p></div>
            <div className="card"><h3>Data Management</h3><p>Advanced filtering, search, CSV export, and student performance tracking.</p></div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Technology Stack</h2>
          <div className="card">
            <div className="tags">
              <span className="tag">Remix</span><span className="tag">React 18</span><span className="tag">TypeScript</span>
              <span className="tag">Google Gemini Flash AI</span><span className="tag">Supabase</span><span className="tag">Vercel</span>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2.5rem', overflow: 'visible' }}>
          <ProjectGallery images={[
            { src: '/images/projects/exam-sheet-scanner/examscan-home.jpg',          alt: 'Scanner Interface', label: 'Home'      },
            { src: '/images/projects/exam-sheet-scanner/examscan-dashboard.jpg',     alt: 'Dashboard',         label: 'Dashboard' },
            { src: '/images/projects/exam-sheet-scanner/examscan-manualentry.jpg',   alt: 'Manual Entry',      label: 'Entry'    },
            { src: '/images/projects/exam-sheet-scanner/examscan-studentdetails.jpg',alt: 'Student Details',   label: 'Students'  },
          ]} />
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/?s=projects" className="btn">Back to Projects</Link>
          <a href="https://examsheetscan.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginLeft: '0.5rem' }}>Live Demo</a>
        </div>
      </main>
      <footer className="footer"><p>&copy; 2025 Geo Nithin J. All rights reserved.</p></footer>
    </>
  )
}
