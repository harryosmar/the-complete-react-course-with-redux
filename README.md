# the-complete-react-course-with-redux

## Links
* [indecision-app](https://github.com/harryosmar/the-complete-react-course-with-redux/tree/master/indecision-app)
* [NOTE](#note)
  * [JSX Expression](#jsx-expression)
  * [Conditional Rendering in JSX](#conditional-rendering-in-jsx)
  * [Const and Let](#const-and-let)
    * [Re-define](#re-define)
    * [Re-assign](#re-assign)
    * [Function Scope](#function-ccope)
    * [Block Scope](#block-scope)
  * [Arrow Function es6](#arrow-function-es6)
    * [Arrow function is anonymous](#arrow-function-is-anonymous)
    * [arguments object no longer bound with arrow functions](#arguments-object-no-longer-bound-with-arrow-functions)
    * [can't access arguments object](#cant-access-arguments-object)
    * [this keyword no longer bound](#this-keyword-no-longer-bound)
    * [Manual Binding](#manual-binding)
    * [Array in JSX](#array-in-jsx)
* [Other Links](#other-links)

## NOTE

### JSX Expression

> `JSX expression` can only have 1 root element, the best pratice is to wrap all elements inside `<div>` tag
```
let template = (
    <div>
        <h1>title<h1>
        <p>description</p>
    </div>
);
```
> `JSX expression` would ignore/not render `boolean`, `undefined` and `null` value.
> But `JSX` support others literal value `string`, `number` and even supports `array`
> `JSX` can render `JSX`, nested `JSX`

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

#### Arrow function is `anonymous`
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

#### `arguments object` no longer bound with arrow functions

In es5 we can access `arguments` object
```
const greet = (name) => {
    console.log(arguments); // arguments object : arguments[0] 'patrik', arguments[1] 'spongebob'
    return `Hello ${name}`;
}

console.log(greet('patrik', 'spongebob')); // echo Hello patrik
```

#### Can't access `arguments` object
```
const greet = (name) => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return `Hello ${name}`;
}}
```

#### `this` keyword no longer bound
> Lexical Scoping just means that it uses `this` from the code that *contains the Arrow Function*.
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

Tips : in object `multiplier`, see that `multiply` function without `function` keyword. 
```
const multiplier = {
    function : multiply() {}
}

// equal to

const multiplier = {
    multiply() {}
}
```

### Manual Binding
> `JSX` does not have built in data binding
```
let count = 0;

const addOne = () => {
    count++;
    console.log('add one', count);
};

// when  button clicked count in `h1` element does not changed
const template2 = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
    </div>
);

ReactDOM.render(template2, placeholder);
```

How to make the count changed, by manual binding
```
let count = 0;

const addOne = () => {
    count++;
    console.log('add one', count);
    renderCounterApp(); // call this to update the DOM
};

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
        </div>
    );

    ReactDOM.render(template2, placeholder);
}

renderCounterApp(); // first render count equal to `0`
```

### Array in JSX
```
const options = [];
// use spread syntax to push new item to options array
options = [...options, 'item1', 'item2'];
const optionsTemplate = (
    <ol>
        {options.map((option, index) => <li key={index}>{option}</li>)}
    </ol>
); // <ol><li>item1</li><li>item2</li></ol>
```

## Other Links
- https://reactjs.org/docs/dom-elements.html
- https://reactjs.org/docs/events.html#form-events