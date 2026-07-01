interface DesktopFrameProps {
  children: React.ReactNode;
}

export function DesktopFrame({ children }: DesktopFrameProps) {
  return (
    <div className="desktop-page">
      {children}
    </div>
  );
}
