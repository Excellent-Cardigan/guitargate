interface Props {
  seed: string;
  height?: number;
}

// Same deterministic hash -> seeded PRNG approach as SvgPattern, so a given
// loop always renders the same waveform shape instead of a random one on every render.
function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const WIDTH = 400;

export function Waveform({ seed, height = 40 }: Props) {
  const rand = mulberry32(hashSeed(seed));
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
