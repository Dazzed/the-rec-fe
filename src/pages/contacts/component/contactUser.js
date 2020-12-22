import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
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
    background: #d9f7ff;
    border-radius: 5px;
    padding: 9px;
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    height: 36px;
    text-align: center;
    color: #29C0EA;
    border: none;
    width: 90px;
  }
`;

function contactUser(props) {
  const { contact } = props;

  return (
    <Row>
      <Col lg={8} md={8} sm={8} xs={8}>
        <Link href={`/profile/${contact.id}`}>
          <ProfileImageSection>
            <img src={contact.profilePicUrl} alt="Profile Image" />
            <h3>{contact.name}</h3>
          </ProfileImageSection>
        </Link>
      </Col>
      <Col lg={4} md={4} sm={4} xs={4}>
        <ButtonPinkFollow>
          <button onClick={() => props.unfollowFriend(contact.id)}>
            Unfollow
          </button>
        </ButtonPinkFollow>
      </Col>
    </Row>
  );
}

export default contactUser;
