import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { Card } from "../components/Card";
import { motion } from "motion/react";

export function GuidedBreathing() {
  const navigate = useNavigate();
  const [backgroundSound, setBackgroundSound] = useState(true);
  const [spokenGuidance, setSpokenGuidance] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "exhale">("inhale");
  const [count, setCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (phase === "inhale") {
          if (prev === 1) {
            setPhase("exhale");
            return 6;
          }
          return prev - 1;
        } else {
          if (prev === 1) {
            setPhase("inhale");
            return 4;
          }
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen px-6 py-12">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold text-[#000000] mb-1">Guided Breathing</h1>
          <p className="text-[15px] text-[#223548]">Sacramento, CA</p>
          <p className="text-[13px] text-[#30B0C7] font-medium mt-1">Passenger Mode Active</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-12">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <motion.div
              animate={{
                scale: phase === "inhale" ? [1, 1.5] : [1.5, 1],
              }}
              transition={{
                duration: phase === "inhale" ? 4 : 6,
                ease: "easeInOut",
              }}
              className="absolute w-32 h-32 rounded-full bg-[#30B0C7]/20"
            />
            <motion.div
              animate={{
                scale: phase === "inhale" ? [1, 1.3] : [1.3, 1],
              }}
              transition={{
                duration: phase === "inhale" ? 4 : 6,
                ease: "easeInOut",
              }}
              className="absolute w-24 h-24 rounded-full bg-[#30B0C7]/40"
            />
            <motion.div
              animate={{
                scale: phase === "inhale" ? [1, 1.2] : [1.2, 1],
              }}
              transition={{
                duration: phase === "inhale" ? 4 : 6,
                ease: "easeInOut",
              }}
              className="absolute w-16 h-16 rounded-full bg-[#30B0C7]/60"
            />
          </div>

          <div className="text-center space-y-2">
            <p className="text-[22px] font-medium text-[#223548] capitalize">{phase}</p>
            <p className="text-[48px] font-medium text-[#30B0C7]">{count}</p>
          </div>
        </div>

        <Card className="mb-6">
          <ToggleSwitch
            label="Background sound"
            checked={backgroundSound}
            onChange={setBackgroundSound}
          />
          <div className="border-t border-gray-100 my-2" />
          <ToggleSwitch
            label="Spoken guidance"
            checked={spokenGuidance}
            onChange={setSpokenGuidance}
          />
        </Card>

        <button
          onClick={() => navigate("/ride-insights")}
          className="w-full text-[#354A5F] text-[17px] font-medium py-3"
        >
          Stop Session
        </button>
      </div>
    </MobileLayout>
  );
}
