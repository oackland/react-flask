import React, { useState, ChangeEvent, FormEvent } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

interface Note {
  title: string;
  content: string;
}

interface CreateAreaProps {
  onAdd: (note: Note) => void;
}

const CreateArea: React.FC<CreateAreaProps> = (props) => {
  const [note, setNote] = useState<Note>({
    title: "",
    content: "",
  });

  const [isExpanded] = useState(true);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event: FormEvent) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div id="form">
      <form className="create-note" name="notes" onSubmit={submitNote}>
        <input
          type="text"
          name={"title"}
          placeholder={"Title"}
          onChange={handleChange}
          value={note.title}
        />
        <div className={"line"}></div>
        <textarea
          className={"textarea"}
          name={"content"}
          rows={3}
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
