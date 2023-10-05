import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
const StickyNavbar = () => {
    const navbarRef = useRef(null);
    const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];
    useEffect(() => {
        const navbarOffsetTop = navbarRef.current?.offsetTop || 0;
        const onScroll = () => {
            if (window.pageYOffset >= navbarOffsetTop) {
                navbarRef.current?.classList.add("sticky");
            }
            else {
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
    return (_jsx("div", { ref: navbarRef, className: "navbar", children: _jsxs("nav", { className: "navbar center", children: [_jsx("a", { href: "#section-1", className: "navbar-link", children: "Home" }), _jsx("a", { href: "#section-2", className: "navbar-link", children: "About" }), _jsx("a", { href: "#section-3", className: "navbar-link", children: "Portfolio" }), _jsx("a", { href: "#section-4", className: "navbar-link", children: "Contact" })] }) }));
};
export default StickyNavbar;
