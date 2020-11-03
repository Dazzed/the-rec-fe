import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 11px;
  }
  h3 {
    font-family: Roboto-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin: 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`;
const ButtonPinkFollow = styled.div`
  text-align: right;
    button {
        background: #f6d0e8;
        border-radius: 5px;
        padding: 9px;
        font-family: Roboto-Regular;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        height: 36px;
        text-align: center;
        color: #000008;
        border: none;
        width: 90px;
    }
`;

function contactUser() {
    return (
        <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
                <ProfileImageSection>
                    <img src="/imgs/follower_img.png" alt="Profile Image" />
                    <h3>Susan L.</h3>
                </ProfileImageSection>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                <ButtonPinkFollow>
                    <button>Unfollow</button>
                </ButtonPinkFollow>
            </Col>
        </Row>
    );
}

export default contactUser;