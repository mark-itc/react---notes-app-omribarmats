import { useState, useEffect, createContext } from "react";
import localForage from "localforage";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, SetNewNoteTitle] = useState();
  const [newNoteDescription, SetNewNoteDescription] = useState();

  useEffect(() => {
    localForage.setItem("Notes list", { notes: notes });
  }, [notes]);


 async function getLocalNotes()  {
  const localNotes = await localForage.getItem("Notes list");
  if (localNotes) {
    setNotes(localNotes.notes);
  }
 }

 useEffect(()=>{
  getLocalNotes()
 },[])

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
