import { StaggerItem } from './motion';

interface Props {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ToggleRow({ label, description, checked, onChange }: Props) {
  return (
    <StaggerItem className="toggle-row">
      <div className="toggle-row__text">
        <div className="toggle-row__label">{label}</div>
        {description && <div className="toggle-row__description">{description}</div>}
      </div>
      <button
        type="button"
        className={`toggle-switch${checked ? ' toggle-switch--on' : ''}`}
        onClick={() => onChange(!checked)}
        aria-pressed={checked}
        aria-label={label}
      >
        <span className="toggle-switch__thumb" />
      </button>
    </StaggerItem>
  );
}
