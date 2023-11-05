import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../../public//css/Dashboard.css";
import Navbar from "./homeComponents/Navbar";
import Header from "./homeComponents/Header";
import Reviews from "./homeComponents/Reviews";
import Contact from "./homeComponents/Contact";
import Footer from "./homeComponents/Footer";
const HomeComponent = ({ children, }) => {
    return (_jsxs("div", { className: "body", children: [_jsx(Navbar, {}), children, _jsx(Header, {}), _jsx(Reviews, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
};
export default HomeComponent;
