import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { MapPreview } from "../components/MapPreview";

export function HomeNoRides() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen px-6 py-12">
        <div className="mb-8">
          <h1 className="text-[34px] font-bold text-[#000000] mb-2">Today</h1>
          <p className="text-[17px] text-[#223548]">Monday, March 2</p>
        </div>

        <div className="space-y-6 flex-1">
          <MapPreview />
          
          <div className="flex items-center gap-3 text-[15px] text-[#223548]">
            <div className="flex items-center gap-2">
              <span>☀️</span>
              <span>72°F, Clear</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚗</span>
              <span>Light traffic</span>
            </div>
          </div>

          <div className="text-center py-12">
            <p className="text-[17px] text-[#354A5F] mb-2">No rides planned today</p>
            <p className="text-[15px] text-[#354A5F]">Tap below to plan your next ride</p>
          </div>

          <div className="mt-auto pt-8">
            <h2 className="text-[22px] font-semibold text-[#000000] mb-4">Upcoming Rides</h2>
            <p className="text-[15px] text-[#354A5F] text-center py-8">No upcoming rides</p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <PrimaryButton onClick={() => navigate("/home-upcoming")}>Plan a Ride</PrimaryButton>
        </div>
      </div>
    </MobileLayout>
  );
}
