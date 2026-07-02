import {
  RiUser3Line, RiBankCardLine, RiBox3Line, RiUserAddLine,
  RiNotification3Line, RiShieldUserLine,
  RiQuestionLine, RiLogoutBoxRLine,
} from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import type { AppNav, Screen } from '../../types';
import type { ProfileStore } from '../../state/profileStore';

interface Props { nav: AppNav; profile: ProfileStore }

type Row = { label: string; Icon: typeof RiBankCardLine; action: Screen };

const MEMBERSHIP: Row[] = [
  { label: 'Plan & billing',     Icon: RiBankCardLine, action: 'billing' },
  { label: 'Pedal order status', Icon: RiBox3Line,     action: 'app-pedals' },
  { label: 'Invite a friend',    Icon: RiUserAddLine,  action: 'loop-someone-in' },
];

const APP_ROWS: Row[] = [
  { label: 'Notifications',  Icon: RiNotification3Line, action: 'notification-settings' },
  { label: 'Privacy & data', Icon: RiShieldUserLine,     action: 'privacy-settings' },
];

export function AppAccount({ nav, profile }: Props) {
  const row = (r: Row) => (
    <StaggerItem
      key={r.label}
      className="row-link"
      onClick={() => nav.navigate(r.action)}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <r.Icon size={18} color="var(--muted)" />
        <span style={{ fontSize: 15 }}>{r.label}</span>
      </span>
      <span className="row-link__chevron">›</span>
    </StaggerItem>
  );

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <span className="app-header__title">Account</span>
      </StaggerItem>

      {/* Profile header */}
      <StaggerItem className="account-header">
        <div className="account-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <RiUser3Line size={22} color="var(--muted)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 3 }}>
            {profile.profile.firstName} {profile.profile.lastName}
          </div>
          <div className="t-caption t-muted" style={{ marginBottom: 2 }}>@{profile.profile.username}</div>
          <div className="t-caption t-muted">Member since Jan 2025 · 3.0 Membership</div>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={() => nav.navigate('edit-profile')}>
          Edit
        </button>
      </StaggerItem>

      {/* Membership group */}
      <StaggerItem className="menu-group" group>
        <div className="menu-group-label">Membership</div>
        {MEMBERSHIP.map(row)}
      </StaggerItem>

      {/* App group */}
      <StaggerItem className="menu-group" group>
        <div className="menu-group-label">App</div>
        {APP_ROWS.map(row)}
      </StaggerItem>

      {/* Support / logout */}
      <StaggerItem className="menu-group" group style={{ marginTop: 12 }}>
        <StaggerItem className="row-link" onClick={() => nav.navigate('help-support')}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <RiQuestionLine size={18} color="var(--muted)" />
            <span style={{ fontSize: 15 }}>Help &amp; support</span>
          </span>
          <span className="row-link__chevron">›</span>
        </StaggerItem>
        <StaggerItem className="row-link" onClick={() => nav.navigate('app-signin')}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <RiLogoutBoxRLine size={18} color="var(--muted)" />
            <span style={{ fontSize: 15, color: 'var(--muted)' }}>Log out</span>
          </span>
        </StaggerItem>
      </StaggerItem>

      {/* Back nav */}
      <StaggerItem style={{ padding: '12px 20px 8px' }}>
        <button
          className="btn btn-ghost t-caption"
          style={{ padding: '8px 0', color: 'var(--muted)' }}
          onClick={() => nav.navigate('app-home')}
        >
          ← Back to Home
        </button>
      </StaggerItem>

      <StaggerItem style={{ padding: '8px 20px 16px', textAlign: 'center' }}>
        <span className="t-caption t-muted" style={{ fontFamily: 'var(--font-mono)' }}>
          Guitargate v1.0.0
        </span>
      </StaggerItem>

      <BottomTabBar active="home" nav={nav} />
    </Stagger>
  );
}
