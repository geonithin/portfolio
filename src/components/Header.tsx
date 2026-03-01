import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">
        <img
          src="/images/profile/geo-profile.jpg"
          alt="Geo Nithin J"
          className="site-header__avatar"
        />
        <span className="site-header__name">
          Geo <span>Nithin</span> J
        </span>
      </Link>

      <div className="site-header__status">
        <span className="site-header__dot" />
        Open to opportunities
      </div>
    </header>
  )
}
