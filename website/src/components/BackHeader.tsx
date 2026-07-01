import { RiArrowLeftSLine } from '@remixicon/react';
import { StaggerItem } from './motion';

interface Props {
  title: string;
  onBack: () => void;
}

/** Shared "‹ Title" header used by drill-down screens (Loop Detail, Band Space, Notifications, Live View). */
export function BackHeader({ title, onBack }: Props) {
  return (
    <StaggerItem className="app-header">
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink)' }}>
        <RiArrowLeftSLine size={22} />
        <span className="app-header__title" style={{ fontSize: 18 }}>{title}</span>
      </button>
    </StaggerItem>
  );
}
