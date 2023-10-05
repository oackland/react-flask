import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import FullPageModal from "../../modal/FullPageModal";
import TodoPage from "../../todo/TodoPage";
const DashHeader = ({ user }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    return (_jsxs("section", { className: "section-1 center", id: "section-1", children: [_jsx("h1", { className: "section-1-heading", children: "Atypical Project" }), _jsx("img", { src: "img/dash/john-smith.jpg", alt: "User unknown", className: "person-img" }), _jsx("h3", { className: "person-name", children: user?.username || "Unknown User" }), _jsx("button", { onClick: () => setModalVisible(true), className: "section-1-btn", children: "Projects" }), _jsxs(FullPageModal, { show: isModalVisible, onClose: () => setModalVisible(false), children: [_jsx("h1", { children: "Welcome to the Full Page Modal" }), _jsx("p", { children: "This modal takes up the entire page!" }), _jsx(TodoPage, {})] })] }));
};
export default DashHeader;
