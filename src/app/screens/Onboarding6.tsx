import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { PaginationDots } from "../components/PaginationDots";
import { Wind } from "lucide-react";

export function Onboarding6() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-[#30B0C7]/10 flex items-center justify-center">
              <Wind size={48} className="text-[#30B0C7]" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-[28px] font-bold text-[#000000] mb-4">Breathe Easy</h1>
          <p className="text-[17px] text-[#223548] leading-relaxed max-w-[300px]">
            Access guided breathing exercises anytime during your ride for extra calm
          </p>
        </div>

        <div className="space-y-4">
          <PrimaryButton onClick={() => navigate("/onboarding-7")}>Next</PrimaryButton>
          <div className="py-4">
            <PaginationDots total={7} current={5} />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
