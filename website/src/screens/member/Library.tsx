import { useState } from 'react';
import { RiArrowLeftSLine, RiUser3Line, RiSearchLine, RiPlayFill } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { ChipFilter } from '../../components/Segmented';
import { PatternThumb } from '../../components/PatternThumb';
import { LESSONS, lessonMeta } from '../../data/lessonSeed';
import type { AppNav } from '../../types';

interface Props { nav: AppNav; isGuest?: boolean }

type Category = 'all' | 'paths' | 'songs' | 'techniques' | 'live';

const PILLS: Array<{ label: string; value: Category }> = [
  { label: 'All', value: 'all' },
  { label: 'Paths', value: 'paths' },
  { label: 'Songs', value: 'songs' },
  { label: 'Techniques', value: 'techniques' },
  { label: 'Live', value: 'live' },
];

export function Library({ nav, isGuest }: Props) {
  const [activeLabel, setActiveLabel] = useState('All');
  const activeCategory = PILLS.find(p => p.label === activeLabel)?.value ?? 'all';

  const lessons = activeCategory === 'all'
    ? LESSONS
    : LESSONS.filter(l => l.category === activeCategory);

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <button
          onClick={() => nav.navigate('app-learn')}
          style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}
        >
          <RiArrowLeftSLine size={22} />
          <span className="app-header__title" style={{ fontSize: 18 }}>Library</span>
        </button>
        <button className="app-header__avatar" onClick={() => nav.navigate(isGuest ? 'app-signin' : 'app-account')}>
          <RiUser3Line size={16} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Search — routes to the shared search screen, pre-scoped isn't supported yet so it opens on "All" */}
      <StaggerItem style={{ padding: '12px 20px 0' }}>
        <div
          className="form-field__input"
          style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
          onClick={() => nav.navigate('app-search')}
        >
          <RiSearchLine size={15} color="var(--muted)" />
          Search 6,500+ lessons
        </div>
      </StaggerItem>

      {/* Filter pills */}
      <StaggerItem style={{ padding: '12px 20px', borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
        <ChipFilter
          options={PILLS.map(p => p.label)}
          value={activeLabel}
          onChange={setActiveLabel}
          layoutId="chip-library"
          collapseToActive
        />
      </StaggerItem>

      {/* Lesson list */}
      <StaggerItem className="app-section" group style={{ flex: 1 }}>
        {lessons.map(s => (
          <StaggerItem key={s.id} className="app-list-item">
            <PatternThumb seed={s.title} height={40} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {s.title}
              </div>
              <div className="t-caption t-muted">{lessonMeta(s)}</div>
            </div>
            <button
              className="play-btn-circle"
              style={{ width: 28, height: 28 }}
              onClick={() => nav.navigate('lesson')}
            >
              <RiPlayFill size={13} color="#fff" />
            </button>
          </StaggerItem>
        ))}

        {lessons.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__title">Nothing here yet</div>
          </div>
        )}
      </StaggerItem>

      <BottomTabBar active="learn" nav={nav} isGuest={isGuest} />
    </Stagger>
  );
}
