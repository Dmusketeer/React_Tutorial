import React from 'react';
import {NavLink} from 'react-router-dom';
;

export const Navbar = () => {
  
  const navLinkStyles=({isActive})=>{
   return{
    fontWeight: isActive?'Bold':'Normal',
    textDecoration: isActive?'none':'underline',
    color:isActive?'maroon':'green'
   }
  }

  return (
  <nav>
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles} to='/about'>About</NavLink>
  </nav>
  )
};
