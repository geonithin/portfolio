import { Link } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'

export default function ClgProject() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">clg</div>
      <main className="page-main">
        <Link to="/?s=projects" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Projects
        </Link>
        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 8 3 12 0v-5"/></svg>
          </div>
          <h1>Class Management System</h1>
          <p>Comprehensive student &amp; admin portal with event scheduling, academic records, and analytics</p>
        </div>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <span className="badge badge--green">Completed</span>
          <p style={{ marginTop: '0.75rem' }}>A full-featured class management platform for Stella Mary's College of Engineering — CSE-B Department. Supports student login, admin dashboard, event management, and academic record tracking.</p>
          <div className="project-links" style={{ marginTop: '1rem' }}>
            <a href="https://smce-cseb.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Key Features</h2>
          <div className="card-grid">
            <div className="card"><h3>Academic Management</h3><p>Attendance tracking, internal marks, grade visualization, and performance analytics per student.</p></div>
            <div className="card"><h3>Event Scheduling</h3><p>Semester-wise event calendar, exam schedules, and department announcements with notifications.</p></div>
            <div className="card"><h3>Authentication</h3><p>Secure role-based login for students and admins with Supabase Auth, session management.</p></div>
            <div className="card"><h3>Data Management</h3><p>PostgreSQL-backed database with well-structured tables for students, marks, events, and more.</p></div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Technology Stack</h2>
          <div className="card">
            <div className="tags">
              <span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span>
              <span className="tag">Remix</span><span className="tag">Supabase</span><span className="tag">PostgreSQL</span>
              <span className="tag">Vercel</span>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2.5rem', overflow: 'visible' }}>
          <ProjectGallery images={[
            { src: '/images/projects/class-management/class-mgmt-192248.png', alt: 'Dashboard',     label: 'Dashboard' },
            { src: '/images/projects/class-management/class-mgmt-192733.png', alt: 'Student View',  label: 'Students'  },
            { src: '/images/projects/class-management/class-mgmt-192954.png', alt: 'Event Calendar',label: 'Events'    },
            { src: '/images/projects/class-management/class-mgmt-193146.png', alt: 'Analytics',     label: 'Analytics' },
          ]} />
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/?s=projects" className="btn">Back to Projects</Link>
          <a href="https://smce-cseb.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginLeft: '0.5rem' }}>Live Demo</a>
        </div>
      </main>
      <footer className="footer"><p>&copy; 2025 Geo Nithin J. All rights reserved.</p></footer>
    </>
  )
}
