import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactionMessage } from '../types';

interface Props {
  reactions: ReactionMessage[];
  onAdd: (text: string) => void;
  /** When true, renders inside an AnimatePresence height-reveal (feed card). Omit for an always-open page (loop detail). */
  collapsible?: boolean;
}

function ThreadBody({ reactions, onAdd }: Pick<Props, 'reactions' | 'onAdd'>) {
  const [draft, setDraft] = useState('');

  const submit = () => {
    if (!draft.trim()) return;
    onAdd(draft);
    setDraft('');
  };

  return (
    <div className="reaction-thread" onClick={e => e.stopPropagation()}>
      {reactions.length === 0 && (
        <div className="reaction-thread__empty">No reactions yet — be the first to say something.</div>
      )}
      {reactions.map((r, i) => (
        <div className="reaction-thread__item" key={i}>
          <div className="reaction-thread__avatar" />
          <div className="reaction-thread__text"><strong>{r.user}</strong> {r.text}</div>
        </div>
      ))}
      <div className="reaction-thread__input-row">
        <input
          className="reaction-thread__input"
          placeholder="Add a reaction…"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
        />
        <button type="button" className="reaction-thread__submit" onClick={submit}>Post</button>
      </div>
    </div>
  );
}

export function ReactionThread({ reactions, onAdd, collapsible }: Props) {
  if (!collapsible) return <ThreadBody reactions={reactions} onAdd={onAdd} />;

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key="thread"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.18 }}
        style={{ overflow: 'hidden' }}
      >
        <ThreadBody reactions={reactions} onAdd={onAdd} />
      </motion.div>
    </AnimatePresence>
  );
}
