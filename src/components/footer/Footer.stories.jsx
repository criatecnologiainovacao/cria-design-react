import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

storiesOf('Básicos|Footer', module)
    .add('default', () => <Footer>Footer</Footer>)
    .add('height', () => {
        return (
            <div>
                <Footer height="50px">50px</Footer>
                <Footer height="20px">20px</Footer>
                <Footer height="80px">80px</Footer>
            </div>
        )
    });
