class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
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
        if (!newOption) {
            return 'enter valid value to add option';
        } else if(this.state.options.indexOf(newOption) > -1) {
            return 'option already exist';
        }

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
        const subtitle = 'Put your live in the hands of computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handlePick={this.handlePick} isDisabled={!this.state.options.length}/>
                <Options handleRemoveAll={this.handleRemoveAll} options={this.state.options} />
                <AddOption addOption={this.addOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={props.isDisabled} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button disabled={props.options.length === 0} onClick={props.handleRemoveAll}>Remove All</button>
            <p>Here are your options</p>
            <ol>
                {props.options.map((option, index) => <Option key={index} option={option}/>)}
            </ol>
        </div>
    );
};

const Option = (props) => {
    return (
        <li>{props.option}</li>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: ''
        }
    }

    addOption(e) {
        e.preventDefault();
        const newOption = e.target.elements.option.value.trim();;
        const error = this.props.addOption(newOption);
        this.setState(() => {
            return {error};
        });

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

ReactDOM.render(<IndecisionApp />, document.getElementById('placedhere'));