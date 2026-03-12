import { Link } from 'react-router-dom'

const NEWS_ARTICLES = [
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/69aa9f197494d65eac68e0d8_Cash%20Cartel%20Web%20banners3.jpg',
    category: 'NEWS',
    date: 'October 2025',
    title: 'The voucher for cash kings and queens who do life and money their way',
    excerpt: 'Discover how 1Voucher is empowering South Africans to take control of their cash and spend it the way they want.',
    slug: 'cash-kings-queens',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/693bb676248f15dcfa637354_FLA6172%20PIN%20-%20AO%20-%20Jan%20-%20March%20BLOG%20BANNERS%20THUMBNAIL.webp',
    category: 'NEWS',
    date: 'September 2025',
    title: 'Give Your Cash More Power with 1Voucher - This Cash CAN',
    excerpt: 'Your cash has never been more powerful. Find out how 1Voucher is transforming how South Africans pay online and in-store.',
    slug: 'this-cash-can',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/693938a70814e9c73938071a_stokvela-savings3.jpg',
    category: 'NEWS',
    date: 'September 2025',
    title: 'Save with GroupSave on the 1Voucher app',
    excerpt: 'The new GroupSave feature in the 1Voucher app makes it easier than ever to save together with friends, family, and stokvels.',
    slug: 'groupsave',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/675804ce32d32a8396808409_1Voucher%20Partners%20with%20Takealot.avif',
    category: 'NEWS',
    date: 'August 2025',
    title: '1Voucher Partners with Takealot – Your Cash, Your Rules',
    excerpt: 'Shop on Takealot — South Africa\'s biggest online marketplace — with 1Voucher. No card needed, just your PIN.',
    slug: 'takealot-partnership',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/69aa9f12883e8cea242f2915_Cash%20Cartel%20Web%20banners2.avif',
    category: 'NEWS',
    date: 'July 2025',
    title: 'The 1Voucher Cash Cartel — Own Your Money',
    excerpt: 'Join the Cash Cartel and discover a community of South Africans taking back control of their money, their way.',
    slug: 'cash-cartel',
  },
  {
    img: 'https://cdn.prod.website-files.com/62cd8cfbfedd6a614f4f6d1f/693bc0fdd0b1661381868be5_1towin-Visual-colour.avif',
    category: 'NEWS',
    date: 'June 2025',
    title: '1-to-Win: New Competitions on the 1Voucher App',
    excerpt: 'Exciting competitions are now live on the 1Voucher app. Use your voucher to enter and win big prizes.',
    slug: '1-to-win',
  },
]

export default function News() {
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
          1Voucher Blog
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
          Latest News
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#ccc', maxWidth: 500, margin: '0 auto' }}>
          Stay up to date with everything happening at 1Voucher.
        </p>
      </section>

      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Featured article */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              marginBottom: 60,
              alignItems: 'center',
            }}
            className="featured-article"
          >
            <div style={{ overflow: 'hidden', borderRadius: 12, height: 360 }}>
              <img
                src={NEWS_ARTICLES[0].img}
                alt={NEWS_ARTICLES[0].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--1voucher-orange)',
                  marginBottom: 8,
                }}
              >
                {NEWS_ARTICLES[0].category} · {NEWS_ARTICLES[0].date}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 800,
                  color: 'var(--1v-black)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                {NEWS_ARTICLES[0].title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body-grey)', marginBottom: 28 }}>
                {NEWS_ARTICLES[0].excerpt}
              </p>
              <button
                style={{
                  background: 'var(--1voucher-orange)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Read More →
              </button>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 60 }} />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 32,
            }}
          >
            {NEWS_ARTICLES.slice(1).map((article, i) => (
              <article
                key={i}
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #eee',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  background: '#fff',
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
                    src={article.img}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '20px 24px 28px' }}>
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
                    {article.category} · {article.date}
                  </span>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: 'var(--1v-black)',
                      lineHeight: 1.4,
                      marginBottom: 10,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--body-grey)', lineHeight: 1.6, marginBottom: 16 }}>
                    {article.excerpt}
                  </p>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--1voucher-orange)',
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      padding: 0,
                    }}
                  >
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .featured-article { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
