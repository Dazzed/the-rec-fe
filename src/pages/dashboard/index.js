import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import PeopleFollow from "../../component/PeopleFollow";

function Dashboard() {
  return (
    <Container fluid className="dashboard-Container">
      <Row className="align-items-center">
        <Col lg={2}>
          <div className="logo-section">
            <img src="/imgs/svgs/rec-logo.svg" alt="logo-rec" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search brands, categories or contacts"
            />
            <img
              src="/imgs/svgs/search_icon.svg"
              id="icon"
              className="search searchicon-support"
            />
          </div>
        </Col>
        <Col lg={4} className="resposive-992">
          <div className="nav-items-custom">
            <ul>
              <li>
                <Link href="/myrecs">My Recs</Link>
              </li>
              <li>
                <Link href="/mycontact">My Contacts</Link>
              </li>
              <li>
                <a href="#">
                  <img src="/imgs/user-profile.png" alt="userImg" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <Row>
            <Col className="mb-4 mt-4">
              <h5>Latest</h5>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className="products-section">
                <img
                  src="/imgs/products_img.png"
                  alt="Products Image"
                  className="productsimgs"
                />
                <img
                  src="/imgs/follower_img.png"
                  alt="Follwer Image"
                  className="followerimgs"
                />
                <h3>Elsa M.</h3>
                <h5>
                  Mobile Juicer
                  <br />
                  <b>
                    Vitamer
                    <br />
                    $26.49
                  </b>
                </h5>
              </div>
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
