import { useState } from 'react';
import {
  RiArrowLeftSLine, RiUser3Line, RiPlayFill, RiPauseFill,
  RiSkipBackMiniFill, RiSkipForwardMiniFill,
} from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { SegmentedControl } from '../../components/Segmented';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const LESSON_TABS = ['Tab', 'Chords', 'Notes'] as const;
type LessonTab = typeof LESSON_TABS[number];

export function Lesson({ nav }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<LessonTab>('Tab');

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <button
          onClick={() => nav.navigate('app-learn')}
          style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}
        >
          <RiArrowLeftSLine size={22} />
          <span className="app-header__title" style={{ fontSize: 18 }}>Lesson</span>
        </button>
        <button className="app-header__avatar" onClick={() => nav.navigate('app-account')}>
          <RiUser3Line size={16} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Video */}
      <StaggerItem style={{ padding: '16px 20px 0' }}>
        <div className="placeholder-block" style={{ height: 196, position: 'relative' }}>
          [ Lesson video ]
          <button
            className="play-btn-circle"
            style={{ position: 'absolute', width: 52, height: 52 }}
            onClick={() => setIsPlaying(p => !p)}
          >
            {isPlaying ? <RiPauseFill size={22} color="#fff" /> : <RiPlayFill size={24} color="#fff" />}
          </button>
        </div>
      </StaggerItem>

      {/* Title + progress */}
      <StaggerItem className="app-section">
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Pentatonic Positions</div>
        <div className="t-caption t-muted" style={{ marginBottom: 10 }}>
          Blues Essentials · Lesson 4 of 12
        </div>
        <div className="progress-bar">
          <div className="progress-bar__fill" style={{ width: '38%' }} />
        </div>
        <div className="t-caption t-muted" style={{ marginTop: 6, fontFamily: 'var(--font-mono)' }}>
          {isPlaying ? 'Playing · 3:42 / 9:50' : 'Paused · 3:42 / 9:50'}
        </div>
      </StaggerItem>

      {/* Transport */}
      <StaggerItem className="app-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
        <button onClick={() => {/* prev — terminal */}}>
          <RiSkipBackMiniFill size={26} color="var(--muted)" />
        </button>
        <button className="play-btn-circle" style={{ width: 56, height: 56 }} onClick={() => setIsPlaying(p => !p)}>
          {isPlaying ? <RiPauseFill size={24} color="#fff" /> : <RiPlayFill size={26} color="#fff" />}
        </button>
        <button onClick={() => {/* next — terminal */}}>
          <RiSkipForwardMiniFill size={26} color="var(--muted)" />
        </button>
      </StaggerItem>

      {/* Segmented control */}
      <StaggerItem className="app-section">
        <div style={{ marginBottom: 14 }}>
          <SegmentedControl
            options={LESSON_TABS}
            value={activeTab}
            onChange={(v) => setActiveTab(v as LessonTab)}
            layoutId="seg-lesson"
          />
        </div>
        <div className="placeholder-block" style={{ height: 140 }}>
          [ {activeTab} view ]
        </div>
      </StaggerItem>

      {/* Complete */}
      <StaggerItem style={{ padding: '16px 20px' }}>
        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => nav.navigate('app-learn')}
        >
          Mark lesson complete →
        </button>
      </StaggerItem>

      <BottomTabBar active="learn" nav={nav} />
    </Stagger>
  );
}
