import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from 'pages/dashboard/actions';

const FollowTitle = styled.h4`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #000;
`;

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 11px;
  }
  h3 {
    font-family: Roboto-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin: 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`;
const ButtonGreenFollow = styled.div`
  text-align: right;
  button {
    background: #bdf4bc;
    border-radius: 5px;
    padding: 9px;
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    height: 36px;
    text-align: center;
    color: #000008;
    border: none;
    width: 90px;
  }
`;

function People(props) {
  const { user } = props;

  return (
    <Row>
      <Col lg={8} md={8} sm={8} xs={8}>
        <ProfileImageSection>
          <img src={user.profilePicUrl} alt="Profile Image" />
          <h3>{user.name}</h3>
        </ProfileImageSection>
      </Col>
      <Col lg={4} md={4} sm={4} xs={4} md={4} sm={4} xs={4}>
        <ButtonGreenFollow>
          <button onClick={() => props.followFriend(user.id)}>Follow</button>
        </ButtonGreenFollow>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(dashboardActions, dispatch);
};

const PeopleContainer = connect(null, mapDispatchToProps)(People);

export default PeopleContainer;
