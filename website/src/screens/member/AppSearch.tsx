import { useState } from 'react';
import { RiUser3Line, RiSearchLine, RiPlayFill, RiCloseLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { ChipFilter } from '../../components/Segmented';
import { PatternThumb } from '../../components/PatternThumb';
import { LESSONS, lessonMeta } from '../../data/lessonSeed';
import { MEMBERS } from '../../data/memberSeed';
import type { AppNav } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore; isGuest?: boolean }

type Scope = 'all' | 'lessons' | 'bands' | 'members';

const PILLS: Array<{ label: string; value: Scope }> = [
  { label: 'All', value: 'all' },
  { label: 'Lessons', value: 'lessons' },
  { label: 'Bands', value: 'bands' },
  { label: 'Members', value: 'members' },
];

export function AppSearch({ nav, feed, isGuest }: Props) {
  const [query, setQuery] = useState('');
  const [activeLabel, setActiveLabel] = useState('All');
  const scope = PILLS.find(p => p.label === activeLabel)?.value ?? 'all';

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const matchedLessons = searching && (scope === 'all' || scope === 'lessons')
    ? LESSONS.filter(l => l.title.toLowerCase().includes(q))
    : [];
  const matchedBands = searching && (scope === 'all' || scope === 'bands')
    ? feed.bands.filter(b => b.name.toLowerCase().includes(q))
    : [];
  const matchedMembers = searching && (scope === 'all' || scope === 'members')
    ? MEMBERS.filter(m => m.name.toLowerCase().includes(q))
    : [];

  const hasResults = matchedLessons.length > 0 || matchedBands.length > 0 || matchedMembers.length > 0;

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <span className="app-header__title">Search</span>
        <button className="app-header__avatar" onClick={() => nav.navigate(isGuest ? 'app-signin' : 'app-account')}>
          <RiUser3Line size={16} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Search input */}
      <StaggerItem style={{ padding: '12px 20px 0' }}>
        <div className="form-field__input" style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'text' }}>
          <RiSearchLine size={15} color="var(--muted)" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search lessons, bands, members"
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body)', color: 'var(--ink)',
            }}
          />
          {query.length > 0 && (
            <button onClick={() => setQuery('')} style={{ display: 'flex' }} aria-label="Clear search">
              <RiCloseLine size={15} color="var(--muted)" />
            </button>
          )}
        </div>
      </StaggerItem>

      {/* Scope pills */}
      <StaggerItem style={{ padding: '12px 20px', borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
        <ChipFilter options={PILLS.map(p => p.label)} value={activeLabel} onChange={setActiveLabel} layoutId="chip-search" collapseToActive />
      </StaggerItem>

      {!searching && (
        <>
          <StaggerItem className="app-section">
            <div className="app-section__label">Your bands</div>
            <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {feed.bands.map(b => (
                <StaggerItem
                  key={b.id}
                  className="app-list-item"
                  onClick={() => nav.navigate('band-space', { bandId: b.id })}
                  style={{ cursor: 'pointer' }}
                >
                  <PatternThumb seed={b.name} height={40} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{b.name}</div>
                    <div className="t-caption t-muted">{b.memberCount} members</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerItem>
          </StaggerItem>

          <StaggerItem className="app-section">
            <div className="app-section__label">Popular lessons</div>
            <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {LESSONS.filter(l => l.category !== 'paths').slice(0, 3).map(l => (
                <StaggerItem key={l.id} className="app-list-item">
                  <PatternThumb seed={l.title} height={40} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {l.title}
                    </div>
                    <div className="t-caption t-muted">{lessonMeta(l)}</div>
                  </div>
                  <button className="play-btn-circle" style={{ width: 28, height: 28 }} onClick={() => nav.navigate('lesson')}>
                    <RiPlayFill size={13} color="#fff" />
                  </button>
                </StaggerItem>
              ))}
            </StaggerItem>
          </StaggerItem>
        </>
      )}

      {searching && (
        <StaggerItem className="app-section" group style={{ flex: 1 }}>
          {matchedLessons.map(l => (
            <StaggerItem key={l.id} className="app-list-item">
              <PatternThumb seed={l.title} height={40} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {l.title}
                </div>
                <div className="t-caption t-muted">{lessonMeta(l)}</div>
              </div>
              <button className="play-btn-circle" style={{ width: 28, height: 28 }} onClick={() => nav.navigate('lesson')}>
                <RiPlayFill size={13} color="#fff" />
              </button>
            </StaggerItem>
          ))}

          {matchedBands.map(b => (
            <StaggerItem
              key={b.id}
              className="app-list-item"
              onClick={() => nav.navigate('band-space', { bandId: b.id })}
              style={{ cursor: 'pointer' }}
            >
              <PatternThumb seed={b.name} height={40} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{b.name}</div>
                <div className="t-caption t-muted">Band · {b.memberCount} members</div>
              </div>
            </StaggerItem>
          ))}

          {matchedMembers.map(m => (
            <StaggerItem key={m.id} className="app-list-item">
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--line)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RiUser3Line size={16} color="var(--muted)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{m.name}</div>
                <div className="t-caption t-muted">Member · {m.instrument}</div>
              </div>
            </StaggerItem>
          ))}

          {!hasResults && (
            <div className="empty-state">
              <div className="empty-state__title">No results for &ldquo;{query}&rdquo;</div>
              <div className="empty-state__body">Try a different lesson, band, or member name.</div>
            </div>
          )}
        </StaggerItem>
      )}

      <BottomTabBar active="learn" nav={nav} isGuest={isGuest} />
    </Stagger>
  );
}
