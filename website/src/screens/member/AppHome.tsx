import { RiUser3Line, RiPlayFill } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { FeedCard } from '../../components/FeedCard';
import { NotificationBell } from '../../components/NotificationBell';
import { LIVE_SESSIONS } from '../../data/liveSeed';
import { DAY_STREAK } from '../../data/statsSeed';
import ggLogo from '../../assets/logo/gg-horizontal-black.svg';
import type { AppNav, LoopItem } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore; isGuest?: boolean }

export function AppHome({ nav, feed, isGuest }: Props) {
  const hasUnread = feed.notifications.some(n => !n.read);
  const everyoneLoops = feed.activity.filter((item): item is LoopItem => item.type === 'loop' && item.scope === 'everyone').slice(0, 3);

  return (
    <Stagger className="phone-scroll">
      {/* App header */}
      <StaggerItem className="app-header">
        <img src={ggLogo} alt="Guitargate" style={{ height: 20 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <NotificationBell hasUnread={hasUnread} onClick={() => nav.navigate('notifications')} />
          <button
            className="app-header__avatar"
            onClick={() => nav.navigate(isGuest ? 'app-signin' : 'app-account')}
          >
            <RiUser3Line size={16} color="var(--muted)" />
          </button>
        </div>
      </StaggerItem>

      {/* Practice streak — same big-numeral treatment as the Stats screen, tappable through to the full stat picture */}
      <StaggerItem className="app-section" onClick={() => nav.navigate('stats')} style={{ cursor: 'pointer' }}>
        <StaggerItem className="stat-hero">
          <span className="stat-hero__num">{DAY_STREAK}</span>
          <span className="stat-hero__label">Day streak — keep it going</span>
        </StaggerItem>
      </StaggerItem>

      {/* Live now */}
      <StaggerItem className="app-section app-section--loose">
        <div className="app-section__label">Live now</div>
        <StaggerItem className="live-scroll" group>
          {LIVE_SESSIONS.map(item => (
            <StaggerItem key={item.id} className="live-card" onClick={() => nav.navigate('live-view', { liveId: item.id })}>
              <div className="live-card__thumb">
                <span className="badge badge-live live-card__badge" style={{ fontSize: 9, letterSpacing: '0.1em' }}>LIVE</span>
                <RiPlayFill size={20} color="var(--muted)" />
                <span className="live-card__cover-label">Cover art</span>
              </div>
              <div className="live-card__title">{item.title}</div>
              <div className="live-card__meta">{item.host} · {item.watching} watching</div>
            </StaggerItem>
          ))}
        </StaggerItem>
      </StaggerItem>

      {/* Continue */}
      <StaggerItem className="app-section app-section--loose">
        <div className="app-section__label">Continue where you left off</div>
        <StaggerItem className="continue-card" group>
          <StaggerItem className="continue-card__thumb">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted)' }}>Lesson</span>
          </StaggerItem>
          <StaggerItem className="continue-card__info">
            <div className="continue-card__title">Pentatonic Positions</div>
            <div className="continue-card__sub">Blues Essentials · Lesson 4 of 12</div>
            <div className="progress-bar">
              <div className="progress-bar__fill" style={{ width: '38%' }} />
            </div>
          </StaggerItem>
          <button
            className="play-btn-circle"
            onClick={() => nav.navigate('lesson')}
          >
            <RiPlayFill size={16} color="#fff" />
          </button>
        </StaggerItem>
      </StaggerItem>

      {/* What members are playing — a few Everyone-scope loops, given extra breathing room above
          it so it reads as "keep scrolling for more" rather than competing with Live Now/Continue */}
      {everyoneLoops.length > 0 && (
        <StaggerItem className="app-section app-section--loose" style={{ paddingTop: 56 }}>
          <div className="app-section__label">What members are playing</div>
          <StaggerItem group style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {everyoneLoops.map(item => (
              <FeedCard
                key={item.id}
                item={item}
                variant="home"
                onLike={feed.toggleLike}
                onReact={feed.addReaction}
                onOpenDetail={id => nav.navigate('loop-detail', { loopId: id, from: 'app-home' })}
              />
            ))}
          </StaggerItem>
        </StaggerItem>
      )}

      {/* Go play CTA */}
      <StaggerItem style={{ padding: '16px 20px 8px' }}>
        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => nav.navigate('app-play')}
        >
          Go to Play →
        </button>
      </StaggerItem>

      <BottomTabBar active="home" nav={nav} isGuest={isGuest} />
    </Stagger>
  );
}
