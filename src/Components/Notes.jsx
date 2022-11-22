import "./Notes.css";
import { Note } from "./Note";
import { useState } from "react";
import { Popup } from "./Popup";
import Modal from "react-modal";

export const Notes = (props) => {
  const handleDelteNote = (id) => {
    if (
      window.confirm("Are you sure you want to delete note " + id + " ?") ==
      true
    ) {
      deleteNote(id);
    }
  };

  const deleteNote = (id) => {
    props.setNotes(props.notes.filter((note) => note.id !== id));
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalValue, setmodalValue] = useState();
  const [modalTitle, setmodalTitle] = useState();
  const [modalText, setmodalText] = useState();
  const [modalDate, setmodalDate] = useState();

  const getModalValue = (value, title, text, date) => {
    setmodalValue(value);
    setmodalTitle(title);
    setmodalText(text);
    setmodalDate(date);
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid goldenrod",
      borderRadius: "7px",
      margin: "10px",
      padding: "5px",
      backgroundColor: "lightgoldenrodyellow",
      padding: "10px",
    },
  };

  return (
    <div>
      <div className="Notes-list">
        {props.notes.map((note, index) => {
          return (
            <Note
              key={index}
              date={note.date}
              text={note.text}
              id={note.id}
              title={note.title}
              handleDelteNote={handleDelteNote}
              getModalValue={getModalValue}
            />
          );
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Popup
            closeModal={closeModal}
            id={modalValue}
            title={modalTitle}
            text={modalText}
            date={modalDate}
          />
        </Modal>
      </div>
    </div>
  );
};
