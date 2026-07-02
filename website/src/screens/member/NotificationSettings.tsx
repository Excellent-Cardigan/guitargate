import { useState } from 'react';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import { ToggleRow } from '../../components/ToggleRow';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function NotificationSettings({ nav }: Props) {
  const [newReactions, setNewReactions] = useState(true);
  const [addedPart, setAddedPart] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Notifications" onBack={() => nav.navigate('app-account')} />

      <StaggerItem className="menu-group" group>
        <ToggleRow
          label="New reactions"
          description="Someone reacts to a loop you opened"
          checked={newReactions}
          onChange={setNewReactions}
        />
        <ToggleRow
          label="Add your part"
          description="Someone adds their part to your loop"
          checked={addedPart}
          onChange={setAddedPart}
        />
        <ToggleRow
          label="Weekly digest"
          description="A summary of what your bands played this week"
          checked={weeklyDigest}
          onChange={setWeeklyDigest}
        />
      </StaggerItem>
    </Stagger>
  );
}
