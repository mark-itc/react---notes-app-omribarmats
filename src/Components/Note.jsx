import './Notes.css'
import { useState } from 'react'
import Modal from 'react-modal';
import { Popup } from './Popup'

export const Note = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid goldenrod',
            borderRadius: '7px',
            margin: '10px',
            padding: '5px',
            backgroundColor: 'lightgoldenrodyellow',
            padding: '10px',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return <div className="note">
        <div className="note-textarea" onClick={openModal}>
            <h2>{props.id}. {props.title}</h2>
            <p>{props.text}</p>
            <p>{props.date.toDateString()}</p>
        </div>
        <button onClick={(e) => {
            e.preventDefault();
            props.handleDelteNote(props.id)
        }}>Delete</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <Popup closeModal={closeModal} id={props.id} title={props.title} text={props.text} date={props.date} />
        </Modal>
    </div>
}