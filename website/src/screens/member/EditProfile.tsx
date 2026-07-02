import { useState } from 'react';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import type { AppNav } from '../../types';
import type { ProfileStore } from '../../state/profileStore';

interface Props { nav: AppNav; profile: ProfileStore }

const INSTRUMENTS = ['Electric guitar', 'Acoustic guitar', 'Bass'];

export function EditProfile({ nav, profile }: Props) {
  const [firstName, setFirstName] = useState(profile.profile.firstName);
  const [lastName, setLastName] = useState(profile.profile.lastName);
  const [username, setUsername] = useState(profile.profile.username);
  const [instrument, setInstrument] = useState(profile.profile.instrument);

  const valid = firstName.trim() && lastName.trim() && username.trim();

  const save = () => {
    profile.updateProfile({ firstName, lastName, username, instrument });
    nav.navigate('app-account');
  };

  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Edit profile" onBack={() => nav.navigate('app-account')} />

      <StaggerItem className="wizard-body">
        <div className="wizard-field__label">First name</div>
        <input className="wizard-field" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <div className="wizard-field__label">Last name</div>
        <input className="wizard-field" value={lastName} onChange={e => setLastName(e.target.value)} />
        <div className="wizard-field__label">Username</div>
        <input className="wizard-field" value={username} onChange={e => setUsername(e.target.value)} />

        <div className="wizard-body__question" style={{ fontSize: 18, marginTop: 8 }}>What do you play?</div>
        <div className="choice-list">
          {INSTRUMENTS.map(opt => (
            <div
              key={opt}
              className={`choice-item${instrument === opt ? ' choice-item--selected' : ''}`}
              onClick={() => setInstrument(opt)}
            >
              {opt}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          disabled={!valid}
          onClick={save}
        >
          Save
        </button>
      </StaggerItem>
    </Stagger>
  );
}
