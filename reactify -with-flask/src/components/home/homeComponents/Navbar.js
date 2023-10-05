import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isContainerChanged, setIsContainerChanged] = useState(false);
    useEffect(() => {
        const openNavbarIcon = document.querySelector(".open-navbar-icon");
        openNavbarIcon?.addEventListener("click", () => {
            setIsContainerChanged(true);
        });
        const closeNavbarIcon = document.querySelector(".close-navbar-icon");
        closeNavbarIcon?.addEventListener("click", () => {
            setIsContainerChanged(false);
        });
        const navigationButtons = document.querySelectorAll(".navigation-button");
        navigationButtons.forEach((item) => {
            // Cast item to HTMLElement to access the onclick property
            const buttonElement = item;
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
            navigationButtons.forEach((item) => {
                const buttonElement = item;
                buttonElement.onclick = null;
            });
        };
    }, []);
    return (_jsxs("div", { className: `container ${isContainerChanged ? "change" : ""}`, children: [_jsxs("div", { className: "open-navbar-icon navbar-icon center", children: [_jsx("div", { className: "line" }), _jsx("div", { className: "line" }), _jsx("div", { className: "line" })] }), _jsx("div", { className: "navbar-wrapper", children: _jsxs("nav", { className: "navbar", children: [_jsxs("div", { className: "close-navbar-icon navbar-icon center", children: [_jsx("div", { className: "line line-1" }), _jsx("div", { className: "line line-2" })] }), _jsxs("div", { className: "nav-list", children: [_jsx("a", { href: "https://google.com", className: "nav-link center", children: "Home" }), _jsx("a", { href: "#", className: "nav-link center", children: "Services" }), _jsx(Link, { to: "/signin", className: "nav-link center", children: "Log In" }), _jsx("a", { href: "#", className: "nav-link center", children: "Log In" }), _jsx("a", { href: "#", className: "nav-link center", children: "Sign Up" })] })] }) })] }));
};
export default Navbar;
