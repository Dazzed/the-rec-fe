import { Row, Col, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

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

function ProfileSection(props) {
  const { profile } = props;

  if (!profile) {
    return (
      <div className="loader text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Row>
      <Col className="mt-4">
        <DealerSection>
          <img
            src={profile.profilePicUrl}
            alt="Follwer Image"
            className="followerimgs"
          />
          <h5>{profile.name}</h5>
          {profile.following ? (
            <button onClick={() => props.unfollow(profile.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.follow(profile.id)}>Follow</button>
          )}
        </DealerSection>
      </Col>
    </Row>
  );
}

export default ProfileSection;