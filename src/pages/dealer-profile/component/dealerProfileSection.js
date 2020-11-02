import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const DealerSection = styled.div`

    text-align: center;
    margin-bottom: 46px;
    margin-top: 36px;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: 17px;
    }
    h5 {
        font-family: Roboto-Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 30px;
        color: #000;
        margin-bottom: 16px;
    }
    button {
        background: #f6d0e8;
        border-radius: 5px;
        font-family: Roboto-Regular;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #000008;
        margin: 0;
        height: 36px;
        width: 90px;
        border: none;
    }

`;

function DealerProfileSection() {
    return (
        <Row>
            <Col className="mt-4">
                <DealerSection>
                    <img
                        src="/imgs/follower_img.png"
                        alt="Follwer Image"
                        className="followerimgs"
                    />
                    <h5>Lisa H.</h5>
                    <button>Unfollow</button>
                </DealerSection>
            </Col>
        </Row>

    );
}
export default DealerProfileSection;