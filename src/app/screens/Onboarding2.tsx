import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { PaginationDots } from "../components/PaginationDots";

export function Onboarding2() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-[#30B0C7]/10 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#30B0C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className="text-[28px] font-bold text-[#000000] mb-4">Tools for the Road</h1>
          <p className="text-[17px] text-[#223548] leading-relaxed max-w-[300px]">
            Get ahead-of-time insights about turns, traffic, and road conditions so you know what's coming
          </p>
        </div>

        <div className="space-y-4">
          <PrimaryButton onClick={() => navigate("/onboarding-3")}>Next</PrimaryButton>
          <div className="py-4">
            <PaginationDots total={7} current={1} />
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
