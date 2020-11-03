import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import SearchBarNav from "../../component/Header/SearchBarNav"
import DealerProductsMyRecs from "../my-recs/component/dealerProductsMyRecs";


const CommonContainer = styled(Container)`
  padding: 37px 55px;
  position: relative;
`;

function MyRecs() {
  return (
    <CommonContainer className="container-fluid">
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
    </CommonContainer>
  );
}

export default MyRecs;
