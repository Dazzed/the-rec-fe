import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const NavigationContainer = styled(Nav)`
  background: #eb5468;
  width: 100%;
  height: 86px;
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
const Searchbar = styled.input`
  border-radius: 6px;
  height: 45px;
  width: 350px;
  padding: 15px;
  border: none;
  margin-left: 15px;
`;
const Logout = styled.div`
  width: 50%;
  text-align: right;
`;
function NavBar(props) {
  const { showSearchQuery, handleQueryChange } = props;

  return (
    <NavigationContainer activeKey="/admin/users">
      <NavigationItem>
        <StyledNavItem>
          <StyledNavLink href="/admin/users">Users</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/admin/products">Products</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/admin/ecommerce-sites">Sites</StyledNavLink>
        </StyledNavItem>
        {showSearchQuery ? (
          <StyledNavItem>
            <Searchbar
              type="text"
              placeholder="Search"
              className="search_bar search_bar1 mt-0"
              name="q"
              onChange={(e) => handleQueryChange(e.target.value)}
            />
          </StyledNavItem>
        ) : null}
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
