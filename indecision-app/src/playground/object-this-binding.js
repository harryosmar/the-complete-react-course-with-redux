const Person = {
    name: 'Spongebob',
    getName: function() {
        return this.name;
    }
};

console.log(Person.getName());

const getName = Person.getName;
console.log(getName()); // Uncaught TypeError: Cannot read property 'name' of undefined

const getNameWithBind = Person.getName.bind(Person);
console.log(getNameWithBind());

const getNameWithBind2 = Person.getName.bind({name: 'Patrick'});
console.log(getNameWithBind2());