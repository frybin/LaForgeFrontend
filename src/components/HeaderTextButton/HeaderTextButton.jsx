import React from 'react';
import Button from 'react-bootstrap/Button'
import './HeaderTextButton.css';
import BoxBackground from '../BoxBackground';

const HeaderTextButton = (props) => (
    <BoxBackground>
        <h2>{props.header}</h2>
        <br />
        <p>{props.text}</p>
        <br />
        <Button variant="round" size="xl" href={props.buttonLink}>{props.buttonText}</Button>
    </BoxBackground>
);

export default HeaderTextButton;
