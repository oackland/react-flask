import React, { ReactNode } from "react";
import "/public/css/Dashboard.css";
import Header from "./homeComponents/Header";
import Reviews from "./homeComponents/Reviews";
import Contact from "./homeComponents/Contact";

interface HomeComponentProps {
  children: ReactNode;
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  children,
}: HomeComponentProps) => {
  return (
    <div className="body">
      {children}
      <Header />
      {/*<Data  cardTitle={}/>*/}
      <Reviews />
      <Contact />
    </div>
  );
};

export default HomeComponent;
