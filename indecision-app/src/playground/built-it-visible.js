console.log('app is running');

const app = {
    title: 'Visibility Toggle',
    visible: false
};

const handleButtonClicked = () => {
    app.visible = !app.visible;
    renderApp();
};

const placeholder = document.getElementById('placedhere');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={handleButtonClicked}>{app.visible ? 'Hide details' : 'Show details'}</button>
            {app.visible && <p>Hey, There are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, placeholder);
};

renderApp();