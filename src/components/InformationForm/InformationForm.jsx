import React, { PureComponent } from 'react';
import BoxBackground from '../BoxBackground';
import './InformationForm.css';
import FormField from '../FormField';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class InformationForm extends PureComponent { 
  onChange = (e) => {
    this[e.target.name] =  e.target.value.trim();
  };

  
  onSubmit = (event) =>{
    event.preventDefault();
    const { name, email, number, org, git} = this;
    console.log("Name: " + name)
    console.log("Email: " + email)
    console.log("Phone Number: " + number)
    console.log("Organization: " + org)
    console.log("GitHub Handle: " + git)
  }

  render () {
    return(
      <BoxBackground>
        <h2>User Account</h2>
        <p>Account Information</p>
        <br/>
          <Form onSubmit={this.onSubmit}>
            <FormField name="name" label="Full name" exampleText="Full name" fieldType="text" onChange={this.onChange}/>
            <FormField name="email" label="Email" exampleText="Email Address" fieldType="email" onChange={this.onChange}/>
            <FormField name="number" label="Phone Number" exampleText="Phone Number" fieldType="tel" onChange={this.onChange}/>
            <FormField name="org" label="Organization" exampleText="Organization" fieldType="text" onChange={this.onChange}/>
            <FormField name="git" label="GitHub Handle" exampleText="GitHub Handle" fieldType="text" onChange={this.onChange}/>
            <br/>
            <Button variant="round" size="lg" type="submit">Save</Button>
          </Form>
      </BoxBackground>
    )}
}

export default InformationForm;
