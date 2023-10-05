import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik } from "formik";
import * as yup from "yup";
import "./formCss/ContactForm.css";
import * as React from "react";
const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Required"),
    fullName: yup.string().required("Required"),
    subject: yup.string().required("Required"),
    message: yup.string().max(2000, "Maximum of 2000 characters allowed"),
});
const Contact = () => {
    const [showVirtualFile, setShowVirtualFile] = React.useState(false);
    const [formData, setFormData] = React.useState(null);
    return (_jsx(_Fragment, { children: _jsxs("div", { style: {
                transform: showVirtualFile ? "translateY(100vh)" : "none",
                transition: "transform 0.3s ease-in-out",
            }, children: [_jsx("div", { className: "title-contact", children: "CONTACT US" }), _jsx(Formik, { initialValues: {
                        email: "",
                        fullName: "",
                        subject: "",
                        message: "",
                    }, validationSchema: validationSchema, onSubmit: (values) => {
                        setFormData(values);
                        setShowVirtualFile(true);
                    }, children: ({ handleSubmit }) => (_jsxs(_Fragment, { children: [_jsx("form", { onSubmit: handleSubmit }), showVirtualFile && formData && (_jsx("div", { className: "virtual-file" }))] })) })] }) }));
};
export default Contact;
