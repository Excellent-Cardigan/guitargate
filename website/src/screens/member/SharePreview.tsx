import { RiQrCodeLine, RiInstagramLine, RiMessage3Line, RiLinksLine } from '@remixicon/react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import { SvgPattern } from '../../components/SvgPattern';
import type { AppNav } from '../../types';
import type { FeedStore } from '../../state/feedStore';

interface Props { nav: AppNav; feed: FeedStore }

export function SharePreview({ nav, feed }: Props) {
  const loop = feed.activity.find(item => item.id === nav.params.loopId && item.type === 'loop');

  return (
    <Stagger className="phone-scroll">
      <BackHeader
        title="Share"
        onBack={() => nav.navigate('loop-detail', { loopId: nav.params.loopId, from: nav.params.from })}
      />

      <StaggerItem className="share-preview__card">
        <div className="share-preview__pattern">
          <SvgPattern seed={loop?.id ?? 'default'} size={280} />
        </div>
        <div className="share-preview__body">
          <div className="share-preview__title">{loop?.type === 'loop' ? loop.title : 'Open loop'}</div>
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Come play this
          </button>
        </div>
      </StaggerItem>

      <StaggerItem className="share-preview__link-box">
        <RiQrCodeLine size={20} color="var(--muted)" />
        <span>guitargate.app/loop/{loop?.id ?? '…'}</span>
      </StaggerItem>

      <StaggerItem className="share-preview__targets">
        <span className="share-preview__target-pill"><RiInstagramLine size={13} /> Instagram</span>
        <span className="share-preview__target-pill"><RiMessage3Line size={13} /> Messages</span>
        <span className="share-preview__target-pill"><RiLinksLine size={13} /> Copy link</span>
      </StaggerItem>

      <BottomTabBar active="play" nav={nav} />
    </Stagger>
  );
}
