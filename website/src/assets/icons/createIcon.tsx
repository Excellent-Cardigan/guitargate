import type { ComponentType, ReactNode, SVGProps } from 'react';

type ReservedProps = 'color' | 'size' | 'width' | 'height' | 'fill' | 'viewBox' | 'children';

export interface GgIconProps extends Omit<SVGProps<SVGSVGElement>, ReservedProps> {
  color?: string;
  size?: number | string;
}

export type GgIconComponentType = ComponentType<GgIconProps>;

/**
 * Wraps a custom Figma-exported SVG's inner markup (paths/shapes only, no
 * outer <svg> tag) as a component matching @remixicon/react's prop signature
 * (`size`, `color`, default 24x24 viewBox) — so custom and Remix icons are
 * interchangeable at every call site.
 *
 * The exported paths must use `fill="currentColor"` / `stroke="currentColor"`
 * (not a hardcoded hex) in Figma for the `color` prop to work.
 */
export function createIcon(children: ReactNode, viewBox = '0 0 24 24'): GgIconComponentType {
  return function GgIcon({ color = 'currentColor', size = 24, ...rest }: GgIconProps) {
    return (
      <svg width={size} height={size} viewBox={viewBox} fill={color} xmlns="http://www.w3.org/2000/svg" {...rest}>
        {children}
      </svg>
    );
  };
}
