import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Head from 'next/head';

import SearchBarNav from '../../component/Header/SearchBarNav';
import DealerProfileSection from '../dealer-profile/component/dealerProfileSection';
import DealerProductSection from '../dealer-profile/component/dealerProductsSecion';

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;

function DealerProfilePage() {
  return (
    <>
      <Head>
        <title>Dealer Profile | The Rec</title>
        <meta
          property="og:title"
          content="Dealer Profile | The Rec"
          key="title"
        />
      </Head>
      <CommonContainer className="container-fluid">
        <SearchBarNav />

        <DealerProfileSection />

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
    </>
  );
}
export default DealerProfilePage;
