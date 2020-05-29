import React, { Fragment } from 'react';
import './App.css';
import TopBar from '../TopBar';
import StarBackground from '../StarBackground'
import HeaderTextButton from '../HeaderTextButton';
import {Col} from 'react-bootstrap'
import InformationForm from '../InformationForm';
import LoginForm from '../LoginForm';
import EditProfile from '../EditProfile';
import UserTable from '../UserTable';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Fragment>
    <TopBar />
    <StarBackground /> 
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Col lg={5}>
                <HeaderTextButton 
                  header="Sign In" 
                  text="If an accunt was not already created for you please contact the orginizer for your event and let them know."
                  buttonText="Sign In" 
                  buttonLink="/signin"
                />
              </Col> 
            </Route>
            <Route path="/signin">
              <Col lg={4}>
                <LoginForm/>
              </Col>
            </Route>
            <Route path="/congrats">
              <Col lg={5}>
                <HeaderTextButton 
                  header="Congratulations" 
                  text="You have signed into LaForge for the National Cyber Security Event. Go to your account in order to plug in your information."
                  buttonText="Profile" 
                  buttonLink="/first"
                />
              </Col>
            </Route>
            <Route path="/first">
              <Col lg={4}>
                <InformationForm/>
              </Col>
            </Route>
            <Route path="/profile">
              <EditProfile/>
            </Route>
            <Route path="/table">
              <UserTable/>
            </Route>
          </Switch>
      </div>
    </Router>
    </Fragment>
  );
}

export default App;
