import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const NavigationContainer = styled(Nav)`
  background: #4a4a4a;
  width: 100%;
  height: 90px;
  line-height: 70px;
`;
const NavigationItem = styled.div`
  width: 50%;
`;
const StyledNavItem = styled(Nav.Item)`
  display: inline-flex;
  font-size: 18px;
  font-weight: 600;
`;
const StyledNavLink = styled(Nav.Link)`
  color: #fff;
  &:hover {
    color: #fff;
  }
`;
const Logout = styled.div`
  width: 50%;
  text-align: right;
`;
function NavBar() {
  return (
    <NavigationContainer
      activeKey="/admin/users"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <NavigationItem>
        <StyledNavItem>
          <StyledNavLink href="/admin/users">Users</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/admin/products">Products</StyledNavLink>
        </StyledNavItem>
      </NavigationItem>
      <Logout>
        <StyledNavItem>
          <StyledNavLink href="/logout">Logout</StyledNavLink>
        </StyledNavItem>
      </Logout>
    </NavigationContainer>
  );
}

export default NavBar;
