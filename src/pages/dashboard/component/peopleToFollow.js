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

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mt-4 mb-4">
            <FollowTitle>People to follow</FollowTitle>
          </div>
        </Col>
      </Row>
      {suggestions.length === 0 && <div>No suggestions for now.</div>}
      {suggestions.map((suggestion) => (
        <People key={suggestion.id} user={suggestion} />
      ))}
    </Container>
  );
}
export default PeopleFollowSection;
