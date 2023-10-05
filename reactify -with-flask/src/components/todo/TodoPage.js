import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import Note from "./Note";
const TodoList = () => {
    const [notes, setNotes] = useState([]);
    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((_, index) => {
                return index !== id;
            });
        });
    }
    return (_jsx("div", { children: notes.map((noteItem, index) => {
            return (_jsx(Note, { id: index, title: noteItem.title, content: noteItem.content, Frequence: noteItem.Frequence, value: noteItem.value, completed: noteItem.completed, onDelete: deleteNote }, index));
        }) }));
};
export default TodoList;
