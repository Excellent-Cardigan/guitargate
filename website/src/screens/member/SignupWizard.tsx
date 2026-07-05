import { useEffect, useState } from 'react';
import { RiEyeLine, RiEyeOffLine, RiNotification3Line } from '@remixicon/react';
import { Stagger, StaggerItem } from '../../components/motion';
import { WizardStepHeader } from '../../components/WizardStepHeader';
import { PedalPairingDiagram } from '../../components/PedalPairingDiagram';
import ggStackedLogo from '../../assets/logo/gg-stacked-lockup.svg';
import type { AppNav } from '../../types';
import type { ProfileStore } from '../../state/profileStore';

interface Props { nav: AppNav; profile: ProfileStore }

const TOTAL_STEPS = 6;
const INSTRUMENTS = ['Electric guitar', 'Acoustic guitar', 'Bass'];
const SERIAL = 'TLP-00391';

export function SignupWizard({ nav, profile }: Props) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [instrument, setInstrument] = useState<string | null>(null);
  const [pedalConnected, setPedalConnected] = useState(false);

  useEffect(() => {
    if (step !== 5) return;
    const timer = setTimeout(() => setPedalConnected(true), 1200);
    return () => clearTimeout(timer);
  }, [step]);

  const goBack = () => {
    if (step === 0) nav.navigate('app-signin');
    else setStep(s => s - 1);
  };
  const goNext = () => setStep(s => Math.min(s + 1, TOTAL_STEPS - 1));
  const finish = () => {
    profile.updateProfile({
      firstName,
      lastName,
      username,
      ...(instrument ? { instrument } : {}),
    });
    nav.navigate('app-home');
  };

  const emailValid = /\S+@\S+\.\S+/.test(email);
  const passwordValid = password.length >= 6;
  const profileValid = firstName.trim() && lastName.trim() && username.trim();

  return (
    <Stagger className="phone-scroll">
      {step === 0 && (
        <>
          <WizardStepHeader section="Account" step={1} total={TOTAL_STEPS} onBack={goBack} />
          <StaggerItem style={{ textAlign: 'center' }}>
            <img src={ggStackedLogo} alt="Guitargate" style={{ height: 56, margin: '0 auto' }} />
          </StaggerItem>
          <StaggerItem className="wizard-body">
            <div className="wizard-body__question">What's your email?</div>
            <input
              className="wizard-field"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <button
              type="button"
              className={`wizard-next${emailValid ? ' wizard-next--active' : ''}`}
              disabled={!emailValid}
              onClick={goNext}
              aria-label="Next"
            >
              →
            </button>
          </StaggerItem>
        </>
      )}

      {step === 1 && (
        <>
          <WizardStepHeader section="Account" step={2} total={TOTAL_STEPS} onBack={goBack} />
          <StaggerItem className="wizard-body">
            <div className="wizard-body__question">Create a password</div>
            <div style={{ position: 'relative' }}>
              <input
                className="wizard-field"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
                style={{ paddingRight: 60 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(s => !s)}
                style={{ position: 'absolute', right: 0, top: 10, background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}
              >
                {showPassword ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
              </button>
            </div>
            <div className="t-caption t-muted" style={{ marginTop: -12, marginBottom: 20 }}>6 characters minimum</div>
            <button
              type="button"
              className={`wizard-next${passwordValid ? ' wizard-next--active' : ''}`}
              disabled={!passwordValid}
              onClick={goNext}
              aria-label="Next"
            >
              →
            </button>
          </StaggerItem>
        </>
      )}

      {step === 2 && (
        <>
          <WizardStepHeader section="Profile" step={3} total={TOTAL_STEPS} onBack={goBack} />
          <StaggerItem className="wizard-body">
            <div className="wizard-body__question">What should we call you?</div>
            <div className="wizard-field__label">First name</div>
            <input className="wizard-field" value={firstName} onChange={e => setFirstName(e.target.value)} autoFocus />
            <div className="wizard-field__label">Last name</div>
            <input className="wizard-field" value={lastName} onChange={e => setLastName(e.target.value)} />
            <div className="wizard-field__label">Username</div>
            <input className="wizard-field" value={username} onChange={e => setUsername(e.target.value)} placeholder="@" />
            <button
              type="button"
              className={`wizard-next${profileValid ? ' wizard-next--active' : ''}`}
              disabled={!profileValid}
              onClick={goNext}
              aria-label="Next"
            >
              →
            </button>
          </StaggerItem>
        </>
      )}

      {step === 3 && (
        <>
          <WizardStepHeader section="Profile" step={4} total={TOTAL_STEPS} onBack={goBack} onSkip={goNext} />
          <StaggerItem className="wizard-body">
            <div className="wizard-body__question">What do you play?</div>
            <div className="wizard-body__hint">So we can recommend the right lessons and techniques.</div>
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
              className={`wizard-next${instrument ? ' wizard-next--active' : ''}`}
              disabled={!instrument}
              onClick={goNext}
              aria-label="Next"
            >
              →
            </button>
          </StaggerItem>
        </>
      )}

      {step === 4 && (
        <>
          <WizardStepHeader section="Notify" step={5} total={TOTAL_STEPS} onBack={goBack} onSkip={goNext} />
          <StaggerItem className="wizard-body">
            <div className="wizard-body__question">Receive inspiration</div>
            <div className="wizard-body__hint">Know the moment someone reacts to or adds a part to your loop.</div>
            <div className="wizard-notify-preview">
              <div className="wizard-notify-preview__icon">
                <RiNotification3Line size={14} color="var(--surface)" />
              </div>
              <div className="wizard-notify-preview__body">
                <div className="wizard-notify-preview__title">Jonah added a part</div>
                <div className="wizard-notify-preview__text">"Cliffs of Dover — bridge idea"</div>
              </div>
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={goNext}>
              Turn on notifications
            </button>
          </StaggerItem>
        </>
      )}

      {step === 5 && (
        <>
          <WizardStepHeader section="Pedal" step={6} total={TOTAL_STEPS} onBack={goBack} />
          <StaggerItem className="wizard-body">
            <div className="wizard-body__question">
              {pedalConnected ? "You're all set" : 'Register your Teleport'}
            </div>
            <div className="wizard-body__hint">
              {pedalConnected ? 'Your pedal is paired and ready to go.' : 'Scanning for your pedal…'}
            </div>
            <PedalPairingDiagram connected={pedalConnected} />
            {pedalConnected && (
              <div className="t-caption t-muted" style={{ textAlign: 'center', marginBottom: 20 }}>
                {SERIAL} connected
              </div>
            )}
            {pedalConnected && (
              <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={finish}>
                I'm ready — let's jam →
              </button>
            )}
          </StaggerItem>
        </>
      )}
    </Stagger>
  );
}
