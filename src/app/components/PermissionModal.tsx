import { ReactNode } from "react";
import { PrimaryButton } from "./PrimaryButton";

interface PermissionModalProps {
  title: string;
  description: string;
  onAllow: () => void;
  onDeny: () => void;
  icon?: ReactNode;
}

export function PermissionModal({ title, description, onAllow, onDeny, icon }: PermissionModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-8">
      <div className="bg-white rounded-2xl w-full max-w-[280px] overflow-hidden">
        <div className="pt-6 pb-4 px-6 text-center">
          {icon && <div className="mb-4 flex justify-center">{icon}</div>}
          <h3 className="text-[17px] font-semibold text-[#000000] mb-2">{title}</h3>
          <p className="text-[13px] text-[#223548] leading-relaxed">{description}</p>
        </div>
        <div className="border-t border-gray-200">
          <button
            onClick={onAllow}
            className="w-full py-3 text-[#30B0C7] font-semibold text-[17px] border-b border-gray-200"
          >
            Allow
          </button>
          <button
            onClick={onDeny}
            className="w-full py-3 text-[#30B0C7] text-[17px]"
          >
            Don't Allow
          </button>
        </div>
      </div>
    </div>
  );
}
