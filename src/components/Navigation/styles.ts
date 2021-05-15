import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  user-select: none;
`;

export const Content = styled.nav`
  display: flex;
  background-color: black;
  color: white;
`;

export const NavItem = styled.a`
  font-size: 1.5rem;
  padding: 1rem;

  :hover {
    color: #00b2ff;
    cursor: pointer;
  }
`;
