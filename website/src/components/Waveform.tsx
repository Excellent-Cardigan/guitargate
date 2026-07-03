import { seededRandom } from '../utils/seededRandom';

interface Props {
  seed: string;
  height?: number;
}

const WIDTH = 400;
const POINT_COUNT = 90;

export function Waveform({ seed, height = 40 }: Props) {
  const rand = seededRandom(seed);
  const midY = height / 2;
  const minAmp = height * 0.05;
  const maxAmp = midY - 1;

  // Walk a seeded, smoothed peak amplitude across the width — a rectified
  // envelope (mirrored above and below the zero line), the way DAWs render
  // an overview waveform, rather than a literal above/below sample trace.
  let amp = minAmp + (maxAmp - minAmp) * 0.4;
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= POINT_COUNT; i++) {
    const target = minAmp + rand() * (maxAmp - minAmp);
    amp = amp + (target - amp) * 0.5;
    const x = (i / POINT_COUNT) * WIDTH;
    top.push(`${x},${midY - amp}`);
    bottom.push(`${x},${midY + amp}`);
  }
  const path = `M ${top.join(' L ')} L ${bottom.reverse().join(' L ')} Z`;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${WIDTH} ${height}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      <path d={path} fill="var(--ink)" opacity={0.75} />
    </svg>
  );
}
