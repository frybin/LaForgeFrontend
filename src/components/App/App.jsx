import React, { Fragment } from 'react';
import './App.css';
import TopBar from '../TopBar';
import StarBackground from '../StarBackground'
import HeaderTextButton from '../HeaderTextButton';
import {Col} from 'react-bootstrap'
import InformationForm from '../InformationForm';
import LoginForm from '../LoginForm';
import AdminProfile from '../AdminProfile';
import UserTable from '../UserTable';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const navLink=<a href="/profile">/ Profile</a>
  return (
    <Fragment>
    
    <StarBackground /> 
    <Router>
        <Switch>
            <Route exact path="/">
            <TopBar  />
            <div className="App">
              <Col lg={5}>
                <HeaderTextButton 
                  header="Sign In" 
                  text="If an accunt was not already created for you please contact the orginizer for your event and let them know."
                  buttonText="Sign In" 
                  buttonLink="/signin"
                />
              </Col> 
              </div>
            </Route>
            <Route path="/signin">
            <TopBar />
            <div className="App">
              <Col lg={4}>
                <LoginForm/>
              </Col>
              </div>
            </Route>
            <Route path="/congrats">
            <TopBar r />
            <div className="App">
              <Col lg={5}>
                <HeaderTextButton 
                  header="Congratulations" 
                  text="You have signed into LaForge for the National Cyber Security Event. Go to your account in order to plug in your information."
                  buttonText="Profile" 
                  buttonLink="/first"
                />
              </Col>
              </div>
            </Route>
            <Route path="/first">
            <TopBar  />
            <div className="App">
              <Col lg={4}>
                <InformationForm/>
              </Col>
              </div>
            </Route>
            <Route path="/profile">
            <TopBar rightText="National Cyber Security Event " rightLink={navLink}  />
            <div className="App">
              <AdminProfile/>
              </div>
            </Route>
            <Route path="/table">
            <TopBar rightText="National Cyber Security Event " rightLink={navLink}  />
            <div className="App">
              <UserTable/>
              </div>
            </Route>
          </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
