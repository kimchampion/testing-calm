import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, onClick, className = "" }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 bg-[#30B0C7]/10 text-[#30B0C7] rounded-full font-medium text-base ${className}`}
    >
      {children}
    </button>
  );
}
