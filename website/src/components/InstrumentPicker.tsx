interface Props {
  options?: string[];
  onPick: (instrument: string) => void;
}

const DEFAULT_INSTRUMENTS = ['Guitar', 'Bass', 'Drums', 'Vocals', 'Keys'];

/** Inline instrument tag picker shown when adding a part to a loop — same
 *  no-modal pill-row idiom as SharePreview's "Send to a band" list. */
export function InstrumentPicker({ options = DEFAULT_INSTRUMENTS, onPick }: Props) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
      {options.map(instrument => (
        <button
          key={instrument}
          type="button"
          className="tag tag-outline"
          onClick={() => onPick(instrument)}
        >
          {instrument}
        </button>
      ))}
    </div>
  );
}
