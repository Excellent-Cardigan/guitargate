import { useState } from 'react';
import { RiHeart3Line, RiHeartFill, RiChat3Line, RiShareLine, RiCheckLine } from '@remixicon/react';
import { StaggerItem } from './motion';
import { ReactionThread } from './ReactionThread';
import { Waveform } from './Waveform';
import { AvatarStack } from './AvatarStack';
import type { ActivityItem } from '../types';

interface Props {
  item: ActivityItem;
  /** 'full' (default) = Play/Band Space feed cards: Like, React, Add your part, Load to pedal, Share.
   *  'home' = Home's activity feed: Like, React, "View in Play →" — the deeper loop actions live in Play itself. */
  variant?: 'full' | 'home';
  onLike: (id: string) => void;
  onReact: (id: string, text: string) => void;
  onAddPart?: (id: string) => void;
  onLoadToPedal?: (id: string) => void;
  onOpenDetail?: (id: string) => void;
  onShare?: (id: string) => void;
}

export function FeedCard({ item, variant = 'full', onLike, onReact, onAddPart, onLoadToPedal, onOpenDetail, onShare }: Props) {
  const [threadOpen, setThreadOpen] = useState(false);

  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const addedPart = item.type === 'loop' && item.contributors.includes('You');

  return (
    <StaggerItem
      className="feed-card"
      onClick={() => item.type === 'loop' && onOpenDetail?.(item.id)}
      style={{ cursor: item.type === 'loop' ? 'pointer' : 'default', position: 'relative' }}
    >
      <div className="feed-card__header">
        <div className="feed-card__avatar" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
            {item.user}
            {item.type === 'loop' && item.bandName && (
              <span className="feed-card__band-chip">{item.bandName}</span>
            )}
          </div>
          <div className="t-caption t-muted">
            {item.type === 'loop' ? 'left a loop open' : 'completed a lesson'} · {item.time}
          </div>
        </div>
      </div>

      {item.type === 'loop' ? (
        <div className="waveform-placeholder">
          <Waveform seed={item.id} />
        </div>
      ) : (
        <div className="waveform-placeholder">{item.lessonTitle}</div>
      )}

      {item.type === 'loop' && item.contributors.length > 0 && (
        <div style={{ margin: '10px 16px 0' }}>
          <AvatarStack names={item.contributors} />
        </div>
      )}

      <div className="feed-card__footer">
        <button type="button" className="feed-card__react-btn" onClick={(e) => { stop(e); onLike(item.id); }}>
          {item.liked ? <RiHeartFill size={14} color="var(--ink)" /> : <RiHeart3Line size={14} />}
          {item.hearts}
        </button>

        {item.type === 'loop' && (
          <>
            <button
              type="button"
              className={`feed-card__react-btn${threadOpen ? ' feed-card__react-btn--active' : ''}`}
              onClick={(e) => { stop(e); setThreadOpen(o => !o); }}
            >
              <RiChat3Line size={14} /> {item.reactions.length}
            </button>

            {variant === 'full' && (
              <>
                <button
                  type="button"
                  className={`feed-card__addpart-btn${addedPart ? ' feed-card__addpart-btn--active' : ''}`}
                  onClick={(e) => { stop(e); onAddPart?.(item.id); }}
                >
                  {addedPart ? <><RiCheckLine size={14} /> Added</> : 'Add your part'}
                </button>

                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <button
                    type="button"
                    className={`feed-card__loadpedal-btn${item.loadedToPedal ? ' feed-card__loadpedal-btn--active' : ''}`}
                    onClick={(e) => { stop(e); onLoadToPedal?.(item.id); }}
                  >
                    {item.loadedToPedal ? <><RiCheckLine size={14} /> Loaded to pedal</> : 'Load to pedal'}
                  </button>
                  <button
                    type="button"
                    className="feed-card__loadpedal-btn"
                    onClick={(e) => { stop(e); onShare?.(item.id); }}
                    aria-label="Share"
                  >
                    <RiShareLine size={14} />
                  </button>
                </div>
              </>
            )}

            {variant === 'home' && (
              <button
                type="button"
                className="feed-card__loadpedal-btn"
                style={{ marginLeft: 'auto' }}
                onClick={(e) => { stop(e); onOpenDetail?.(item.id); }}
              >
                View in Play →
              </button>
            )}
          </>
        )}
      </div>

      {item.type === 'loop' && (
        <ReactionThread reactions={item.reactions} onAdd={text => onReact(item.id, text)} collapsible open={threadOpen} />
      )}
    </StaggerItem>
  );
}
