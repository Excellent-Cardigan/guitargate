import { RiSmartphoneLine, RiCheckLine } from '@remixicon/react';

interface Props {
  /** false while "scanning" (dashed line, no checkmark); true once paired. */
  connected: boolean;
}

/** Grayscale phone–checkmark–device connection diagram, icon/typography only. */
export function PedalPairingDiagram({ connected }: Props) {
  return (
    <div className="pedal-pairing">
      <div className="pedal-pairing__node">
        <RiSmartphoneLine size={28} color="var(--ink)" />
      </div>

      <div className={`pedal-pairing__line${connected ? ' pedal-pairing__line--connected' : ''}`}>
        <span className="pedal-pairing__dot" />
        <span className={`pedal-pairing__check${connected ? ' pedal-pairing__check--visible' : ''}`}>
          <RiCheckLine size={16} color="var(--surface)" />
        </span>
        <span className="pedal-pairing__dot" />
      </div>

      <div className="pedal-pairing__node pedal-pairing__node--pedal">
        <span className="pedal-pairing__pedal-switch" />
      </div>
    </div>
  );
}
