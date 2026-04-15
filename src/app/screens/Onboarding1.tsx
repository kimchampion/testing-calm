import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { PaginationDots } from "../components/PaginationDots";

export function Onboarding1() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-[#30B0C7]/10 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#30B0C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12L14.5 14.5" stroke="#30B0C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className="text-[34px] font-bold text-[#000000] mb-4">Calm Ride</h1>
          <p className="text-[17px] text-[#223548] leading-relaxed max-w-[300px]">
            Feel more in control during car rides with gentle insights and breathing support
          </p>
        </div>

        <div className="space-y-4">
          <PrimaryButton onClick={() => navigate("/onboarding-2")}>Next</PrimaryButton>
          <div className="py-4">
            <PaginationDots total={7} current={0} />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
