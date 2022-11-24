import "./App.css";
import { Notes } from "./Components/Notes";
import { Form } from "./Components/Form";
import { NotesContext } from "./Context/NotesContext";
import { useState, useContext } from "react";

function App() {
  const { notes, setNotes } = useContext(NotesContext);
  const [noteTitle, setNoteTitle] = useState();
  const [noteDescription, setnoteDescription] = useState();

  const handleAddNotes = (title, description) => {
    if (description.length === 0) return;

    const note = {
      title: title,
      text: description,
      date: new Date(),
      update: new Date(),
      id: notes.length === 0 ? 1 : notes[notes.length - 1].id + 1,
    };
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <Form
        formId="app"
        noteTitle={noteTitle}
        noteDescription={noteDescription}
        setNoteTitle={setNoteTitle}
        setnoteDescription={setnoteDescription}
        buttonClicked={handleAddNotes}
        DefaultTitle=""
        DefaultDescription=""
      />
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
