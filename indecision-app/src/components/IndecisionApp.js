import React from 'react';
import Header from './Header.js';
import AddOption from './AddOption.js';
import Action from './Action.js';
import Options from './Options.js';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.addOption = this.addOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
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

    handlePick() {
        const selectedIndexOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[selectedIndexOption]);
    }

    addOption(newOption) {
        if (!newOption) {
            return 'enter valid value to add option';
        } else if(this.state.options.indexOf(newOption) > -1) {
            return 'option already exist';
        }

        this.setState((prevState) => ({
            options: [...prevState.options, newOption]
        }));
    }

    handleRemoveOption(removedOption) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => removedOption !== option)
        }));
    }

    handleRemoveAll() {
        this.setState(() => ({options: []}) );
    }

    render() {
        const subtitle = 'Put your live in the hands of computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handlePick={this.handlePick} isDisabled={!this.state.options.length}/>
                <Options handleRemoveAll={this.handleRemoveAll} handleRemoveOption={this.handleRemoveOption} options={this.state.options} />
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;