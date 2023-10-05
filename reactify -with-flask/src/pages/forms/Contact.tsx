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

const Contact: React.FC = () => {
  const [showVirtualFile, setShowVirtualFile] = React.useState(false);
  const [formData, setFormData] = React.useState<{
    email: string;
    fullName: string;
    subject: string;
    message: string;
  } | null>(null);

  return (
    <>
      <div
        style={{
          transform: showVirtualFile ? "translateY(100vh)" : "none",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="title-contact">CONTACT US</div>
        <Formik
          initialValues={{
            email: "",
            fullName: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setFormData(values);
            setShowVirtualFile(true);
          }}
        >
          {({ handleSubmit }) => (
            <>
              <form onSubmit={handleSubmit}>{/* ... */}</form>
              {showVirtualFile && formData && (
                <div className="virtual-file">
                  {/* ... display form data ... */}
                </div>
              )}
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
