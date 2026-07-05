import { motion } from 'framer-motion';
import { RiPlayFill, RiPlayLine } from '@remixicon/react';
import { GgHomeIcon, GgLibraryIcon, GgPedalsIcon } from '../assets/icons';
import type { AppNav, Screen } from '../types';

type TabId = 'home' | 'learn' | 'play' | 'pedals';

interface BottomTabBarProps {
  active: TabId;
  nav: AppNav;
  /** While true, tapping any tab besides Learn redirects to sign-in instead of navigating. */
  isGuest?: boolean;
}

const TABS: {
  id: TabId;
  label: string;
  screen: Screen;
  Line: typeof RiPlayLine;
  Fill: typeof RiPlayFill;
}[] = [
  { id: 'home',   label: 'Home',   screen: 'app-home',   Line: GgHomeIcon,    Fill: GgHomeIcon },
  { id: 'learn',  label: 'Learn',  screen: 'app-learn',  Line: GgLibraryIcon, Fill: GgLibraryIcon },
  { id: 'play',   label: 'Play',   screen: 'app-play',   Line: RiPlayLine,   Fill: RiPlayFill },
  { id: 'pedals', label: 'Pedals', screen: 'app-pedals', Line: GgPedalsIcon,  Fill: GgPedalsIcon },
];

export function BottomTabBar({ active, nav, isGuest }: BottomTabBarProps) {
  return (
    <div className="tab-bar">
      {TABS.map(tab => {
        const isActive = tab.id === active;
        const Icon = isActive ? tab.Fill : tab.Line;
        const gated = isGuest && tab.id !== 'learn';
        const isPlay = tab.id === 'play';
        return (
          <motion.button
            key={tab.id}
            className="tab-item"
            onClick={() => nav.navigate(gated ? 'app-signin' : tab.screen)}
            whileTap={{ scale: 0.86 }}
            transition={{ type: 'spring', stiffness: 600, damping: 26 }}
          >
            <motion.div
              className={`tab-item__icon${isPlay ? ' tab-item__icon--play' : ''}${isPlay && isActive ? ' tab-item__icon--play-active' : ''}`}
              animate={{ scale: isActive ? 1.06 : 1, y: isActive ? -1 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            >
              <Icon size={isPlay ? 15 : 22} color={isPlay ? (isActive ? '#fff' : 'var(--muted)') : (isActive ? 'var(--ink)' : 'var(--muted)')} />
            </motion.div>
            <span className={`tab-item__label ${isActive ? 'tab-item__label--active' : ''}`}>
              {tab.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
