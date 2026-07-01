import { TopNav } from '../../components/TopNav';
import { Placeholder } from '../../components/Placeholder';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function TeleportPage({ nav }: Props) {
  return (
    <div>
      <TopNav nav={nav} />

      {/* Hero — full-bleed split */}
      <section className="hero-bleed-section">
        <div className="hero-bleed-grid">
          <div className="hero-bleed-text">
            <div className="t-label" style={{ marginBottom: 20 }}>
              <span className="t-subbrand" style={{ fontSize: 11 }}>TELEPORT</span>
              {' '}— Included in every Guitargate membership
            </div>
            <h1 className="hero-headline">
              <span className="t-subbrand">TELEPORT</span>
            </h1>
            <p className="hero-sub">
              The only pedal that comes with people to jam with.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => nav.navigate('membership')}>
                Join — includes Teleport →
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => nav.navigate('store')}>
                Buy standalone
              </button>
            </div>
          </div>
          <div className="hero-bleed-visual">
            <span style={{ fontSize: 11 }}>Teleport pedal — hero product photography</span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Included-in callout */}
      <section className="section-xs" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '12px 0' }}>
            <span className="badge badge-dark" style={{ fontSize: 11, letterSpacing: '0.08em' }}>
              Included in membership
            </span>
            <span className="t-caption t-muted">
              Every Guitargate membership ships with a Teleport pedal. No hardware add-on required.
            </span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="t-label" style={{ marginBottom: 24 }}>What it does</div>
          <div className="feature-grid-3" style={{ gap: 24 }}>
            {[
              {
                num: '01',
                title: 'Wireless — keep it in your hands',
                body: 'No laptop, no USB, no cables to the pedal. Connects to the Guitargate app over Bluetooth + 2.4GHz WiFi. Plug in your guitar and play.',
              },
              {
                num: '02',
                title: 'Songs loaded from the app',
                body: 'Weekly song lessons land in Learn. Tap to load any song directly to the pedal. Backing track, stems, and timing cues all in the box.',
              },
              {
                num: '03',
                title: 'Live sessions with the community',
                body: 'Join live masterclasses and community jams. The pedal is your instrument; the app is the stage.',
              },
            ].map(f => (
              <div key={f.num} className="feature-card">
                <div className="feature-card__num">{f.num}</div>
                <div className="feature-card__title">{f.title}</div>
                <p className="feature-card__body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Social layer */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="pedal-split">
            <Placeholder label="App screenshot — Play feed with Teleport loops" height={340} />
            <div>
              <div className="t-label" style={{ marginBottom: 12 }}>The social layer</div>
              <h2 className="t-h2" style={{ marginBottom: 16 }}>
                The community is not a place you visit.<br />
                It's the medium the making happens in.
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
                Make a loop on the pedal. It lives in Play. Friends hear it.
                They react, download, build on it. The Teleport is how you reach in.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Mine / Friends / Everyone — one feed, three scopes',
                  'Download others\' loops to your pedal',
                  'React, comment, build on what you hear',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 15 }}>
                    <span style={{ color: 'var(--muted)' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Specs */}
      <section className="section">
        <div className="container-narrow">
          <div className="t-label" style={{ marginBottom: 20 }}>Technical specs</div>
          <Placeholder label="Spec table — dimensions, connectivity, power, compatibility" height={180} />
          <div style={{ marginTop: 24 }}>
            <Placeholder label="Box contents — pedal, PSU, quick-start card" height={100} />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="cta-band">
        <div className="container">
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 52,
            marginBottom: 16, letterSpacing: '-0.025em', lineHeight: 0.95,
          }}>
            Teleport is included in every membership.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 20, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Join Guitargate and the pedal ships with your first month.
          </p>
          <button
            className="btn btn-lg"
            style={{ background: 'var(--surface)', color: 'var(--ink)' }}
            onClick={() => nav.navigate('membership')}
          >
            Join — includes Teleport →
          </button>
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
