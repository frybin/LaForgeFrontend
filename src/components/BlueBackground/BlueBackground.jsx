import React from 'react';
import Container from 'react-bootstrap/Container'
import './BlueBackground.css';

const BlueBackground = (props) => (
    <Container className="blue-background">
        {props.children}
    </Container>
);

export default BlueBackground;
