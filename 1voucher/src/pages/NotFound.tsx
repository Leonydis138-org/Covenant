import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      style={{
        paddingTop: 72,
        minHeight: '100vh',
        background: 'var(--1v-black)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '72px 40px 80px',
      }}
    >
      <div style={{ maxWidth: 600 }}>
        <h1
          style={{
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontWeight: 900,
            color: 'var(--1voucher-orange)',
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          Page Not Found
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#aaa', marginBottom: 40 }}>
          You're so limitless that you have reached the outer most limits of our site. You've come so far that we don't even know where you are.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            background: 'var(--1voucher-orange)',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '14px 32px',
            borderRadius: 4,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Take Me Home
        </Link>
      </div>
    </div>
  )
}
