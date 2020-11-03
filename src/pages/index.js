import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import Link from "next/link";
import Navbar from "../component/Header/Navbar";


const CommonContainer = styled(Container)`
  padding: 37px 55px;
  position: relative;
`;
const BgMarketingstyle = styled.div`
  background: url("/imgs/bg-landing-page-1.png");
  height: 495px;
  background-position: 70% 50%;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-size: contain;
  content: "";
  box-sizing: border-box;
  position: relative;
  @media screen and (min-width: 1660px) {
    height: 745px;
  }
  @media screen and (max-width: 600px) {
    background: none !important;
  }
  .hero-text-section {
    left: 34%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    h1 {
      font-family: Roboto-Regular;
      font-style: normal;
      font-weight: 300;
      font-size: 36px;
      line-height: 42px;
      color: #000008;
      margin-bottom: 34px;
    }
    button {
      font-family: Roboto-Regular;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #000008;
      height: 54px;
      background: #bdf4bc;
      border-radius: 10px;
      border: none;
      padding: 0 23px;
    }
    img {
      margin-right: 15px;
    }
  }
`;
const LogoModalImg = styled.img`
  width: 45px;
  height: 45px;
`;
function MarketingLandingPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CommonContainer className="container-fluid">
      <Row>
        <Navbar />
        <Col xl={12}>
          <BgMarketingstyle>
            <div className="hero-text-section">
              <h1>
                Whatever you need. <br />
                Off the rack. On the record.
              </h1>
              <button onClick={handleShow}>
                <img src="/imgs/svgs/downarrowicon.svg" alt="downarrow icon" />
                Install Browser Extension
              </button>
            </div>
          </BgMarketingstyle>
        </Col>
        <Modal
          show={show}
          onHide={handleClose}
          className="custom-modal-popup justify-content-flex-end"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <LogoModalImg src="/imgs/logo.png" alt="logo" className="logo" /> Add “The
              Rec”?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>It can:</b>
            <br />
            Read and change all your data on the websites you visit.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              <Link href="/login" className="text-white">
                Add extension
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </CommonContainer>
  );
}

export default MarketingLandingPage;
