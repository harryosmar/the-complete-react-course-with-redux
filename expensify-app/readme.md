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
* [ES6 Destructuring](#es2-destructuring)

## React Router

![react router](https://raw.githubusercontent.com/harryosmar/the-complete-react-course-with-redux/master/expensify-app/src/images/react-client-router.jpg)

Example :
```
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
```
module.exports = {
    devServer: {
        historyApiFallback: true
    }
};
```

###  404 Page

```
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

```
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

- Creating the redux store using [`createStore`](https://redux.js.org/basics/store) function
```
import { createStore } from 'redux';

const store = createStore((currentState = {count: 1}) => {
    return currentState;
});

console.log(store.getState()); // {count: 0}
```

- How to update the state, using [`action`](https://redux.js.org/basics/actions)
Action is an object. Where we can define the `type` of the action. Usually the type is a string with value all `UPPERCASE`.
> When changing the state do not modify the `currentState` or [`action`](https://redux.js.org/basics/actions) parameter. It should be immutable.

```
import { createStore } from 'redux';

const store = createStore((currentState = {count: 1}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: currentState + 1
        };
    }

    return currentState;
});

console.log(store.getState()); // {count: 0}

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState()); // {count: 1}
```

- How to watching the state changes use [`subscribe`](https://redux.js.org/api/store#subscribe) listener

```
import { createStore } from 'redux';

const store = createStore((currentState = {count: 1}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: currentState + 1
        };
    }

    return currentState;
});

store.subscribe(() => {
    console.log(store.getState()); // called twice the 1st output {count: 1}, the 2nd {count: 2}
};

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
```

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

## ES6 Destructuring

This es6 [`destructuring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) assignment syntax provide easy access to object, array.

```
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
```

# links

use components [`<Link>`](https://reacttraining.com/react-router/web/api/Link) or [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink) imported from `react-router-dom`

- https://github.com/ReactTraining/react-router
- https://reacttraining.com/react-router/
- http://redux.js.org/