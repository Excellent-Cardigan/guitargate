import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine, RiCloseLine } from '@remixicon/react';
import { DragScrollRow, StaggerItem } from './motion';
import type { Band } from '../types';

interface Props {
  bands: Band[];
  onSelect: (bandId: string) => void;
  onCreate: (name: string) => void;
}

const MAX_SHOWN = 5;

export function BandsStrip({ bands, onSelect, onCreate }: Props) {
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState('');
  const [expanded, setExpanded] = useState(false);

  // Most recently created first — the closest proxy to "recently active" without
  // a real activity-timestamp model (bands are lightweight per the build brief).
  const recent = bands.slice(-MAX_SHOWN).reverse();

  const submit = () => {
    if (!draft.trim()) return;
    onCreate(draft);
    setDraft('');
    setCreating(false);
  };

  return (
    <>
      <div
        className={`bands-spotlight-overlay${expanded ? ' bands-spotlight-overlay--active' : ''}`}
        onClick={() => setExpanded(false)}
      />

      <div className={`bands-strip-row${expanded ? ' bands-strip-row--elevated' : ''}`}>
        {expanded && (
          <button type="button" className="bands-strip__collapse-btn" onClick={() => setExpanded(false)} aria-label="Collapse">
            <RiCloseLine size={13} />
          </button>
        )}

        {expanded ? (
          <DragScrollRow className="bands-strip-scroll">
            {recent.map(band => (
              <StaggerItem key={band.id} className="bands-strip__tile" onClick={() => onSelect(band.id)}>
                <div className="bands-strip__avatar">{band.name.charAt(0)}</div>
                <span className="bands-strip__label">{band.name}</span>
              </StaggerItem>
            ))}
          </DragScrollRow>
        ) : recent.length > 0 ? (
          <button type="button" className="bands-strip__cluster" onClick={() => setExpanded(true)}>
            {recent.map((band, i) => (
              <div
                key={band.id}
                className="bands-strip__avatar bands-strip__avatar--stacked"
                style={{ marginLeft: i === 0 ? 0 : -18, zIndex: recent.length - i }}
              >
                {band.name.charAt(0)}
              </div>
            ))}
          </button>
        ) : (
          <span className="t-caption t-muted">No bands yet</span>
        )}

        {!expanded && (
          <StaggerItem
            className="bands-strip__tile bands-strip__tile--new"
            onClick={() => { setCreating(o => !o); setDraft(''); }}
          >
            <div className="bands-strip__avatar bands-strip__avatar--new">
              <RiAddLine size={18} />
            </div>
            <span className="bands-strip__label">New band</span>
          </StaggerItem>
        )}
      </div>

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
