import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SearchBarNav from "../../component/Header/SearchBarNav";
import DealerProfileSection from "../dealer-profile/component/dealerProfileSection";
import DealerProductSection from "../dealer-profile/component/dealerProductsSecion";

function DealerProfilePage() {
  return (
    <Container fluid className="dashboard-Container">

      <SearchBarNav />

      {/* Dealer profile section */}
      <DealerProfileSection />

      {/* Product section */}
      <Row>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductSection />
        </Col>
      </Row>
    </Container>
  );
}
export default DealerProfilePage;
