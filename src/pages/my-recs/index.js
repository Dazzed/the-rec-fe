import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

function MyRecs() {
  return (
    <Container fluid className="dashboard-Container">
      {/* Header section */}
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
              <li className="activeNav">
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
      {/* Product section */}
      <Row className="mt-lg-5 mb-lg-5 mb-4 mt-4">
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={12}>
          <div className="dealer-products-section">
            <img
              src="/imgs/products_imgrecs.png"
              alt="Products Image"
              className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
              <b>Vitamer</b>
            </h5>
            <h6>
              <b>$26.49</b>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyRecs;
