interface PlaceholderProps {
  label: string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
}

export function Placeholder({ label, height = 200, width = '100%', style }: PlaceholderProps) {
  return (
    <div
      className="placeholder-block"
      style={{ height, width, ...style }}
    >
      [ {label} ]
    </div>
  );
}
