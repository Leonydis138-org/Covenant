import { Link } from 'react-router-dom'

const HERO_BG = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/695cb3024459fbee846010ba_1Voucher_Magadi_1340-A.avif'
const THIS_CASH_CAN = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/695cb272d49301362ecf76ff_This-Cash-Can.svg'
const DO_MORE_IMG = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/695cdfb9ca83019f02dbbbe2_20251030_1Voucher_Tevin_A.avif'
const APP_MOCKUP = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/699befb54c928045f5b23346_1V-app.avif'
const GOOGLE_PLAY = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62cfeb0593795664e3eb9d8f_google-play-badge%201.avif'
const APP_STORE = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/62cfeb0593795674deeb9d91_IOS-App-Store-Badge.avif'

const FEATURED_PARTNERS = [
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/689ec52a3d663f657e40692f_Logo%201Voucher%20app.avif', alt: '1Voucher App' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188e834cbb1537e1833d0d_62d7de0f56b848adcfce0c86_Retail%2520Logo%2520Flash.avif', alt: 'Flash' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/6735d960b0516104274230fd_Takelot-Logo.avif', alt: 'Takealot' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/6704d76ddb8bfd122310e5a2_Logo%20Boxer.avif', alt: 'Boxer' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188b5a8767165359c02c75_62da69813353de8e57d6a6b3_px-Retail%2520Logo%2520Checkers-2.avif', alt: 'Checkers' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/6826d6187878d7cf67b4324d_Logo%20Choprite%20Cash%20and%20Carry.avif', alt: 'Choprite' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/65cf57904f4704cb2890eee6_My%20DSTV.avif', alt: 'DStv' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/699da437d8c377f3dab9b480_Ikeja-Logo.png', alt: 'Ikeja' },
  { src: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/654b46f76e8b77ca59ccdb19_Deriv.avif', alt: 'Deriv' },
]

const NEWS_ITEMS = [
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/69aa9f197494d65eac68e0d8_Cash%20Cartel%20Web%20banners3.jpg',
    category: 'NEWS',
    title: 'The voucher for cash kings and queens who do life and money their way',
    href: '/news',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/693bb676248f15dcfa637354_FLA6172%20PIN%20-%20AO%20-%20Jan%20-%20March%20BLOG%20BANNERS%20THUMBNAIL.webp',
    category: 'NEWS',
    title: 'Give Your Cash More Power with 1Voucher - This Cash CAN',
    href: '/news',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/693938a70814e9c73938071a_stokvela-savings3.jpg',
    category: 'NEWS',
    title: 'Save with GroupSave on the 1Voucher app',
    href: '/news',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/675804ce32d32a8396808409_1Voucher%20Partners%20with%20Takealot.avif',
    category: 'NEWS',
    title: '1Voucher Partners with Takealot – Your Cash, Your Rules',
    href: '/news',
  },
]

export default function Home() {
  return (
    <div>
      <Hero />
      <DoMore />
      <AppSection />
      <PartnersSection />
      <NewsSection />
    </div>
  )
}

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--1v-black)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src={HERO_BG}
        alt="1Voucher hero"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(17,20,24,0.75) 0%, rgba(17,20,24,0.2) 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '120px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        <div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: 36,
              letterSpacing: '-0.02em',
            }}
          >
            1-up your cash with 1Voucher: the best way to pay and top-up online.
          </h1>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link
              to="/news"
              style={{
                background: 'var(--1voucher-orange)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: 4,
                display: 'inline-block',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Learn More
            </Link>
            <Link
              to="/where-to-spend"
              style={{
                background: 'transparent',
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: 4,
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.6)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Where to Spend
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={THIS_CASH_CAN}
            alt="This Cash Can"
            style={{ width: '100%', maxWidth: 420 }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            display: none !important;
          }
          .hero-grid > div:first-child > div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

function DoMore() {
  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
        className="do-more-grid"
      >
        <div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              color: 'var(--1v-black)',
              marginBottom: 28,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Do more with 1Voucher
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--body-grey)', marginBottom: 16 }}>
            1Voucher is a cash voucher that you can use to pay online, in-store, or in the 1Voucher app.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--body-grey)', marginBottom: 16 }}>
            You buy it with cash or a bank card, receive a PIN, and use that PIN wherever 1Voucher is accepted.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--body-grey)', marginBottom: 40 }}>
            It is a practical way to use your cash in the digital world.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link
              to="/where-to-buy"
              style={{
                background: 'var(--1v-black)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '13px 24px',
                borderRadius: 4,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Where to Buy
            </Link>
            <Link
              to="/where-to-spend"
              style={{
                background: 'transparent',
                color: 'var(--1v-black)',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '13px 24px',
                borderRadius: 4,
                border: '2px solid var(--1v-black)',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--1v-black)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--1v-black)'; }}
            >
              Where to Spend
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={DO_MORE_IMG}
            alt="Person using 1Voucher"
            style={{
              width: '100%',
              maxWidth: 460,
              borderRadius: 16,
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .do-more-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

function AppSection() {
  return (
    <section
      id="app"
      style={{
        background: 'var(--1v-black)',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
        className="app-grid"
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              background: 'var(--1voucher-orange)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: 4,
              marginBottom: 24,
            }}
          >
            Download Now
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 24,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Get the 1Voucher app
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#aaa', marginBottom: 16 }}>
            The 1Voucher app helps you manage and use your money in one place. You can spend, send, and store your balance with no fees.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#aaa', marginBottom: 40 }}>
            The app makes it easy to top up and pay. Download the app.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.flashgroup.onevoucher"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <img src={GOOGLE_PLAY} alt="Get it on Google Play" style={{ height: 50 }} />
            </a>
            <a
              href="https://apps.apple.com/za/app/1voucher/id1628234286"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <img src={APP_STORE} alt="Download on the App Store" style={{ height: 50 }} />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: -40,
              background: 'radial-gradient(ellipse at center, rgba(255,95,0,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          <img
            src={APP_MOCKUP}
            alt="1Voucher App"
            style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 1 }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .app-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

function PartnersSection() {
  return (
    <section style={{ background: 'var(--light-grey-1)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--1v-black)', letterSpacing: '-0.02em' }}>
            Featured partners
          </h2>
          <Link
            to="/where-to-spend"
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--1voucher-orange)',
              borderBottom: '2px solid var(--1voucher-orange)',
              paddingBottom: 2,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Where to Spend →
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {FEATURED_PARTNERS.map(p => (
            <div
              key={p.alt}
              style={{
                background: '#fff',
                borderRadius: 8,
                padding: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 90,
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src={p.src} alt={p.alt} style={{ maxWidth: '80%', maxHeight: 60, objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsSection() {
  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--1v-black)', letterSpacing: '-0.02em' }}>
            Latest news
          </h2>
          <Link
            to="/news"
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--1voucher-orange)',
              borderBottom: '2px solid var(--1voucher-orange)',
              paddingBottom: 2,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            All news →
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 28,
          }}
        >
          {NEWS_ITEMS.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              style={{
                display: 'block',
                borderRadius: 8,
                overflow: 'hidden',
                background: '#fff',
                border: '1px solid #eee',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ overflow: 'hidden', height: 200 }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '20px 20px 24px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--1voucher-orange)',
                    marginBottom: 10,
                  }}
                >
                  {item.category}
                </span>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--1v-black)', lineHeight: 1.4 }}>
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
