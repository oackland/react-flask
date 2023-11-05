import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashHeader from "./DashComponents/DashHeader";
import Footer from "../home/homeComponents/Footer";
import WeatherComponent from "../weather/SearchMain";
import EmbeddedBrowser from "../webEbedded";
const Layout = () => (_jsxs("div", { className: "layout", children: [_jsxs("header", { children: [_jsx(WeatherComponent, {}), _jsx(DashHeader, {})] }), _jsx(EmbeddedBrowser, { url: "https://google.com" }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
export default Layout;
