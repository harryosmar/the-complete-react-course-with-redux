import React from 'react';

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

        this.setState(() => ({error}) );

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

export default AddOption;