import React from 'react';
import { Col } from 'react-bootstrap';

import styled from 'styled-components';

const Header = styled.header``;

const LogoSection = styled.div`
  img {
    width: 75px;
  }
`;

function Navbar() {
  return (
    <Col xl={12}>
      <Header className="header">
        <LogoSection>
          <img src="/imgs/svgs/rec-logo-red.png" alt="logo-rec" />
        </LogoSection>
      </Header>
    </Col>
  );
}

export default Navbar;
