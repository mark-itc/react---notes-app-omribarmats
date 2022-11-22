import "./App.css";
import { Notes } from "./Components/Notes";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (noteText, noteTitle) => {
    const note = {
      title: noteTitle,
      text: noteText,
      date: new Date(),
      id: notes.length === 0 ? 1 : notes[notes.length - 1].id + 1,
    };
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <form className="form">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddNotes("Example note", "Note title");
          }}
        >
          Add Note
        </button>
      </form>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
