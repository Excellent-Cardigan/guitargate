import { RiMailLine, RiQuestionLine } from '@remixicon/react';
import { Stagger, StaggerItem } from '../../components/motion';
import { BackHeader } from '../../components/BackHeader';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function HelpSupport({ nav }: Props) {
  return (
    <Stagger className="phone-scroll">
      <BackHeader title="Help & support" onBack={() => nav.navigate('app-account')} />

      <StaggerItem style={{ padding: '4px 20px 16px' }}>
        <p className="t-caption t-muted">
          Stuck on something with your pedal, your membership, or a lesson? We're here.
        </p>
      </StaggerItem>

      <StaggerItem className="menu-group" group>
        <div className="row-link">
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <RiMailLine size={16} color="var(--muted)" />
            Email us — support@guitargate.com
          </span>
        </div>
        <div className="row-link">
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <RiQuestionLine size={16} color="var(--muted)" />
            Frequently asked questions
          </span>
          <span className="row-link__chevron">›</span>
        </div>
      </StaggerItem>
    </Stagger>
  );
}
