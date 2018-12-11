console.log('app is running');

var user = {
    'name' : 'Mokmok',
    'age' : 15,
    // 'location' : 'earth'
};


function getLocation(location) {
    if (location) {
        return <p>live at {location}</p>;
    }
}

var element = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'anonymous'}</h1>
        {user.age >= 17 && <p>{user.age} years old</p>}
        {getLocation(user.location)}
    </div>
);

var placeholder = document.getElementById('placedhere');

ReactDOM.render(element, placeholder);
