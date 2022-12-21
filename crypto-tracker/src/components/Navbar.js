import React from "react";
import { StyledHeader, Navbar, Logo } from "./styles/Navbar.styled";

function NavBar() {
  return (
    <StyledHeader>
      <Navbar>
        <Logo>
          <a href="#">Crypto Tracker</a>
        </Logo>
      </Navbar>
    </StyledHeader>
  );
}

export default NavBar;
