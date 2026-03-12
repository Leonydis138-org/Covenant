import { Link } from 'react-router-dom'

const LOGO_BLACK = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/66d02cbf77f4ca4a337a146a_1Voucher-Logo-On-Black.svg'
const FLASH_LOGO = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62d154d65cea0f21db422ab1_Flash-Logo-Grey.svg'
const GOOGLE_PLAY = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62cfeb0593795664e3eb9d8f_google-play-badge%201.avif'
const APP_STORE = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62cfeb0593795674deeb9d91_IOS-App-Store-Badge.avif'

const SOCIALS = [
  {
    name: 'Facebook',
    icon: 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62d52070a73d901a49aca82f_Icon-Facebook.svg',
    href: 'https://www.facebook.com/1Voucher.SA/',
  },
  {
    name: 'Instagram',
    icon: 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62d568c606896ea74a8fbf42_icon-instagram.svg',
    href: 'https://www.instagram.com/1voucher_sa/',
  },
  {
    name: 'Twitter/X',
    icon: 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62d5696867da631c18317ec1_icon-twitter.svg',
    href: 'https://x.com/1voucher_SA',
  },
  {
    name: 'YouTube',
    icon: 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62d568c6bc83b9635641130a_icon-youtube.svg',
    href: 'https://www.youtube.com/@1voucherSA',
  },
  {
    name: 'TikTok',
    icon: 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62d56a200493ec2c1ab5c250_Icon-tiktok.svg',
    href: 'https://www.tiktok.com/@1voucher_sa',
  },
  {
    name: 'LinkedIn',
    icon: 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/65153bd534f8aac77c87b754_LinkedIn-Social-Icon.svg',
    href: 'https://www.linkedin.com/company/1voucher/',
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--1v-black)', color: '#fff', paddingTop: 60 }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 40,
          paddingBottom: 60,
        }}
        className="footer-grid"
      >
        <div>
          <img src={LOGO_BLACK} alt="1Voucher" style={{ height: 35, marginBottom: 24 }} />
          <p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginBottom: 28 }}>
            Your cash.<br />Your way.
          </p>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
            Connect with us
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {SOCIALS.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{ opacity: 0.7, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
              >
                <img src={s.icon} alt={s.name} style={{ width: 28, height: 28 }} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
            Get in touch
          </p>
          <p style={{ marginBottom: 8, fontSize: 14 }}>
            <a href="mailto:hello@1voucher.co.za" style={{ color: '#fff' }}>
              hello@1voucher.co.za
            </a>
          </p>
          <p style={{ fontSize: 14, color: '#aaa', marginBottom: 6 }}>Call Centre:</p>
          <p style={{ fontSize: 14 }}>
            <a href="tel:0861693333" style={{ color: '#fff', fontWeight: 600 }}>
              086 169 3333
            </a>
          </p>
        </div>

        <div>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
            Company
          </p>
          <FooterLinks links={COMPANY_LINKS} />
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 16, marginTop: 28 }}>
            Navigate
          </p>
          <FooterLinks links={NAV_LINKS} />
        </div>

        <div>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
            Support
          </p>
          <FooterLinks links={SUPPORT_LINKS} />
          <div style={{ marginTop: 32 }}>
            <a
              href="https://www.1voucher.co.za/where-to-buy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--1voucher-orange)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '10px 18px',
                borderRadius: 4,
                marginBottom: 10,
              }}
            >
              Buy 1Voucher
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
              <a href="https://play.google.com/store/apps/details?id=com.flashgroup.onevoucher" target="_blank" rel="noopener noreferrer">
                <img src={GOOGLE_PLAY} alt="Get it on Google Play" style={{ height: 40 }} />
              </a>
              <a href="https://apps.apple.com/za/app/1voucher/id1628234286" target="_blank" rel="noopener noreferrer">
                <img src={APP_STORE} alt="Download on the App Store" style={{ height: 40 }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 40px',
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#aaa' }}>Part of</span>
          <img src={FLASH_LOGO} alt="Flash Group" style={{ height: 24, opacity: 0.6 }} />
          <span style={{ fontSize: 12, color: '#aaa' }}>| All Rights Reserved</span>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {LEGAL_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: 12, color: '#aaa', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterLinks({ links }: { links: Array<{ label: string; to?: string; href?: string }> }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {links.map(l =>
        l.to ? (
          <Link
            key={l.label}
            to={l.to}
            style={{ fontSize: 14, color: '#ccc', transition: 'color 0.2s' }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ccc')}
          >
            {l.label}
          </Link>
        ) : (
          <a
            key={l.label}
            href={l.href}
            style={{ fontSize: 14, color: '#ccc', transition: 'color 0.2s' }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ccc')}
          >
            {l.label}
          </a>
        )
      )}
    </div>
  )
}

const COMPANY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

const NAV_LINKS = [
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'Where to Spend', to: '/where-to-spend' },
  { label: '1Voucher App', href: 'https://play.google.com/store/apps/details?id=com.flashgroup.onevoucher' },
]

const SUPPORT_LINKS = [
  { label: 'See our FAQs', to: '/contact' },
  { label: 'Contact us', to: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Competition Terms', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]
