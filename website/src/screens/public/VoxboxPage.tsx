import { TopNav } from '../../components/TopNav';
import { Placeholder } from '../../components/Placeholder';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function VoxboxPage({ nav }: Props) {
  return (
    <div>
      <TopNav nav={nav} />

      <section style={{ padding: '64px 0 80px', background: 'var(--surface)' }}>
        <div className="container-narrow">

          {/* Placeholder notice — very prominent */}
          <div className="voxbox-placeholder-banner">
            ⚠ PLACEHOLDER PAGE — Voxbox pedal design not yet confirmed.
            <br />
            This page will be built once the pedal spec is signed off.
            <br />
            Structure is held deliberately spare so nothing pre-empts the design decision.
          </div>

          {/* Wordmark */}
          <div style={{ marginBottom: 32 }}>
            <div className="t-label" style={{ marginBottom: 12 }}>Coming soon — Sub-brand 02</div>
            <h1 style={{
              fontFamily: 'var(--font-subbrand)',
              fontWeight: 700,
              fontSize: 72,
              letterSpacing: '0.02em',
              color: 'var(--ink)',
              lineHeight: 1,
              marginBottom: 16,
            }}>
              VOXBOX
            </h1>
            <p style={{ fontSize: 20, color: 'var(--muted)', lineHeight: 1.5, maxWidth: 480 }}>
              Same shape as Teleport. A different voice.
              The second pedal lives under the same roof — same app, same membership,
              no second download.
            </p>
          </div>

          {/* Product placeholder */}
          <Placeholder label="Voxbox pedal — product design TBD" height={320} style={{ marginBottom: 48 }} />

          {/* What's settled */}
          <div style={{ marginBottom: 40 }}>
            <div className="t-label" style={{ marginBottom: 16 }}>What's settled</div>
            <div className="card-flat stack">
              {[
                'Voxbox will live under "My Pedals" in the member app — not a separate app',
                'Same IA shape as Teleport: register, songs on device, settings',
                'Accent colour deferred until after flow sign-off',
                'Launch comms will mirror the Teleport page structure',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: 10, fontSize: 15, paddingBottom: 10, borderBottom: '1px solid var(--line)' }}>
                  <span style={{ color: 'var(--muted)', flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Email capture placeholder */}
          <div style={{ padding: '28px 32px', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', marginBottom: 40 }}>
            <h3 className="t-h3" style={{ marginBottom: 8 }}>Get notified at launch</h3>
            <p className="t-caption t-muted" style={{ marginBottom: 16 }}>
              Drop your email and we'll reach out when Voxbox is ready.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{
                flex: 1, padding: '10px 14px', border: '1px solid var(--line)',
                borderRadius: 'var(--radius)', color: 'var(--muted)', fontSize: 'var(--text-body)',
                background: 'var(--surface)',
              }}>
                email@example.com
              </div>
              <button className="btn btn-primary">Notify me</button>
            </div>
            <p className="t-caption t-muted" style={{ marginTop: 8 }}>
              [Placeholder — form not wired]
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-secondary" onClick={() => nav.navigate('brand-home')}>
              ← Back to home
            </button>
            <button className="btn btn-primary" onClick={() => nav.navigate('teleport')}>
              Explore Teleport →
            </button>
          </div>

        </div>
      </section>

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
