import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { MapPreview } from "../components/MapPreview";
import { TimelineEvent } from "../components/TimelineEvent";
import { Card } from "../components/Card";

export function RideInsights() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen px-6 py-12">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold text-[#000000] mb-1">Ride Insights</h1>
          <p className="text-[15px] text-[#223548]">Sacramento, CA</p>
          <p className="text-[13px] text-[#30B0C7] font-medium mt-1">Passenger Mode Active</p>
        </div>

        <div className="space-y-6 flex-1">
          <MapPreview />
          
          <Card className="py-6">
            <div className="space-y-4">
              <TimelineEvent 
                title="Approaching a turn"
                time="8 seconds"
                isCurrent={true}
              />
              <TimelineEvent 
                title="Traffic slows ahead"
                time="1 minute"
                isFuture={true}
              />
              <TimelineEvent 
                title="Road work ahead"
                time="2 minutes"
                isFuture={true}
              />
            </div>
          </Card>

          <div className="text-center py-4">
            <p className="text-[13px] text-[#354A5F]">
              Updates appear 8-15 seconds ahead
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6 space-y-3">
          <PrimaryButton onClick={() => navigate("/breathing")}>Start Breathing</PrimaryButton>
          <SecondaryButton onClick={() => navigate("/home")}>End Session</SecondaryButton>
        </div>
      </div>
    </MobileLayout>
  );
}
