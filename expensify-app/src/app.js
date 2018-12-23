import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
        404 page
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('placedhere'));