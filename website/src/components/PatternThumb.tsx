import { SvgPattern } from './SvgPattern';

interface Props {
  seed: string;
  height: number;
  radius?: number;
  style?: React.CSSProperties;
}

/** Monoline generative-pattern thumbnail — same look as the Share Preview card, reused for course/lesson thumbnails. */
export function PatternThumb({ seed, height, radius = 6, style }: Props) {
  return (
    <div style={{ height, borderRadius: radius, overflow: 'hidden', border: '1px solid var(--line)', flexShrink: 0, ...style }}>
      <SvgPattern seed={seed} size={height} />
    </div>
  );
}
