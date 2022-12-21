import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2.5rem;

  &:hover {
    transform: scale(0.98);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;
