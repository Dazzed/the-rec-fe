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

function EditForm(props) {
  const { product: { hostname } = {}, show, handleClose, editProduct } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Site</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          hostname: hostname || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          editProduct(values);
        }}
      >
        {({ handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <label htmlFor="hostname">Hostname</label>
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
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default EditForm;
