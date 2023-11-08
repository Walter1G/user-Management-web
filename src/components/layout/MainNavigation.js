import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <div>User Management</div>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/add-user'>ADD USER</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
            </ul>
        </header>
    );
}

export default MainNavigation;
