interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="phone-outer">
      <div className="phone-chrome">
        {children}
      </div>
    </div>
  );
}
