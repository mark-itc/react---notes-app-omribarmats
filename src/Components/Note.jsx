import './Notes.css'

export const Note = (props) => {
    return <div className="note">
        <h2>{props.text}</h2>
        <p>{props.date.toDateString()}</p>
    </div>
}