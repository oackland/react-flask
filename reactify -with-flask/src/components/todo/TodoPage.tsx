import React, { useState } from "react";
import Note from "./Note";
import { NoteItem } from "../types";

const TodoList: React.FC = () => {
  const [notes, setNotes] = useState<NoteItem[]>([]);

  function deleteNote(id: number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            Frequence={noteItem.Frequence}
            value={noteItem.value}
            completed={noteItem.completed}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
