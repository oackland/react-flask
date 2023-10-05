import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isContainerChanged, setIsContainerChanged] = useState<boolean>(false);

  useEffect(() => {
    const openNavbarIcon: Element | null =
      document.querySelector(".open-navbar-icon");
    openNavbarIcon?.addEventListener("click", () => {
      setIsContainerChanged(true);
    });

    const closeNavbarIcon: Element | null =
      document.querySelector(".close-navbar-icon");
    closeNavbarIcon?.addEventListener("click", () => {
      setIsContainerChanged(false);
    });

    const navigationButtons: NodeListOf<Element> =
      document.querySelectorAll(".navigation-button");
    navigationButtons.forEach((item: Element) => {
      // Cast item to HTMLElement to access the onclick property
      const buttonElement = item as HTMLElement;
      buttonElement.onclick = () => {
        buttonElement.parentElement?.parentElement?.classList.toggle("change");
      };
    });

    // Clean up event listeners when the component unmounts
    return () => {
      openNavbarIcon?.removeEventListener("click", () => {
        setIsContainerChanged(true);
      });

      closeNavbarIcon?.removeEventListener("click", () => {
        setIsContainerChanged(false);
      });

      navigationButtons.forEach((item: Element) => {
        const buttonElement = item as HTMLElement;
        buttonElement.onclick = null;
      });
    };
  }, []);

  return (
    <div className={`container ${isContainerChanged ? "change" : ""}`}>
      {/* Rest of your Navbar component */}
      <div className="open-navbar-icon navbar-icon center">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="close-navbar-icon navbar-icon center">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
          <div className="nav-list">
            <a href="https://google.com" className="nav-link center">
              Home
            </a>
            <a href="#" className="nav-link center">
              Services
            </a>
            <Link to="/signin" className="nav-link center">
              Log In
            </Link>
            <a href="#" className="nav-link center">
              Log In
            </a>
            <a href="#" className="nav-link center">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
