import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from 'component/Header/Navbar';
import { getPersistedUserToken } from 'lib/utils';
import { EXTENSION_ID } from 'config/constants';

const CommonContainer = styled(Container)`
  padding: 37px 55px !important;
  max-width: 100% !important;
`;

const BgMarketingstyle = styled.div`
  height: 495px;
  background-position: 70% 50%;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-size: contain;
  content: '';
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
      margin-bottom: 8px;
    }
    p {
      font-family: Roboto-Regular;
      font-style: normal;
      font-weight: normal;
      line-height: 23px;
      font-size: 16px;
      color: #000;
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

  const router = useRouter();

  useEffect(() => {
    const token = getPersistedUserToken();
    if (token) {
      router.push('/dashboard');
    } else {
      try {
        // Check if extension is installed or not
        chrome.runtime.sendMessage(
          EXTENSION_ID,
          { message: 'IS_INSTALLED' },
          (response) => {
            if (response && response.isInstalled) {
              router.push('/login');
            }
          }
        );
      } catch (err) {
        console.log('Failed to check extension installation status.');
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Get Tag</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <CommonContainer className="container-fluid">
        <Row>
          <Navbar />
          <Col xl={12}>
            <BgMarketingstyle>
              <div className="hero-text-section">
                <h1>
                  Tag
                </h1>
                <h1>
                  {/* Your Its & Hits */}
                  Your its
                </h1>
                <p>Tag is a free Chrome extension that lets you bookmark <br />items as you browser online.you can also discover new products <br />by checking out your friends' Tags at Get-tag.com</p>
                <a
                  href="https://chrome.google.com/webstore/detail/get-tag/kfhjndlenffgohklkeaiaepenjipfpke?hl=en"
                  target="_blank"
                >
                  <button className="btn_add">
                    <img
                      src="/imgs/svgs/downarrowicon.svg"
                      alt="downarrow icon"
                    />
                    Install Browser Extension
                  </button>
                </a>
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
                <LogoModalImg
                  src="/imgs/logo.png"
                  alt="logo"
                  className="logo"
                />{' '}
                Add “Get Tag”?
              </Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>
              <b>It can:</b>
              <br />
              Read and change all your data on the websites you visit.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                <Link
                  href="/login"
                  id="install-extension-link"
                  className="text-white"
                >
                  Add extension
                </Link>
              </Button>
            </Modal.Footer> */}
          </Modal>
        </Row>
      </CommonContainer>
    </>
  );
}

export default MarketingLandingPage;
