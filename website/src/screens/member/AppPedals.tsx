import { useState } from 'react';
import { RiUser3Line, RiPlayFill, RiPauseFill, RiAddLine, RiCheckLine, RiSparkling2Line } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const SONGS_ON_DEVICE = [
  { title: 'Cliffs of Dover', artist: 'Eric Johnson' },
  { title: 'Little Wing', artist: 'Hendrix' },
  { title: 'Europa', artist: 'Santana' },
];

export function AppPedals({ nav }: Props) {
  const [playing, setPlaying] = useState<string | null>(null);
  const [waitlisted, setWaitlisted] = useState(false);

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <span className="app-header__title">My Pedals</span>
        <button className="app-header__avatar" onClick={() => nav.navigate('app-account')}>
          <RiUser3Line size={16} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Teleport card */}
      <StaggerItem style={{ margin: '16px 20px 0', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', background: 'var(--surface)', overflow: 'hidden' }}>
        <div className="teleport-card-header">
          <div className="teleport-card-img">img</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--font-conthrax)', fontWeight: 700, fontSize: 16, letterSpacing: '0.04em' }}>
                TELEPORT
              </span>
            </div>
            <div className="t-caption t-muted">
              <span className="connected-dot" />
              Connected · SN: TLP-00284
            </div>
          </div>
          <span className="t-caption t-muted" style={{ cursor: 'pointer' }}>Settings ›</span>
        </div>

        {/* Songs on device */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
          <div className="app-section__label" style={{ marginBottom: 10 }}>Songs on device</div>
          <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SONGS_ON_DEVICE.map(s => (
              <StaggerItem key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ width: 32, height: 32, background: 'var(--line)', borderRadius: 4, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{s.title}</div>
                  <div className="t-caption t-muted">{playing === s.title ? 'Playing on device…' : s.artist}</div>
                </div>
                <button
                  style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ink)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  onClick={() => setPlaying(prev => prev === s.title ? null : s.title)}
                >
                  {playing === s.title
                    ? <RiPauseFill size={10} color="#fff" />
                    : <RiPlayFill size={10} color="#fff" />}
                </button>
              </StaggerItem>
            ))}
            <StaggerItem
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                border: '1px dashed var(--line)', borderRadius: 6, paddingLeft: 10, marginTop: 6, cursor: 'pointer',
              }}
              onClick={() => nav.navigate('app-learn')}
            >
              <div style={{ width: 32, height: 32, background: 'var(--line)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <RiAddLine size={18} color="var(--muted)" />
              </div>
              <span className="t-caption t-muted">Add from Learn library →</span>
            </StaggerItem>
          </StaggerItem>
        </div>

        {/* Footer row */}
        <div className="pedals-footer-row">
          <div style={{ flex: 1, padding: '9px 12px', border: '1px solid var(--line)', borderRadius: 6, textAlign: 'center', fontSize: 12, color: 'var(--muted)' }}>
            Firmware: up to date
          </div>
          <button
            className="btn btn-primary btn-sm"
            style={{ flex: 1, justifyContent: 'center', fontSize: 12 }}
          >
            Pedal Settings
          </button>
        </div>
      </StaggerItem>

      {/* Voxbox slot */}
      <StaggerItem className="voxbox-slot">
        <div style={{ width: 48, height: 48, background: 'var(--line)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <RiSparkling2Line size={20} color="var(--muted)" />
        </div>
        <div style={{ fontFamily: 'var(--font-conthrax)', fontWeight: 700, fontSize: 15, letterSpacing: '0.04em', color: 'var(--ink)' }}>
          VOXBOX
        </div>
        <div className="t-caption t-muted">
          {waitlisted ? 'You’re on the waitlist — we’ll notify you' : 'Coming soon — add to waitlist'}
        </div>
        <button
          className={`btn btn-sm ${waitlisted ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setWaitlisted(w => !w)}
        >
          {waitlisted ? <><RiCheckLine size={14} /> On the waitlist</> : 'Notify me'}
        </button>
        <p style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--font-mono)', lineHeight: 1.6 }}>
          When Voxbox ships, it registers here — same IA as Teleport,<br />
          no second app to download.
        </p>
      </StaggerItem>

      {/* Help / docs */}
      <StaggerItem className="row-link" onClick={() => {/* placeholder */}}>
        <span style={{ fontSize: 15 }}>Pedal help &amp; docs</span>
        <span className="row-link__chevron">›</span>
      </StaggerItem>

      <BottomTabBar active="pedals" nav={nav} />
    </Stagger>
  );
}
