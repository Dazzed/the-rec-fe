import React from "react";
import { Col } from "react-bootstrap";

function Navbar() {

    return (
        <Col xl={12}>
            <header className="header">
                <div className="logo-section">
                    <img src="/imgs/svgs/rec-logo.svg" alt="logo-rec" />
                </div>
            </header>
        </Col>
    );
}

export default Navbar;
