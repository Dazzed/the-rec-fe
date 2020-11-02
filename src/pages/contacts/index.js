import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SearchBarNav from "../../component/Header/SearchBarNav";
import ContactUser from "../contacts/component/contactUser";

function MyContact() {
  return (
    <Container fluid className="dashboard-Container">
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
    </Container>
  );
}

export default MyContact;
