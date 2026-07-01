import { seededRandom } from '../utils/seededRandom';

interface Props {
  seed: string;
  height?: number;
}

const WIDTH = 400;

export function Waveform({ seed, height = 40 }: Props) {
  const rand = seededRandom(seed);
  const pointCount = 40;
  const midY = height / 2;
  const maxAmp = midY - 2;

  // Walk a seeded random value across the width, smoothed — one continuous trace, no mirroring.
  let y = midY;
  const points: string[] = [];
  for (let i = 0; i <= pointCount; i++) {
    const x = (i / pointCount) * WIDTH;
    const target = midY + (rand() * 2 - 1) * maxAmp;
    y = y + (target - y) * 0.5;
    points.push(`${x},${y}`);
  }

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${WIDTH} ${height}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      <polyline points={points.join(' ')} fill="none" stroke="var(--ink)" strokeWidth={1.3} strokeLinejoin="round" strokeLinecap="round" opacity={0.75} />
    </svg>
  );
}
