import { Placeholder } from '../../components/Placeholder';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const STEPS = [
  {
    num: 1,
    title: 'Download the Guitargate app',
    desc: 'Available on iOS and Android. Web client works too — phone is the hero.',
    content: (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
        <Placeholder label="App Store badge" height={44} width={140} />
        <Placeholder label="Google Play badge" height={44} width={140} />
      </div>
    ),
  },
  {
    num: 2,
    title: 'Create your account (or sign in)',
    desc: 'Your membership is already active. Sign up to tie the app to your order.',
    content: (
      <div style={{ marginTop: 16, maxWidth: 360 }}>
        <Placeholder label="Account creation / SSO form" height={100} />
      </div>
    ),
  },
  {
    num: 3,
    title: 'Register your Teleport pedal',
    desc: 'Power on the pedal, open the app, tap "Register new pedal." The app scans via Bluetooth, then connects over your home WiFi.',
    content: (
      <div style={{ marginTop: 16, display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <Placeholder label="Bluetooth scan illustration" height={100} />
          <p className="t-caption t-muted" style={{ marginTop: 8, textAlign: 'center' }}>
            Step 1 — Bluetooth discovery
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <Placeholder label="WiFi setup screen" height={100} />
          <p className="t-caption t-muted" style={{ marginTop: 8, textAlign: 'center' }}>
            Step 2 — Connect to WiFi
          </p>
        </div>
      </div>
    ),
  },
  {
    num: 4,
    title: 'Load your first song to the pedal',
    desc: 'Go to Learn → Song Lessons. Tap any lesson, hit "Load to pedal." The song transfers wirelessly. Your pedal is ready.',
    content: (
      <div style={{ marginTop: 16 }}>
        <Placeholder label="App screen — song loading to pedal" height={120} />
      </div>
    ),
  },
];

export function OnboardingPage({ nav }: Props) {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Minimal header */}
      <div style={{
        height: 56, background: 'var(--surface)', borderBottom: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', padding: '0 48px',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          GUITARGATE
        </span>
      </div>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '56px 48px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="t-label" style={{ marginBottom: 12 }}>Step 4 of 6: Onboard</div>
          <h1 className="t-h1" style={{ marginBottom: 12 }}>
            Welcome to Guitargate.<br />Let's get you set up.
          </h1>
          <p className="t-body t-muted">
            Four steps. Takes about five minutes. At the end, your guitar is plugged into
            a pedal that's connected to 12,000 people.
          </p>
        </div>

        {/* Step progress pills */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40, gap: 0, overflowX: 'auto' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 13, fontWeight: 700,
                  background: 'var(--ink)', color: 'var(--surface)',
                }}>
                  {step.num}
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                  {step.title.split(' ').slice(0, 3).join(' ')}…
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ width: 32, height: 1, background: 'var(--line)', margin: '0 12px', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {STEPS.map(step => (
            <div key={step.num} style={{
              background: 'var(--surface)', border: '1px solid var(--line)',
              borderRadius: 'var(--radius-lg)', padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', background: 'var(--ink)', color: 'var(--surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 'var(--text-h3)', marginBottom: 6 }}>{step.title}</div>
                  <p className="t-body t-muted">{step.desc}</p>
                  {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 40, padding: '32px', background: 'var(--ink)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <div style={{ color: 'var(--surface)', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
            Pedal registered. App ready. Let's play.
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24 }}>
            Your Home feed is live. A community of 12,000 guitarists is already playing.
          </p>
          <button
            className="btn btn-lg"
            style={{ background: 'var(--surface)', color: 'var(--ink)' }}
            onClick={() => nav.navigate('app-home')}
          >
            I'm ready — let's jam →
          </button>
        </div>

      </div>
    </div>
  );
}
