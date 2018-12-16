class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your live in the hands of computer</h2>
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
                    <li>Item One</li>
                    <li>Item Two</li>
                </ol>
            </div>
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

const templateJSX = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(templateJSX, document.getElementById('placedhere'));

console.log(Header);