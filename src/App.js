import './App.css';
import { Note } from './Components/Note'
import { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([])

  const handleAddNotes = (noteText) => {
    const note = {
      text: noteText,
      date: new Date()
    }
    setNotes([...notes, note])
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
          return <Note key={index} date={note.date} text={note.text} />
        })}
      </div>
    </div>
  );
}

export default App;
