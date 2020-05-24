import React, { PureComponent } from 'react';
import BoxBackground from '../BoxBackground';
import './LoginForm.css';
import FormField from '../FormField';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col} from 'react-bootstrap'

class LoginForm extends PureComponent { 
  onChange = (e) => {
    this[e.target.name] =  e.target.value.trim();
  };

  
  onSubmit = (event) =>{
    event.preventDefault();
    const { email, password} = this;
    console.log("Email: " + email)
    console.log("Password: " + password)
  }

  render () {
    return(
      <BoxBackground>
        <h2>Sign In</h2>
        <p>Organizers and Volunteers</p>
        <br/>
          <Form onSubmit={this.onSubmit}>
            <FormField name="email" label="Email" exampleText="Email Address" fieldType="email" onChange={this.onChange}/>
            <FormField name="password" label="Password" exampleText="*******" fieldType="password" onChange={this.onChange}/>
            <br/>
            <Form.Row>
              <Form.Group as={Col} controlId="formButtonBack">
                <Button variant="outline-round" size="lg" href="#Back">Back</Button>
              </Form.Group>

              <Form.Group as={Col} controlId="formButtonSubmit">
                <Button variant="round" size="lg" type="submit">Submit</Button>
              </Form.Group>
            </Form.Row>
          </Form>
      </BoxBackground>
    )}
}

export default LoginForm;
