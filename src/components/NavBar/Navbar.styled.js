import styled from "@emotion/styled";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 25px;
  padding-bottom: 25px;
`;

export const NavItem = styled.li`
  color: #2e2e2e;

  &:not(:last-child) {
    margin-right: 50px;
  }
`;
