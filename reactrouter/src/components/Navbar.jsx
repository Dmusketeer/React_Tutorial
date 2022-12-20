import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
       <nav>
        <Link to="/">App</Link>
        <Link to="/home">HOME</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
       </nav>
    );
}

export default Navbar;
