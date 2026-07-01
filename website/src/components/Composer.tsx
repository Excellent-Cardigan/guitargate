import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine } from '@remixicon/react';

interface Props {
  placeholder: string;
  onPost: (title: string) => void;
}

export function Composer({ placeholder, onPost }: Props) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');

  const submit = () => {
    if (!draft.trim()) return;
    onPost(draft);
    setDraft('');
    setOpen(false);
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {open ? (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="composer-panel">
            <input
              className="composer-panel__input"
              placeholder="Name your loop…"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              autoFocus
              onKeyDown={e => e.key === 'Enter' && submit()}
            />
            <div className="composer-panel__row">
              <button type="button" className="composer-panel__cancel" onClick={() => { setOpen(false); setDraft(''); }}>
                Cancel
              </button>
              <button type="button" className="composer-panel__submit" onClick={submit}>
                Post
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="bar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="compose-bar" onClick={() => setOpen(true)}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--line)', flexShrink: 0 }} />
            <span className="compose-bar__text">{placeholder}</span>
            <div className="compose-btn">
              <RiAddLine size={14} color="#fff" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
