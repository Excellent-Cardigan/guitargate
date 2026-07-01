import { RiMailLine, RiLockPasswordLine } from '@remixicon/react';
import { Stagger, StaggerItem } from '../../components/motion';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function AppSignIn({ nav }: Props) {
  return (
    <Stagger className="phone-scroll">
      <StaggerItem group style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px 40px', gap: 8 }}>
        <StaggerItem style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="app-header__wordmark" style={{ fontSize: 26 }}>GUITARGATE</div>
          <div className="t-caption t-muted" style={{ marginTop: 8 }}>Signed out · Welcome back</div>
        </StaggerItem>

        <StaggerItem className="form-field">
          <label>Email</label>
          <div className="form-field__input" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <RiMailLine size={15} color="var(--muted)" />
            you@example.com
          </div>
        </StaggerItem>
        <StaggerItem className="form-field">
          <label>Password</label>
          <div className="form-field__input" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <RiLockPasswordLine size={15} color="var(--muted)" />
            ••••••••
          </div>
        </StaggerItem>

        <StaggerItem>
          <button
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
            onClick={() => nav.navigate('app-home')}
          >
            Sign in
          </button>
        </StaggerItem>
        <StaggerItem>
          <button
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => nav.navigate('app-home')}
          >
            Create account
          </button>
        </StaggerItem>

        <StaggerItem>
          <button
            className="btn btn-ghost t-caption"
            style={{ width: '100%', justifyContent: 'center', color: 'var(--muted)' }}
            onClick={() => {/* forgot password — terminal */}}
          >
            Forgot password?
          </button>
        </StaggerItem>
      </StaggerItem>
    </Stagger>
  );
}
