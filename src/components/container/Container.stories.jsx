import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';
import Footer from '../footer';
import Header from '../header';
import Main from '../main';

const containerStyle = {
    height: '50px',
    width: '100px',
    border: 'solid black 1px',
    textAlign: 'center'
};

storiesOf('Básicos|Container', module)
    .add('default', () => <div>
        <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Container>
    </div>)
    .add('direction', () => {
        return (
            <div>
                <Container>
                    <div style={containerStyle}> <p>Horizontal</p></div>
                    <div style={containerStyle}> <p>Horizontal</p></div>
                </Container>
                <Container direction="vertical">
                    <div style={containerStyle}> <p>Vertical</p></div>
                    <div style={containerStyle}> <p>Vertical</p></div>
                </Container>
            </div>
        )
    });
