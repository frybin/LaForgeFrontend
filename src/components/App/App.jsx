import React, { Fragment } from 'react';
// import logo from '../../assets/images/logo.svg';
import './App.css';
import TopBar from '../TopBar';
import StarBackground from '../StarBackground'
import HeaderTextButton from '../HeaderTextButton';
import {Col} from 'react-bootstrap'

function App() {
  return (
    <Fragment>
    <TopBar />
    <StarBackground /> 
    <div className="App">
      {/* <header className="App-header">
      <BoxBackground>
        <img src={logo} className="App-logo" alt="logo" />
        </BoxBackground>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BoxBackground>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </BoxBackground>
      </header> */}
      <Col md={3}>
        <HeaderTextButton/>
      </Col>
    </div>
    </Fragment>
  );
}

export default App;
