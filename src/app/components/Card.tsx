import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-2xl p-4 ${className}`}
      style={{
        boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.13), 0px 2px 0px 0px rgba(0, 0, 0, 0.04)'
      }}
    >
      {children}
    </div>
  );
}
