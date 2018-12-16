class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.addOption = this.addOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick() {
        const selectedIndexOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[selectedIndexOption]);
    }

    addOption(newOption) {
        this.setState((prevState) => {
            return {
                options: [...prevState.options, newOption]
            };
        });
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your live in the hands of computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick={this.handlePick} isDisabled={!this.state.options.length}/>
                <Options handleRemoveAll={this.handleRemoveAll} options={this.state.options} />
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={this.props.isDisabled} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button disabled={this.props.options.length === 0} onClick={this.props.handleRemoveAll}>Remove All</button>
                <p>Here are your options</p>
                <ol>
                    {this.props.options.map((option, index) => <Option key={index} option={option}/>)}
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
    }

    addOption(e) {
        e.preventDefault();
        const newOption = e.target.elements.option.value.trim();;
        if (newOption) {
            this.props.addOption(newOption);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.addOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('placedhere'));