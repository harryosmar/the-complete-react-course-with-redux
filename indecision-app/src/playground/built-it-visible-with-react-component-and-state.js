class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleButtonClicked() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.app.title}</h1>
                <button onClick={this.handleButtonClicked}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hey, There are some details you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toggle app={{title:'Visibility Toggle'}} />, document.getElementById('placedhere'));