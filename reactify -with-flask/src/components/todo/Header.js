import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@mui/material/styles";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
const TodoNavbar = () => {
    return (_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: "ToDo List" }), _jsx(Button, { color: "inherit" }), _jsx(Button, { color: "inherit", children: "Sign Up" })] }) }));
};
export default TodoNavbar;
