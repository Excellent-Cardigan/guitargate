import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import { DAY_STREAK, WEEK_STREAK, BEST_DAY_STREAK, BEST_WEEK_STREAK, CLASSES_TAKEN, MINUTES_PRACTICED } from '../../data/statsSeed';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const SECONDARY_STATS = [
  { num: BEST_DAY_STREAK, label: 'Best day streak' },
  { num: CLASSES_TAKEN, label: 'Classes taken' },
  { num: MINUTES_PRACTICED, label: 'Minutes practiced' },
  { num: BEST_WEEK_STREAK, label: 'Best week streak' },
];

export function Stats({ nav }: Props) {
  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Your stats" onBack={() => nav.navigate('app-home')} />

      <StaggerItem className="stat-hero-row" group>
        <StaggerItem className="stat-hero">
          <span className="stat-hero__num">{DAY_STREAK}</span>
          <span className="stat-hero__label">Day streak</span>
        </StaggerItem>
        <StaggerItem className="stat-hero">
          <span className="stat-hero__num">{WEEK_STREAK}</span>
          <span className="stat-hero__label">Week streak</span>
        </StaggerItem>
      </StaggerItem>

      <StaggerItem className="stat-grid" group>
        {SECONDARY_STATS.map(s => (
          <StaggerItem key={s.label} className="stat-grid__cell">
            <div className="stat-grid__num">{s.num}</div>
            <div className="stat-grid__label">{s.label}</div>
          </StaggerItem>
        ))}
      </StaggerItem>

      <BottomTabBar active="home" nav={nav} />
    </Stagger>
  );
}
