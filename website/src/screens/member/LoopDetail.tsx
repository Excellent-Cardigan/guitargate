import { useState } from 'react';
import { RiHeart3Line, RiHeartFill, RiCheckLine, RiShareLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import { ReactionThread } from '../../components/ReactionThread';
import { Waveform } from '../../components/Waveform';
import { AvatarStack } from '../../components/AvatarStack';
import { InstrumentPicker } from '../../components/InstrumentPicker';
import type { AppNav } from '../../types';
import { MAX_LOOP_PARTS } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore }

export function LoopDetail({ nav, feed }: Props) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const loop = feed.activity.find(item => item.id === nav.params.loopId && item.type === 'loop');
  const goBack = () => nav.navigate(nav.params.from ?? 'app-play');

  if (!loop || loop.type !== 'loop') {
    return (
      <Stagger className="phone-scroll">
        <BackHeader title="Loop" onBack={goBack} />
        <div className="empty-state">
          <div className="empty-state__title">This loop isn't open anymore.</div>
        </div>
        <BottomTabBar active="play" nav={nav} />
      </Stagger>
    );
  }

  return (
    <Stagger className="phone-scroll">
      <BackHeader title={`${loop.user}'s loop`} onBack={goBack} />

      <StaggerItem className="loop-detail__hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--line)', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <span style={{ fontWeight: 600, fontSize: 14 }}>{loop.user}</span>
            <span className="t-caption t-muted"> · {loop.time}</span>
            {loop.bandName && <span className="feed-card__band-chip">{loop.bandName}</span>}
          </div>
        </div>
        <div className="waveform-placeholder" style={{ height: 140 }}>
          <Waveform seed={loop.id} height={80} />
        </div>
        {loop.parts.length > 0 && (
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <AvatarStack parts={loop.parts} />
            <span className="t-caption t-muted">{loop.parts.length}/{MAX_LOOP_PARTS} parts</span>
          </div>
        )}
      </StaggerItem>

      <div className="loop-detail__actions">
        <button
          type="button"
          className="feed-card__react-btn"
          onClick={() => feed.toggleLike(loop.id)}
        >
          {loop.liked ? <RiHeartFill size={16} color="var(--ink)" /> : <RiHeart3Line size={16} />} {loop.hearts}
        </button>
        <button
          type="button"
          disabled={loop.parts.length >= MAX_LOOP_PARTS && !loop.parts.some(p => p.name === 'You')}
          className={`feed-card__addpart-btn${loop.parts.some(p => p.name === 'You') ? ' feed-card__addpart-btn--active' : ''}`}
          onClick={() => {
            const added = loop.parts.some(p => p.name === 'You');
            if (added) { feed.toggleAddPart(loop.id, ''); return; }
            if (loop.parts.length >= MAX_LOOP_PARTS) return;
            setPickerOpen(o => !o);
          }}
        >
          {loop.parts.some(p => p.name === 'You')
            ? <><RiCheckLine size={14} /> Added</>
            : loop.parts.length >= MAX_LOOP_PARTS ? "Loop's full" : 'Add your part'}
        </button>
        <button
          type="button"
          className={`feed-card__loadpedal-btn${loop.loadedToPedal ? ' feed-card__loadpedal-btn--active' : ''}`}
          onClick={() => feed.toggleLoadedToPedal(loop.id)}
        >
          {loop.loadedToPedal ? <><RiCheckLine size={14} /> Loaded to pedal</> : 'Load to pedal'}
        </button>
        <button
          type="button"
          className="feed-card__loadpedal-btn"
          style={{ marginLeft: 'auto' }}
          onClick={() => nav.navigate('share-preview', { loopId: loop.id, from: nav.params.from })}
        >
          <RiShareLine size={14} /> Share
        </button>
      </div>

      {pickerOpen && !loop.parts.some(p => p.name === 'You') && loop.parts.length < MAX_LOOP_PARTS && (
        <StaggerItem style={{ padding: '0 20px 16px' }}>
          <InstrumentPicker onPick={instrument => { feed.toggleAddPart(loop.id, instrument); setPickerOpen(false); }} />
        </StaggerItem>
      )}

      <StaggerItem className="app-section" style={{ paddingTop: 0 }}>
        <div className="app-section__label">Reactions</div>
        <ReactionThread reactions={loop.reactions} onAdd={text => feed.addReaction(loop.id, text)} />
      </StaggerItem>

      <BottomTabBar active="play" nav={nav} />
    </Stagger>
  );
}
