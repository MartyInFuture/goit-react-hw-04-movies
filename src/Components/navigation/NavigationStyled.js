import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  border-bottom: 1px solid black;
  padding: 16px 32px;
  margin-bottom: 10px;
  .link {
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    color: black;
  }
  .activeLink {
    color: red;
  }
  .link:not(:last-child) {
    margin-right: 20px;
  }
`;
