import { seededRandom } from '../utils/seededRandom';

interface Props {
  seed: string;
  size?: number;
}

export function SvgPattern({ seed, size = 280 }: Props) {
  const rand = seededRandom(seed);
  const shapeCount = 7 + Math.floor(rand() * 4);
  const shapes = Array.from({ length: shapeCount }, (_, i) => {
    const isLine = rand() > 0.5;
    const cx = rand() * size;
    const cy = rand() * size;
    const stroke = rand() > 0.5 ? 'var(--ink)' : 'var(--muted)';
    if (isLine) {
      const angle = rand() * Math.PI * 2;
      const len = size * (0.2 + rand() * 0.5);
      const x2 = cx + Math.cos(angle) * len;
      const y2 = cy + Math.sin(angle) * len;
      return <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke={stroke} strokeWidth={1.5} opacity={0.6} />;
    }
    const r = 6 + rand() * 30;
    return <circle key={i} cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth={1.5} fill="none" opacity={0.6} />;
  });

  return (
    <svg width="100%" height={size} viewBox={`0 0 ${size} ${size}`} style={{ background: 'var(--bg)', display: 'block' }}>
      {shapes}
    </svg>
  );
}
