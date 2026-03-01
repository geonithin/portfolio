import { Link } from 'react-router-dom'

const timeline = [
  { date: 'Aug 2024', title: 'Higher Secondary Completed – 81%', desc: 'Completed Higher Secondary education with 81% in the Tamil Nadu State Board, setting the stage for my engineering journey.', tags: ['Academic', 'Milestone'] },
  { date: 'Sep 2024', title: 'Started First Year – Proud Stella Marian', desc: 'Officially began my first year as a proud Stella Marian, stepping into the world of Computer Science and Engineering.', tags: ['Milestone', 'CSE', 'First Year'] },
  { date: 'Sep 28, 2024', title: 'Third Place – Anna University Zone-19 Football', desc: 'Secured Third Place in the Anna University Zone-19 Football Tournament, showcasing teamwork and athletic skills.', tags: ['🥉 3rd Place', '⚽ Football', 'Sports'] },
  { date: 'Oct 2024', title: 'Microsoft Learning & Byte Bash Blitz Application', desc: 'Took my first leap toward community learning by completing Microsoft Learning tasks and applying to join the Byte Bash Blitz — a reputed tech community on campus.', tags: ['Community', 'Microsoft', 'Learning'] },
  { date: 'Dec 2024', title: 'Self Engineering Certificate Program', desc: 'Completed a Certificate Program on Self Engineering – "Become Better Yourself" offered by Karka Software Academy, focusing on personal development.', tags: ['Certificate', 'Self Development'] },
  { date: 'Jan 2025', title: 'Byte Bash Blitz Rookie & BeABasher Campaign', desc: 'Shortlisted in the Rookie List of Byte Bash Blitz and participated in the BeABasher Campaign, marking the start of my journey within the club.', tags: ['Achievement', 'Tech Club', 'Selected'] },
  { date: 'Feb 2025', title: 'Second Semester – CGPA 8.5', desc: 'Stepped into my Second Semester with a CGPA of 8.5, having cleared all papers in the first semester with flying colors.', tags: ['Academic', '8.5 CGPA', 'All Clear'] },
  { date: 'Feb 27, 2025', title: 'First Place – Elocution Competition', desc: 'Achieved First Place in the Elocution Competition on "Smart and Responsible Living: Balancing Technology, Ethics, and Wellbeing", organized by the Literary Club.', tags: ['🥇 1st Place', 'Public Speaking', 'Champion'] },
  { date: 'Mar 7, 2025', title: 'Double Gold – Annual Sports Day', desc: 'Secured First Place in both 400m and 4x100m Relay events during the Annual Sports Day, demonstrating exceptional athletic prowess.', tags: ['🥇🥇 Champion', '400m', '4x100m Relay'] },
  { date: 'Mar 28, 2025', title: 'National Conference Paper Presentation', desc: 'Presented a paper at the National Conference on Sustainable Engineering, Science, and Safety organized by the Department of Industrial Safety Engineering.', tags: ['Research', 'Paper Presentation', 'National Conference'] },
  { date: 'Apr 11, 2025', title: 'National-Level Technical Symposium', desc: "Participated in a National-Level Technical Symposium organized by St. Xavier's Catholic College of Engineering, engaging with cutting-edge technologies.", tags: ['Symposium', 'Technical', 'National Level'] },
  { date: 'May 1, 2025', title: 'First Portfolio Website Created', desc: 'Created my first ever webpage, My Portfolio, as the final assessment project for the BeABasher Campaign, marking the beginning of my journey as a web developer.', tags: ['💻 Web Dev', 'BeABasher', 'First Project'] },
  { date: 'Jul 2025', title: 'Advanced to Second Year – CGPA 8.4', desc: 'Advanced into Second Year with a CGPA of 8.4 and no standing arrears, maintaining consistent academic excellence.', tags: ['Promotion', '8.4 CGPA', 'No Arrears'] },
  { date: 'Aug 1, 2025', title: 'Official Basher – Byte Bash Blitz', desc: 'Officially recognized as a Basher in the Byte Bash Blitz Community, after successfully completing all BeABasher campaign tasks and proving my commitment.', tags: ['Recognition', 'Basher', 'Tech Community'] },
  { date: 'Aug 25, 2025', title: 'Class Management System Developed', desc: 'Designed and developed my second website, Class Management System, enhancing my technical skills in full-stack development.', tags: ['💻 Full-Stack', 'Web Development', 'Second Project'] },
  { date: 'Sep 3, 2025', title: 'Second Place – CM Trophy Football', desc: 'Secured Second Place in the CM Trophy Men\'s Football Tournament, showcasing continued excellence in sports alongside academics.', tags: ['🥈 2nd Place', '⚽ Football', 'CM Trophy'] },
  { date: 'Sep 13, 2025', title: 'EduSprint – AI Driven College Hackathon', desc: "Participated in EduSprint – AI Driven College Hackathon, organized by St. Xavier's Catholic College of Engineering, applying AI skills in real-world scenarios.", tags: ['Hackathon', '🤖 AI', 'Innovation'] },
  { date: 'Sep 23, 2025', title: 'Second Place – Anna University Zone-19 Football (Again!)', desc: 'Once again achieved Second Place in the Anna University Zone-19 Football Tournament, demonstrating consistent athletic excellence.', tags: ['🥈 2nd Place', '⚽ Football', 'Consistency'] },
  { date: 'Oct 2, 2025', title: 'Library Management System Developed', desc: 'Developed my third website, Library Management System, an advanced web application that strengthened my understanding of database integration and software design.', tags: ['💻 Advanced Web', 'Database Integration', 'Third Project'] },
  { date: 'Jan 11, 2026', title: 'Exam Sheet Scanner Completed', desc: 'Completed Exam Sheet Scanner, a comprehensive system leveraging Google Gemini AI for OCR-powered data extraction. Built with Remix, React, TypeScript, and Supabase.', tags: ['🤖 AI-Powered', 'Full Stack', 'Fourth Project'] },
]

export default function CollegeActivities() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">journey</div>
      <main className="page-main">
        <Link to="/personal" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Personal
        </Link>

        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 8 3 12 0v-5"/></svg>
          </div>
          <h1>Campus Journey</h1>
          <p>A timeline of milestones, achievements, and growth since August 2024</p>
        </div>

        <div className="timeline" style={{ marginTop: '2rem' }}>
          {timeline.map(item => (
            <div key={item.date + item.title} className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <div className="card" style={{ marginBottom: 0 }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="tags">{item.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="quote-block" style={{ marginTop: '2rem' }}>
          <p>"The journey never ends — for every step forward is a spark that lights the path ahead."</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card"><div className="stat-card__value">7</div><div className="stat-card__label">Sports Achievements</div></div>
          <div className="stat-card"><div className="stat-card__value">8.5</div><div className="stat-card__label">First Year CGPA</div></div>
          <div className="stat-card"><div className="stat-card__value">Basher</div><div className="stat-card__label">Byte Bash Blitz</div></div>
          <div className="stat-card"><div className="stat-card__value">19+</div><div className="stat-card__label">Major Milestones</div></div>
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
