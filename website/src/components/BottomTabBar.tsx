import { motion } from 'framer-motion';
import {
  RiHome5Line, RiHome5Fill,
  RiBookOpenLine, RiBookOpenFill,
  RiPlayCircleLine, RiPlayCircleFill,
  RiBox3Line, RiBox3Fill,
} from '@remixicon/react';
import type { AppNav, Screen } from '../types';

type TabId = 'home' | 'learn' | 'play' | 'pedals';

interface BottomTabBarProps {
  active: TabId;
  nav: AppNav;
}

const TABS: {
  id: TabId;
  label: string;
  screen: Screen;
  Line: typeof RiHome5Line;
  Fill: typeof RiHome5Fill;
}[] = [
  { id: 'home',   label: 'Home',   screen: 'app-home',   Line: RiHome5Line,     Fill: RiHome5Fill },
  { id: 'learn',  label: 'Learn',  screen: 'app-learn',  Line: RiBookOpenLine,  Fill: RiBookOpenFill },
  { id: 'play',   label: 'Play',   screen: 'app-play',   Line: RiPlayCircleLine, Fill: RiPlayCircleFill },
  { id: 'pedals', label: 'Pedals', screen: 'app-pedals', Line: RiBox3Line,      Fill: RiBox3Fill },
];

export function BottomTabBar({ active, nav }: BottomTabBarProps) {
  return (
    <div className="tab-bar">
      {TABS.map(tab => {
        const isActive = tab.id === active;
        const Icon = isActive ? tab.Fill : tab.Line;
        return (
          <motion.button
            key={tab.id}
            className="tab-item"
            onClick={() => nav.navigate(tab.screen)}
            whileTap={{ scale: 0.86 }}
            transition={{ type: 'spring', stiffness: 600, damping: 26 }}
          >
            <motion.div
              className="tab-item__icon"
              animate={{ scale: isActive ? 1.06 : 1, y: isActive ? -1 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            >
              <Icon size={22} color={isActive ? 'var(--ink)' : 'var(--muted)'} />
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
