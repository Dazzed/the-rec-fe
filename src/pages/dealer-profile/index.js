import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import SearchBarNav from "../../component/Header/SearchBarNav";
import DealerProfileSection from "../dealer-profile/component/dealerProfileSection";
import DealerProductSection from "../dealer-profile/component/dealerProductsSecion";


const CommonContainer = styled(Container)`
  padding: 37px 55px
  position: relative;
`;

function DealerProfilePage() {
  return (
    <CommonContainer className="container-fluid">

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
    </CommonContainer>
  );
}
export default DealerProfilePage;
