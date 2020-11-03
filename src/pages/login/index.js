import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../component/Header/Navbar";


const CommonContainer = styled.div`
  padding: 37px 55px;
  position: relative;
`;

const LoginPageStyle = styled.div`
  text-align: center;
  .righticon {
    margin-top: 25px;
  }
  h6 {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #000008;
  }
  button {
    background: #3b5998;
    border-radius: 10px;
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    height: 54px;
    width: 324px;
    border: none;
    a {
      color: #fff;
    }
    img {
      margin-right: 16px;
    }
`;

function LoginPage() {
  return (
    <CommonContainer className="container-fluid">
      <Row>
        <Navbar />
        <Col xl={12} classsName="text-center">
          <LoginPageStyle>
            <img
              src="/imgs/svgs/righticon.svg"
              className="righticon"
              alt="Right Icon"
            />
            <h6 className="mt-4 mb-3">Extension installed.</h6>
            <h6 className="mt-5 mb-5">Sign in</h6>
            <button>
              <Link href="/dashboard">
                <>
                  <img src="/imgs/svgs/facebookicon.svg" alt="Facebook Icon" />
                  Sign in with Facebook
                </>
              </Link>
            </button>
          </LoginPageStyle>
        </Col>
      </Row>
    </CommonContainer>
  );
}

export default LoginPage;
