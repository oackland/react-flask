import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StickyNavbar from "./StickyNavbar";
import DashHeader from "./DashComponents/DashHeader";
import Footer from "../home/homeComponents/Footer";
const Layout = () => (_jsxs("div", { className: "layout", children: [_jsx("header", { children: _jsx(DashHeader, {}) }), _jsx(StickyNavbar, {}), _jsx("footer", { children: _jsx(Footer, {}) })] }));
export default Layout;
