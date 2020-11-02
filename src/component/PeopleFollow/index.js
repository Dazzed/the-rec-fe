import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import PeopleFollowList from "../PeopleFollow/component/index";

const FollowTitle = styled.h4`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #000;
`;

function PeopleFollowSection() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mt-4 mb-4">
            <FollowTitle>People to follow</FollowTitle>
          </div>
        </Col>
      </Row>
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
      <PeopleFollowList />
    </Container>
  );
}
export default PeopleFollowSection;
