import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Draggable from "../../components/draggable/Draggable";
import EmbeddedBrowser from "../../components/webEbedded";
const Dashboard = () => {
    return (_jsx("div", { style: { position: "relative", height: "100vh", width: "100vw" }, children: _jsxs(Draggable, { children: [_jsx("div", { style: {
                        width: "100px",
                        height: "100px",
                        backgroundColor: "lightblue",
                    } }), _jsx(EmbeddedBrowser, { url: "https://www.example.com" })] }) }));
};
export default Dashboard;
