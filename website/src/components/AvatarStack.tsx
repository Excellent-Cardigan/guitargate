interface Props {
  names: string[];
  size?: number;
}

/** Overlapping avatar circles showing who's added a part to an open loop. */
export function AvatarStack({ names, size = 20 }: Props) {
  if (names.length === 0) return null;
  const shown = names.slice(0, 4);
  const overflow = names.length - shown.length;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'flex' }}>
        {shown.map((name, i) => (
          <div
            key={name + i}
            title={name}
            style={{
              width: size, height: size, borderRadius: '50%',
              background: 'var(--line)', border: '2px solid var(--surface)',
              marginLeft: i === 0 ? 0 : -size * 0.35,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: size * 0.4, color: 'var(--muted)', fontWeight: 600,
            }}
          >
            {name.charAt(0)}
          </div>
        ))}
      </div>
      <span className="t-caption t-muted">
        {overflow > 0 ? `${shown.join(', ')} +${overflow} added a part` : `${names.join(', ')} added a part`}
      </span>
    </div>
  );
}
