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
```

## Linking Between Routes

- Using [`Switch`](https://reacttraining.com/react-router/web/api/Switch) component imported from `react-router-dom`, to enable `break` when the match [`path`](https://reacttraining.com/react-router/web/api/Route/path-string-string) already found, so it will not continue to check another component [`<Route>`](https://reacttraining.com/react-router/web/api/Route) path. It's like `switch case` logic.

## Query String and Url Parameters

Component [`<Route>`](https://reacttraining.com/react-router/web/api/Route) will delegate it's [props](https://reacttraining.com/react-router/web/api/Route/route-props) to it's own [props-component](https://reacttraining.com/react-router/web/api/Route/component).

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

# links

use components [`<Link>`](https://reacttraining.com/react-router/web/api/Link) or [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink) imported from `react-router-dom`

- https://github.com/ReactTraining/react-router
- https://reacttraining.com/react-router/