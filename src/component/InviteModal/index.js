import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TitleH4 = styled.h4`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 36px;
  color: #000;
  margin: 0;
`;
const InputField = styled.input`
  border: 1px solid #d6ece7;
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  height: 54px;
  width: 100%;
  margin-bottom: 16px;
  line-height: 24px;
  padding-right: 16px;
  color: #616d82;
  padding-left: 16px;
`;
const EditorSection = styled.div`
  .wrapperClassName {
    border: 1px solid #d6ece7;
    border-radius: 10px;
    min-height: 250px;
  }
  .rdw-editor-toolbar {
    border: none;
    border-radius: unset;
    background-color: transparent;
    border-bottom: 1px solid #d6ece7;
  }
`;
const CloseButton = styled.button`
  border: 1px solid #29c0ea;
  background: #fff;
  border-radius: 5px;
  padding: 9px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  height: 36px;
  text-align: center;
  color: #29c0ea;
  width: auto;
  padding: 0 15px;
`;
const SendButton = styled.button`
  background: #29c0ea;
  border-radius: 5px;
  padding: 9px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  height: 36px;
  text-align: center;
  color: #fff;
  width: auto;
  padding: 0 15px;
  border: none;
  margin-right: 20px;
`;
const Footer = styled(Modal.Footer)`
  border: none;
`;

function MydModalWithGrid(props) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [editorActive, setEditorActive] = React.useState(false);
  const [Editor, setEditorComponent] = React.useState(() => <div />);

  React.useEffect(() => {
    if (!editorActive) {
      const Editor = dynamic(
        () => import('react-draft-wysiwyg').then((val) => val.Editor),
        { ssr: false }
      );

      setEditorComponent(Editor);
      setEditorActive(true);
    }
  }, [editorActive]);

  return (
    <Modal {...props} size="lg" centered aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <TitleH4>Invite Friends</TitleH4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <InputField type="email" placeholder="Recipient" />
            </Col>
            <Col xs={12} md={12}>
              <InputField type="text" placeholder="Subject" />
            </Col>
            <Col xs={12} md={12}>
              <EditorSection>
                {editorActive && (
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                  />
                )}
              </EditorSection>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Footer>
        <CloseButton onClick={props.onHide}>Close</CloseButton>
        <SendButton variant="primary">Send</SendButton>
      </Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
