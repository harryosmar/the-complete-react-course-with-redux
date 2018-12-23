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

# links

use components [`<Link>`](https://reacttraining.com/react-router/web/api/Link) or [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink) imported from `react-router-dom`

- https://github.com/ReactTraining/react-router
- https://reacttraining.com/react-router/