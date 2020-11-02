import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SearchBarNav from "../../component/Header/SearchBarNav";
import PeopleFollow from "../../component/PeopleFollow";

import DashboardProducts from "../dashboard/component/dashboardProducts";


function Dashboard() {
  return (
    <Container fluid className="dashboard-Container">
      <SearchBarNav />
      <Row>
        <Col lg={9}>
          <Row>
            <Col className="mb-4 mt-4">
              <h5>Latest</h5>
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
    </Container>
  );
}
export default Dashboard;
