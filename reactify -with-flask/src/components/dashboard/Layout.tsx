import React, { ReactNode } from "react";
import StickyNavbar from "./StickyNavbar";
import DashHeader from "./DashComponents/DashHeader";
import Footer from "../home/homeComponents/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => (
  <div className="layout">
    <header>
      <DashHeader />
    </header>
    <StickyNavbar />

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
