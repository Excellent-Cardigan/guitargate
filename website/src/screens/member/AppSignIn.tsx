import { Stagger, StaggerItem } from '../../components/motion';
import type { AppNav } from '../../types';

interface Props { nav: AppNav; onGuest: () => void }

export function AppSignIn({ nav, onGuest }: Props) {
  const browseAsGuest = () => {
    onGuest();
    nav.navigate('app-learn');
  };

  return (
    <Stagger className="phone-scroll">
      <StaggerItem group style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px 40px', gap: 12 }}>
        <StaggerItem style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="app-header__wordmark" style={{ fontSize: 28 }}>GUITARGATE</div>
          <div className="t-caption t-muted" style={{ marginTop: 10 }}>Keep it in your hands.</div>
        </StaggerItem>

        <StaggerItem>
          <button
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => nav.navigate('signup')}
          >
            Create account
          </button>
        </StaggerItem>
        <StaggerItem>
          <button
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => nav.navigate('login')}
          >
            Sign in
          </button>
        </StaggerItem>

        <StaggerItem style={{ textAlign: 'center', marginTop: 16 }}>
          <button
            type="button"
            className="t-caption t-muted"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={browseAsGuest}
          >
            Browse Learn without an account →
          </button>
        </StaggerItem>
      </StaggerItem>
    </Stagger>
  );
}
