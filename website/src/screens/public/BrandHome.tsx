import { TopNav } from '../../components/TopNav';
import { Placeholder } from '../../components/Placeholder';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function BrandHome({ nav }: Props) {
  return (
    <div>
      <TopNav nav={nav} />

      {/* Hero — full-bleed split */}
      <section className="hero-bleed-section">
        <div className="hero-bleed-grid">
          <div className="hero-bleed-text">
            <div className="hero-eyebrow">Guitargate · Est. 2016</div>
            <h1 className="hero-headline">Play more guitar,<br />with people.</h1>
            <p className="hero-sub">
              One membership. One pedal. A community of guitarists to learn from,
              jam with, and be inspired by — every single day.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => nav.navigate('membership')}>
                Join Guitargate →
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => nav.navigate('teleport')}>
                See Teleport
              </button>
            </div>
          </div>
          <div className="hero-bleed-visual">
            <span style={{ fontSize: 11 }}>Hero visual — Teleport pedal in hands</span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Three pillars */}
      <section className="section-sm">
        <div className="container">
          <div className="t-label" style={{ marginBottom: 28 }}>What Guitargate is</div>
          <div className="feature-grid-3">
            <div className="feature-card">
              <div className="feature-card__num">01</div>
              <div className="feature-card__title">Learn</div>
              <p className="feature-card__body">
                15+ structured courses. 6,500+ lessons. Weekly song downloads
                to your pedal. Guided paths from beginner to advanced.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__num">02</div>
              <div className="feature-card__title">Play</div>
              <p className="feature-card__body">
                Make songs on your Teleport pedal. Share into the community.
                Download others' loops. The social layer is the medium — not a
                place you visit after the fact.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__num">03</div>
              <div className="feature-card__title">Community</div>
              <p className="feature-card__body">
                Who's playing right now. Live masterclasses with Michael.
                A Home feed that puts people at the center — not content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Social proof — stats */}
      <section className="section-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="stats-row">
            <div className="stat-cell">
              <div className="stat-cell__num">12k+</div>
              <div className="stat-cell__label">Active members</div>
            </div>
            <div className="stat-cell">
              <div className="stat-cell__num">1.2M</div>
              <div className="stat-cell__label">Sessions played</div>
            </div>
            <div className="stat-cell">
              <div className="stat-cell__num">140+</div>
              <div className="stat-cell__label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Teleport showcase — full-bleed reversed split */}
      <section className="hero-bleed-section">
        <div className="hero-bleed-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="hero-bleed-visual" style={{ borderLeft: 'none', borderRight: '1px solid var(--line)' }}>
            <span style={{ fontSize: 11 }}>Teleport pedal product shot</span>
          </div>
          <div className="hero-bleed-text" style={{ paddingLeft: 80, paddingRight: 'max(80px, calc((100vw - 1360px) / 2 + 80px))' }}>
            <div className="t-label" style={{ marginBottom: 16 }}>The hardware</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 20 }}>
              <span className="t-subbrand">TELEPORT</span>
            </h2>
            <p style={{ fontSize: 20, color: 'var(--muted)', marginBottom: 32, lineHeight: 1.5, maxWidth: 480 }}>
              The only pedal that comes with people to jam with.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {[
                'Wireless — no laptop, no cables, just play',
                'Songs loaded direct to the pedal from the app',
                'Live sessions with the community in real time',
                'Included in every Guitargate membership',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)', marginTop: 4, flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: 16, lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-primary" onClick={() => nav.navigate('membership')}>
                Join — includes Teleport
              </button>
              <button className="btn btn-secondary" onClick={() => nav.navigate('teleport')}>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Why Guitargate */}
      <section className="section">
        <div className="container-narrow">
          <div className="t-label" style={{ marginBottom: 20 }}>Why Guitargate</div>
          <h2 className="t-h2" style={{ marginBottom: 24 }}>
            Structure has to earn its keep before color is allowed to do any lifting.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Placeholder label="Michael Palmisano — photo / video" height={320} />
            <p className="t-body" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
              Michael's voice / manifesto — what Guitargate is for, why community is
              the center of gravity, why the pedal matters. Testimonials from members.
            </p>
            <Placeholder label="Member testimonials — 3 pull quotes" height={140} />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Voxbox teaser */}
      <section className="section-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
            <div>
              <span className="badge badge-outline" style={{ marginBottom: 12 }}>Coming soon</span>
              <h3 className="t-h3">
                <span className="t-subbrand">VOXBOX</span>
                {' '}— a second pedal under one roof
              </h3>
              <p className="t-caption t-muted" style={{ marginTop: 8, maxWidth: 520 }}>
                Pedal design in progress. When Voxbox ships, it's a second device
                under the same membership — not a second app to download.
              </p>
            </div>
            <button className="btn btn-secondary" style={{ flexShrink: 0 }} onClick={() => nav.navigate('voxbox')}>
              Join waitlist →
            </button>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="cta-band">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 52, marginBottom: 16, letterSpacing: '-0.025em', lineHeight: 0.95 }}>
            Ready to play more?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 20, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Membership includes the Teleport pedal, the app, and a community of
            guitarists. One price, everything in.
          </p>
          <button
            className="btn btn-lg"
            style={{ background: 'var(--surface)', color: 'var(--ink)' }}
            onClick={() => nav.navigate('membership')}
          >
            Join Guitargate →
          </button>
        </div>
      </div>

      {/* Footer */}
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
