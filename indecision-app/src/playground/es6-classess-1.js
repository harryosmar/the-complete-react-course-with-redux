class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hi I'm ${this.name}!`;
    }

    description() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Spongebob', 29);
const her = new Person();
console.log(me, me.greeting(), me.description());
console.log(her, her.greeting(), her.description());

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    isHaveMajor() {
        return !!this.major;
    }

    description() {
        let description = super.description();

        if (this.isHaveMajor()) {
            description += ` My major is ${this.major}`;
        }

        return description;
    }
}

const student1 = new Student('Patrick', 30, 'Computer Science');
console.log(student1.description());

const anonymousStudent = new Student();
console.log(anonymousStudent.description());


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    isHaveHomeLocation() {
        return !!this.homeLocation;
    }

    greeting() {
        let greeting = super.greeting();

        if (this.isHaveHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const traveller1 = new Traveller('SquidWord', 45, 'Bikini Bottom');
console.log(traveller1.greeting());

const anonymousTraveller = new Traveller();
console.log(anonymousTraveller.greeting());