import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className = "" }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 bg-[#30B0C7] text-white rounded-full font-medium text-base ${className}`}
    >
      {children}
    </button>
  );
}
