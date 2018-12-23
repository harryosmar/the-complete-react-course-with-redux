import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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

const EditExpensePage = () => (
    <div>
        This is edit expense page
    </div>
);

const HelpPage = () => (
    <div>
        This is help page
    </div>
);

const NotFound = () => (
    <div>
        404 page - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('placedhere'));