import React, { ReactNode } from "react";
import "../../../public//css/Dashboard.css";
import Navbar from "./homeComponents/Navbar";
import Header from "./homeComponents/Header";
import Data from "../cards/Data";
import Reviews from "./homeComponents/Reviews";
import Contact from "./homeComponents/Contact";
import Footer from "./homeComponents/Footer";

interface HomeComponentProps {
  children: ReactNode;
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  children,
}: HomeComponentProps) => {
  return (
    <div className="body">
      <Navbar />
      {children}
      <Header />
      <Data />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeComponent;
