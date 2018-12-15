class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hi I'm ${this.name}!`;
    }

    description() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person('Spongebob', 29);
const her = new Person();
console.log(me, me.greeting(), me.description());
console.log(her, her.greeting(), her.description());