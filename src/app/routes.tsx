import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Onboarding1 } from "./screens/Onboarding1";
import { Onboarding2 } from "./screens/Onboarding2";
import { Onboarding3 } from "./screens/Onboarding3";
import { Onboarding4 } from "./screens/Onboarding4";
import { Onboarding5 } from "./screens/Onboarding5";
import { Onboarding6 } from "./screens/Onboarding6";
import { Onboarding7 } from "./screens/Onboarding7";
import { HomeNoRides } from "./screens/HomeNoRides";
import { HomeUpcoming } from "./screens/HomeUpcoming";
import { HomeActive } from "./screens/HomeActive";
import { RideInsights } from "./screens/RideInsights";
import { GuidedBreathing } from "./screens/GuidedBreathing";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: "/", Component: Onboarding1 },
        { path: "/onboarding-2", Component: Onboarding2 },
        { path: "/onboarding-3", Component: Onboarding3 },
        { path: "/onboarding-4", Component: Onboarding4 },
        { path: "/onboarding-5", Component: Onboarding5 },
        { path: "/onboarding-6", Component: Onboarding6 },
        { path: "/onboarding-7", Component: Onboarding7 },
        { path: "/home", Component: HomeNoRides },
        { path: "/home-upcoming", Component: HomeUpcoming },
        { path: "/home-active", Component: HomeActive },
        { path: "/ride-insights", Component: RideInsights },
        { path: "/breathing", Component: GuidedBreathing },
      ],
    },
  ],
  {
    basename: "/testing-calm/",
  }
);