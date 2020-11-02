import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

function LoginPage() {
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
        <Col xl={12} classsName="text-center">
          <div className="login-section">
            <img
              src="/imgs/svgs/righticon.svg"
              className="righticon"
              alt="Right Icon"
            />
            <h6 className="mt-4 mb-3">Extension installed.</h6>
            <h6 className="mt-5 mb-5">Sign in</h6>
            <button>
              <Link href="/Dashboard">
                <>
                  <img src="/imgs/svgs/facebookicon.svg" alt="Facebook Icon" />
                  Sign in with Facebook
                </>
              </Link>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
