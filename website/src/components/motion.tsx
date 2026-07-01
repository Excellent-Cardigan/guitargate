import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode, PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from 'react';
import type { Variants } from 'framer-motion';

/**
 * Shared motion primitives for the "animating the hierarchy" pattern:
 * a screen enters as a sequence of arrivals — sections stagger in, and
 * lists/cards stagger their own children a beat later. Spring-based so it
 * feels physical rather than linear.
 */

const SPRING = { type: 'spring', stiffness: 460, damping: 34, mass: 0.9 } as const;

// Top-level orchestrator: no movement of its own, just staggers its children.
export const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

// A leaf that arrives: fade up with a spring.
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: SPRING },
};

// Arrives like an item AND staggers its own children (card → its text/rows).
export const groupVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { ...SPRING, staggerChildren: 0.045, delayChildren: 0.04 } },
};

interface BaseProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Stagger({ children, className, style, onClick }: BaseProps) {
  return (
    <motion.div
      className={className}
      style={style}
      onClick={onClick}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

interface ItemProps extends BaseProps {
  /** Also stagger this element's own motion children (nested hierarchy). */
  group?: boolean;
  /** Spring-back press feedback on tap. */
  tappable?: boolean;
}

export function StaggerItem({ children, className, style, onClick, group, tappable }: ItemProps) {
  return (
    <motion.div
      className={className}
      style={style}
      onClick={onClick}
      variants={group ? groupVariants : itemVariants}
      whileTap={tappable ? { scale: 0.97 } : undefined}
    >
      {children}
    </motion.div>
  );
}

/**
 * A horizontal scroller that is also a stagger group. Touch and pen use native
 * scrolling (thumb swipe with momentum); mouse gets click-and-drag ("grab")
 * scrolling, since the scrollbar is hidden on these rows. A drag is suppressed
 * from firing a click so dragging never accidentally navigates.
 */
export function DragScrollRow({ children, className, style }: BaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return; // touch/pen scroll natively
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
      // events still target the card underneath instead of being retargeted here.
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

  // Swallow the click that follows a drag so cards don't navigate mid-swipe.
  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ cursor: 'grab', userSelect: 'none', ...style }}
      variants={groupVariants}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
    >
      {children}
    </motion.div>
  );
}
