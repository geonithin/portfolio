import { BrowserRouter, Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import SplashCursor from './components/SplashCursor'
import Dock from './components/Dock'
import Home from './pages/Home'
import Personal from './pages/Personal'
import Certificates from './pages/Certificates'
import ReadingList from './pages/ReadingList'
import Dreams from './pages/Dreams'
import CollegeActivities from './pages/CollegeActivities'
import ClgProject from './pages/ClgProject'
import LmsProject from './pages/LmsProject'
import ExamScanner from './pages/ExamScanner'
import GuardianTrack from './pages/GuardianTrack'

function GlobalDock() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const activeSection = location.pathname === '/' ? (searchParams.get('s') ?? '') : ''
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function goSection(id: string) {
    if (location.pathname !== '/') {
      navigate(`/?s=${id}`)
    } else {
      // toggle off if already active
      navigate(activeSection === id ? '/' : `/?s=${id}`, { replace: true })
    }
  }

  const dockItems = [
    {
      label: 'Me',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>,
      onClick: () => goSection('me'),
    },
    {
      label: 'Skills',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>,
      onClick: () => goSection('skills'),
    },
    {
      label: 'Projects',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>,
      onClick: () => goSection('projects'),
    },
    {
      label: 'Personal',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      onClick: () => navigate('/personal'),
    },
    {
      label: 'Resume',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2z"/><path d="M14 2v6h6"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
      onClick: () => goSection('resume'),
    },
    {
      label: 'Contact',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      onClick: () => goSection('contact'),
    },
  ]

  const labelMap: Record<string, string> = { me: 'Me', skills: 'Skills', projects: 'Projects', resume: 'Resume', contact: 'Contact' }

  return (
    <Dock
      items={dockItems}
      panelHeight={isMobile ? 52 : 64}
      baseItemSize={isMobile ? 40 : 48}
      magnification={isMobile ? 48 : 72}
      distance={isMobile ? 100 : 140}
      activeItem={activeSection ? labelMap[activeSection] : undefined}
    />
  )
}

function CardCursorTracker() {
  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      document.querySelectorAll<HTMLElement>('.card, .stat-card, .nav-card, .cert-card, .book-card').forEach(card => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={1.5}
        VELOCITY_DISSIPATION={0.8}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={4500}
        COLOR_UPDATE_SPEED={4}
      />
      <CardCursorTracker />
      <Header />
      <GlobalDock />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/reading-list" element={<ReadingList />} />
        <Route path="/dreams" element={<Dreams />} />
        <Route path="/college-activities" element={<CollegeActivities />} />
        <Route path="/clg-project" element={<ClgProject />} />
        <Route path="/lms-project" element={<LmsProject />} />
        <Route path="/exam-scanner" element={<ExamScanner />} />
        <Route path="/guardiantrack" element={<GuardianTrack />} />
      </Routes>
    </BrowserRouter>
  )
}
