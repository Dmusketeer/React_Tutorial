import React from 'react';
import {Outlet,NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
       <>
       <nav>
       <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/profile">Profile</NavLink>
        </li>
       </ul>
       </nav>
       <Outlet />
       </>
    );
}

export default Navbar;
