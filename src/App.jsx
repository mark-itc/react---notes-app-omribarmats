import './App.css';
import { Note } from './Components/Note'
import { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([])

  const handleAddNotes = (noteText) => {
    const note = {
      text: noteText,
      date: new Date(),
      id: notes.length === 0 ? 1 : notes[notes.length - 1].id + 1,
    }
    setNotes([...notes, note])
  }

  const handleDelteNote = (id) => {
    if (global.confirm("Are you sure you want to delete note " + id + " ?")) {
      window.open(deleteNote(id), "exit.html");
    }
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
      <form className="form">
        <button onClick={(e) => {
          e.preventDefault();
          handleAddNotes('Example note')
        }}
        >Add Note</button>
      </form>
      <div className="Notes-list">
        {notes.map((note, index) => {
          return <Note key={index} date={note.date} text={note.text} id={note.id} handleDelteNote={handleDelteNote} />
        })}
      </div>
    </div>
  );
}

export default App;
