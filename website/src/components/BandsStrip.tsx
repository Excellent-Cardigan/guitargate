import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine } from '@remixicon/react';
import { DragScrollRow, StaggerItem } from './motion';
import type { Band } from '../types';

interface Props {
  bands: Band[];
  onSelect: (bandId: string) => void;
  onCreate: (name: string) => void;
}

export function BandsStrip({ bands, onSelect, onCreate }: Props) {
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState('');

  const submit = () => {
    if (!draft.trim()) return;
    onCreate(draft);
    setDraft('');
    setCreating(false);
  };

  return (
    <>
      <DragScrollRow className="bands-strip edge-fade-x">
        <StaggerItem className="bands-strip__tile" onClick={() => { setCreating(o => !o); setDraft(''); }}>
          <div className="bands-strip__avatar bands-strip__avatar--new">
            <RiAddLine size={18} />
          </div>
          <span className="bands-strip__label">New band</span>
        </StaggerItem>
        {bands.map(band => (
          <StaggerItem key={band.id} className="bands-strip__tile" onClick={() => onSelect(band.id)}>
            <div className="bands-strip__avatar">{band.name.charAt(0)}</div>
            <span className="bands-strip__label">{band.name}</span>
          </StaggerItem>
        ))}
      </DragScrollRow>

      <AnimatePresence initial={false}>
        {creating && (
          <motion.div
            key="new-band-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="composer-panel" style={{ marginTop: 10 }}>
              <input
                className="composer-panel__input"
                placeholder="Name your band…"
                value={draft}
                onChange={e => setDraft(e.target.value)}
                autoFocus
                onKeyDown={e => e.key === 'Enter' && submit()}
              />
              <div className="composer-panel__row">
                <button type="button" className="composer-panel__cancel" onClick={() => { setCreating(false); setDraft(''); }}>
                  Cancel
                </button>
                <button type="button" className="composer-panel__submit" onClick={submit}>
                  Create
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
