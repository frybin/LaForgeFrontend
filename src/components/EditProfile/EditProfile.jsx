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
      <Col sm={9} className="full-height">
        <BoxBackground >
          <Row> 
            <Col lg={4}>
              <h2>User Account</h2>
            </Col>
            <Button variant="round-reverse" size="lg" href="/" className="btn-fixed">Add to Group</Button> 
          </Row>
          <Col lg={12}>
            <BlueBackground>
              <Form action="/congrats" onSubmit={this.onSubmit}>
                <FormField className="boldText" name="name" label="Full Name" exampleText="Name" fieldType="text" defaultValue="Jack James" onChange={this.onChange}/>
                <FormField className="boldText" name="email" label="Email" exampleText="example@example.com" fieldType="email" defaultValue="jack.james@g.net" onChange={this.onChange}/>
                <FormField className="boldText" name="number" label="Phone Number" exampleText="(123)456-7890" fieldType="tel" defaultValue="555-555-5555" onChange={this.onChange}/>
                <FormField className="boldText" name="org" label="Orginization" exampleText="RIT" fieldType="text" defaultValue="RIT" onChange={this.onChange}/>
                <FormField className="boldText" name="git" label="Github Handle" exampleText="username" fieldType="text" defaultValue="jack.james123" onChange={this.onChange}/>
                <Form.Group as={Row} controlId="roleSelect">
                  <Form.Label column sm={3} className="formLabel boldText">Role</Form.Label>
                  <Col sm={8}>
                    <Form.Control as="select" custom className="formField" defaultValue="Volunteer" onChange={this.onChange}>
                      <option> </option>
                      <option>Admin</option>
                      <option>Volunteer</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <br/>
                <Form.Row>
                <Col sm={5}>
                  <Button variant="round" className="btn-fixed" href="/" style={{background:"black",color:"#f2c300"}}>Back</Button>
                </Col>
                <Col>
                <Button variant="round-reverse" className="btn-fixed" href="/" style={{marginRight:"10px",background:"#c19c00"}}>Delete</Button>
                <Button variant="round-blue" className="btn-fixed" href="/" >Save</Button>
                </Col>
                </Form.Row>
              </Form>
            </BlueBackground>
          </Col>
        </BoxBackground>
      </Col>
      <Col sm={3}>
        <Row>
          <BoxBackground>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/" active>Users</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/">Groups</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/">Account</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/">Events</Button>
              </Col>
            </Row>
          </BoxBackground>
        </Row>
        <Row>
          <BoxBackground className="small-margin">
            <h3>National Cyber Security Event</h3>
            <br/>
            <h5>Date: 03/14/20</h5>
          </BoxBackground>
        </Row>
      </Col>
      </Row>
      </Container>
    )}
}

export default EditProfile;
