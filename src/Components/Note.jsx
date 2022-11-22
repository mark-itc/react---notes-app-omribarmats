import "./Note.css";

export const Note = (props) => {
  return (
    <div className="note">
      <div
        className="note-textarea"
        onClick={() =>
          props.getModalValue(props.id, props.title, props.text, props.date)
        }
      >
        <h2>
          {props.id}. {props.title}
        </h2>
        <p>{props.text}</p>
        <p>{props.date.toDateString()}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.handleDelteNote(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
