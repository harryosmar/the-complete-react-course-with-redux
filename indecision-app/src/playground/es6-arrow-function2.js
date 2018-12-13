const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());


const user = {
    name: "spongebob",
    cities: ["bikini bottoms", "beach", "miami", "hawai"],
    placesTolive() {
        return this.cities.map((city) => `${user.name} live at ${city}`);
    }
};

console.log(user.placesTolive());



// function greet(name) {
//     console.log(arguments);
//     return `Hello ${name}`;
// }


const greet = (name) => {
    console.log(arguments);
    return `Hello ${name}`;
}


console.log(greet('patrick', 'spongebob'));