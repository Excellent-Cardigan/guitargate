import { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function Login({ nav }: Props) {
  const [step, setStep] = useState<0 | 1>(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emailValid = /\S+@\S+\.\S+/.test(email);
  const passwordValid = password.length >= 6;

  const goBack = () => {
    if (step === 0) nav.navigate('app-signin');
    else setStep(0);
  };

  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Sign in" onBack={goBack} />

      {step === 0 && (
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
            onClick={() => setStep(1)}
            aria-label="Next"
          >
            →
          </button>
        </StaggerItem>
      )}

      {step === 1 && (
        <StaggerItem className="wizard-body">
          <div className="wizard-body__question">Enter password</div>
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
          <button
            type="button"
            className="t-caption t-muted"
            style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', marginBottom: 20 }}
            onClick={() => nav.navigate('forgot-password')}
          >
            Forgot password →
          </button>
          <button
            type="button"
            className={`wizard-next${passwordValid ? ' wizard-next--active' : ''}`}
            disabled={!passwordValid}
            onClick={() => nav.navigate('app-home')}
            aria-label="Sign in"
          >
            →
          </button>
        </StaggerItem>
      )}
    </Stagger>
  );
}
