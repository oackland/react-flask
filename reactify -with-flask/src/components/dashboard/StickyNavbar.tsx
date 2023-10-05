import React, { useEffect, useRef } from "react";

const StickyNavbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

  useEffect(() => {
    const navbarOffsetTop = navbarRef.current?.offsetTop || 0;

    const onScroll = () => {
      if (window.pageYOffset >= navbarOffsetTop) {
        navbarRef.current?.classList.add("sticky");
      } else {
        navbarRef.current?.classList.remove("sticky");
      }
    };

    const onResize = () => {
      window.location.reload();
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [progressBarPercents]);

  return (
    <div ref={navbarRef} className="navbar">
      <nav className="navbar center">
        <a href="#section-1" className="navbar-link">
          Home
        </a>
        <a href="#section-2" className="navbar-link">
          About
        </a>
        <a href="#section-3" className="navbar-link">
          Portfolio
        </a>
        <a href="#section-4" className="navbar-link">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default StickyNavbar;
