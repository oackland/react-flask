import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [isExpanded] = useState(true);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };
    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    };
    return (_jsx("div", { id: "form", children: _jsxs("form", { className: "create-note", name: "notes", onSubmit: submitNote, children: [_jsx("input", { type: "text", name: "title", placeholder: "Title", onChange: handleChange, value: note.title }), _jsx("div", { className: "line" }), _jsx("textarea", { className: "textarea", name: "content", rows: 3, value: note.content, onChange: handleChange, placeholder: "Take a note..." }), _jsx(Zoom, { in: isExpanded, children: _jsx(Fab, { onClick: submitNote, children: _jsx(AddIcon, {}) }) })] }) }));
};
export default CreateArea;
