import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Footer = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };
    return (_jsxs("footer", { className: "footer", children: [_jsxs("div", { className: "footer-list", children: [_jsx("a", { href: "#home-section", className: "footer-link", onClick: () => scrollToSection("home-section"), children: "Home" }), _jsx("a", { href: "#tours-section", className: "footer-link", onClick: () => scrollToSection("tours-section"), children: "Tours" }), _jsx("a", { href: "#about-us-section", className: "footer-link", onClick: () => scrollToSection("about-us-section"), children: "About Us" }), _jsx("a", { href: "#offer-section", className: "footer-link", onClick: () => scrollToSection("offer-section"), children: "Offer" }), _jsx("a", { href: "#contact-section", className: "footer-link", onClick: () => scrollToSection("contact-section"), children: "Contact" })] }), _jsx("p", { className: "footer-paragraph", children: "Copyright \u00A9 Oakland Toro All Rights Reserved" })] }));
};
export default Footer;
