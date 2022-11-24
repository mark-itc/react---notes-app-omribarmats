import "./Form.css";
import TextareaAutosize from "react-textarea-autosize";

export const Form = (props) => {
  return (
    <form className={props.formId === "popup" ? "formPopup" : "formApp"}>
      <TextareaAutosize
        id="title"
        rows="1"
        placeholder="Note title"
        onChange={(event) => props.setNoteTitle(event.target.value)}
      >
        {props.DefaultTitle}
      </TextareaAutosize>
      <TextareaAutosize
        id="note"
        rows="1"
        placeholder="Your description goes here..."
        onChange={(event) => props.setnoteDescription(event.target.value)}
      >
        {props.DefaultDescription}
      </TextareaAutosize>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.buttonClicked(props.noteTitle, props.noteDescription, props.id);
        }}
      >
        {props.formId === "popup" ? "Update note" : "Add Note"}
      </button>
    </form>
  );
};
