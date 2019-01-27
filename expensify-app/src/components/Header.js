import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>aa
        <NavLink activeClassName="is-active" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);

export default Header;