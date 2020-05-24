import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col} from 'react-bootstrap'
import './FormField.css';

const FormField = (props) => (
    <Form.Group as={Row} controlId={props.name}>
    <Form.Label column sm={3}>
        {props.name}
    </Form.Label>
    <Col sm={9}>
      <Form.Control type={props.fieldType} placeholder={props.exampleText} className="formField"/>
    </Col>
  </Form.Group>
);

export default FormField;
