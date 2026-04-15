import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { PaginationDots } from "../components/PaginationDots";
import { PermissionModal } from "../components/PermissionModal";
import { Bell } from "lucide-react";

export function Onboarding3() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleAllow = () => {
    setShowModal(false);
    navigate("/onboarding-4");
  };

  const handleMaybeLater = () => {
    navigate("/onboarding-4");
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-screen px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-[#30B0C7]/10 flex items-center justify-center">
              <Bell size={48} className="text-[#30B0C7]" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-[28px] font-bold text-[#000000] mb-4">Gentle Reminders</h1>
          <p className="text-[17px] text-[#223548] leading-relaxed max-w-[300px] mb-2">
            Get optional notifications about upcoming events during your ride
          </p>
        </div>

        <div className="space-y-3">
          <PrimaryButton onClick={() => setShowModal(true)}>Allow</PrimaryButton>
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
            <PaginationDots total={7} current={2} />
          </div>
        </div>
      </div>

      {showModal && (
        <PermissionModal
          title='"Calm Ride" Would Like to Send You Notifications'
          description="Notifications may include alerts, sounds, and icon badges. These can be configured in Settings."
          onAllow={handleAllow}
          onDeny={handleMaybeLater}
          icon={
            <div className="w-16 h-16 rounded-2xl bg-[#30B0C7]/10 flex items-center justify-center">
              <Bell size={32} className="text-[#30B0C7]" />
            </div>
          }
        />
      )}
    </MobileLayout>
  );
}