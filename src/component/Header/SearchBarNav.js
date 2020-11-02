import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

function SearchBarNav() {
    return (
        <Row className="align-items-center">
            <Col lg={2}>
                <div className="logo-section">
                    <img src="/imgs/svgs/rec-logo.svg" alt="logo-rec" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search brands, categories or contacts"
                    />
                    <img
                        src="/imgs/svgs/search_icon.svg"
                        id="icon"
                        className="search searchicon-support"
                    />
                </div>
            </Col>
            <Col lg={4} className="resposive-992">
                <div className="nav-items-custom">
                    <ul>
                        <li>
                            <Link href="/myrecs">My Recs</Link>
                        </li>
                        <li>
                            <Link href="/mycontact">My Contacts</Link>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/imgs/user-profile.png" alt="userImg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    );
}
export default SearchBarNav;
