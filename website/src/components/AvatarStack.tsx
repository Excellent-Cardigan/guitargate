import type { LoopPart } from '../types';

interface Props {
  parts: LoopPart[];
  size?: number;
}

/** Overlapping avatar circles showing who's added a part (and on what instrument) to an open loop. */
export function AvatarStack({ parts, size = 20 }: Props) {
  if (parts.length === 0) return null;
  const shown = parts.slice(0, 4);
  const overflow = parts.length - shown.length;
  const label = (p: LoopPart) => `${p.name} (${p.instrument})`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'flex' }}>
        {shown.map((p, i) => (
          <div
            key={p.name + i}
            title={label(p)}
            style={{
              width: size, height: size, borderRadius: '50%',
              background: 'var(--line)', border: '2px solid var(--surface)',
              marginLeft: i === 0 ? 0 : -size * 0.35,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: size * 0.4, color: 'var(--muted)', fontWeight: 600,
            }}
          >
            {p.name.charAt(0)}
          </div>
        ))}
      </div>
      <span className="t-caption t-muted">
        {overflow > 0
          ? `${shown.map(label).join(', ')} +${overflow} added a part`
          : `${shown.map(label).join(', ')} added a part`}
      </span>
    </div>
  );
}
