import { ReactNode } from "react";
import { Card } from "./Card";

interface RideCardProps {
  role?: string;
  destination?: string;
  time?: string;
  status?: string;
  weather?: string;
  traffic?: string;
  children?: ReactNode;
}

export function RideCard({ role, destination, time, status, weather, traffic, children }: RideCardProps) {
  return (
    <Card className="space-y-3">
      {role && (
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-[#354A5F] font-medium">Role: {role}</span>
          {status && <span className="text-[13px] text-[#30B0C7] font-medium">{status}</span>}
        </div>
      )}
      {destination && (
        <div>
          <h3 className="text-[17px] font-semibold text-[#000000] mb-1">{destination}</h3>
          {time && <p className="text-[15px] text-[#223548]">{time}</p>}
        </div>
      )}
      {(weather || traffic) && (
        <div className="flex items-center gap-3 text-[13px] text-[#354A5F]">
          {weather && (
            <div className="flex items-center gap-1">
              <span>☀️</span>
              <span>{weather}</span>
            </div>
          )}
          {traffic && (
            <div className="flex items-center gap-1">
              <span>🚗</span>
              <span>{traffic}</span>
            </div>
          )}
        </div>
      )}
      {children}
    </Card>
  );
}
