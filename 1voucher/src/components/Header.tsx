import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const LOGO_WHITE = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/66cdef50b1ac8f24be3d5329_1Voucher-Logo-New.svg'
const LOGO_BLACK = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/66d02cbf77f4ca4a337a146a_1Voucher-Logo-On-Black.svg'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const transparent = isHome && !scrolled && !menuOpen
  const logo = transparent ? LOGO_WHITE : LOGO_BLACK

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: transparent ? 'transparent' : '#fff',
        borderBottom: transparent ? 'none' : '1px solid #eee',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" aria-label="1Voucher home">
          <img src={logo} alt="1Voucher" style={{ height: 36, width: 'auto' }} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: isActive
                  ? 'var(--1voucher-orange)'
                  : transparent
                  ? '#fff'
                  : 'var(--text-color-dark)',
                transition: 'color 0.2s',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.flashgroup.onevoucher"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--1voucher-orange)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '10px 20px',
              borderRadius: 4,
              whiteSpace: 'nowrap',
            }}
          >
            Get the App
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          className="hamburger"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: transparent ? '#fff' : '#222',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: '#fff',
            borderTop: '1px solid #eee',
            padding: '20px 40px 32px',
          }}
        >
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                display: 'block',
                padding: '14px 0',
                borderBottom: '1px solid #eee',
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--1voucher-orange)' : 'var(--text-color-dark)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.flashgroup.onevoucher"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 20,
              background: 'var(--1voucher-orange)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: 4,
            }}
          >
            Get the App
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

const NAV_LINKS = [
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'Where to Spend', to: '/where-to-spend' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]
