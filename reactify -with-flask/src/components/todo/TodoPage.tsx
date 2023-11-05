import { useState, FC } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

interface NoteItem {
  title: string;
  content: string;
}

const App: FC = () => {
  const [notes, setNotes] = useState<NoteItem[]>([]);

  const addNote = (newNote: NoteItem) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default App;
