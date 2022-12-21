import styled from "styled-components";

export const Section = styled.section`
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.section};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchDiv = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    height: 2rem;
  }
  input {
    height: 2rem;
    width: 100%;
    padding: 3% 1.5%;
    font-size: ${({ theme }) => theme.fontSize.input};
  }
`;
