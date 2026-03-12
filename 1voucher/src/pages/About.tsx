const ABOUT_HERO = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/63d0f8c2b378db12e60ff357_FLASH_1V7326%20-%20Banner%20-%20Apr%20-%20Jun%20-%20blog%20desktop.avif'
const IMG_26 = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/63d118242bb75d203ee79c94_image%2026.avif'
const IMG_24 = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/63d11824f294b92551dd02e0_image%2024.avif'
const WORK_IMG = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/63d77c83d50a07514c62602c_Work_for_the_ones_who_work.avif'
const HAND_SLIP = 'https://cdn.prod.website-files.com/62cd8cfafedd6a80254f6d18/63d75904cdfd661ad32728dd_FLASH_Hand_Slip.avif'

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section
        style={{
          background: 'var(--1v-black)',
          padding: '100px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(255,95,0,0.08) 0%, transparent 60%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 12 }}>
            <span style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, color: 'var(--1voucher-orange)', lineHeight: 1 }}>ONE</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <span
              style={{
                fontSize: 'clamp(28px, 5vw, 52px)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                borderTop: '3px solid var(--1voucher-orange)',
                paddingTop: 12,
              }}
            >
              VOUCHER FOR ALL
            </span>
          </div>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: 'var(--1v-yellow)',
              marginBottom: 24,
              fontStyle: 'italic',
            }}
          >
            Your cash. Your way.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#ccc' }}>
            Everyone deserves payment options and we're on a mission to provide them. No card? No problem.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#ccc', marginTop: 16 }}>
            Use 1Voucher to pay, play, shop, and top up online. Good bye limits. Hello choice. For one and all.
          </p>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          <img
            src={ABOUT_HERO}
            alt="About 1Voucher"
            style={{ width: '100%', borderRadius: 12, marginBottom: 80, maxHeight: 500, objectFit: 'cover' }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
              alignItems: 'center',
              marginBottom: 80,
            }}
            className="about-grid"
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--1voucher-orange)',
                  marginBottom: 16,
                }}
              >
                For You
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800,
                  color: 'var(--1v-black)',
                  marginBottom: 20,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                1Voucher for you
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--body-grey)', marginBottom: 16 }}>
                1Voucher is the safe and easy way to get your cash online. It's bankless, cardless, and effortless. Book tickets, shop, play games, trade crypto, and so much more.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--body-grey)' }}>
                It's 1Voucher, with endless options.
              </p>
            </div>
            <img
              src={IMG_26}
              alt="1Voucher for you"
              style={{ width: '100%', borderRadius: 12, maxHeight: 360, objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
              alignItems: 'center',
              marginBottom: 80,
            }}
            className="about-grid about-grid-reverse"
          >
            <img
              src={IMG_24}
              alt="1Voucher for business"
              style={{ width: '100%', borderRadius: 12, maxHeight: 360, objectFit: 'cover' }}
              className="about-img-second"
            />
            <div className="about-text-second">
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--1voucher-orange)',
                  marginBottom: 16,
                }}
              >
                For Business
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800,
                  color: 'var(--1v-black)',
                  marginBottom: 20,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                1Voucher for Business
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--body-grey)', marginBottom: 16 }}>
                Integrate with the safest, most widely adopted digital voucher in South Africa. Accept 1Voucher to open your business to millions of cash customers.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--body-grey)' }}>
                Whether you're a retailer, an online platform, or a service provider — 1Voucher makes it simple to reach more customers with zero risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--1v-black)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={WORK_IMG}
          alt="Work for the ones who work"
          style={{ width: '100%', height: '500px', objectFit: 'cover', opacity: 0.6 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 40px',
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Work for the ones who work.
            </h2>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                color: 'var(--1v-black)',
                marginBottom: 20,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Part of the Flash Group
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--body-grey)', marginBottom: 16 }}>
              1Voucher is part of the Flash Group, South Africa's leading fintech company with a network of over 150,000 retail points across the country.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--body-grey)' }}>
              Our mission is to provide financial inclusion for all South Africans, bridging the gap between cash and digital payments.
            </p>
          </div>
          <img
            src={HAND_SLIP}
            alt="Flash Group"
            style={{ width: '100%', borderRadius: 12, maxHeight: 360, objectFit: 'cover' }}
          />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-img-second { order: -1; }
        }
      `}</style>
    </div>
  )
}
