import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'


const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>User Management</div>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/add-user'>ADD USER</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
            </ul>
        </header>
    );
}

export default MainNavigation;
