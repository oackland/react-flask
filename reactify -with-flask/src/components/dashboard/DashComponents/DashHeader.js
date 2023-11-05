import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import FullPageModal from "../../modal/FullPageModal";
import TodoPage from "../../todo/TodoPage";
const DashHeader = ({ user }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    return (_jsxs("section", { className: "section-1 center", id: "section-1", children: [_jsx("h1", { className: "section-1-heading", children: "Atypical Project" }), _jsx("img", { src: "img/dash/john-smith.jpg", alt: "User unknown", className: "person-img" }), _jsx("h3", { className: "person-name", children: user?.username || "Think Outside the Typical." }), _jsx("button", { onClick: () => setModalVisible(true), className: "section-1-btn", children: "Add a self Note" }), _jsx(FullPageModal, { show: isModalVisible, onClose: () => setModalVisible(false), handleCloseModal: null, modalOpen: true, children: _jsx(TodoPage, {}) })] }));
};
export default DashHeader;
