import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function DevNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const screens = [
    { path: "/", label: "Onboarding 1: Welcome" },
    { path: "/onboarding-2", label: "Onboarding 2: Tools" },
    { path: "/onboarding-3", label: "Onboarding 3: Notifications" },
    { path: "/onboarding-4", label: "Onboarding 4: Location" },
    { path: "/onboarding-5", label: "Onboarding 5: Control" },
    { path: "/onboarding-6", label: "Onboarding 6: Breathe" },
    { path: "/onboarding-7", label: "Onboarding 7: Personalization" },
    { path: "/home", label: "Home: No Rides" },
    { path: "/home-upcoming", label: "Home: Upcoming Ride" },
    { path: "/home-active", label: "Home: Active Ride" },
    { path: "/ride-insights", label: "Ride Insights" },
    { path: "/breathing", label: "Guided Breathing" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-[#30B0C7] text-white rounded-full shadow-lg hover:bg-[#2a9fb5] transition-colors"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 right-4 w-80 max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-40 p-4">
            <h3 className="text-lg font-bold text-[#000000] mb-4">Screen Navigation</h3>
            <div className="space-y-1">
              {screens.map((screen) => (
                <button
                  key={screen.path}
                  onClick={() => handleNavigate(screen.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === screen.path
                      ? "bg-[#30B0C7] text-white font-medium"
                      : "hover:bg-[#30B0C7]/10 text-[#223548]"
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
