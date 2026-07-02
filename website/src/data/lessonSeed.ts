import type { Lesson } from '../types';

/**
 * Canonical lesson/song library — the full set shown in `Library`. `AppLearn`
 * shows a curated preview (first few of each category) linking out to the
 * full list, matching how it behaved before this was consolidated from three
 * separate inline arrays.
 */
export const LESSONS: Lesson[] = [
  { id: 'cliffs-of-dover', title: 'Cliffs of Dover', category: 'songs', artist: 'Eric Johnson', level: 'Intermediate', mins: 24 },
  { id: 'little-wing', title: 'Little Wing', category: 'songs', artist: 'Hendrix', level: 'Beginner', mins: 18 },
  { id: 'black-magic-woman', title: 'Black Magic Woman', category: 'songs', artist: 'Santana', level: 'Intermediate', mins: 31 },
  { id: 'europa', title: 'Europa', category: 'songs', artist: 'Santana', level: 'Advanced', mins: 38 },
  { id: 'texas-blues-shuffle', title: 'Texas Blues Shuffle', category: 'songs', artist: 'Stevie Ray Vaughan', level: 'Intermediate', mins: 22 },

  { id: 'pentatonic-positions', title: 'Pentatonic Positions', category: 'techniques', artist: 'Technique', level: 'Beginner', mins: 12 },
  { id: 'vibrato-technique', title: 'Vibrato Technique', category: 'techniques', artist: 'Technique', level: 'Intermediate', mins: 16 },
  { id: 'sweep-picking-basics', title: 'Sweep Picking Basics', category: 'techniques', artist: 'Technique', level: 'Advanced', mins: 27 },
  { id: 'alternate-picking-basics', title: 'Alternate Picking Basics', category: 'techniques', artist: 'Technique', level: 'Beginner', mins: 10 },

  { id: 'blues-essentials', title: 'Blues Essentials', category: 'paths', artist: 'Path', level: '12 lessons', mins: 0 },
  { id: 'rock-foundations', title: 'Rock Foundations', category: 'paths', artist: 'Path', level: '10 lessons', mins: 0 },
  { id: 'fingerstyle', title: 'Fingerstyle', category: 'paths', artist: 'Path', level: '9 lessons', mins: 0 },
  { id: 'lead-guitar', title: 'Lead Guitar', category: 'paths', artist: 'Path', level: '11 lessons', mins: 0 },

  { id: 'blues-jam-replay', title: 'Blues Jam — replay', category: 'live', artist: 'Jake M.', level: 'Replay', mins: 42 },
  { id: 'official-lesson-replay', title: 'Official Lesson — replay', category: 'live', artist: 'Michael P.', level: 'Replay', mins: 35 },
];

export function lessonMeta(lesson: Lesson): string {
  if (lesson.category === 'paths') return `Path · ${lesson.level}`;
  if (lesson.category === 'live') return `Live replay · ${lesson.artist} · ${lesson.mins} min`;
  return `${lesson.artist} · ${lesson.level} · ${lesson.mins} min`;
}
