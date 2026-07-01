import type { ActivityItem, Band, NotificationItem } from '../types';

export const SEED_BANDS: Band[] = [
  { id: 'band-1', name: 'Cliffside Sessions', memberCount: 4 },
  { id: 'band-2', name: 'Thursday Practice', memberCount: 3 },
  { id: 'band-3', name: 'Fret & Found', memberCount: 5 },
];

export const SEED_ACTIVITY: ActivityItem[] = [
  {
    id: 'loop-1', type: 'loop', user: 'Mara T.', time: '2h ago',
    title: 'Cliffs of Dover — bridge idea', bandId: 'band-1', bandName: 'Cliffside Sessions',
    hearts: 12, liked: false, contributors: ['Jonah', 'Sam'], loadedToPedal: false, scope: 'everyone',
    reactions: [{ user: 'Jonah', text: 'that bend is clean' }],
  },
  {
    id: 'loop-2', type: 'loop', user: 'Devon K.', time: '5h ago',
    title: 'Little Wing — rhythm pass',
    hearts: 8, liked: false, contributors: [], loadedToPedal: false, scope: 'everyone',
    reactions: [],
  },
  {
    id: 'loop-3', type: 'loop', user: 'Priya S.', time: '1d ago',
    title: 'Vibrato Technique — slow practice loop',
    hearts: 15, liked: false, contributors: ['Sam'], loadedToPedal: false, scope: 'everyone',
    reactions: [{ user: 'Sam', text: 'needed this today' }],
  },
  {
    id: 'loop-4', type: 'loop', user: 'Jonah R.', time: '1d ago',
    title: 'Cliffside Sessions — outro sketch', bandId: 'band-1', bandName: 'Cliffside Sessions',
    hearts: 6, liked: false, contributors: [], loadedToPedal: false, scope: 'everyone',
    reactions: [],
  },
  {
    id: 'loop-5', type: 'loop', user: 'Elena V.', time: '2d ago',
    title: 'Thursday Practice — warm-up riff', bandId: 'band-2', bandName: 'Thursday Practice',
    hearts: 9, liked: false, contributors: ['Mara', 'Jonah', 'Devon'], loadedToPedal: false, scope: 'everyone',
    reactions: [{ user: 'Mara', text: 'love this tone' }],
  },
  {
    id: 'loop-6', type: 'loop', user: 'Sam W.', time: '3d ago',
    title: 'Little Wing — solo attempt #2',
    hearts: 4, liked: false, contributors: [], loadedToPedal: false, scope: 'everyone',
    reactions: [],
  },
  {
    id: 'loop-7', type: 'loop', user: 'Devon K.', time: '6h ago',
    title: 'Vibrato Technique — second try',
    hearts: 3, liked: false, contributors: [], loadedToPedal: false, scope: 'friends',
    reactions: [],
  },
  {
    id: 'loop-8', type: 'loop', user: 'Priya S.', time: '1d ago',
    title: 'Cliffs of Dover — intro only',
    hearts: 5, liked: false, contributors: [], loadedToPedal: false, scope: 'friends',
    reactions: [{ user: 'You', text: 'nice phrasing' }],
  },
  {
    id: 'loop-9', type: 'loop', user: 'Elena V.', time: '2d ago',
    title: 'Fret & Found — chord voicing idea', bandId: 'band-3', bandName: 'Fret & Found',
    hearts: 2, liked: false, contributors: [], loadedToPedal: false, scope: 'friends',
    reactions: [],
  },
  {
    id: 'lesson-1', type: 'lesson-completion', user: 'You', time: 'Today',
    lessonTitle: 'Vibrato Technique', hearts: 0, liked: false,
  },
];

export const SEED_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif-1', text: 'Jonah added a part to "Cliffs of Dover — bridge idea"', time: '1h ago', loopId: 'loop-1', read: false },
  { id: 'notif-2', text: 'Sam reacted to "Vibrato Technique — slow practice loop"', time: '4h ago', loopId: 'loop-3', read: false },
  { id: 'notif-3', text: 'Elena added a part to "Thursday Practice — warm-up riff"', time: '1d ago', loopId: 'loop-5', read: true },
];
