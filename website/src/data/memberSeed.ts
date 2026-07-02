import type { Member } from '../types';

/**
 * Minimal member directory — names already established in the activity feed
 * (`feedSeed.ts`), given just enough shape (instrument, band) for search
 * results. Not a full profile model — that belongs to messaging/collaboration.
 */
export const MEMBERS: Member[] = [
  { id: 'member-mara', name: 'Mara T.', instrument: 'Electric guitar', bandId: 'band-1' },
  { id: 'member-devon', name: 'Devon K.', instrument: 'Bass' },
  { id: 'member-priya', name: 'Priya S.', instrument: 'Acoustic guitar' },
  { id: 'member-jonah', name: 'Jonah R.', instrument: 'Electric guitar', bandId: 'band-1' },
  { id: 'member-elena', name: 'Elena V.', instrument: 'Electric guitar', bandId: 'band-2' },
  { id: 'member-sam', name: 'Sam W.', instrument: 'Drums' },
];
