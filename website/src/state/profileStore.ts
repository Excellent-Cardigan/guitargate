import { useState } from 'react';
import type { Profile } from '../types';

const DEFAULT_PROFILE: Profile = {
  firstName: 'Robert',
  lastName: 'D.',
  username: 'robertd',
  instrument: 'Electric guitar',
};

export interface ProfileStore {
  profile: Profile;
  updateProfile: (partial: Partial<Profile>) => void;
}

export function useProfileStore(): ProfileStore {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);

  const updateProfile = (partial: Partial<Profile>) => {
    setProfile(prev => ({ ...prev, ...partial }));
  };

  return { profile, updateProfile };
}
