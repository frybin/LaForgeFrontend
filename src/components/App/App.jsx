import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import TopBar from '../TopBar';

function App() {
  return (
    <div className="App">
    <TopBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link border-gradient"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
