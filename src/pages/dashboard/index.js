import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import SearchBarNav from "../../component/Header/SearchBarNav";
import PeopleFollow from "../../component/PeopleFollow";

import DashboardProducts from "../dashboard/component/dashboardProducts";

const CommonContainer = styled.div`
  padding: 37px 55px;
  position: relative;
`;

const LatestTitle = styled.h5`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #000;
`;

function Dashboard() {
  return (
    <CommonContainer className="container-fluid">
      <SearchBarNav />
      <Row>
        <Col lg={9}>
          <Row>
            <Col className="mb-4 mt-4">
              <LatestTitle>Latest</LatestTitle>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <DashboardProducts />
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <PeopleFollow />
        </Col>
      </Row>
    </CommonContainer>
  );
}
export default Dashboard;
