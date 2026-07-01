import { StaggerItem } from './motion';

interface Props {
  onCreateAccount: () => void;
}

/** Persistent nudge shown while browsing as a guest — not a hard wall. */
export function GuestBanner({ onCreateAccount }: Props) {
  return (
    <StaggerItem className="guest-banner" onClick={onCreateAccount}>
      <span className="guest-banner__text">
        Browsing as a guest — create an account to save your progress and connect your pedal
      </span>
      <span>→</span>
    </StaggerItem>
  );
}
