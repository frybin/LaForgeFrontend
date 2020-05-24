import React, { Fragment } from 'react';
import './App.css';
import TopBar from '../TopBar';
import StarBackground from '../StarBackground'
import HeaderTextButton from '../HeaderTextButton';
import {Col} from 'react-bootstrap'
import FormField from '../FormField';
import Form from 'react-bootstrap/Form'


function App() {
  return (
    <Fragment>
    <TopBar />
    <StarBackground /> 
    <div className="App">
      {/* <Col lg={5}>
        <HeaderTextButton 
          header="Sign In" 
          text="It an accunt was not alreasy created for you please contact the orginizer for your event and let them know."
          buttonText="Sign In" 
          buttonLink="#test"
        />
      </Col> */}
      <Col lg={5}>
        <HeaderTextButton 
          header="Congratulations" 
          text="You have signed into LaForge for the National Cyber Security Event. Go to your account in order to plug in your information."
          buttonText="Profile" 
          buttonLink="#profileTest"
        />
      </Col>
      <Form>
      <FormField name="Full name" exampleText="Full name" fieldType="text"/>
      <FormField name="Email" exampleText="Email Address" fieldType="email"/>
      <FormField name="Phone Number" exampleText="Phone Number" fieldType="tel"/>
      <FormField name="Organization" exampleText="Organization" fieldType="text"/>
      <FormField name="GitHub Handle" exampleText="GitHub Handle" fieldType="text"/>
      </Form>
    </div>
    </Fragment>
  );
}

export default App;
