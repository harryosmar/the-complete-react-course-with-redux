import React from 'react';
import Header from './Header.js';
import AddOption from './AddOption.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: ''
    }

    componentDidMount() {
        try {
            let options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch(e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    handlePick = () => {
        const selectedIndexOption = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({selectedOption: this.state.options[selectedIndexOption]}) );
    }

    closeModalWhatShouldIDo = () => {
        this.setState(() => ({selectedOption: ''}) );
    }

    addOption = (newOption) => {
        if (!newOption) {
            return 'enter valid value to add option';
        } else if(this.state.options.indexOf(newOption) > -1) {
            return 'option already exist';
        }

        this.setState((prevState) => ({
            options: [...prevState.options, newOption]
        }));
    }

    handleRemoveOption = (removedOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => removedOption !== option)
        }));
    }

    handleRemoveAll = () => {
        this.setState(() => ({options: []}) );
    }

    render() {
        const subtitle = 'Put your live in the hands of computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action handlePick={this.handlePick} isDisabled={!this.state.options.length}/>
                    <div className="widget">
                        <Options handleRemoveAll={this.handleRemoveAll} handleRemoveOption={this.handleRemoveOption} options={this.state.options} />
                        <AddOption addOption={this.addOption}/>
                        <OptionModal selectedOption={this.state.selectedOption} closeModalWhatShouldIDo={this.closeModalWhatShouldIDo}/>
                    </div>
                </div>
            </div>
        );
    }
}