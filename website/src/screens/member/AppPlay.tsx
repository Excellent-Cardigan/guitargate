import { useState } from 'react';
import { RiUserAddLine, RiArrowRightSLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { SegmentedControl } from '../../components/Segmented';
import { FeedCard } from '../../components/FeedCard';
import { Composer } from '../../components/Composer';
import { BandsStrip } from '../../components/BandsStrip';
import type { AppNav, LoopItem } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore }

const SCOPES: Array<{ label: string; value: LoopItem['scope'] }> = [
  { label: 'Mine', value: 'mine' },
  { label: 'Friends', value: 'friends' },
  { label: 'Everyone', value: 'everyone' },
];

export function AppPlay({ nav, feed }: Props) {
  const [scopeLabel, setScopeLabel] = useState('Mine');
  const scope = SCOPES.find(s => s.label === scopeLabel)?.value ?? 'mine';

  const loops = feed.activity.filter((item): item is LoopItem => item.type === 'loop' && item.scope === scope);

  return (
    <Stagger className="phone-scroll">
      <StaggerItem className="app-header">
        <span className="app-header__title">Play</span>
        <SegmentedControl options={SCOPES.map(s => s.label)} value={scopeLabel} onChange={setScopeLabel} layoutId="seg-play" />
      </StaggerItem>

      {/* Bands */}
      <StaggerItem className="app-section app-section--loose" style={{ paddingBottom: 6 }}>
        <BandsStrip
          bands={feed.bands}
          onSelect={bandId => nav.navigate('band-space', { bandId })}
          onCreate={name => nav.navigate('band-space', { bandId: feed.addBand(name) })}
        />
      </StaggerItem>

      {/* Compose */}
      <StaggerItem className="app-section app-section--loose">
        <Composer
          placeholder="Leave a loop open…"
          onPost={title => feed.addLoop({ title, scope })}
        />
      </StaggerItem>

      {/* Loop feed */}
      <StaggerItem group style={{ flex: 1, padding: '0 20px' }}>
        {loops.map(item => (
          <FeedCard
            key={item.id}
            item={item}
            onLike={feed.toggleLike}
            onReact={feed.addReaction}
            onAddPart={feed.toggleAddPart}
            onLoadToPedal={feed.toggleLoadedToPedal}
            onOpenDetail={id => nav.navigate('loop-detail', { loopId: id, from: 'app-play' })}
            onShare={id => nav.navigate('share-preview', { loopId: id })}
          />
        ))}

        {scope === 'mine' && loops.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__icon" />
            <div className="empty-state__title">You haven't opened a loop yet</div>
            <div className="empty-state__body">
              Make a loop on your Teleport pedal, or leave one open above —
              it shows up here instantly.
            </div>
          </div>
        )}
      </StaggerItem>

      {/* Loop someone in — incentive teaser */}
      <StaggerItem className="app-section app-section--loose">
        <button type="button" className="teaser-card" onClick={() => nav.navigate('loop-someone-in')}>
          <span className="teaser-card__icon"><RiUserAddLine size={18} /></span>
          <span className="teaser-card__label">Loop someone in</span>
          <RiArrowRightSLine size={18} />
        </button>
      </StaggerItem>

      <BottomTabBar active="play" nav={nav} />
    </Stagger>
  );
}
