import { RiArrowLeftSLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const HISTORY = [
  { date: 'Jan 1, 2025', desc: '3.0 Membership — monthly', amount: '$29.00' },
  { date: 'Dec 1, 2024', desc: '3.0 Membership — monthly', amount: '$29.00' },
  { date: 'Nov 1, 2024', desc: '3.0 Membership — monthly', amount: '$29.00' },
];

export function Billing({ nav }: Props) {
  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <button
          onClick={() => nav.navigate('app-account')}
          style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}
        >
          <RiArrowLeftSLine size={22} />
          <span className="app-header__title" style={{ fontSize: 18 }}>Plan &amp; billing</span>
        </button>
      </StaggerItem>

      {/* Current plan */}
      <StaggerItem className="app-section">
        <div className="app-section__label">Current plan</div>
        <div className="card-flat">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontWeight: 700, fontSize: 16 }}>Guitargate 3.0</span>
            <span className="badge badge-dark">Active</span>
          </div>
          <div className="t-caption t-muted" style={{ marginBottom: 4 }}>$29.00 / month</div>
          <div className="t-caption t-muted">Renews Feb 1, 2025</div>
        </div>
      </StaggerItem>

      {/* Payment method */}
      <StaggerItem className="app-section">
        <div className="app-section__label">Payment method</div>
        <div className="card-flat" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 26, background: 'var(--line)', borderRadius: 4, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
            VISA
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Visa •••• 4242</div>
            <div className="t-caption t-muted">Expires 09 / 27</div>
          </div>
          <span className="t-caption t-muted" style={{ cursor: 'pointer' }}>Update ›</span>
        </div>
      </StaggerItem>

      {/* Billing history */}
      <StaggerItem className="app-section" group>
        <div className="app-section__label">Billing history</div>
        {HISTORY.map(row => (
          <StaggerItem key={row.date} className="app-list-item">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{row.date}</div>
              <div className="t-caption t-muted">{row.desc}</div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{row.amount}</span>
          </StaggerItem>
        ))}
      </StaggerItem>

      {/* Actions */}
      <StaggerItem style={{ padding: '16px 20px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          className="btn btn-secondary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => {/* change plan — terminal */}}
        >
          Change plan
        </button>
        <button
          className="btn btn-ghost"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => {/* cancel — terminal */}}
        >
          Cancel membership
        </button>
      </StaggerItem>

      <StaggerItem style={{ padding: '8px 20px 8px' }}>
        <button
          className="btn btn-ghost t-caption"
          style={{ padding: '8px 0', color: 'var(--muted)' }}
          onClick={() => nav.navigate('app-account')}
        >
          ← Back to Account
        </button>
      </StaggerItem>

      <BottomTabBar active="home" nav={nav} />
    </Stagger>
  );
}
