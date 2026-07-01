import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from 'react';

/**
 * Two related selectors that share one gliding-thumb animation (framer
 * `layoutId` shared-layout). Use SegmentedControl for 2–4 mutually exclusive
 * options (Headspace "Recents / Favorites" feel); use ChipFilter for a longer,
 * horizontally scrollable filter row where the highlight slides to the tap.
 */

const THUMB_SPRING = { type: 'spring', stiffness: 520, damping: 40, mass: 0.8 } as const;

interface Props {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  /** Unique id for the sliding thumb's shared-layout animation. */
  layoutId: string;
  className?: string;
  /**
   * When true, selecting any option other than the first ("All") collapses
   * the row to just that active pill, left-aligned. Tapping it again returns
   * to the first option and restores the full row.
   */
  collapseToActive?: boolean;
}

export function SegmentedControl({ options, value, onChange, layoutId, className }: Props) {
  return (
    <div className={`segmented ${className ?? ''}`}>
      {options.map(opt => {
        const active = opt === value;
        return (
          <button key={opt} type="button" className="segmented__item" onClick={() => onChange(opt)}>
            {active && (
              <motion.span className="segmented__thumb" layoutId={layoutId} transition={THUMB_SPRING} />
            )}
            <span className="segmented__label" style={{ color: active ? 'var(--ink)' : 'var(--muted)' }}>
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function ChipFilter({ options, value, onChange, layoutId, className, collapseToActive }: Props) {
  const allValue = options[0];
  const collapsed = Boolean(collapseToActive) && value !== allValue;
  const visibleOptions = collapsed ? [value] : options;

  // Mouse click-and-drag scrolling; touch/pen scroll natively. A drag is
  // suppressed from firing a click so dragging never accidentally re-filters.
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = ref.current;
    if (!d.down || !el) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 3) {
      d.moved = true;
      // Capture only once a real drag starts, so a plain click's mouseup/click
      // events still target the button underneath instead of being retargeted here.
      el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
    }
    if (d.moved) el.scrollLeft = d.startLeft - dx;
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    drag.current.down = false;
    if (el) {
      el.style.cursor = 'grab';
      try { el.releasePointerCapture(e.pointerId); } catch { /* not captured */ }
    }
  };

  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const handleSelect = (opt: string) => {
    if (collapseToActive && opt === value && opt !== allValue) {
      onChange(allValue);
    } else {
      onChange(opt);
    }
  };

  return (
    <div
      ref={ref}
      className={`chip-row ${className ?? ''}`}
      style={{ cursor: 'grab', userSelect: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
    >
      <AnimatePresence initial={false}>
        {visibleOptions.map(opt => {
          const active = opt === value;
          return (
            <motion.button
              layout
              key={opt}
              type="button"
              className="chip"
              onClick={() => handleSelect(opt)}
              initial={collapseToActive ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {active && (
                <motion.span className="chip__thumb" layoutId={layoutId} transition={THUMB_SPRING} />
              )}
              <span className="chip__label" style={{ color: active ? 'var(--surface)' : 'var(--muted)' }}>
                {opt}
              </span>
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
