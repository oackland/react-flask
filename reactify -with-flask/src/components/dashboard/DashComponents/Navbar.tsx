import { forwardRef } from "react";

const Navbar = forwardRef<HTMLDivElement, NonNullable<unknown>>(
  (_props, ref) => {
    return (
      <nav ref={ref} className="navbar1 center">
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          About
        </a>
        <a href="#" className="navbar-link">
          Portfolio
        </a>
        <a href="#" className="navbar-link">
          Contact
        </a>
      </nav>
    );
  },
);

export default Navbar;
