interface Props {
  seed: string;
  size?: number;
}

// Deterministic string hash -> seeded PRNG (mulberry32), so the same loop id
// always renders the same placeholder pattern.
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

export function SvgPattern({ seed, size = 280 }: Props) {
  const rand = mulberry32(hashSeed(seed));
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
