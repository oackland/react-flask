import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "@mui/material/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const TodoNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: handleMenuOpen, children: _jsx(MenuIcon, {}) }), _jsxs(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleMenuClose, children: [_jsx(MenuItem, { onClick: handleMenuClose, children: "Coding" }), _jsx(MenuItem, { onClick: handleMenuClose, children: "Task" }), _jsx(MenuItem, { onClick: handleMenuClose, children: "Admin" }), _jsx(MenuItem, { onClick: handleMenuClose, children: "Settings" })] }), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: "ToDo List" }), _jsx(Button, { color: "inherit", children: "Login" }), _jsx(Button, { color: "inherit", children: "Sign Up" })] }) }));
};
export default TodoNavbar;
