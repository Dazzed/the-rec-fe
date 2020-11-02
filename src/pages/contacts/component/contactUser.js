import React from "react";
import { Row, Col } from "react-bootstrap";

function contactUser() {
    return (
        <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
                <div className="profileImgName">
                    <img src="/imgs/follower_img.png" alt="Profile Image" />
                    <h3>Susan L.</h3>
                </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                <div className="btn-follow-pink">
                    <button>Unfollow</button>
                </div>
            </Col>
        </Row>
    );
}

export default contactUser;
