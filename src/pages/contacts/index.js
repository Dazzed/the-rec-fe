import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

function MyContact() {
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
              <li className="activeNav">
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
      <Row className="mt-5 mb-4">
        <Col lg={4} md={6} className="lg-pr-5 pr-3">
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={6} className="lg-px-5 px-3">
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={6} className="lg-pl-5 pl-3">
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-pink">
                <button>Unfollow</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8}>
              <div className="profileImgName">
                <img src="/imgs/follower_img.png" alt="Profile Image" />
                <h3>Susan L.</h3>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="btn-follow-green">
                <button>Follow</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MyContact;
