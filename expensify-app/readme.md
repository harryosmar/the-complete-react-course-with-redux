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

- `BrowserRouter` must only has one child element. That's why, all the child `<Route />` component is wrapped inside `<div>` element. To avoid this error `Uncaught Error: A <Router> may have only one child element`
- When we access the `/create` url directly in the browser, we will get `404` Not Found error response. Because in that path, the `index.html` is not available. `index.html` needed, because it's contained the bundled js files, where the React Router script is implemented.
Solution : We need to set webpack config  `devServer` > `historyApiFallback` value to `true`. To enable load this `index.html` page.
```
module.exports = {
    devServer: {
        historyApiFallback: true
    }
};
```

## 404 Page
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
````
- We are using `Switch` component imported from `react-router-dom`, to enable `break` when the match `path` already found, so it will not continue to check another component `<Route>` path. It's like `switch case` logic.

# Links

- https://github.com/ReactTraining/react-router
- https://reacttraining.com/react-router/