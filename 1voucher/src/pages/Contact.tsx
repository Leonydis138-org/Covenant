import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <section
        style={{
          background: 'var(--1v-black)',
          padding: '80px 40px 60px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          Get in touch
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#ccc', maxWidth: 480, margin: '0 auto' }}>
          We're here for you, no matter what.
        </p>
      </section>

      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
          }}
          className="contact-grid"
        >
          <div>
            <ContactCard
              icon="✉"
              label="Email"
              value="hello@1voucher.co.za"
              href="mailto:hello@1voucher.co.za?subject=Website%20Lead"
            />
            <ContactCard
              icon="☎"
              label="Call Centre"
              value="086 169 3333"
              href="tel:0861693333"
            />
            <ContactCard
              icon="❓"
              label="Support"
              value="View 1Voucher FAQs"
              href="#faqs"
            />

            <div style={{ marginTop: 48 }}>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--1v-black)',
                  marginBottom: 16,
                  letterSpacing: '-0.01em',
                }}
              >
                Also on social
              </h3>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {SOCIALS.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 18px',
                      border: '2px solid #eee',
                      borderRadius: 4,
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--1v-black)',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--1voucher-orange)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  background: '#f5f5f5',
                  borderRadius: 12,
                  padding: '60px 40px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'var(--1voucher-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: 28,
                    color: '#fff',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--1v-black)', marginBottom: 12 }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: 16, color: 'var(--body-grey)' }}>
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: 'var(--1v-black)',
                    marginBottom: 32,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Send us a message
                </h2>
                <FormField label="Name" required>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    style={inputStyle}
                  />
                </FormField>
                <FormField label="Email" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="Your email address"
                    required
                    style={inputStyle}
                  />
                </FormField>
                <FormField label="Message" required>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
                  />
                </FormField>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--1voucher-orange)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    padding: '15px 32px',
                    borderRadius: 4,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="faqs" style={{ background: '#f5f5f5', padding: '80px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: 'var(--1v-black)',
              marginBottom: 40,
              letterSpacing: '-0.02em',
            }}
          >
            Frequently Asked Questions
          </h2>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  )
}

function ContactCard({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 20,
        padding: '24px 0',
        borderBottom: '1px solid #eee',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--1v-black)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div>
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--body-grey)',
            marginBottom: 4,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--1v-black)',
          }}
        >
          {value}
        </p>
      </div>
    </a>
  )
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          display: 'block',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--1v-black)',
          marginBottom: 8,
          letterSpacing: '0.02em',
        }}
      >
        {label} {required && <span style={{ color: 'var(--1voucher-orange)' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: '1px solid #ddd',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--1v-black)', flex: 1 }}>{q}</span>
        <span
          style={{
            fontSize: 20,
            color: 'var(--1voucher-orange)',
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--body-grey)', paddingBottom: 20 }}>
          {a}
        </p>
      )}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  border: '2px solid #eee',
  borderRadius: 4,
  fontSize: 15,
  fontFamily: 'Inter, sans-serif',
  color: 'var(--text-color-dark)',
  outline: 'none',
  transition: 'border-color 0.2s',
  background: '#fafafa',
}

const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/1Voucher.SA/' },
  { name: 'Instagram', href: 'https://www.instagram.com/1voucher_sa/' },
  { name: 'Twitter/X', href: 'https://x.com/1voucher_SA' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/1voucher/' },
]

const FAQS = [
  {
    q: 'What is 1Voucher?',
    a: '1Voucher is a cash voucher that lets you pay online, in-store, or via the 1Voucher app. You buy it with cash or a bank card, receive a PIN, and use that PIN wherever 1Voucher is accepted.',
  },
  {
    q: 'Where can I buy a 1Voucher?',
    a: 'You can buy 1Voucher at major retailers across South Africa including Shoprite, Checkers, PEP, Boxer, and many more. You can also purchase it through the 1Voucher app.',
  },
  {
    q: 'How do I use my 1Voucher?',
    a: 'Enter your 1Voucher PIN at any participating online or in-store merchant. The amount is deducted from your voucher value. Unused balances can be stored and used later.',
  },
  {
    q: 'Does 1Voucher expire?',
    a: '1Voucher PINs have an expiry date printed on the slip or displayed in the app. Make sure to use your voucher before the expiry date.',
  },
  {
    q: 'What is the 1Voucher app?',
    a: 'The 1Voucher app lets you manage and use your money in one place. You can spend, send, and store your balance with no fees. Download it from the Google Play Store or Apple App Store.',
  },
  {
    q: 'Is 1Voucher safe to use?',
    a: '1Voucher is a secure, cashless payment method. Your PIN is unique and should be kept private. Only use your 1Voucher on legitimate websites and stores.',
  },
]
