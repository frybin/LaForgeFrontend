import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './TopBar.css';

const TopBar = (props) => (
    <Fragment>
        <Navbar bg="black" variant="dark">
            <Navbar.Brand href="/">
                <div className="nav-logo">LaForge</div>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="navbar-text-yellow">
                    {props.rightText}
                    {props.rightLink}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar> 
        <div className="nav-divider"/>
    </Fragment>
);

export default TopBar;
