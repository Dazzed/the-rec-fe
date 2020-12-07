import React from 'react';
import styled from 'styled-components';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import CURRENCY_CODES from '../../../config/currencyCodes';

const ErrorBlock = styled.div`
  color: red;
`;

const validationSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  price: Yup.number('Invalid Amount')
    .min(1, 'Invalid Amount')
    .positive('Invalid Amount')
    .required('Required'),
  currency: Yup.mixed().oneOf(CURRENCY_CODES),
  images: Yup.array(Yup.string().trim().url().required()),
  description: Yup.string().trim().required(),
  category: Yup.string().trim().required(),
  brand: Yup.string().trim().required(),
  retailer: Yup.string().trim().required(),
  externalId: Yup.string().trim().min(1),
  externalLink: Yup.string().trim().url(),
  metadata: Yup.object(),
});

function CreateForm(props) {
  const { show, handleClose, createProduct } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          title: '',
          price: '',
          currency: 'USD',
          images: [],
          description: '',
          category: '',
          brand: '',
          retailer: '',
          externalId: nanoid(),
          externalLink: '',
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
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                  />
                  <ErrorBlock>
                    <ErrorMessage name="title" />
                  </ErrorBlock>
                  <br />
                </Col>

                <Col sm={12}>
                  <Row>
                    <Col>
                      <label htmlFor="price">Price</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Price"
                      />
                      <ErrorBlock>
                        <ErrorMessage name="price" />
                      </ErrorBlock>
                    </Col>
                    <Col>
                      <label htmlFor="currency">Currency</label>
                      <Field
                        component="select"
                        name="currency"
                        className="form-control"
                      >
                        {CURRENCY_CODES.map((cur) => (
                          <option value={cur} key={cur}>
                            {cur}
                          </option>
                        ))}
                      </Field>
                      <ErrorBlock>
                        <ErrorMessage name="currency" />
                      </ErrorBlock>
                    </Col>
                  </Row>
                  <br />
                </Col>

                <Col sm={12}>
                  <label htmlFor="description" className="d-block">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Product description"
                  ></Field>
                  <ErrorBlock>
                    <ErrorMessage name="description" />
                  </ErrorBlock>
                  <br />
                </Col>

                <Col sm={12}>
                  <label htmlFor="images" className="d-block">
                    Images
                  </label>
                  <FieldArray
                    name="images"
                    render={(arrayHelpers) => (
                      <div>
                        {values.images && values.images.length > 0 ? (
                          values.images.map((image, index) => (
                            <div key={index}>
                              <Field
                                type="text"
                                className="form-control"
                                id={`images.${index}`}
                                name={`images.${index}`}
                                placeholder="Image URL"
                              />
                              <ErrorBlock>
                                <ErrorMessage name={`images.${index}`} />
                              </ErrorBlock>
                              <Button
                                type="button"
                                variant="danger"
                                size="sm"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                              </Button>
                              <Button
                                type="button"
                                variant="primary"
                                size="sm"
                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                              >
                                +
                              </Button>
                            </div>
                          ))
                        ) : (
                          <Button
                            variant="primary"
                            type="button"
                            onClick={() => arrayHelpers.push('')}
                          >
                            Add an image
                          </Button>
                        )}
                      </div>
                    )}
                  />

                  <br />
                </Col>

                <Col sm={12}>
                  <label htmlFor="category">Category</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    placeholder="Category"
                  />
                  <ErrorBlock>
                    <ErrorMessage name="category" />
                  </ErrorBlock>
                  <br />
                </Col>

                <Col sm={12}>
                  <label htmlFor="brand">Brand</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="brand"
                    name="brand"
                    placeholder="Brand"
                  />
                  <ErrorBlock>
                    <ErrorMessage name="brand" />
                  </ErrorBlock>
                  <br />
                </Col>

                <Col sm={12}>
                  <label htmlFor="retailer">Retailer</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="retailer"
                    name="retailer"
                    placeholder="Retailer"
                  />
                  <ErrorBlock>
                    <ErrorMessage name="retailer" />
                  </ErrorBlock>
                  <br />
                </Col>

                <Col sm={12}>
                  <label htmlFor="externalLink">External Link</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="externalLink"
                    name="externalLink"
                    placeholder="External Link"
                  />
                  <ErrorBlock>
                    <ErrorMessage name="externalLink" />
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
