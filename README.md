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
  * [React Component](#react-component)
    * [Component Props](#react-component-props)
      * [Default Props](#default-props)
    * [Loose `this` binding](#loose-this-binding)
      * [Example with simple object](example-with-simple-object)
      * [Example with react component](example-with-react-component)
    * [React Component State](#react-component-state)
      * [setState syntax](#setstate-syntax)
    * [prop VS state](#prop-vs-state)
    * [Stateless Function Component](#stateless-function-component)
  * [Simplify returning an object](#simplify-returning-an-object)
  * [ES6 export-import](es6-export-import)
    * [named export](#named-export)
    * [default export](#default-export)
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

> But `JSX` support others literal value `string`, `number` and even supports `array`.

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
| Re-assign  | Y  | N  | Y  |
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
> `JSX` does not have built in data binding.
But React has [React Component State](#react-component-state) to handled this matter.
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

// first render count equal to `0`
renderCounterApp();
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
);
// <ol><li>item1</li><li>item2</li></ol>
```

### React Component
> react component is a `es6 class` or [`stateless function component`](#stateless-function-component) that extends `React.Component` class, and define `render` method.
```
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <SubHeader />
            </div>
        );
    }
}

// example for `nested` component
class SubHeader extends React.Component {
    render() {
        return (
            <h2>Sub Header</h2>
        );
    }
}
```
How to use that `Header` component
```
ReactDOM.render(<Header />, document.getElementById('container-id')); // <div id="container-id"><div><h1>Header</h1><h2>Sub Header</h2></div></div>
```

#### React Component Props
We can pass data to react component class, using `props` attribute. `props` is an object which has key-value pair for each index. `props` values can be an `object`, `array`, `literal value : string, int`, or even a `function`.

> `props` is immutable.

```
// How to pass the data to `props` attribute
class Header extends React.Component {
    render() {
        const subheader = 'This is the Sub Header text';
        return (
            <div>
                <h1>Header</h1>
                <SubHeader subheader={subheader}/>
            </div>
        );
    }
}

// How to retrieve the data from `props` attribute
class SubHeader extends React.Component {
    render() {
        return (
            <h2>{this.props.subheader}</h2>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('container-id'));
// <div id="container-id"><div><h1>Header</h1><h2>This is the Sub Header text</h2></div></div>
```
> `key` keyword can not be used as the `prop` name. Because React used it as identifier for unique childs elements. To avoid this warning `Warning: Each child in an array or iterator should have a unique "key" prop.`

```
class Options extends React.Component {
    render() {
        return (
            const options = ['item1'];
            <div>
                <p>Here are your options</p>
                <ol>
                    {options.length && options.map((option, index) => <Option key={index} option={option}/>)}
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            console.log(this.props); // {options: 'item1'}, there is no `key` index name in props object.
            <li>{this.props.option}</li>
        );
    }
}
```

> Because props can use `function` as a value, for nested React Component, *the child can communicate with the parent component function*, if that function pass as the prop attribute to the child component.
```
class ParentComponent extends React.Component {
    parentFunction() {
        alert();
    }

    render() {
        return (
            <div>
                <ChildComponent parentFunction={this.parentFunction}/>
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.parentFunction}>Click Here</button>
            </div>
        );
    }
}
```

##### Default Props
React component can has `defaultProps`. It's usefull to set default value for `rendering` or `state`.
```
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={10}/>, document.getElementById('#container'));
// <div id="container"><div><h1>10</h1></div></div>
// With defaultProps we can set the state `count` dynamically.
```


#### Loose `this` binding

##### Example with simple object

There is a case when we trying to access `this` but get error access of `undefined` or `null`. Because We trying to access `this` out of scope. That's why we need to manually `bind` the `this`.
```
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
console.log(getNameWithBind()); // Spongebob

// or we can even set the binding to another object
const getNameWithBind2 = Person.getName.bind({name: 'Patrick'});
console.log(getNameWithBind()); // Patrick
```

##### Example with react component

The same case happened for React Component class. When we try to access `this` from another function beside `render`.
```
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this); // binding `this` to method handleRemoveAll.
    }

    handleRemoveAll() {
        console.log(this.props); // So we can access `this.props` object attribute
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}
```

#### React Component State
![react component state](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/indecision-app/src/images/react-component-state.jpg)
Code example : [sample counter with react component and state](https://github.com/harryosmar/the-complete-react-course-with-redux/blob/master/indecision-app/src/playground/es6-counter-with-react-component-and-state.js)

##### setState syntax

- pass `object` as parameter to `setState` function *AVOID THIS*
```
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 15
        };
    }

    // when this reset method is called count set to 16, not as expected, should be 1
    reset() {
        this.setState({
            count: 0
        });

        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
```
That's happened cause react run the `setState` in a-sync way. So in the 2nd called of `setState`, it still got the `original` value `15` not the `prevState` `0`. By using parameter `function`, we can get this `prevState`.

> Do not change `prevState`, it should be immutable, because it can affect the lyfe cycle method like `componentDidUpdate`. We want to use the actual `prevState`, not the `prevState` that we accidentally changed.

- pass `function` as parameter to `setState` function *PREFERRED*
```
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 15
        };
    }

    // when this reset method is called count set to 1, as expected
    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        // ++prevState.count is not recomended because it changes the prevState.count
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
```

#### prop VS state
![prop VS state](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/indecision-app/src/images/prop-vs-state.jpg)

#### Stateless Function Component
Simple react component in form of function, but does not have any state/`stateless`. Usefull for react component which only needed to render, without has any logic related to `state`.
But this stateless function still can have `props`.
```
const User = (props) => {
    return (
        <div>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<User name="Spongebob" age={17}>, document.getElementById('container'));
//<div id="container"><div><p>name: Spongebob</p><p>age: 17</p></div></div>
```

### Simplify returning an object

```
const getUser = () => {
    return {
        'username': 'spongebob'
    };
}

// simplify to this
const getUser = () => ({'username': 'spongebob'});
```

### ES6 export-import

#### named export

```
export const add = (num1, num2) => num1 + num2;
export const multiply = (num1, num2) => num1 * num2;
```
OR
```
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
export {add, multiply};
```
How to import that
```
import {add, multiply} from './FILE/PATH.js';
```

#### default export
- we don't have to reference by `name`.
```
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
export {add, multiply, subtract as default};
```
OR
```
export const add = (num1, num2) => num1 + num2;
export const multiply = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
export default subtract;
```
import
```
import defaultSubtract, {add, multiply} from './FILE/PATH.js';


// we can change the name, because it always be refered to default.
defaultSubtract(5, 2); // output 3
```

## Other Links
- https://reactjs.org/docs/dom-elements.html
- https://reactjs.org/docs/events.html#form-events
- [react developer tool - chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- https://reactjs.org/docs/state-and-lifecycle.html
- https://webpack.js.org/configuration/
- https://nodejs.org/api/path.html
- https://babeljs.io/docs/en/babel-preset-latest
- https://webpack.js.org/configuration/devtool/