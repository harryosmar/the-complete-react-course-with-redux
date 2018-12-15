const placeholder = document.getElementById('placedhere');

let count = 0;

const addOne = () => {
    count++;
    console.log('add one', count);
    renderCounterApp();
};

const minusOne = () => {
    count--;
    console.log('minus one', count);
    renderCounterApp();
};

const reset = () => {
    count=0;
    console.log('reset', count);
    renderCounterApp();
};

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2, placeholder);
};


renderCounterApp();