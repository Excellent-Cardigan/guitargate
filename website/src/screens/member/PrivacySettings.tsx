import { useState } from 'react';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import { ToggleRow } from '../../components/ToggleRow';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function PrivacySettings({ nav }: Props) {
  const [showActivity, setShowActivity] = useState(true);
  const [showStreak, setShowStreak] = useState(true);

  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Privacy & data" onBack={() => nav.navigate('app-account')} />

      <StaggerItem className="menu-group" group>
        <ToggleRow
          label="Show my activity to friends"
          description="Loops and reactions you post to Friends and Everyone"
          checked={showActivity}
          onChange={setShowActivity}
        />
        <ToggleRow
          label="Show my practice streak"
          description="Visible on your profile to bandmates"
          checked={showStreak}
          onChange={setShowStreak}
        />
      </StaggerItem>

      <StaggerItem className="menu-group-label">Data</StaggerItem>
      <StaggerItem className="menu-group" group>
        <div className="terminal-row" onClick={() => {/* download my data — terminal */}}>
          Download my data
        </div>
        <div className="terminal-row terminal-row--danger" onClick={() => {/* delete account — terminal */}}>
          Delete account
        </div>
      </StaggerItem>
    </Stagger>
  );
}
