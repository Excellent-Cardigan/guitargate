import { RiArrowLeftSLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const MILESTONES = [
  { label: 'Sticker pack', sub: 'Sent your way', achieved: true, icon: 'Stickers' },
  { label: 'Picks', sub: 'For the next session', achieved: false, icon: 'Picks' },
  { label: 'Hat', sub: 'Keep it in your hands', achieved: false, icon: 'Hat' },
  { label: 'Hoodie', sub: 'The band you always wanted', achieved: false, icon: 'Hoodie' },
];

export function LoopSomeoneIn({ nav }: Props) {
  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <button onClick={() => nav.navigate('app-play')} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}>
          <RiArrowLeftSLine size={22} />
          <span className="app-header__title" style={{ fontSize: 18 }}>Loop someone in</span>
        </button>
      </StaggerItem>

      <StaggerItem style={{ padding: '4px 20px 16px' }}>
        <p className="t-caption t-muted">
          Save them a seat. Every friend you bring into the room earns you something small,
          made for the band you always wanted — wherever you are.
        </p>
      </StaggerItem>

      <StaggerItem className="milestone-ladder" group>
        {MILESTONES.map(m => (
          <StaggerItem
            key={m.label}
            className={`milestone-ladder__item milestone-ladder__item--${m.achieved ? 'achieved' : 'locked'}`}
          >
            <div className="milestone-ladder__icon">[{m.icon}]</div>
            <div>
              <div className="milestone-ladder__title">{m.label}</div>
              <div className="milestone-ladder__sub">{m.sub}</div>
            </div>
            <span className="milestone-ladder__status">{m.achieved ? 'Unlocked' : 'Locked'}</span>
          </StaggerItem>
        ))}
      </StaggerItem>

      <BottomTabBar active="play" nav={nav} />
    </Stagger>
  );
}
