import { SvgPattern } from './SvgPattern';

interface Props {
  seed: string;
  height: number;
  /** Set this when the thumb isn't square (e.g. a fixed-width card) so the
   *  pattern tiles more across than down instead of letterboxing. */
  width?: number;
  radius?: number;
  style?: React.CSSProperties;
}

/** Monoline generative-pattern thumbnail — same look as the Share Preview card, reused for course/lesson thumbnails. */
export function PatternThumb({ seed, height, width, radius = 6, style }: Props) {
  return (
    <div style={{ height, width, borderRadius: radius, overflow: 'hidden', border: '1px solid var(--line)', flexShrink: 0, ...style }}>
      <SvgPattern seed={seed} size={height} aspect={width ? width / height : 1} />
    </div>
  );
}
