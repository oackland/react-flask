import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./modal.css";
const FullPageModal = ({ show, onClose, children }) => {
    if (!show)
        return null;
    return (_jsx("div", { className: "fullpage-modal-overlay", children: _jsxs("div", { className: "fullpage-modal-content", children: [_jsxs("div", { className: "button", children: [_jsx("button", { className: "button-7", onClick: onClose, children: "BACK" }), _jsx("div", { style: { width: "100vw", height: "100vh" } })] }), children] }) }));
};
export default FullPageModal;
