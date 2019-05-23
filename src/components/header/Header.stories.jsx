import React from 'react';
import {storiesOf} from '@storybook/react';
import Header from "./Header";


storiesOf('Header', module)
    .add('default', () => <Header>Header</Header>)
    .add('height', () => {
        return (
            <div>
                <Header height="50px">50px</Header>
                <Header height="20px">20px</Header>
                <Header height="80px">80px</Header>
            </div>
        )
    });
