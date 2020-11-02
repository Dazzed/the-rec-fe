import React from "react";
import { Col } from "react-bootstrap";

import styled from 'styled-components'

const Header = styled.header`
`

const LogoSection = styled.div`

`

function Navbar() {

    return (
        <Col xl={12}>
            <Header className="header">
                <LogoSection className="logo-section">
                    <img src="/imgs/svgs/rec-logo.svg" alt="logo-rec" />
                </LogoSection>
            </Header>
        </Col>
    );
}

export default Navbar;
