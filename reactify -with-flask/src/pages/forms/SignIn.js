import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const checkEmail = async () => {
        try {
            await axios.post("http://localhost:5000/api/emailcheck", { email });
            navigate("/Login");
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.status === 404
                    ? "No email exists."
                    : "Error from server: " + error.response?.status ||
                        "No response from server.";
                navigate("/SignUp");
                setMessage(message);
            }
            else {
                const e = error;
                setMessage("An unexpected error occurred: " + e.toString());
            }
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "stories full-height", children: [_jsx("div", { className: "video-container", children: _jsx("video", { className: "bg-video", autoPlay: true, muted: true, loop: true, children: _jsx("source", { src: "../../../public/img/video.mp4", type: "video/mp4" }) }) }), _jsx("h1", { className: "white form-title", children: _jsx("i", { className: "text-with-shadow", children: "SING IN / SIGN UP" }) }), _jsxs("div", { className: "form-container", children: [_jsx("label", { htmlFor: "myInput", className: "form-label", children: "Enter your Email" }), _jsx("input", { className: "input-with-shadow", type: "email", id: "myInput", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your Email..." }), _jsx("button", { onClick: checkEmail, children: "Check Email" }), message && _jsx("p", { children: message })] })] }) }));
};
export default SignIn;
