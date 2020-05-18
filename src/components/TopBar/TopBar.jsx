import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'

const TopBar = (props) => (
    <Fragment>
        <Navbar bg="black" variant="dark">
            <Navbar.Brand href="/">
                <logo>LaForge</logo>
            </Navbar.Brand>
    </Navbar>
    <div className="nav-divider"/>
  </Fragment>
);

export default TopBar;
