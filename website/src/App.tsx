import { useState } from 'react';
import type { AppNav, NavParams, Screen } from './types';
import { useFeedStore } from './state/feedStore';
import { useProfileStore } from './state/profileStore';
import { PhoneFrame } from './components/PhoneFrame';
import { DesktopFrame } from './components/DesktopFrame';
import { BrandHome } from './screens/public/BrandHome';
import { TeleportPage } from './screens/public/TeleportPage';
import { VoxboxPage } from './screens/public/VoxboxPage';
import { MembershipPage } from './screens/public/MembershipPage';
import { CheckoutPage } from './screens/public/CheckoutPage';
import { StorePage } from './screens/public/StorePage';
import { OnboardingPage } from './screens/public/OnboardingPage';
import { AppHome } from './screens/member/AppHome';
import { AppLearn } from './screens/member/AppLearn';
import { AppPlay } from './screens/member/AppPlay';
import { AppPedals } from './screens/member/AppPedals';
import { AppAccount } from './screens/member/AppAccount';
import { Lesson } from './screens/member/Lesson';
import { Library } from './screens/member/Library';
import { Billing } from './screens/member/Billing';
import { LoopDetail } from './screens/member/LoopDetail';
import { SharePreview } from './screens/member/SharePreview';
import { BandSpace } from './screens/member/BandSpace';
import { LoopSomeoneIn } from './screens/member/LoopSomeoneIn';
import { LiveView } from './screens/member/LiveView';
import { Notifications } from './screens/member/Notifications';

export default function App() {
  const [screen, setScreen] = useState<Screen>('brand-home');
  const [params, setParams] = useState<NavParams>({});
  const feed = useFeedStore();
  const profile = useProfileStore();

  const navigate = (next: Screen, nextParams: NavParams = {}) => {
    setScreen(next);
    setParams(nextParams);
    window.scrollTo(0, 0);
  };

  const nav: AppNav = {
    navigate,
    currentScreen: screen,
    params,
  };

  function renderContent() {
    switch (screen) {
      case 'brand-home':  return <DesktopFrame><BrandHome nav={nav} /></DesktopFrame>;
      case 'teleport':    return <DesktopFrame><TeleportPage nav={nav} /></DesktopFrame>;
      case 'voxbox':      return <DesktopFrame><VoxboxPage nav={nav} /></DesktopFrame>;
      case 'membership':  return <DesktopFrame><MembershipPage nav={nav} /></DesktopFrame>;
      case 'checkout':    return <DesktopFrame><CheckoutPage nav={nav} /></DesktopFrame>;
      case 'store':       return <DesktopFrame><StorePage nav={nav} /></DesktopFrame>;
      case 'onboarding':  return <DesktopFrame><OnboardingPage nav={nav} /></DesktopFrame>;
      case 'app-home':    return <PhoneFrame><AppHome nav={nav} feed={feed} /></PhoneFrame>;
      case 'app-learn':   return <PhoneFrame><AppLearn nav={nav} /></PhoneFrame>;
      case 'app-play':    return <PhoneFrame><AppPlay nav={nav} feed={feed} /></PhoneFrame>;
      case 'app-pedals':  return <PhoneFrame><AppPedals nav={nav} /></PhoneFrame>;
      case 'app-account': return <PhoneFrame><AppAccount nav={nav} profile={profile} /></PhoneFrame>;
      case 'lesson':      return <PhoneFrame><Lesson nav={nav} /></PhoneFrame>;
      case 'library':     return <PhoneFrame><Library nav={nav} /></PhoneFrame>;
      case 'billing':     return <PhoneFrame><Billing nav={nav} /></PhoneFrame>;
      case 'loop-detail': return <PhoneFrame><LoopDetail nav={nav} feed={feed} /></PhoneFrame>;
      case 'share-preview': return <PhoneFrame><SharePreview nav={nav} feed={feed} /></PhoneFrame>;
      case 'band-space':  return <PhoneFrame><BandSpace nav={nav} feed={feed} /></PhoneFrame>;
      case 'loop-someone-in': return <PhoneFrame><LoopSomeoneIn nav={nav} /></PhoneFrame>;
      case 'live-view':   return <PhoneFrame><LiveView nav={nav} /></PhoneFrame>;
      case 'notifications': return <PhoneFrame><Notifications nav={nav} feed={feed} /></PhoneFrame>;
    }
  }

  return <>{renderContent()}</>;
}
