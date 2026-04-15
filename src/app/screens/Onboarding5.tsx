import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { PaginationDots } from "../components/PaginationDots";
import { Heart } from "lucide-react";

export function Onboarding5() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-[#30B0C7]/10 flex items-center justify-center">
              <Heart size={48} className="text-[#30B0C7]" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-[28px] font-bold text-[#000000] mb-4">You're in Control</h1>
          <p className="text-[17px] text-[#223548] leading-relaxed max-w-[300px]">
            All features are optional and private by default. Use only what helps you feel comfortable
          </p>
        </div>

        <div className="space-y-4">
          <PrimaryButton onClick={() => navigate("/onboarding-6")}>Next</PrimaryButton>
          <div className="py-4">
            <PaginationDots total={7} current={4} />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
