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
  | 'notifications'
  | 'signup'
  | 'login'
  | 'forgot-password'
  | 'edit-profile'
  | 'notification-settings'
  | 'privacy-settings'
  | 'help-support'
  | 'app-search'
  | 'stats';

export interface NavParams {
  loopId?: string;
  bandId?: string;
  liveId?: string;
  /** Screen to return to on back — lets Loop Detail (and anything it opens, like Share) round-trip to wherever it was opened from. */
  from?: Screen;
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

/** One contributor's part in an open loop. `name` is the member's display name
 *  ('You' for the current member — same convention used elsewhere). `instrument`
 *  is a free-text tag (e.g. 'Guitar', 'Drums', 'Bass'), matching Member.instrument's
 *  free-text convention. */
export interface LoopPart {
  name: string;
  instrument: string;
}

/** A loop holds at most this many parts (mirrors the Teleport pedal's 4-track model). */
export const MAX_LOOP_PARTS = 4;

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
  /** Parts contributed to this open loop so far (max MAX_LOOP_PARTS), any order.
   *  A part named 'You' means the current member contributed it. Drums is just an
   *  instrument tag a contributor can pick — not a reserved slot. */
  parts: LoopPart[];
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

export interface Profile {
  firstName: string;
  lastName: string;
  username: string;
  instrument: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: 'paths' | 'songs' | 'techniques' | 'live';
  /** Artist/instructor for songs & techniques, "Path" for paths, replay host for live. */
  artist: string;
  /** Free-text level for songs/techniques/live ("Beginner"/"Intermediate"/"Advanced"/"Replay"), lesson count for paths ("12 lessons"). */
  level: string;
  mins: number;
}

export interface Member {
  id: string;
  name: string;
  instrument: string;
  bandId?: string;
}
