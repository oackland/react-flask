import React, { ReactNode } from "react";
import DashHeader from "./DashComponents/DashHeader";
import WeatherComponent from "../weather/SearchMain";
import EmbeddedBrowser from "././webEbedded";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => (
  <div className="layout">
    <header>
      <WeatherComponent />
      <DashHeader />
    </header>
    <EmbeddedBrowser url={"https://google.com"} />
  </div>
);

export default Layout;
