export interface LiveSession {
  id: string;
  title: string;
  host: string;
  watching: number;
}

export const LIVE_SESSIONS: LiveSession[] = [
  { id: 'live-1', title: 'Blues Jam', host: 'Jake M.', watching: 34 },
  { id: 'live-2', title: 'Official Lesson', host: 'Michael P.', watching: 112 },
];
