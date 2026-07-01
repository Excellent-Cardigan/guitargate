import { TopNav } from '../../components/TopNav';
import { Placeholder } from '../../components/Placeholder';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const INCLUDED = [
  { label: 'Teleport pedal',         desc: 'Ships with your order. MSRP $599 — yours to keep forever.' },
  { label: 'Guitargate app',          desc: 'iOS, Android, and web. Phone-first design.' },
  { label: '6,500+ lessons',          desc: 'Songs, techniques, and guided paths — the full library.' },
  { label: '15+ structured courses',  desc: 'Beginner to advanced. Self-paced with a clear path.' },
  { label: 'Weekly song downloads',   desc: 'New song loaded to your pedal every week.' },
  { label: 'Live masterclasses',      desc: 'Monthly sessions with Michael Palmisano + guests.' },
  { label: 'Community — Play feed',   desc: 'Share loops, hear what members are playing, build together.' },
  { label: 'Cloud sync',              desc: 'Loops, progress, and settings everywhere.' },
];

const FAQ = [
  {
    q: 'Is the Teleport pedal really included?',
    a: 'Yes — every new membership ships a Teleport pedal. It\'s not an add-on; it\'s how the product works. The pedal is the hardware layer of the membership.',
  },
  {
    q: 'What happens to my pedal if I cancel?',
    a: 'The pedal is yours to keep. Core playback functions still work offline. Cloud and community features require an active membership.',
  },
  {
    q: 'Is there a free trial?',
    a: 'No free trial, but every membership comes with a 30-day money-back guarantee. If it\'s not for you, get a full refund — no questions asked.',
  },
  {
    q: 'Can I use Guitargate without a pedal?',
    a: 'Yes — the app works without hardware for lessons and community. The Teleport pedal unlocks the full loop: load songs, play along, share.',
  },
];

export function MembershipPage({ nav }: Props) {
  return (
    <div>
      <TopNav nav={nav} />

      {/* Hero — full-bleed split with price */}
      <section className="hero-bleed-section">
        <div className="hero-bleed-grid">
          <div className="hero-bleed-text">
            <div className="hero-eyebrow">Guitargate 3.0 Membership</div>
            <h1 className="hero-headline">Everything in.</h1>

            {/* Price block */}
            <div style={{ margin: '32px 0 36px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: 96, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--ink)',
                }}>
                  $359
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 18, color: 'var(--muted)' }}>/year</span>
                  <span style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'line-through' }}>$399</span>
                </div>
              </div>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.5 }}>
                Includes Teleport pedal (MSRP $599) — yours to keep.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => nav.navigate('checkout')}>
                Join — includes Teleport →
              </button>
              <span className="t-caption t-muted">30-day money-back guarantee</span>
            </div>
          </div>
          <div className="hero-bleed-visual">
            <span style={{ fontSize: 11 }}>Teleport pedal — unboxing / hero shot</span>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <div style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, padding: '18px 0', flexWrap: 'wrap' }}>
            {[
              '12,000+ active members',
              '1.2M sessions played',
              '140+ countries',
              '30-day guarantee',
            ].map((item, i) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                {i > 0 && <span style={{ color: 'var(--line)', marginRight: 24, userSelect: 'none' }}>·</span>}
                <span className="t-caption t-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <div className="t-label" style={{ marginBottom: 32 }}>What's included</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid var(--line)',
            borderLeft: '1px solid var(--line)',
          }}>
            {INCLUDED.map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                gap: 20,
                padding: '28px 40px 28px 32px',
                borderBottom: '1px solid var(--line)',
                borderRight: '1px solid var(--line)',
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: 'var(--ink)', flexShrink: 0, marginTop: 3,
                }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4, color: 'var(--ink)' }}>
                    {item.label}
                  </div>
                  <div className="t-caption t-muted">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Visual proof */}
      <section className="section-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <Placeholder label="Membership overview — unboxing or in-use shot" height={280} />
            <Placeholder label="Member testimonials — 3 pull quotes" height={280} />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="t-label" style={{ marginBottom: 24 }}>Common questions</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 10, color: 'var(--ink)' }}>
                  {item.q}
                </div>
                <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="cta-band">
        <div className="container">
          <div style={{ marginBottom: 8 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 80, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--surface)',
            }}>
              $359
            </span>
            <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)', marginLeft: 12 }}>/year</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, marginBottom: 36 }}>
            Includes Teleport pedal. Everything in. One charge.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-lg"
              style={{ background: 'var(--surface)', color: 'var(--ink)' }}
              onClick={() => nav.navigate('checkout')}
            >
              Join — includes Teleport →
            </button>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>30-day money-back guarantee</span>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>
            GUITARGATE
          </span>
          <span>© 2025 Guitargate — Wireframe prototype</span>
        </div>
      </footer>
    </div>
  );
}
