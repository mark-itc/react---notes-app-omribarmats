import './Notes.css'

export const Note = (props) => {

    return <div className="note">
        <h2>{props.id}. {props.text}</h2>
        <p>{props.date.toDateString()}</p>
        <button onClick={(e) => {
            e.preventDefault();
            props.handleDelteNote(props.id)
        }}>Delete</button>
    </div>
}