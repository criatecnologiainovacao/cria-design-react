import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './Popover';
import Button from '../button';

storiesOf('Outros|Popover', module)
    .add('default', () => <div>
        <Popover placement="top-start" title="Title" width="200" trigger="hover" content="This is content, this is content, this is content">
            <Button>Hover to activate</Button>
        </Popover>
    </div>);
