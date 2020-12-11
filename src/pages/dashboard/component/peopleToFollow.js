import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import People from 'pages/dashboard/component/people';

const FollowTitle = styled.h4`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #000;
`;

function PeopleFollowSection(props) {
  const { suggestions } = props;

  if (!suggestions) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="mt-4 mb-4">
              <FollowTitle>People to follow</FollowTitle>
            </div>
          </Col>
        </Row>
        <div className="loader text-center" key={0}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </Container>
    );
  }

  if (suggestions.length === 0) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="mt-4 mb-4">
              <FollowTitle>People to follow</FollowTitle>
            </div>
          </Col>
        </Row>
        <div className="text-left">No suggestions found.</div>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mt-4 mb-4">
            <FollowTitle>People to follow</FollowTitle>
          </div>
        </Col>
      </Row>
      {suggestions.map((suggestion) => (
        <People key={suggestion.id} user={suggestion} />
      ))}
    </Container>
  );
}
export default PeopleFollowSection;
