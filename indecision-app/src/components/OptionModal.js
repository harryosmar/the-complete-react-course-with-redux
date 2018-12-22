import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.closeModalWhatShouldIDo}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <h3 className="modal__body">{props.selectedOption}</h3>}
            <button className="button" onClick={props.closeModalWhatShouldIDo}>Okay</button>
        </Modal>
    </div>
);

export default OptionModal;