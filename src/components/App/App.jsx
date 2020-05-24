import React, { Fragment } from 'react';
import './App.css';
import TopBar from '../TopBar';
import StarBackground from '../StarBackground'
// import HeaderTextButton from '../HeaderTextButton';
import {Col} from 'react-bootstrap'
import InformationForm from '../InformationForm';

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
      {/* <Col lg={5}>
        <HeaderTextButton 
          header="Congratulations" 
          text="You have signed into LaForge for the National Cyber Security Event. Go to your account in order to plug in your information."
          buttonText="Profile" 
          buttonLink="#profileTest"
        />
      </Col> */}
      <Col lg={4}>
        <InformationForm/>
      </Col>
    </div>
    </Fragment>
  );
}

export default App;
