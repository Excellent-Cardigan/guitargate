import { useState } from 'react';
import { RiMailLine } from '@remixicon/react';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function ForgotPassword({ nav }: Props) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const emailValid = /\S+@\S+\.\S+/.test(email);

  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Reset password" onBack={() => nav.navigate('login')} />

      {!sent ? (
        <StaggerItem className="wizard-body">
          <div className="wizard-body__question">Reset your password</div>
          <div className="wizard-body__hint">Enter your email and we'll send you a link to reset it.</div>
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
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
            disabled={!emailValid}
            onClick={() => setSent(true)}
          >
            Send reset link
          </button>
        </StaggerItem>
      ) : (
        <StaggerItem className="empty-state">
          <div className="empty-state__icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RiMailLine size={20} color="var(--muted)" />
          </div>
          <div className="empty-state__title">Check your email</div>
          <div className="empty-state__body">We sent a password reset link to {email}.</div>
          <button type="button" className="btn btn-secondary" onClick={() => nav.navigate('login')}>
            Back to sign in
          </button>
        </StaggerItem>
      )}
    </Stagger>
  );
}
