import { RiNotification3Line } from '@remixicon/react';

interface Props {
  hasUnread: boolean;
  onClick: () => void;
}

export function NotificationBell({ hasUnread, onClick }: Props) {
  return (
    <button className="app-header__avatar" style={{ position: 'relative' }} onClick={onClick} aria-label="Notifications">
      <RiNotification3Line size={16} color="var(--muted)" />
      {hasUnread && <span className="notif-dot" />}
    </button>
  );
}
