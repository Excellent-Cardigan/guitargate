import { RiArrowLeftSLine, RiHeart3Line, RiHeartFill, RiCheckLine, RiShareLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { ReactionThread } from '../../components/ReactionThread';
import { Waveform } from '../../components/Waveform';
import { AvatarStack } from '../../components/AvatarStack';
import type { AppNav } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore }

export function LoopDetail({ nav, feed }: Props) {
  const loop = feed.activity.find(item => item.id === nav.params.loopId && item.type === 'loop');

  if (!loop || loop.type !== 'loop') {
    return (
      <Stagger className="phone-scroll">
        <StaggerItem className="app-header">
          <button onClick={() => nav.navigate('app-play')} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}>
            <RiArrowLeftSLine size={22} />
            <span className="app-header__title" style={{ fontSize: 18 }}>Loop</span>
          </button>
        </StaggerItem>
        <div className="empty-state">
          <div className="empty-state__title">This loop isn't open anymore.</div>
        </div>
        <BottomTabBar active="play" nav={nav} />
      </Stagger>
    );
  }

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <button onClick={() => nav.navigate('app-play')} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}>
          <RiArrowLeftSLine size={22} />
          <span className="app-header__title" style={{ fontSize: 18 }}>{loop.user}'s loop</span>
        </button>
      </StaggerItem>

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
        {loop.contributors.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <AvatarStack names={loop.contributors} />
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
          className={`feed-card__addpart-btn${loop.contributors.includes('You') ? ' feed-card__addpart-btn--active' : ''}`}
          onClick={() => feed.toggleAddPart(loop.id)}
        >
          {loop.contributors.includes('You') ? <><RiCheckLine size={14} /> Added</> : 'Add your part'}
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
          onClick={() => nav.navigate('share-preview', { loopId: loop.id })}
        >
          <RiShareLine size={14} /> Share
        </button>
      </div>

      <StaggerItem className="app-section" style={{ paddingTop: 0 }}>
        <div className="app-section__label">Reactions</div>
        <ReactionThread reactions={loop.reactions} onAdd={text => feed.addReaction(loop.id, text)} />
      </StaggerItem>

      <BottomTabBar active="play" nav={nav} />
    </Stagger>
  );
}
