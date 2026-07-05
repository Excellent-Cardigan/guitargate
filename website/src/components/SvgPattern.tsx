import { hashSeed, seededRandom } from '../utils/seededRandom';
import { PATTERNS, PATTERN_TILE_SIZE } from '../assets/patterns/patternData';

interface Props {
  seed: string;
  size?: number;
  /** width ÷ height of the box this fills — widens the viewBox so tiles repeat
   *  more across than down instead of being stretched out of shape. */
  aspect?: number;
}

// Soft greys between --muted (#8C8784) and --ink (#242321) — stays within
// the existing grayscale tokens, just gives each pattern instance its own tone.
const GREY_FILLS = ['#2B2A28', '#3D3B38', '#54514D', '#6B6763', '#8C8784'];

/**
 * Tiles one of the three brand swoosh-glyph patterns (src/assets/patterns),
 * each instance getting its own seeded scale and grey tone so repeated
 * placeholders don't all look identical.
 */
export function SvgPattern({ seed, size = 280, aspect = 1 }: Props) {
  const rand = seededRandom(seed);
  const paths = PATTERNS[Math.floor(rand() * PATTERNS.length)];
  const scale = 0.08 + rand() * 0.1; // 0.08x – 0.18x the native tile size
  const fill = GREY_FILLS[Math.floor(rand() * GREY_FILLS.length)];
  const tileSize = PATTERN_TILE_SIZE * scale;
  const viewBoxWidth = size * aspect;
  const patternId = `svg-pattern-${hashSeed(seed)}`;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxWidth} ${size}`} style={{ background: 'var(--bg)', display: 'block' }}>
      <defs>
        <pattern id={patternId} patternUnits="userSpaceOnUse" width={tileSize} height={tileSize}>
          <svg viewBox={`0 0 ${PATTERN_TILE_SIZE} ${PATTERN_TILE_SIZE}`} width={tileSize} height={tileSize}>
            {paths.map((d, i) => (
              <path key={i} d={d} fill={fill} />
            ))}
          </svg>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity={0.5} />
    </svg>
  );
}
