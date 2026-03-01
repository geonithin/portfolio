import { Link } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'

export default function LmsProject() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">lms</div>
      <main className="page-main">
        <Link to="/?s=projects" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Projects
        </Link>
        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </div>
          <h1>Library Management System</h1>
          <p>Full-stack library platform with real-time messaging, Google Calendar integration, and role-based access</p>
        </div>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <span className="badge badge--green">Completed</span>
          <p style={{ marginTop: '0.75rem' }}>A comprehensive library management platform supporting students and staff with book catalog browsing, borrowing management, real-time notifications, email reminders, and full admin controls. 2,500+ lines of code, 8 database tables, 20+ routes, 95% TypeScript coverage.</p>
          <div className="project-links" style={{ marginTop: '1rem' }}>
            <a href="https://lms-geo-nithin-js-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Student Features</h2>
          <div className="card-grid">
            <div className="card"><h3>Book Discovery</h3><p>Browse the full catalog with search and filter.</p></div>
            <div className="card"><h3>Borrow &amp; Return</h3><p>Request books, track due dates, view history.</p></div>
            <div className="card"><h3>Real-Time Messaging</h3><p>Instant chat with library staff for queries.</p></div>
            <div className="card"><h3>Calendar Integration</h3><p>Due date reminders synced to Google Calendar.</p></div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Staff Features</h2>
          <div className="card-grid">
            <div className="card"><h3>Inventory Management</h3><p>Add, update, and remove books from catalog.</p></div>
            <div className="card"><h3>User Management</h3><p>Manage student accounts and borrowing permissions.</p></div>
            <div className="card"><h3>Overdue Tracking</h3><p>Automated alerts for overdue books and fines.</p></div>
            <div className="card"><h3>Analytics Dashboard</h3><p>Borrowing trends, popular books, and reports.</p></div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="section__title">Technology Stack</h2>
          <div className="card">
            <div className="tags">
              <span className="tag">React Router v7</span><span className="tag">TypeScript</span>
              <span className="tag">Supabase</span><span className="tag">PostgreSQL</span>
              <span className="tag">Google Calendar API</span><span className="tag">Vercel</span>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2.5rem', overflow: 'visible' }}>
          <ProjectGallery images={[
            { src: '/images/projects/lms/lms-main.png',          alt: 'LMS Dashboard',  label: 'Dashboard'    },
            { src: '/images/projects/lms/library-dashboard.png', alt: 'Book Catalog',   label: 'Catalog'      },
            { src: '/images/projects/lms/lms-student-view.png',  alt: 'Student View',   label: 'Student View' },
            { src: '/images/projects/lms/lms-admin.png',         alt: 'Admin Panel',    label: 'Admin'        },
          ]} />
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/?s=projects" className="btn">Back to Projects</Link>
          <a href="https://lms-geo-nithin-js-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginLeft: '0.5rem' }}>Live Demo</a>
        </div>
      </main>
      <footer className="footer"><p>&copy; 2025 Geo Nithin J. All rights reserved.</p></footer>
    </>
  )
}
