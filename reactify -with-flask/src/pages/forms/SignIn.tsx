import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const checkEmail = async () => {
    try {
      await axios.post("http://localhost:5000/api/emailcheck", { email });
      navigate("/Login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.status === 404
            ? "No email exists."
            : "Error from server: " + error.response?.status ||
              "No response from server.";
        navigate("/SignUp");
        setMessage(message);
      } else {
        const e = error as Error;
        setMessage("An unexpected error occurred: " + e.toString());
      }
    }
  };

  return (
    <>
      <section className="stories full-height">
        <div className="video-container">
          <video className="bg-video" autoPlay muted loop>
            <source src="../../../public/img/video.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="white form-title">
          <i className={"text-with-shadow"}>SING IN / SIGN UP</i>
        </h1>
        <div className={"form-container"}>
          <label htmlFor="myInput" className={"form-label"}>
            Enter your Email
          </label>
          <input
            className={"input-with-shadow"}
            type="email"
            id="myInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email..."
          />

          <button onClick={checkEmail}>Check Email</button>
          {message && <p>{message}</p>}
        </div>
      </section>
    </>
  );
};

export default SignIn;
