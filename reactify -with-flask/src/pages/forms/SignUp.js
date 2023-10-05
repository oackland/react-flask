import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, LinearProgress, Tooltip, } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
const memberTypes = ["Parent", "Children", "Teacher"];
const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    memberType: yup.string().required("Type of member is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol")
        .min(8, "Password must contain at least 8 characters"),
    passwordConfirmation: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password")], "Passwords must match"),
});
const Signup = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            firstName: "",
            lastName: "",
            memberType: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        },
        validationSchema,
        onSubmit: (values) => {
            const payload = {
                ...values,
                first_name: values.firstName,
                last_name: values.lastName,
                member_type: values.memberType,
            };
            delete payload.firstName;
            delete payload.lastName;
            delete payload.memberType;
            // Send a POST request to the Flask API endpoint using Axios
            axios
                .post("http://localhost:5000/api/register", payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                const data = response.data;
                if (data.message) {
                    alert(data.message);
                    navigate("/Login");
                }
                else {
                    alert(data.error);
                }
            })
                .catch((error) => {
                console.error("Error:", error);
            });
        },
    });
    const passwordStrength = (() => {
        const lengthCriteria = formik.values.password.length >= 8;
        const upperCaseCriteria = /[A-Z]/.test(formik.values.password);
        const symbolCriteria = /[^a-zA-Z0-9]/.test(formik.values.password);
        return [lengthCriteria, upperCaseCriteria, symbolCriteria].filter(Boolean)
            .length;
    })();
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "stories full-height", children: [_jsx("div", { className: "video-container", children: _jsx("video", { className: "bg-video", autoPlay: true, muted: true, loop: true, children: _jsx("source", { src: "../../../public/img/video.mp4", type: "video/mp4" }) }) }), _jsx("h1", { className: "white form-title", children: _jsx("i", { className: "text-with-shadow", children: "SIGN UP" }) }), _jsx("div", { className: "container-signup", children: _jsx(Container, { maxWidth: "xs", children: _jsxs("form", { onSubmit: formik.handleSubmit, children: [_jsx(TextField, { fullWidth: true, id: "username", name: "username", label: "Username", value: formik.values.username, onChange: formik.handleChange, error: formik.touched.username && Boolean(formik.errors.username), helperText: formik.touched.username && formik.errors.username, margin: "normal" }), _jsx(TextField, { fullWidth: true, id: "firstName", name: "firstName", label: "First Name", value: formik.values.firstName, onChange: formik.handleChange, error: formik.touched.firstName && Boolean(formik.errors.firstName), helperText: formik.touched.firstName && formik.errors.firstName, margin: "normal" }), _jsx(TextField, { fullWidth: true, id: "lastName", name: "lastName", label: "Last Name", value: formik.values.lastName, onChange: formik.handleChange, error: formik.touched.lastName && Boolean(formik.errors.lastName), helperText: formik.touched.lastName && formik.errors.lastName, margin: "normal" }), _jsxs(FormControl, { fullWidth: true, margin: "normal", children: [_jsx(InputLabel, { id: "memberType-label", children: "Type of Member" }), _jsxs(Select, { labelId: "memberType-label", id: "memberType", name: "memberType", value: formik.values.memberType, onChange: formik.handleChange, error: formik.touched.memberType &&
                                                Boolean(formik.errors.memberType), children: [_jsx(MenuItem, { value: "", children: "Select Member Type" }), memberTypes.map((type) => (_jsx(MenuItem, { value: type, children: type }, type)))] }), formik.touched.memberType && formik.errors.memberType && (_jsx("div", { className: "error", children: formik.errors.memberType }))] }), _jsx(TextField, { fullWidth: true, id: "email", name: "email", label: "Email", type: "email", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email, margin: "normal" }), _jsx(Tooltip, { title: "Password must have 1 uppercase letter, 1 symbol, and be at least 8 characters long.", arrow: true, placement: "right", children: _jsx(TextField, { fullWidth: true, id: "password", name: "password", label: "Password", type: "password", value: formik.values.password, onChange: formik.handleChange, error: formik.touched.password && Boolean(formik.errors.password), helperText: formik.touched.password && formik.errors.password, margin: "normal" }) }), _jsx(LinearProgress, { variant: "determinate", value: (passwordStrength / 3) * 100 }), _jsx(TextField, { fullWidth: true, id: "passwordConfirmation", name: "passwordConfirmation", label: "Password Confirmation", type: "password", value: formik.values.passwordConfirmation, onChange: formik.handleChange, error: formik.touched.passwordConfirmation &&
                                        Boolean(formik.errors.passwordConfirmation), helperText: formik.touched.passwordConfirmation &&
                                        formik.errors.passwordConfirmation, margin: "normal" }), _jsx(Button, { color: "primary", variant: "contained", fullWidth: true, type: "submit", children: "Submit" })] }) }) })] }) }));
};
export default Signup;
