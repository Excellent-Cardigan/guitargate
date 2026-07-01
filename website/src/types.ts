export type Screen =
  | 'brand-home'
  | 'teleport'
  | 'voxbox'
  | 'membership'
  | 'checkout'
  | 'store'
  | 'onboarding'
  | 'app-home'
  | 'app-learn'
  | 'app-play'
  | 'app-pedals'
  | 'app-account'
  | 'lesson'
  | 'library'
  | 'billing'
  | 'app-signin'
  | 'loop-detail'
  | 'band-space'
  | 'share-preview'
  | 'loop-someone-in'
  | 'live-view'
  | 'notifications';

export interface NavParams {
  loopId?: string;
  bandId?: string;
  liveId?: string;
}

export interface AppNav {
  navigate: (screen: Screen, params?: NavParams) => void;
  currentScreen: Screen;
  params: NavParams;
}

export const PHONE_SCREENS: Screen[] = [
  'app-home', 'app-learn', 'app-play', 'app-pedals', 'app-account',
];

export interface ReactionMessage {
  user: string;
  text: string;
}

export interface Band {
  id: string;
  name: string;
  memberCount: number;
}

export interface LoopItem {
  id: string;
  type: 'loop';
  user: string;
  time: string;
  title: string;
  bandId?: string;
  bandName?: string;
  hearts: number;
  liked: boolean;
  reactions: ReactionMessage[];
  /** Names of members who've added their own part to this open loop — "You" if the current member has. */
  contributors: string[];
  loadedToPedal: boolean;
  scope: 'mine' | 'friends' | 'everyone';
}

export interface LessonCompletionItem {
  id: string;
  type: 'lesson-completion';
  user: string;
  time: string;
  lessonTitle: string;
  hearts: number;
  liked: boolean;
}

export type ActivityItem = LoopItem | LessonCompletionItem;

export interface NotificationItem {
  id: string;
  text: string;
  time: string;
  loopId?: string;
  read: boolean;
}
