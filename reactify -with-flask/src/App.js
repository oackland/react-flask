import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/forms/SignIn";
import SignUp from "./pages/forms/SignUp";
import Login from "./pages/forms/Login";
import Todo from "./pages/Todo";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/dashboard/Dashboards";
const App = ({ children, user }) => {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/signin", element: _jsx(SignIn, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/TodoList", element: _jsx(Todo, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, { children: children, user: user }) })] }) }));
};
export default App;
