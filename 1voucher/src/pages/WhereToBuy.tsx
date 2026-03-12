import { useState } from 'react'

const BASE = 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/'

const RETAIL_LOGOS = [
  { src: BASE + '65439144b7ee72030cfa5822_Tekkie%20Town.avif', alt: 'Tekkie Town', category: 'Retail' },
  { src: BASE + '6704d76ddb8bfd122310e5a2_Logo%20Boxer.avif', alt: 'Boxer', category: 'Retail' },
  { src: BASE + '6826d5ce4847520c9001dd42_Logo%20Checkers%20Hyper.avif', alt: 'Checkers Hyper', category: 'Retail' },
  { src: BASE + '6826d60639aa3af2159f5b88_Logo%20Checkers%20Liquor.avif', alt: 'Checkers Liquor', category: 'Retail' },
  { src: BASE + '6826d6187878d7cf67b4324d_Logo%20Choprite%20Cash%20and%20Carry.avif', alt: 'Choprite Cash & Carry', category: 'Retail' },
  { src: BASE + '6826d6492da94ca8e703468b_Logo%20Checkers%20Outdoor.avif', alt: 'Checkers Outdoor', category: 'Retail' },
  { src: BASE + '6826d66fc2c32b2df29be6b8_Logo%20Checkers%20LittleMe.avif', alt: 'Checkers LittleMe', category: 'Retail' },
  { src: BASE + '6826d697a7abf67137a7f830_Logo%20Medirite%20plus.avif', alt: 'Medirite Plus', category: 'Retail' },
  { src: BASE + '6826d6a4ba24544df50d61d2_Logo%20Money%20Market.avif', alt: 'Money Market', category: 'Retail' },
  { src: BASE + '6826d6c2ecfd4b6413f116c3_Logo%20Petshop.avif', alt: 'Petshop Science', category: 'Retail' },
  { src: BASE + '6826d6d8a7abf67137a81855_Logo%20Shoprite%20Liquor.avif', alt: 'Shoprite Liquor', category: 'Retail' },
  { src: BASE + '63188e834cbb1537e1833d0d_62d7de0f56b848adcfce0c86_Retail%2520Logo%2520Flash.avif', alt: 'Flash', category: 'Retail' },
  { src: BASE + '63188e84f1ae1c2b7ff3c901_62d7dfd24cccc74fd42b245f_Retail%2520Logo%2520PepCell.avif', alt: 'PEPcell', category: 'Retail' },
  { src: BASE + '63188e836dcc1d812e7a00f1_62d7debedd2e628253d45419_Retail%2520Logo%2520Pep.avif', alt: 'PEP', category: 'Retail' },
  { src: BASE + '63188e83b3a10303bc20ea26_62f39284df9145bd531ebb37_Retail%2520Logo%253DPep%2520Home.avif', alt: 'PEP Home', category: 'Retail' },
  { src: BASE + '63188e84b2faf162528f6b9b_62d7e3244cccc7c96a2b3be6_Retail%2520Logo%2520Shoprite.avif', alt: 'Shoprite', category: 'Retail' },
  { src: BASE + '65dc7adcc02b692b70fad38b_Logo%20Econofoods.avif', alt: 'Econofoods', category: 'Retail' },
  { src: BASE + '63188e8205cd51c6eaf49a35_62d7e35a0de764f3f6fb7ca4_px-Retail%2520Logo%2520Checkers.avif', alt: 'Checkers', category: 'Retail' },
  { src: BASE + '665eee0f1f47fd0af7163c39_Logo%20A2Pay.avif', alt: 'A2Pay', category: 'Apps & Websites' },
  { src: BASE + '63188e82b26482818375904c_62d7e9ea9028bcb031130d21_px-Retail%2520Logo%2520Ackermans.avif', alt: 'Ackermans', category: 'Retail' },
  { src: BASE + '66b4bad11d5d027429ae009e_Logo%20Shop2Shop.avif', alt: 'Shop2Shop', category: 'Apps & Websites' },
  { src: BASE + '63188e83fbd0a6706cd9384d_62d7ea1f8e26ff45d5593ce5_px-Retail%2520Logo%2520HiFiCorp.avif', alt: 'HiFi Corp', category: 'Retail' },
  { src: BASE + '63188e822ba653e70f9afd9e_62d7ea3c9b7ee7d90d8818ea_px-Retail%2520Logo%2520Dunns.avif', alt: "Dunns", category: 'Retail' },
  { src: BASE + '65b73e93c7bf7e4f2e75607e_Dunns-Mobile.avif', alt: 'Dunns Mobile', category: 'Retail' },
  { src: BASE + '633d667f55a34561a517152b_px-Incredible-Connection.avif', alt: 'Incredible Connection', category: 'Retail' },
  { src: BASE + '66cc63ead1ff00499894216c_Logo%20Bradlows.avif', alt: 'Bradlows', category: 'Retail' },
  { src: BASE + '63188e846283f03b2d776f7e_62d7ec495b8d87d417646ee0_px-Retail%2520Logo%2520Rochester.avif', alt: 'Rochester', category: 'Retail' },
  { src: BASE + '63188bda1fb0cf20aea61287_62f4e084c23d65d1fc1e4242_px-Logo%2520Shopping%253DRussells.avif', alt: 'Russells', category: 'Retail' },
  { src: BASE + '63188e822089c1285704048f_62d7ec7e7938cd28883af42e_px-Retail%2520Logo%2520Bondicell.avif', alt: 'Bondicell', category: 'Retail' },
  { src: BASE + '63188e8405cd512513f49a4a_62ebc5a991d6ba4d49399d7d_Sleepmasters.avif', alt: 'Sleepmasters', category: 'Retail' },
  { src: BASE + '68d27edd49506efc59569637_Logo%20Cell%20Air.avif', alt: 'Cell Air', category: 'Retail' },
  { src: BASE + '68d2874da83bd95d5cc80b67_Logo%20%40home.avif', alt: '@home', category: 'Retail' },
  { src: BASE + '68d28ac2a83bd95d5cca039e_Logo%20Jet%20Home.avif', alt: 'Jet Home', category: 'Retail' },
  { src: BASE + '68d295306cbf815e55fbfc43_Logo%20Jet.avif', alt: 'Jet', category: 'Retail' },
  { src: BASE + '68d29573e5e52f4703b8b9d8_Logo%20JD.avif', alt: 'JD', category: 'Retail' },
  { src: BASE + '68d296086e02edd81184074b_Logo%20Sportscene.avif', alt: 'Sportscene', category: 'Retail' },
  { src: BASE + '68d2964bc154143be5c347aa_Logo%20Exact.avif', alt: 'Exact', category: 'Retail' },
  { src: BASE + '68d29681a83bd95d5cd2cc91_Logo%20Sneaker%20Factory.avif', alt: 'Sneaker Factory', category: 'Retail' },
]

