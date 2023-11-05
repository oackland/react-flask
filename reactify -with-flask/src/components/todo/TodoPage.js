import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
const App = () => {
    const [notes, setNotes] = useState([]);
    const addNote = (newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };
    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
    };
    return (_jsxs("div", { children: [_jsx(CreateArea, { onAdd: addNote }), notes.map((noteItem, index) => (_jsx(Note, { id: index, title: noteItem.title, content: noteItem.content, onDelete: deleteNote }, index)))] }));
};
export default App;
