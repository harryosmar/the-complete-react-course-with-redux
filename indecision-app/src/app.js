console.log('app is running');

const user = {
    'name' : 'Mokmok',
    'age' : 15,
    // 'location' : 'earth'
};


function getLocation(location) {
    if (location) {
        return <p>live at {location}</p>;
    }
}

const element = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'anonymous'}</h1>
        {user.age >= 17 && <p>{user.age} years old</p>}
        {getLocation(user.location)}
    </div>
);

const placeholder = document.getElementById('placedhere');


const addOne = () => {
    console.log('add one');
};

const minusOne = () => {
    console.log('minus one');
};

const reset = () => {
    console.log('reset');
};

let count = 0;
const template2 = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

ReactDOM.render(template2, placeholder);