const CATEGORIES = ['All', 'Retail', 'Apps & Websites']

export default function WhereToBuy() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? RETAIL_LOGOS
    : RETAIL_LOGOS.filter(l => l.category === activeCategory)

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
          Where to buy 1Voucher
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: '#ccc',
            maxWidth: 640,
            margin: '0 auto',
          }}
        >
          You can find 1Voucher everywhere across South Africa. It is available at spaza shops, in the 1Voucher app, at major retailers, through banking apps and via selected mobile wallets.
        </p>
      </section>

      <section style={{ padding: '60px 40px 100px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: '2px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeCategory === cat ? 'var(--1v-black)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--1v-black)',
                  borderColor: activeCategory === cat ? 'var(--1v-black)' : '#ddd',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 16,
            }}
          >
            {filtered.map((logo, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #eee',
                  borderRadius: 8,
                  padding: '20px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 100,
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
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ maxWidth: '80%', maxHeight: 60, objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--1v-black)',
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
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
            1Voucher for Business
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            Stop losing sales
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#ccc', marginBottom: 36 }}>
            Give cash customers a way to pay. Integrate 1Voucher acceptance into your business and open your doors to millions more customers.
          </p>
          <a
            href="mailto:hello@1voucher.co.za"
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
          </a>
        </div>
      </section>
    </div>
  )
}
