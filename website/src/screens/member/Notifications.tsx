import { useEffect } from 'react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import type { AppNav } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore }

export function Notifications({ nav, feed }: Props) {
  useEffect(() => {
    feed.markNotificationsRead();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Notifications" onBack={() => nav.navigate('app-home')} />

      <StaggerItem className="app-section" group style={{ flex: 1 }}>
        {feed.notifications.map(n => (
          <StaggerItem
            key={n.id}
            className="app-list-item"
            onClick={() => n.loopId && nav.navigate('loop-detail', { loopId: n.loopId, from: 'notifications' })}
            style={{ cursor: n.loopId ? 'pointer' : 'default' }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: n.read ? 'transparent' : 'var(--ink)', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, color: 'var(--ink)' }}>{n.text}</div>
              <div className="t-caption t-muted">{n.time}</div>
            </div>
          </StaggerItem>
        ))}

        {feed.notifications.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__title">Nothing new yet</div>
          </div>
        )}
      </StaggerItem>

      <BottomTabBar active="home" nav={nav} />
    </Stagger>
  );
}
