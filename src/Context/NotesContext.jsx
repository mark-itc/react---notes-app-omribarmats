import { useState, createContext } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, SetNewNoteTitle] = useState();
  const [newNoteDescription, SetNewNoteDescription] = useState();

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        newNoteTitle,
        SetNewNoteTitle,
        newNoteDescription,
        SetNewNoteDescription,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
