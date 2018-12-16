console.log('app is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if (option) {
        app.options = [...app.options, option];
        e.target.elements.option.value = '';
        console.log(app.options);
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    console.log(app.options);
    renderApp();
};

const onMakeDecision = () => {
    const randomOptionIndex = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomOptionIndex];
    alert(`Here is what you should do : ${selectedOption}`);
};

const placeholder = document.getElementById('placedhere');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((option,index) => <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, placeholder);
};

renderApp();