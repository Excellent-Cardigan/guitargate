import { useRef, useState } from 'react';
import type { ActivityItem, Band, LoopItem, NotificationItem, ReactionMessage } from '../types';
import { SEED_ACTIVITY, SEED_BANDS, SEED_NOTIFICATIONS } from '../data/feedSeed';

export interface NewLoopInput {
  title: string;
  scope: LoopItem['scope'];
  bandId?: string;
  bandName?: string;
}

export interface FeedStore {
  bands: Band[];
  activity: ActivityItem[];
  notifications: NotificationItem[];
  addLoop: (input: NewLoopInput) => void;
  addBand: (name: string) => string;
  toggleLike: (id: string) => void;
  addReaction: (id: string, text: string) => void;
  toggleAddPart: (id: string) => void;
  toggleLoadedToPedal: (id: string) => void;
  markNotificationsRead: () => void;
}

export function useFeedStore(): FeedStore {
  const [bands, setBands] = useState<Band[]>(SEED_BANDS);
  const [activity, setActivity] = useState<ActivityItem[]>(SEED_ACTIVITY);
  const [notifications, setNotifications] = useState<NotificationItem[]>(SEED_NOTIFICATIONS);
  const nextId = useRef(1);
  const nextBandId = useRef(1);

  const addBand = (name: string) => {
    const id = `your-band-${nextBandId.current++}`;
    setBands(prev => [...prev, { id, name, memberCount: 1 }]);
    return id;
  };

  const addLoop = (input: NewLoopInput) => {
    const loop: LoopItem = {
      id: `you-loop-${nextId.current++}`,
      type: 'loop',
      user: 'You',
      time: 'Just now',
      title: input.title,
      bandId: input.bandId,
      bandName: input.bandName,
      hearts: 0,
      liked: false,
      reactions: [],
      contributors: [],
      loadedToPedal: false,
      scope: input.scope,
    };
    setActivity(prev => [loop, ...prev]);
  };

  const updateLoop = (id: string, updater: (loop: LoopItem) => LoopItem) => {
    setActivity(prev => prev.map(item => (item.id === id && item.type === 'loop' ? updater(item) : item)));
  };

  const toggleLike = (id: string) => {
    setActivity(prev => prev.map(item => {
      if (item.id !== id) return item;
      const liked = !item.liked;
      return { ...item, liked, hearts: item.hearts + (liked ? 1 : -1) };
    }));
  };

  const addReaction = (id: string, text: string) => {
    if (!text.trim()) return;
    const reaction: ReactionMessage = { user: 'You', text: text.trim() };
    updateLoop(id, loop => ({ ...loop, reactions: [...loop.reactions, reaction] }));
  };

  const toggleAddPart = (id: string) => {
    updateLoop(id, loop => ({
      ...loop,
      contributors: loop.contributors.includes('You')
        ? loop.contributors.filter(c => c !== 'You')
        : [...loop.contributors, 'You'],
    }));
  };

  const toggleLoadedToPedal = (id: string) => {
    updateLoop(id, loop => ({ ...loop, loadedToPedal: !loop.loadedToPedal }));
  };

  const markNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return {
    bands, activity, notifications,
    addLoop, addBand, toggleLike, addReaction, toggleAddPart, toggleLoadedToPedal, markNotificationsRead,
  };
}
