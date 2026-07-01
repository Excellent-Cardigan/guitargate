import { useState } from 'react';
import { RiArrowLeftSLine, RiUser3Line, RiSearchLine, RiPlayFill } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { ChipFilter } from '../../components/Segmented';
import { PatternThumb } from '../../components/PatternThumb';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

type Category = 'all' | 'paths' | 'songs' | 'techniques' | 'live';

const PILLS: Array<{ label: string; value: Category }> = [
  { label: 'All', value: 'all' },
  { label: 'Paths', value: 'paths' },
  { label: 'Songs', value: 'songs' },
  { label: 'Techniques', value: 'techniques' },
  { label: 'Live', value: 'live' },
];

const LIBRARY_LESSONS: Array<{ title: string; category: Exclude<Category, 'all'>; meta: string }> = [
  { title: 'Cliffs of Dover', category: 'songs', meta: 'Eric Johnson · Intermediate · 24 min' },
  { title: 'Little Wing', category: 'songs', meta: 'Hendrix · Beginner · 18 min' },
  { title: 'Black Magic Woman', category: 'songs', meta: 'Santana · Intermediate · 31 min' },
  { title: 'Europa', category: 'songs', meta: 'Santana · Advanced · 38 min' },
  { title: 'Texas Blues Shuffle', category: 'songs', meta: 'Stevie Ray Vaughan · Intermediate · 22 min' },
  { title: 'Pentatonic Positions', category: 'techniques', meta: 'Technique · Beginner · 12 min' },
  { title: 'Vibrato Technique', category: 'techniques', meta: 'Technique · Intermediate · 16 min' },
  { title: 'Sweep Picking Basics', category: 'techniques', meta: 'Technique · Advanced · 27 min' },
  { title: 'Alternate Picking Basics', category: 'techniques', meta: 'Technique · Beginner · 10 min' },
  { title: 'Blues Essentials', category: 'paths', meta: 'Path · 12 lessons' },
  { title: 'Rock Foundations', category: 'paths', meta: 'Path · 10 lessons' },
  { title: 'Blues Jam — replay', category: 'live', meta: 'Live replay · Jake M. · 42 min' },
  { title: 'Official Lesson — replay', category: 'live', meta: 'Live replay · Michael P. · 35 min' },
];

export function Library({ nav }: Props) {
  const [activeLabel, setActiveLabel] = useState('All');
  const activeCategory = PILLS.find(p => p.label === activeLabel)?.value ?? 'all';

  const lessons = activeCategory === 'all'
    ? LIBRARY_LESSONS
    : LIBRARY_LESSONS.filter(l => l.category === activeCategory);

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
        <button className="app-header__avatar" onClick={() => nav.navigate('app-account')}>
          <RiUser3Line size={16} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Search (display-only) */}
      <StaggerItem style={{ padding: '12px 20px 0' }}>
        <div className="form-field__input" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
          <StaggerItem key={s.title} className="app-list-item">
            <PatternThumb seed={s.title} height={40} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {s.title}
              </div>
              <div className="t-caption t-muted">{s.meta}</div>
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

      <BottomTabBar active="learn" nav={nav} />
    </Stagger>
  );
}
