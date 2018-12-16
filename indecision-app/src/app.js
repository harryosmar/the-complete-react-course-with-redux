class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your live in the hands of computer';
        const options = ['item1', 'item2', 'item3', 'item4'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Here are your options</p>
                <ol>
                    {this.props.options.length && this.props.options.map((option, index) => <Option key={index} option={option}/>)}
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        console.log(this.props);
        return (
            <li>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('placedhere'));