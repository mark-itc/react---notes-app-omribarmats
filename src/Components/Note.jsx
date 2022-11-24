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
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.handleDelteNote(props.id, props.title);
        }}
      >
        Delete
      </button>
      <p className="date">{props.date.toLocaleString("de-DE")}</p>
      {props.date.toLocaleString("de-DE") ===
      props.update.toLocaleString("de-DE") ? (
        ""
      ) : (
        <p className="update">{props.update.toLocaleString("de-DE")}</p>
      )}
    </div>
  );
};
