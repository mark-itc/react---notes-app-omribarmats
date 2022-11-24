import "./Popup.css";
import { Form } from "./Form";
import { NotesContext } from "../Context/NotesContext";
import { useContext } from "react";

export const Popup = (props) => {
  const {
    notes,
    newNoteTitle,
    newNoteDescription,
    SetNewNoteTitle,
    SetNewNoteDescription,
  } = useContext(NotesContext);

  const handleUpdateNote = (title, description, id) => {
    if (newNoteDescription === description && newNoteTitle === title)
      return props.closeModal();

    if (newNoteDescription.length === 0)
      return alert("Please add note description");
    notes[id - 1].title = newNoteTitle;
    notes[id - 1].text = newNoteDescription;
    notes[id - 1].update = new Date();
    props.closeModal();
  };

  return (
    <div className="popup">
      <p>Edit Note #{props.id} </p>
      <Form
        formId="popup"
        noteTitle={props.title}
        noteDescription={props.text}
        DefaultTitle={props.title}
        DefaultDescription={props.text}
        id={props.id}
        buttonClicked={handleUpdateNote}
        setNoteTitle={SetNewNoteTitle}
        setnoteDescription={SetNewNoteDescription}
      />
      <button className="close" onClick={props.closeModal}>
        Close
      </button>
    </div>
  );
};
