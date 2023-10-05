import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/forms/SignIn";
import SignUp from "./pages/forms/SignUp";
import Login from "./pages/forms/Login";
import Todo from "./pages/Todo";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/dashboard/Dashboards";

interface AppProps {
  children: React.ReactNode;
  user: { id: number; username: string; email: string };
}

const App: React.FC<AppProps> = ({ children, user }: AppProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TodoList" element={<Todo />} />
        <Route
          path="/dashboard"
          element={<Dashboard children={children} user={user} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
