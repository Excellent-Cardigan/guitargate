import type { AppNav, Screen } from '../types';

interface TopNavProps {
  nav: AppNav;
}

export function TopNav({ nav }: TopNavProps) {
  const active = nav.currentScreen;

  function link(screen: Screen, label: string) {
    return (
      <button
        className={`top-nav__link ${active === screen ? 'top-nav__link--active' : ''}`}
        onClick={() => nav.navigate(screen)}
      >
        {label}
      </button>
    );
  }

  return (
    <nav className="top-nav">
      <div className="top-nav__inner container">
        <button className="top-nav__logo" onClick={() => nav.navigate('brand-home')}>
          GUITARGATE
        </button>
        <div className="top-nav__links">
          {link('teleport',   'Teleport')}
          {link('voxbox',     'Voxbox')}
          {link('membership', 'Membership')}
          {link('store',      'Store')}
        </div>
        <div className="top-nav__actions">
          <button className="btn btn-secondary btn-sm" onClick={() => nav.navigate('app-home')}>
            Sign in
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => nav.navigate('membership')}>
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
