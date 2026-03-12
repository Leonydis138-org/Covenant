import { useState } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = [
  { id: 'all', label: 'All', icon: '✦' },
  { id: 'games', label: 'Live Games', icon: '🎮' },
  { id: 'comm', label: 'Communication', icon: '📱' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️' },
  { id: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
  { id: 'utilities', label: 'Utilities', icon: '⚡' },
  { id: 'insurance', label: 'Insurance', icon: '🛡️' },
  { id: 'health', label: 'Health & Wellness', icon: '💊' },
  { id: 'trading', label: 'Trading', icon: '📈' },
  { id: 'money', label: 'Money Solutions', icon: '💳' },
]

const SPEND_PARTNERS = [
  { name: '1Voucher App', cat: 'money', desc: 'Top up your 1Voucher app balance', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/689ec52a3d663f657e40692f_Logo%201Voucher%20app.avif' },
  { name: 'Takealot', cat: 'shopping', desc: 'South Africa\'s biggest online store', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/6735d960b0516104274230fd_Takelot-Logo.avif' },
  { name: 'Ikeja', cat: 'money', desc: 'Digital payment solutions', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/699da437d8c377f3dab9b480_Ikeja-Logo.png' },
  { name: 'Deriv', cat: 'trading', desc: 'Online trading platform', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/654b46f76e8b77ca59ccdb19_Deriv.avif' },
  { name: 'DStv', cat: 'lifestyle', desc: 'Top up your DStv subscription', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/65cf57904f4704cb2890eee6_My%20DSTV.avif' },
  { name: 'Shoprite', cat: 'shopping', desc: 'Pay at Shoprite stores', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188e84b2faf162528f6b9b_62d7e3244cccc7c96a2b3be6_Retail%2520Logo%2520Shoprite.avif' },
  { name: 'Checkers', cat: 'shopping', desc: 'Pay at Checkers stores', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188e8205cd51c6eaf49a35_62d7e35a0de764f3f6fb7ca4_px-Retail%2520Logo%2520Checkers.avif' },
  { name: 'PEP', cat: 'shopping', desc: 'Shop at PEP stores', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188e836dcc1d812e7a00f1_62d7debedd2e628253d45419_Retail%2520Logo%2520Pep.avif' },
  { name: 'Ackermans', cat: 'shopping', desc: 'Fashion and more', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188e82b26482818375904c_62d7e9ea9028bcb031130d21_px-Retail%2520Logo%2520Ackermans.avif' },
  { name: 'HiFi Corp', cat: 'shopping', desc: 'Electronics and tech', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/63188e83fbd0a6706cd9384d_62d7ea1f8e26ff45d5593ce5_px-Retail%2520Logo%2520HiFiCorp.avif' },
  { name: 'Incredible Connection', cat: 'shopping', desc: 'Tech retail', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/633d667f55a34561a517152b_px-Incredible-Connection.avif' },
  { name: 'Shop2Shop', cat: 'money', desc: 'Send money and vouchers', img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/66b4bad11d5d027429ae009e_Logo%20Shop2Shop.avif' },
]

export default function WhereToSpend() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? SPEND_PARTNERS
    : SPEND_PARTNERS.filter(p => p.cat === activeCategory)

  return (
    <div style={{ paddingTop: 72 }}>
      <section
        style={{
          background: 'var(--1v-black)',
          padding: '80px 40px 60px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--1voucher-orange)',
            marginBottom: 16,
          }}
        >
          1Voucher
        </span>
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          Where to Spend 1Voucher
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#ccc', maxWidth: 640, margin: '0 auto' }}>
          1Voucher can be used to top up or pay with multiple online and in-store partners, buy airtime & data, top up the 1Voucher app, or send to a friend.
        </p>
      </section>

      <section style={{ padding: '48px 40px 24px', background: '#f5f5f5', position: 'sticky', top: 72, zIndex: 10, borderBottom: '1px solid #eee' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
          }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: '2px solid',
                background: activeCategory === cat.id ? 'var(--1v-black)' : 'transparent',
                color: activeCategory === cat.id ? '#fff' : 'var(--1v-black)',
                borderColor: activeCategory === cat.id ? 'var(--1v-black)' : '#ccc',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px 100px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {filtered.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 20,
              }}
            >
              {filtered.map((partner, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid #eee',
                    borderRadius: 10,
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 16,
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    background: '#fff',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={partner.img} alt={partner.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: 'var(--1v-black)', marginBottom: 6 }}>
                      {partner.name}
                    </p>
                    <p style={{ fontSize: 13, color: 'var(--body-grey)', lineHeight: 1.5 }}>
                      {partner.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--body-grey)', fontSize: 17, padding: '60px 0' }}>
              No partners in this category yet.
            </p>
          )}
        </div>
      </section>

      <section
        style={{
          background: 'var(--1v-black)',
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            Open your business to cash customers
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#ccc', marginBottom: 32 }}>
            Sell or accept 1Voucher today and reach millions of South Africans who prefer to pay with cash.
          </p>
          <Link
            to="/contact"
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
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
