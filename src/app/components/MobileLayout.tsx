import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

export function MobileLayout({ children, showNavigation = false }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
}
