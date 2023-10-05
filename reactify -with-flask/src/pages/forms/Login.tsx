import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
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
        const response = await axios.post(
          "http://localhost:5000/api/login",
          values,
        );
        const { token } = response.data;

        localStorage.setItem("token", token);
        navigate("/dashboard");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          formik.setStatus(
            error.response.data.error || "An unexpected error occurred",
          );
        } else {
          formik.setStatus("An unexpected error occurred");
        }
      }
    },
  });

  return (
    <>
      <section className="stories full-height">
        <div className="video-container">
          <video className="bg-video" autoPlay muted loop>
            <source src="../../../public/img/video.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="white form-title">
          <i className={"text-with-shadow"}>LOG IN</i>
        </h1>
        <div className="container-login">
          <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>

            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="form-error">{formik.errors.email}</div>
              ) : null}

              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="form-error">{formik.errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
