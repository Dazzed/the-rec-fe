import { Row, Col } from "react-bootstrap";

function DealerProfileSection() {
    return (
        <Row>
            <Col className="mt-4">
                <div className="dealer-section">
                    <img
                        src="/imgs/follower_img.png"
                        alt="Follwer Image"
                        className="followerimgs"
                    />
                    <h5>Lisa H.</h5>
                    <button>Unfollow</button>
                </div>
            </Col>
        </Row>

    );
}
export default DealerProfileSection;