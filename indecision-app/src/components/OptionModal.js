import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.closeModalWhatShouldIDo}
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <h3>{props.selectedOption}</h3>}
            <button onClick={props.closeModalWhatShouldIDo}>Okay</button>
        </Modal>
    </div>
);

export default OptionModal;