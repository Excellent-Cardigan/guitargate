import { RiArrowLeftSLine, RiPlayFill } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { LIVE_SESSIONS } from '../../data/liveSeed';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function LiveView({ nav }: Props) {
  const session = LIVE_SESSIONS.find(s => s.id === nav.params.liveId) ?? LIVE_SESSIONS[0];

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <button onClick={() => nav.navigate('app-home')} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}>
          <RiArrowLeftSLine size={22} />
          <span className="app-header__title" style={{ fontSize: 18 }}>Live</span>
        </button>
      </StaggerItem>

      <StaggerItem style={{ padding: '0 20px' }}>
        <div className="waveform-placeholder" style={{ height: 220 }}>
          <div className="play-btn-circle" style={{ width: 44, height: 44 }}>
            <RiPlayFill size={20} color="#fff" />
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{session.title}</div>
          <div className="t-caption t-muted">{session.host} · {session.watching} watching</div>
        </div>
      </StaggerItem>

      <BottomTabBar active="home" nav={nav} />
    </Stagger>
  );
}
