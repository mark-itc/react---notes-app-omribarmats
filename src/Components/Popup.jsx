import './Popup.css';

export const Popup = (props) => {
    return <div className="popup">
        <h1>{props.id}. {props.title}</h1>
        <p>{props.text}</p>
        <p>{props.date.toDateString()}</p>
        <button onClick={props.closeModal}>Close</button>
    </div>
}