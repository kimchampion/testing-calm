import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { PaginationDots } from "../components/PaginationDots";
import { PermissionModal } from "../components/PermissionModal";
import { MapPin } from "lucide-react";

export function Onboarding4() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleAllow = () => {
    setShowModal(false);
    navigate("/onboarding-5");
  };

  const handleMaybeLater = () => {
    navigate("/onboarding-5");
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-[#30B0C7]/10 flex items-center justify-center">
              <MapPin size={48} className="text-[#30B0C7]" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-[28px] font-bold text-[#000000] mb-4">Personal Guidance</h1>
          <p className="text-[17px] text-[#223548] leading-relaxed max-w-[300px] mb-2">
            Help Calm Ride provide relevant road insights for your journey
          </p>
        </div>

        <div className="space-y-3">
          <PrimaryButton onClick={() => setShowModal(true)}>Allow Location Access</PrimaryButton>
          <button
            onClick={handleMaybeLater}
            className="w-full text-[#30B0C7] text-[17px] font-medium py-2"
          >
            Maybe Later
          </button>
          <p className="text-[13px] text-[#354A5F] text-center">
            You can change this anytime in Settings.
          </p>
          <div className="py-4">
            <PaginationDots total={7} current={3} />
          </div>
        </div>
      </div>

      {showModal && (
        <PermissionModal
          title='Allow "Calm Ride" to access your location?'
          description="Your location is used to provide timely ride insights and road condition updates."
          onAllow={handleAllow}
          onDeny={handleMaybeLater}
          icon={
            <div className="w-16 h-16 rounded-2xl bg-[#30B0C7]/10 flex items-center justify-center">
              <MapPin size={32} className="text-[#30B0C7]" />
            </div>
          }
        />
      )}
    </MobileLayout>
  );
}