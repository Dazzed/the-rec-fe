import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';
import SearchBarNav from '../../component/Header/SearchBarNav';
import DealerProductsMyRecs from './component/dealerProductsMyRecs';

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;

function MyRecs() {
  return (
    <>
      <Head>
        <title>My Recs | The Rec</title>
        <meta property="og:title" content="My Recs | The Rec" key="title" />
      </Head>
      <CommonContainer className="container-fluid">
        <SearchBarNav />

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
    </>
  );
}

export default MyRecs;
