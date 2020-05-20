import React from 'react';
import Button from 'react-bootstrap/Button'
import './HeaderTextButton.css';
import BoxBackground from '../BoxBackground';

const HeaderTextButton = (props) => (
    <BoxBackground>
        <h3>Sign In</h3>
        <p>It an accunt was not alreasy created for you please contact the orginizer for your event and let them know.</p>
        <Button variant="round" size="lg">Sign In</Button>
    </BoxBackground>
);

export default HeaderTextButton;
