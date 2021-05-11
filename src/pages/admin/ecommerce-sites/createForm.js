import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import CURRENCY_CODES from 'config/currencyCodes';

const ErrorBlock = styled.div`
  color: red;
`;

const validationSchema = Yup.object().shape({
  hostname: Yup.string().trim().required(),
});

function CreateForm(props) {
  const { show, handleClose, createProduct } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit site</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          hostname: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          createProduct(values);
        }}
      >
        {({ handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <label htmlFor="title">Hostname</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="hostname"
                    name="hostname"
                    placeholder="Hostname"
                  />
                  <ErrorBlock>
                    <ErrorMessage name="hostname" />
                  </ErrorBlock>
                  <br />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default CreateForm;
