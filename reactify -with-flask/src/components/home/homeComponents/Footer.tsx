import React from "react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-list">
        <a
          href="#home-section"
          className="footer-link"
          onClick={() => scrollToSection("home-section")}
        >
          Home
        </a>
        <a
          href="#tours-section"
          className="footer-link"
          onClick={() => scrollToSection("tours-section")}
        >
          Tours
        </a>
        <a
          href="#about-us-section"
          className="footer-link"
          onClick={() => scrollToSection("about-us-section")}
        >
          About Us
        </a>
        <a
          href="#offer-section"
          className="footer-link"
          onClick={() => scrollToSection("offer-section")}
        >
          Offer
        </a>
        <a
          href="#contact-section"
          className="footer-link"
          onClick={() => scrollToSection("contact-section")}
        >
          Contact
        </a>
      </div>
      <p className="footer-paragraph">
        Copyright &copy; Oakland Toro All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
