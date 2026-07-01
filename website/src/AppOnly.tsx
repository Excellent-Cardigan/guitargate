import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import type { AppNav, NavParams, Screen } from './types';
import { useFeedStore } from './state/feedStore';
import { PhoneFrame } from './components/PhoneFrame';
import { AppHome } from './screens/member/AppHome';
import { AppLearn } from './screens/member/AppLearn';
import { AppPlay } from './screens/member/AppPlay';
import { AppPedals } from './screens/member/AppPedals';
import { AppAccount } from './screens/member/AppAccount';
import { AppSignIn } from './screens/member/AppSignIn';
import { Lesson } from './screens/member/Lesson';
import { Library } from './screens/member/Library';
import { Billing } from './screens/member/Billing';
import { LoopDetail } from './screens/member/LoopDetail';
import { SharePreview } from './screens/member/SharePreview';
import { BandSpace } from './screens/member/BandSpace';
import { LoopSomeoneIn } from './screens/member/LoopSomeoneIn';
import { LiveView } from './screens/member/LiveView';
import { Notifications } from './screens/member/Notifications';

/**
 * App-only root. Renders the member phone experience and nothing else —
 * no public website screens are imported, so they can never be reached or
 * bundled. This is the entry mounted at `/` for the dedicated app URL.
 */
export default function AppOnly() {
  const [screen, setScreen] = useState<Screen>('app-home');
  const [params, setParams] = useState<NavParams>({});
  const feed = useFeedStore();

  const navigate = (next: Screen, nextParams: NavParams = {}) => {
    setScreen(next);
    setParams(nextParams);
    window.scrollTo(0, 0);
  };

  const nav: AppNav = { navigate, currentScreen: screen, params };

  function renderContent() {
    switch (screen) {
      case 'app-learn':   return <AppLearn nav={nav} />;
      case 'app-play':    return <AppPlay nav={nav} feed={feed} />;
      case 'app-pedals':  return <AppPedals nav={nav} />;
      case 'app-account': return <AppAccount nav={nav} />;
      case 'app-signin':  return <AppSignIn nav={nav} />;
      case 'lesson':      return <Lesson nav={nav} />;
      case 'library':     return <Library nav={nav} />;
      case 'billing':     return <Billing nav={nav} />;
      case 'loop-detail': return <LoopDetail nav={nav} feed={feed} />;
      case 'share-preview': return <SharePreview nav={nav} feed={feed} />;
      case 'band-space':  return <BandSpace nav={nav} feed={feed} />;
      case 'loop-someone-in': return <LoopSomeoneIn nav={nav} />;
      case 'live-view':   return <LiveView nav={nav} />;
      case 'notifications': return <Notifications nav={nav} feed={feed} />;
      // Any public screen target (or unknown) resolves back into the app.
      case 'app-home':
      default:            return <AppHome nav={nav} feed={feed} />;
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <PhoneFrame>{renderContent()}</PhoneFrame>
    </MotionConfig>
  );
}
