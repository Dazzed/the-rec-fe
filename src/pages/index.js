import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

import Link from "next/link";

function MarketingLandingPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="marketing-Container">
      <Row>
        <Col xl={12}>
          <header className="header">
            <div className="logo-section">
              <img src="/imgs/svgs/rec-logo.svg" alt="logo-rec" />
            </div>
          </header>
        </Col>
        <Col xl={12}>
          <div className="bg-marketing">
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
          </div>
        </Col>
        <Modal
          show={show}
          onHide={handleClose}
          className="custom-modal-popup justify-content-flex-end"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <img src="/imgs/logo.png" alt="logo" className="logo" /> Add “The
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
              <Link href="/signin" className="text-white">
                Add extension
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}

export default MarketingLandingPage;
