import React from 'react';
import { Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Nav
      activeKey="/admin/users"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/admin/users">Users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/products">Products</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
