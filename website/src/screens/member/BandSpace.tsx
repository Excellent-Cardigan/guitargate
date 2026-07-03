import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import { FeedCard } from '../../components/FeedCard';
import { Composer } from '../../components/Composer';
import type { AppNav, LoopItem } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore }

export function BandSpace({ nav, feed }: Props) {
  const band = feed.bands.find(b => b.id === nav.params.bandId);
  const loops = feed.activity.filter(
    (item): item is LoopItem => item.type === 'loop' && item.bandId === nav.params.bandId,
  );

  return (
    <Stagger className="phone-scroll">
      <BackHeader title={band?.name ?? 'Band'} onBack={() => nav.navigate('app-play')} />

      <StaggerItem className="app-section app-section--loose">
        <Composer
          placeholder="Leave a loop open for the band…"
          onPost={title => feed.addLoop({ title, scope: 'mine', bandId: nav.params.bandId, bandName: band?.name })}
        />
      </StaggerItem>

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

        {loops.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__icon" />
            <div className="empty-state__title">No loops open here yet</div>
            <div className="empty-state__body">Leave one open above to get {band?.name ?? 'the band'} started.</div>
          </div>
        )}
      </StaggerItem>

      <BottomTabBar active="play" nav={nav} />
    </Stagger>
  );
}
