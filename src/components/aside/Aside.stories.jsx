import React from 'react';
import {storiesOf} from '@storybook/react';
import Aside from "./Aside";
import Container from "../container";
import Main from "../main";

storiesOf('Aside', module)
    .add('default', () => <div>
        <Container>
            <Aside>Aside</Aside>
            <Main>Main</Main>
        </Container>
    </div>)
    .add('width', () => <div>
        <Container>
            <Aside width="100px">Aside 100px</Aside>
            <Main>Main</Main>
        </Container>
    </div>);
