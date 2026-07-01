import { RiArrowLeftSLine } from '@remixicon/react';
import { StaggerItem } from './motion';

interface Props {
  /** Section label, e.g. "Account" — rendered uppercase. */
  section: string;
  step: number;
  total: number;
  onBack: () => void;
  /** When provided, renders a "Skip" link in the top row for optional steps. */
  onSkip?: () => void;
}

/** WHOOP-style wizard chrome: circular back button + optional Skip, section label + step counter below. */
export function WizardStepHeader({ section, step, total, onBack, onSkip }: Props) {
  return (
    <StaggerItem className="wizard-header">
      <div className="wizard-header__top">
        <button type="button" className="wizard-header__back" onClick={onBack} aria-label="Back">
          <RiArrowLeftSLine size={18} />
        </button>
        {onSkip && (
          <button type="button" className="wizard-header__skip" onClick={onSkip}>
            Skip
          </button>
        )}
      </div>
      <div className="wizard-header__section">{section}</div>
      <div className="wizard-header__step">Step {step} / {total}</div>
    </StaggerItem>
  );
}
