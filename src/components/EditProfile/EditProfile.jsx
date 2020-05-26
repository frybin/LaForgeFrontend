import React, { PureComponent } from 'react';
import BoxBackground from '../BoxBackground';
import './EditProfile.css';
import FormField from '../FormField';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col, Container, Row} from 'react-bootstrap'
import BlueBackground from '../BlueBackground';

class EditProfile extends PureComponent { 
  onChange = (e) => {
    this[e.target.name] =  e.target.value.trim();
  };

  
  onSubmit = (event) =>{
    // event.preventDefault();
    const { email, password} = this;
    console.log("Email: " + email)
    console.log("Password: " + password)
  }

  render () {
    return(
      <Container>
      <Row>
      <Col sm={9}>
        <BoxBackground>
          <h2>Sign In</h2>
          <p>Organizers and Volunteers</p>
          <br/>
          <BlueBackground>
            <Form action="/congrats" onSubmit={this.onSubmit}>
              <FormField name="name" label="Full Name" exampleText="Name" fieldType="text" onChange={this.onChange}/>
              <FormField name="email" label="Email" exampleText="example@example.com" fieldType="email" onChange={this.onChange}/>
              <FormField name="number" label="Phone Number" exampleText="(123)456-7890" fieldType="tel" onChange={this.onChange}/>
              <FormField name="org" label="Orginization" exampleText="RIT" fieldType="text" onChange={this.onChange}/>
              <FormField name="git" label="Github Handle" exampleText="username" fieldType="text" onChange={this.onChange}/>
              <br/>
              <Form.Row>
                <Form.Group as={Col} controlId="formButtonBack">
                  <Button variant="outline-round" size="lg" href="/">Back</Button>
                </Form.Group>
                <Form.Group as={Col} controlId="formButtonSubmit">
                  <Button variant="round" size="lg" type="submit">Submit</Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </BlueBackground>
        </BoxBackground>
      </Col>
      <Col sm={3}>
        <Row>
          <BoxBackground>
            <Button variant="round" size="md" href="/">Users</Button>
            <br/>
            <br/>
            <Button variant="round" size="md" href="/">Groups</Button>
            <br/>
            <br/>
            <Button variant="round" size="md" href="/">Account</Button>
            <br/>
            <br/>
            <Button variant="round" size="md" href="/">Events</Button>
          </BoxBackground>
        </Row>
        <Row>
          <BoxBackground></BoxBackground>
        </Row>
      </Col>
      </Row>
      </Container>
    )}
}

export default EditProfile;
