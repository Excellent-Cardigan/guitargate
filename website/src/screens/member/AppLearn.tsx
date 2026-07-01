import { useState } from 'react';
import { RiUser3Line, RiPlayFill } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem, DragScrollRow } from '../../components/motion';
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

const COURSES = ['Blues Essentials', 'Rock Foundations', 'Fingerstyle', 'Lead Guitar'];

const SONG_LESSONS = [
  { title: 'Cliffs of Dover', artist: 'Eric Johnson', level: 'Intermediate', mins: 24 },
  { title: 'Little Wing',     artist: 'Hendrix',      level: 'Beginner',     mins: 18 },
  { title: 'Black Magic Woman', artist: 'Santana',    level: 'Intermediate', mins: 31 },
  { title: 'Europa',          artist: 'Santana',      level: 'Advanced',     mins: 38 },
];

const TECHNIQUE_DRILLS = [
  { title: 'Pentatonic Positions', artist: 'Technique', level: 'Beginner',     mins: 12 },
  { title: 'Vibrato Technique',    artist: 'Technique', level: 'Intermediate', mins: 16 },
  { title: 'Sweep Picking Basics', artist: 'Technique', level: 'Advanced',     mins: 27 },
];

const LIVE_SESSIONS = [
  { title: 'Blues Jam — replay',       artist: 'Jake M.',    level: 'Replay', mins: 42 },
  { title: 'Official Lesson — replay', artist: 'Michael P.', level: 'Replay', mins: 35 },
];

export function AppLearn({ nav }: Props) {
  const [activeLabel, setActiveLabel] = useState('All');
  const category = PILLS.find(p => p.label === activeLabel)?.value ?? 'all';

  const showPaths = category === 'all' || category === 'paths';
  const showSongs = category === 'all' || category === 'songs';
  const showTechniques = category === 'all' || category === 'techniques';
  const showLive = category === 'all' || category === 'live';

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <span className="app-header__title">Learn</span>
        <button className="app-header__avatar" onClick={() => nav.navigate('app-account')}>
          <RiUser3Line size={16} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Filter pills */}
      <StaggerItem style={{ padding: '10px 20px', borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
        <ChipFilter options={PILLS.map(p => p.label)} value={activeLabel} onChange={setActiveLabel} layoutId="chip-learn" collapseToActive />
      </StaggerItem>

      {/* My path */}
      {showPaths && (
        <StaggerItem className="app-section">
          <div className="app-section__label">My path</div>
          <div
            onClick={() => nav.navigate('lesson')}
            style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer' }}
          >
            <PatternThumb seed="Blues Essentials" height={48} radius={8} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>Blues Essentials</div>
              <div className="t-caption t-muted" style={{ marginBottom: 6 }}>4 / 12 lessons complete</div>
              <div className="progress-bar">
                <div className="progress-bar__fill" style={{ width: '33%' }} />
              </div>
            </div>
          </div>
        </StaggerItem>
      )}

      {/* Courses */}
      {showPaths && (
        <StaggerItem className="app-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div className="app-section__label" style={{ marginBottom: 0 }}>Courses</div>
            <button className="t-caption t-muted" onClick={() => nav.navigate('library')}>15+ courses ›</button>
          </div>
          <DragScrollRow className="edge-fade-x" style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {COURSES.map(c => (
              <StaggerItem key={c} onClick={() => nav.navigate('library')} style={{
                flexShrink: 0, width: 120, cursor: 'pointer',
                border: '1px solid var(--line)', borderRadius: 'var(--radius)', overflow: 'hidden',
              }}>
                <PatternThumb seed={c} height={70} radius={0} style={{ border: 'none', borderBottom: '1px solid var(--line)' }} />
                <div style={{ padding: '8px 10px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink)' }}>{c}</div>
                </div>
              </StaggerItem>
            ))}
          </DragScrollRow>
        </StaggerItem>
      )}

      {/* Song lessons */}
      {showSongs && (
        <StaggerItem className="app-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div className="app-section__label" style={{ marginBottom: 0 }}>Song lessons</div>
            <button className="t-caption t-muted" onClick={() => nav.navigate('library')}>6500+ ›</button>
          </div>
          <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SONG_LESSONS.map(s => (
              <StaggerItem key={s.title} className="app-list-item">
                <PatternThumb seed={s.title} height={40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {s.title}
                  </div>
                  <div className="t-caption t-muted">{s.artist} · {s.level} · {s.mins} min</div>
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
          </StaggerItem>
        </StaggerItem>
      )}

      {/* Technique drills */}
      {showTechniques && (
        <StaggerItem className="app-section">
          <div className="app-section__label">Technique drills</div>
          <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {TECHNIQUE_DRILLS.map(s => (
              <StaggerItem key={s.title} className="app-list-item">
                <PatternThumb seed={s.title} height={40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {s.title}
                  </div>
                  <div className="t-caption t-muted">{s.artist} · {s.level} · {s.mins} min</div>
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
          </StaggerItem>
        </StaggerItem>
      )}

      {/* Live & replays */}
      {showLive && (
        <StaggerItem className="app-section">
          <div className="app-section__label">Live & replays</div>
          <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {LIVE_SESSIONS.map(s => (
              <StaggerItem key={s.title} className="app-list-item">
                <PatternThumb seed={s.title} height={40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {s.title}
                  </div>
                  <div className="t-caption t-muted">{s.artist} · {s.level} · {s.mins} min</div>
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
          </StaggerItem>
        </StaggerItem>
      )}

      {/* Library */}
      <StaggerItem className="app-section" style={{ paddingBottom: 16 }}>
        <div onClick={() => nav.navigate('library')} style={{ padding: '14px 16px', background: 'var(--bg)', borderRadius: 'var(--radius)', border: '1px solid var(--line)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>Library</div>
              <div className="t-caption t-muted">6,500+ lessons — search, filter, explore</div>
            </div>
            <span style={{ color: 'var(--muted)', fontSize: 20 }}>›</span>
          </div>
        </div>
      </StaggerItem>

      <BottomTabBar active="learn" nav={nav} />
    </Stagger>
  );
}
