import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import SearchBarNav from '../../component/Header/SearchBarNav';
import ContactUser from '../contacts/component/contactUser';

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;

function MyContact() {
  return (
    <>
      <Head>
        <title>Contacts | The Rec</title>
        <meta property="og:title" content="Contacts | The Rec" key="title" />
      </Head>
      <CommonContainer className="container-fluid">
        <SearchBarNav />
        <Row className="mt-5 mb-4">
          <Col lg={4} md={6} className="lg-pr-5 pr-3">
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
          </Col>
          <Col lg={4} md={6} className="lg-px-5 px-3">
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
          </Col>
          <Col lg={4} md={6} className="lg-pl-5 pl-3">
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
          </Col>
        </Row>
      </CommonContainer>
    </>
  );
}

export default MyContact;
