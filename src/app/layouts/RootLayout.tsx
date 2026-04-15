import { Outlet } from "react-router";
import { DevNavigation } from "../components/DevNavigation";

export function RootLayout() {
  return (
    <>
      <Outlet />
      <DevNavigation />
    </>
  );
}
