# the-complete-react-course-with-redux

## Links
* [indecision-app](https://github.com/harryosmar/the-complete-react-course-with-redux/tree/master/indecision-app)
* [NOTE](#note)

## NOTE 

### JSX Expression

- `JSX expression` can only have 1 root element, the best pratice is to wrap all elements inside `<div>` tag
```
let template = (
    <div>
        <h1>title<h1>
        <p>description</p>
    </div>
);
```
- `JSX expression` would not render `boolean`, `undefined` and `null` value.

### Conditional Rendering in JSX

- Logical `AND` operator
```
let age = 18;
return true && "something"; // will return "something"

// We can use this `and` logical operator to return jsx expression
return age >= 17 && <p>{age} years old</p>; // will return <p>18 years old</p>
```

### Const and Let

The difference between `var`, `const`, `let`

|   | `var`  | `const` | `let` |
| ------------- | ------------- | ------------- | ------------- |
| Function Scope  | Y  | Y  | Y  |
| Block Scope  | N  | Y  | Y  |
| Re-assign  | Y  | Y  | N  |
| Re-define/Re-declare  | Y  | N  | N  |

#### Re-define
```
let letName = 'a';
let letName = 'a1'; // error re-define `let`
const constName = 'b';
const constName = 'b1'; // error re-define `const`
var varName = 'c';
var varName = 'c1';
```

#### Re-assign
```
let letName = 'a';
letName = 'a1';
const constName = 'b';
constName = 'b1'; // error re-assign `const`
var varName = 'c';
varName = 'c1';
```

#### Function Scope
```
function getName()
{
    let letName = 'a';
    const constName = 'b';
    var varName = 'c';
}

console.log(varName); // error access, out of `function scope`
console.log(letName); // error access, out of `function scope`
console.log(constName); // error access, out of `function scope`
```

#### Block Scope

`Block Scope` means the variable bound to `code block`, it can be `for` loop, or if statement with the curly bracket `{}`.

```
if (true) {
    let letName = 'a';
    const constName = 'b';
    var varName = 'c';
}

console.log(varName); // output 'a'
console.log(letName); // error access, out of `if statement scope`
console.log(constName); // error access, out of `if statement scope`
```




Tips :
> Better use `const` variable at the first, then change it to `let` if the variable need re-assign.

### Arrow Function es6

- Arrow function is `anonymous`
```
// es5 example function with name `getFirstName` 
function getFirstName(fullname) {
    return fullname.split(' ')[0];
}

// still es5 example function `anonymous`, instead we stored this function to variable `getFirstName`
var getFirstName = function getFirstName(fullname) {
    return fullname.split(' ')[0];
}

// es6 example function, remove the `function keyword`
const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
}

// es6 example function, can make to even simpler format as 1 line script, remove `return keyword`.
const getFirstName = (fullname) => fullname.split(' ')[0];
```

- `arguments object` no longer bound with arrow functions

In es5 we can access `arguments` object
```
const greet = (name) => {
    console.log(arguments); // arguments object : arguments[0] 'patrik', arguments[1] 'spongebob'
    return `Hello ${name}`;
}

console.log(greet('patrik', 'spongebob')); // echo Hello patrik
```

In es6 we can't access `arguments` object
```
const greet = (name) => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return `Hello ${name}`;
}}
```

- `this` keyword no longer bound
> use `this` from the code that `containing` the arrow function
```
const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 3,
    multiply() {
        // lexical `this` refer to object `multiplier` even inside the `map` function which is used arrow function, `this` not bound to arrow function.
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
```

Note : multiply is not arrow function
```
const multiplier = {
    function : multiply() {}
}

// equal to

const multiplier = {
    multiply() {}
}
```
