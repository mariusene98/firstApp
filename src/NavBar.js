import React from 'react';
import './index.css';

// STATELESS FUNCTIONAL COMPONENT

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navBar">
            Navbar <span>{totalCounters}</span>
        </nav>
    )
}

export default NavBar