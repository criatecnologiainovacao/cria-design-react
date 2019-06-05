import React from 'react';
import { storiesOf } from '@storybook/react';
import Main from './Main';
import Header from '../header';
import Footer from '../footer';
import Container from '../container';

storiesOf('Básicos|Main', module)
    .add('default', () => <div>
        <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Container>
    </div>);
