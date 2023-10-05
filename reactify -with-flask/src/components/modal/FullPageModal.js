import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./modal.css";
import TodoNavbar from "../todo/Header";
const FullPageModal = ({ show, onClose, children }) => {
    if (!show)
        return null;
    return (_jsx("div", { className: "fullpage-modal-overlay", children: _jsxs("div", { className: "fullpage-modal-content", children: [_jsx(TodoNavbar, {}), _jsx("div", { className: "button", children: _jsx("button", { className: "button-7", onClick: onClose, children: "BACK" }) }), children] }) }));
};
export default FullPageModal;
