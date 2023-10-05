import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
    function handleClick() {
        props.onDelete(props.id);
    }
    return (_jsxs("div", { className: "note", children: [_jsx("h1", { children: props.title }), _jsx("p", { children: props.content }), _jsx("button", { onClick: handleClick, children: _jsx(DeleteIcon, {}) })] }));
};
export default Note;
