# Dependencies
Install dependencies
```
yarn install
```

# Environment

## using live-server
```
yarn dev-server
```

# Documentation

* [React Router](#react-router)
  * [404 Page](#404-page)
  * [Linking Between Routes](#linking-between-routes)
  * [Query String and Url Parameters](#query-string-and-url-parameters)
* [Redux](#redux)
  * [createStore](#createstore)
  * [action and dispatch](#action-and-dispatch)
    * [action generator](#action-generator)
  * [subscribe](#subscribe)
  * [reducer](#reducer)
  * [combinereducers](#combinereducers)
* [ES6 Destructuring](#es6-destructuring)
* [ES6 Spread Syntax](#es6-spread-syntax)
  * [ES6 Spread Syntax Object](#es6-spread-syntax-object)
* [Higher Order Components](#higher-order-components)
* [React Redux](#react-redux)
  * [Dispatch Action From React Component](#dispatch-action-from-react-component)
* [Tips](#tips)
  * [Event Target Property Persist](#event-target-property-persist)
## React Router

![react router](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/expensify-app/src/images/react-client-router.jpg)

Example :
```es6
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This is dashboard expense page
    </div>
);

const AddExpensePage = () => (
    <div>
        This is add expense page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('container'));
```

- [`<BrowserRouter />`](https://reacttraining.com/react-router/web/api/BrowserRouter) must only has one child element. That's why, all the child [`<Route />`](https://reacttraining.com/react-router/web/api/Route) component is wrapped inside `<div>` element. To avoid this error `Uncaught Error: A <Router> may have only one child element`
- When accessing the `/create` url directly in the browser, will return `404` Not Found error response. Because in that path, the `index.html` is not available. `index.html` needed, because it's contained the bundled js files, where the React Router script is implemented.

Solution : *in `DEV`*, need to set webpack config  [`devServer historyApiFallback`](https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback) value to `true`. To enable load this `index.html` page.
```es6
module.exports = {
    devServer: {
        historyApiFallback: true
    }
};
```

###  404 Page

```es6
import {BrowserRouter, Route} from 'react-router-dom';
const NotFound = () => (
    <div>
        404 page
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
```

### Linking Between Routes

- Using [`Switch`](https://reacttraining.com/react-router/web/api/Switch) component imported from `react-router-dom`, to enable `break` when the match [`path`](https://reacttraining.com/react-router/web/api/Route/path-string-string) already found, so it will not continue to check another component [`<Route>`](https://reacttraining.com/react-router/web/api/Route) path. It's like `switch case` logic.

### Query String and Url Parameters

Component [`<Route>`](https://reacttraining.com/react-router/web/api/Route) will delegate it's [Route props](https://reacttraining.com/react-router/web/api/Route/route-props) to it's own [props-component](https://reacttraining.com/react-router/web/api/Route/component).

The props that will be delegated :
- [match](https://reacttraining.com/react-router/web/api/match)
- [location](https://reacttraining.com/react-router/web/api/location)
- [history](https://reacttraining.com/react-router/web/api/history)

```es6
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const EditExpensePage = (props) => (
    <div>
        edit expense with id : {props.match.params.id}
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
         <Route path="/edit/:id" component={EditExpensePage}/>
    </BrowserRouter>
);
```

## Redux

React provide [`component state`](https://reactjs.org/docs/state-and-lifecycle.html), used as data binding on JSX template. 

Problem with react [`component state`](https://reactjs.org/docs/state-and-lifecycle.html).
- Could not be used for complex state management, where the state can be accessed by many components, even the components is not related (eg: components does not have the same parent component).
![complex state management](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/expensify-app/src/images/problem1-complex-state.jpg)
- Simple react application can use only 1 parent component. Then stored the state in the parent. Then the parent delegate : 
  - this state and
  - function needed to change the state

as [props](https://reactjs.org/docs/components-and-props.html) to the childs components. This could be resulted on tight coupled relations between components, so the component is not reusable.
![tight coupled component](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/expensify-app/src/images/problem2-tight-coupled-component.jpg)


> The *questions*

![question for complex state problem](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/expensify-app/src/images/questions-for-complex-component-state.jpg)


> The *solution* is [`Redux`](https://github.com/reduxjs/react-redux)

![redux as solution for complex state problem](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/expensify-app/src/images/redux-solution-to-complex-state-problems.jpg)

### How redux works

#### createStore

Creating the redux store using [`createStore`](https://redux.js.org/basics/store) function
```es6
import { createStore } from 'redux';

const store = createStore((currentState = {count: 0}) => {
    return currentState;
});

console.log(store.getState()); // {count: 0}
```

#### action and dispatch

How to update the state, using [`action`](https://redux.js.org/basics/actions)
Action is an object. Where we can define the `type` of the action. Usually the type is a string with value all `UPPERCASE`.
> When changing the state do not modify the `currentState` or [`action`](https://redux.js.org/basics/actions) parameter. It should be immutable.

```es6
import { createStore } from 'redux';

const store = createStore((currentState = {count: 0}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: currentState.count + 1
        };
    }

    return currentState;
});

console.log(store.getState()); // {count: 0}

// dispatching/calling the action
store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState()); // {count: 1}
```

##### action generator

To avoid duplicate typing of action for each `dispatch`, move the `action` object to a generator function.

```es6
import { createStore } from 'redux';

const incrementCount = () => ({
    type: 'INCREMENT'
});

const store = createStore((currentState = {count: 0}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: currentState.count + 1
        };
    }

    return currentState;
});

store.dispatch(incrementCount());
console.log(store.getState()); // {count: 1}

store.dispatch(incrementCount());
console.log(store.getState()); // {count: 2}

store.dispatch(incrementCount());
console.log(store.getState()); // {count: 3}
```

#### subscribe

How to watching the state changes use [`subscribe`](https://redux.js.org/api/store#subscribe) listener

```es6
import { createStore } from 'redux';

const store = createStore((currentState = {count: 0}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: currentState.count + 1
        };
    }

    return currentState;
});

store.subscribe(() => {
    console.log(store.getState()); // called twice the 1st output {count: 1}, the 2nd {count: 2}
});

// 1st trigger to run `subscribe`
store.dispatch({
    type: 'INCREMENT'
});

// 2nd trigger to run `subscribe`
store.dispatch({
    type: 'INCREMENT'
});
```

How to `unsubscribe`
```es6

// state : {count: 0}

const unsubscribe = store.subscribe(() => {
    console.log(store.getState()); // called just once output {count: 1}
};

store.dispatch({
    type: 'INCREMENT'
});

unsubscribe(); // unsubscribe here

// this will not trigger run `subscribe`
store.dispatch({
    type: 'INCREMENT'
});

// this will not trigger run `subscribe`
store.dispatch({
    type: 'INCREMENT'
});
```

#### Reducer

- [Reducer](https://redux.js.org/glossary#reducer) are pure function.
- Never changes [`state`](https://redux.js.org/glossary#state) or [`action`](https://redux.js.org/glossary#action)

```es6
import { createStore } from 'redux';

const countReducer = () => (currentState = {count: 0}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: currentState.count + 1
        };
    }

    return currentState;
};

const store = createStore(countReducer);
```

#### combinereducers

[`combinereducers`](https://redux.js.org/api/combinereducers) is used to split the [`reducer`](https://redux.js.org/glossary#reducer) into separate functions.

```es6
import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (prevState = expensesReducerDefaultState, action) => {
    switch (action) {
        default:
            return prevState;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (prevState = filtersReducerDefaultState, action) => {
    switch (action) {
        default:
            return prevState;
    }
};

// combine 2 reducers : `expensesReducer` and `filtersReducer`
const store = createStore(combineReducers
    ({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState()); // {expenses: Array(0), filters: {text: "", sortBy: "date", startDate: undefined, endDate: undefined}}
```

## ES6 Destructuring

This es6 [`destructuring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) assignment syntax provide easy access to object, array.

```es6
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

// rename title to booktitle
const { title: booktitle, author } = book;
console.log(booktitle, author);

// rename book.publisher.name to publishername and set default value 'Self-Published'
const { name: publishername = 'Self-Published' } = book.publisher;

console.log(publishername);

// array
const [a, b, ...rest] = [10, 20, 30, 40, 50];
// a:10, b:20, rest:[30,40,50]

// destructuring function parameter
const adding = ( {a = 0, b = 0} = {}, c = 100 ) => ( a + b + c );

adding({a:1, b:2}, 0); // output 3
adding(); // output 100

```

## ES6 Spread Syntax

[`Spread syntax`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```es6
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

### ES6 Spread Syntax Object

- install the plugin [babel-plugin-transform-object-rest-spread](https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread.html)
- add this as a plugin to `.babelrc` file
```
{
  "plugins": ["transform-object-rest-spread"]
}
```
- example
```es6
const user = {
    name: 'spongebob'
};

// passing key:value
console.log({ ...user, 'location': 'here'});
// {name: 'spongebob', location: 'here'}

// passing object instead
console.log({ ...user, ...{'location': 'here'}});
// {name: 'spongebob', location: 'here'}
```

You can use spread object to define props in react component.
```es6
import React from 'react';
import ReactDOM from 'react-dom';

// use destructuring for function parameters
const Info = ( { info } ) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {info}</p>
    </div>
);

const objectInfo = {info: "this is a secret information"};

ReactDOM.render(<Info {...objectInfo}/>, document.getElementById('container'));

// <div id="container"><div><h1>Info</h1><p>The info is : this is a secret information</p></div></div>
```

## Higher Order Components

[Higher-Order Components/HOC](https://reactjs.org/docs/higher-order-components.html) is a component that renders another component and provide this benefits :
- reuse code
- render hijacking
- prop manipulation
- abstraction state

```es6
import React from 'react';
import ReactDOM from 'react-dom';

const FirstComponent = (props) => (
    <p>This is the 1st component message</p>
);

const SecondComponent = (props) => (
    <p>This is the 2nd component message</p>
);

const ThirdComponent = (props) => (
    <p>This is the 3rd component message</p>
);

// HOC `withAdminWarning`
const withAdminWarning = (WrappedComponent) => {
    // return react component
    return (props) => (
        <div>
            { props.isAdmin && <WrappedComponent {...props} />}
        </div>
    );
};

// create components which contained admin message
const FirstComponentWithAdminWarning = withAdminWarning(FirstComponent);
const SecondComponentWithAdminWarning = withAdminWarning(SecondComponent);
const ThirdComponentWithAdminWarning = withAdminWarning(ThirdComponent);


ReactDOM.render(
    <div>
        <FirstComponentWithAdminWarning isAdmin={true} />
        <SecondComponentWithAdminWarning isAdmin={false} />
        <ThirdComponentWithAdminWarning isAdmin={true} />
    </div>,
    document.getElementById('container')
);
// <div id="container"><div><div><p>This is the 1st component message</p></div><div></div><div><p>This is the 3rd component message</p></div></div></div>
```

## React Redux

The [`highers order component`](#higher-order-components) logic is used in [`react-redux connect`](https://react-redux.js.org/api/connect#connect).


Complete example of [`connect-ing`](https://react-redux.js.org/api/connect#connect) [React Component](https://github.com/harryosmar/the-complete-react-course-with-redux#react-component) to [`Redux store`](https://redux.js.org/api/store), with [combine reducer](https://github.com/harryosmar/the-complete-react-course-with-redux/tree/master/expensify-app#combinereducers).

```es6
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// REDUCER
const expensesReducer = (prevState = [], action) => {
    switch (action.type) {
        default:
            return prevState;
    }
};
const filtersReducerDefaultState = {
    text: 'keyword',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (prevState = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return prevState;
    }
};

// REDUX STORE, COMBINE REDUCER
const store = createStore(combineReducers
    ({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// REACT COMPONENT
const ExpenseList = (props) => (
    <div>
        Expense List : { props.expenses.length }
        <p>{ props.filters.text }</p>
    </div>
);

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
);

// HOC/higher order component created
const hoc = connect(mapStateToProps);

// MODIFIED REACT COMPONENT create new ExpenseList component which have access to redux store/state. The redux state mapped to ExpenseList props
const NewExpenseList = hoc(ExpenseList);

// Use reac-redux Provider, to delegate redux store/state
const jsx = (
    <Provider store={ store }>
        <NewExpenseList />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('container'));
// <div id="container"><div>Expense List : 0<p>keywords</p></div></div>
```

### Dispatch Action From React Component

We can access props [`dispatch`](https://redux.js.org/api/store#dispatch) function from [React Component](https://github.com/harryosmar/the-complete-react-course-with-redux#react-component), after the component connected to [redux store](https://redux.js.org/api/store). The [`dispatch`](https://redux.js.org/api/store#dispatch) function will be available via connected-react-component [`props`](https://reactjs.org/docs/components-and-props.html).

example with control inputf for filter by keyword
`<input type="text">`

```es6
import React from 'react';
import { connect } from 'react-redux';

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const ExpenseListFilter = (props) => (
    <div>
        <input value={props.filters.text} onChange={
            (e) => {
                props.dispatch(setTextFilter(e.target.value));
            }
        }/>
    </div>
);

// We have access to `reducers` `state` and `ExpenseListFilter` component `props`
const mapStateToProps = (state, props) => ({
    filters: state.filters
});

const ConnectedExpenseListFilter = connect(mapStateToProps)(ExpenseListFilter);

<ConnectedExpenseListFilter />
// <input value="">
```

## Tips

### Event Target Property Persist

[event target property](https://www.w3schools.com/jsref/event_target.asp) return the element that triggered the event.

```es6
alert(e.target);
alert(e.target.value); // to get the element value
```

If directly accessed from react `setState` parameter callback, it will throw an error. To able to do that we need to `persist` the event.

```es6
import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
    };

    onDescriptionChange = (e) => {
        // persist the event
        e.persist();
        this.setState(() => ({ description : e.target.value}) );
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                        placeholder="Description"
                    />
                </form>
            </div>
        );
    };
}
```

# links

use components [`<Link>`](https://reacttraining.com/react-router/web/api/Link) or [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink) imported from `react-router-dom`

- https://github.com/ReactTraining/react-router
- https://reacttraining.com/react-router/
- http://redux.js.org/
- https://react-redux.js.org/
- https://momentjs.com/
- https://github.com/airbnb/react-dates
- https://github.com/zalmoxisus/redux-devtools-extension
