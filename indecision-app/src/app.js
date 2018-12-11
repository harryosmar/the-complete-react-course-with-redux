console.log('app is running');

var user = {
    'name' : 'Mokmok',
    'age' : 100,
    'location' : 'earth'
};

var element = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>{user.age} years old</p>
        <p>live at {user.location}</p>
    </div>
);

var placeholder = document.getElementById('placedhere');

ReactDOM.render(element, placeholder);
