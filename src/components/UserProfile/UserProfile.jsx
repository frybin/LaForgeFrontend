import React, { PureComponent } from 'react';
import BoxBackground from '../BoxBackground/BoxBackground';
import './UserProfile.css';
import FormField from '../FormField/FormField';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col, Container, Row} from 'react-bootstrap'
import BlueBackground from '../BlueBackground/BlueBackground';

class UserProfile extends PureComponent { 
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
      <Container className="large-background">
      <Row>
      <Col sm={9} className="full-height">
        <BoxBackground >
          <Row> 
            <Col lg={2}>
              <h2>Profile</h2>
            </Col>
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
                <Row className="centerFlex">
                <Col sm={2}>
                <Button variant="round" className="btn-fixed" href="/" style={{background:"black",color:"#f2c300",width:"5vw"}}>Back</Button>
                </Col>
                <Col sm={5}>
                <Button variant="round-blue" className="btn-fixed" href="/" style={{background:"black",color:"#f2c300",width:"14vw"}}>Save</Button>
                </Col>
                </Row>
              </Form>
            </BlueBackground>
            <BlueBackground>
              
              <Form action="/congrats" onSubmit={this.onSubmit}>
              <Form.Row>
                <Col sm={8}>
                <FormField className="boldText" name="oldPass" label="Current Password" fieldType="password" defaultValue="Jack James" onChange={this.onChange}/>
                <FormField className="boldText" name="newPass" label="New Password" fieldType="password" defaultValue="jack.james@g.net" onChange={this.onChange}/>
                </Col>
                <Col sm={4} className="centerFlex">
                  <Button variant="round" className="btn-fixed medium-text" href="/" style={{background:"black",color:"#f2c300",width:"12vw"}}>Save New Password</Button>
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
                <Button className="btn-fixed" variant="round" size="lg" href="/" >Home</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/" active >Account</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/">Group</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn-fixed" variant="round" size="lg" href="/table">Users</Button>
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

export default UserProfile;
