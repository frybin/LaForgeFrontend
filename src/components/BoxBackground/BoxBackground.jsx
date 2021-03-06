import React from 'react';
import Container from 'react-bootstrap/Container'
import './BoxBackground.css';

const BoxBackground = (props) => (
    <Container className={props.className ? "box-background " + props.className : "box-background "}>
        {props.children}
    </Container>
);

export default BoxBackground;
