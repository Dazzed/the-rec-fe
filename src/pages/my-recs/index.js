import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import SearchBarNav from "../../component/Header/SearchBarNav"
import DealerProductsMyRecs from "../my-recs/component/dealerProductsMyRecs";

function MyRecs() {
  return (
    <Container fluid className="dashboard-Container">
      {/* Header section */}
      <SearchBarNav />
      {/* Product section */}
      <Row className="mt-lg-5 mb-lg-5 mb-4 mt-4">
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <DealerProductsMyRecs />
        </Col>
      </Row>
    </Container>
  );
}

export default MyRecs;
