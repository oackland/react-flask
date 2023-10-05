import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:5000/api/login", values);
                const { token } = response.data;
                localStorage.setItem("token", token);
                navigate("/dashboard");
            }
            catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    formik.setStatus(error.response.data.error || "An unexpected error occurred");
                }
                else {
                    formik.setStatus("An unexpected error occurred");
                }
            }
        },
    });
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "stories full-height", children: [_jsx("div", { className: "video-container", children: _jsx("video", { className: "bg-video", autoPlay: true, muted: true, loop: true, children: _jsx("source", { src: "../../../public/img/video.mp4", type: "video/mp4" }) }) }), _jsx("h1", { className: "white form-title", children: _jsx("i", { className: "text-with-shadow", children: "LOG IN" }) }), _jsx("div", { className: "container-login", children: _jsxs("form", { onSubmit: formik.handleSubmit, children: [_jsx("h1", { children: "Login" }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "form-label", children: "Email" }), _jsx("input", { type: "email", id: "email", className: "form-input", placeholder: "Enter your Email", value: formik.values.email, onChange: formik.handleChange }), formik.touched.email && formik.errors.email ? (_jsx("div", { className: "form-error", children: formik.errors.email })) : null, _jsx("label", { htmlFor: "password", className: "form-label", children: "Password" }), _jsx("input", { type: "password", id: "password", className: "form-input", placeholder: "Enter your Password", value: formik.values.password, onChange: formik.handleChange }), formik.touched.password && formik.errors.password ? (_jsx("div", { className: "form-error", children: formik.errors.password })) : null] }), _jsx("button", { type: "submit", className: "form-button", children: "Login" })] }) })] }) }));
};
export default Login;
