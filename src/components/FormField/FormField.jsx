import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col} from 'react-bootstrap'
import './FormField.css';

const FormField = (props) => (
    <Form.Group as={Row} controlId={props.name}>
    <Form.Label column sm={3} className={props.className ? "formLabel " + props.className : "formLabel "}>
        {props.label}
    </Form.Label>
    <Col sm={8}>
      <Form.Control name={props.name} type={props.fieldType} placeholder={props.exampleText} onChange={props.onChange}  defaultValue={props.defaultValue ? props.defaultValue : ""} className="formField"/>
    </Col>
  </Form.Group>
);

export default FormField;
