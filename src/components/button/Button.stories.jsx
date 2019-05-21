import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../button';

export const actions = {
    onClick: action('Clicked')
};

const mr10 = {
    marginRight: '10px'
};

storiesOf('Button', module)
    .add('default', () => <Button>Button</Button>)
    .add('type', () => {
        return (
            <div>
                <Button style={mr10} {...actions} type="text">Text</Button>
                <Button style={mr10} {...actions}>Default</Button>
                <Button style={mr10} {...actions} type="primary">Primary</Button>
                <Button style={mr10} {...actions} type="success">Success</Button>
                <Button style={mr10} {...actions} type="info">Info</Button>
                <Button style={mr10} {...actions} type="warning">Warning</Button>
                <Button style={mr10} {...actions} type="danger">Danger</Button>
            </div>
        )
    })
    .add('size', () => {
        return (
            <div>
                <Button style={mr10} {...actions}>Default</Button>
                <Button style={mr10} {...actions} size="medium">Medium</Button>
                <Button style={mr10} {...actions} size="small">Small</Button>
                <Button style={mr10} {...actions} size="mini">Mini</Button>
            </div>
        )
    })
    .add('disabled', () => {
        return (
            <div>
                <Button style={mr10} {...actions} disabled type="text">Text</Button>
                <Button style={mr10} {...actions} disabled>Default</Button>
                <Button style={mr10} {...actions} disabled type="primary">Primary</Button>
                <Button style={mr10} {...actions} disabled type="success">Success</Button>
                <Button style={mr10} {...actions} disabled type="info">Info</Button>
                <Button style={mr10} {...actions} disabled type="warning">Warning</Button>
                <Button style={mr10} {...actions} disabled type="danger">Danger</Button>
            </div>
        )
    })
    .add('loading', () => <Button loading {...actions}>Button With Loading</Button>)
    .add('plain', () => {
        return (
            <div>
                <Button style={mr10} {...actions} plain>Default</Button>
                <Button style={mr10} {...actions} plain type="primary">Primary</Button>
                <Button style={mr10} {...actions} plain type="success">Success</Button>
                <Button style={mr10} {...actions} plain type="info">Info</Button>
                <Button style={mr10} {...actions} plain type="warning">Warning</Button>
                <Button style={mr10} {...actions} plain type="danger">Danger</Button>
            </div>
        )
    })
    .add('icon', () => {
        return (
            <div>
                <Button style={mr10} {...actions} icon="cd-icon-share" type="text">Text</Button>
                <Button style={mr10} {...actions} icon="cd-icon-search"/>
                <Button style={mr10} {...actions} icon="cd-icon-delete"
                        type="primary">Primary</Button>
                <Button style={mr10} {...actions} icon="cd-icon-edit"
                        type="success">Success</Button>
                <Button style={mr10} {...actions} icon="cd-icon-circle-close"
                        type="info">Info</Button>
                <Button style={mr10} {...actions} icon="cd-icon-mic" type="warning">Warning</Button>
                <Button style={mr10} {...actions} icon="cd-icon-back" plain
                        type="danger">Danger</Button>
            </div>
        )
    })
    .add('append icon', () => {
        return (
            <div>
                <Button style={mr10} {...actions} appendIcon="cd-icon-share"
                        type="text">Text</Button>
                <Button style={mr10} {...actions} appendIcon="cd-icon-search"/>
                <Button style={mr10} {...actions} appendIcon="cd-icon-delete"
                        type="primary">Primary</Button>
                <Button style={mr10} {...actions} appendIcon="cd-icon-edit"
                        type="success">Success</Button>
                <Button style={mr10} {...actions} appendIcon="cd-icon-circle-close"
                        type="info">Info</Button>
                <Button style={mr10} {...actions} appendIcon="cd-icon-mic"
                        type="warning">Warning</Button>
                <Button style={mr10} {...actions} appendIcon="cd-icon-back" plain
                        type="danger">Danger</Button>
            </div>
        )
    })
    .add('round', () => {
        return (
            <div>
                <Button style={mr10} {...actions} icon="cd-icon-close" type="danger" plain
                        round>Close</Button>
                <Button style={mr10} {...actions} icon="cd-icon-edit" round/>
                <Button style={mr10} {...actions} icon="cd-icon-mic" type="primary"
                        round>Sound</Button>
                <Button style={mr10} {...actions} loading round>Loading...</Button>
                <Button style={mr10} {...actions} round type="success">Done</Button>
            </div>
        )
    })
    .add('circle', () => {
        return (
            <div>
                <Button style={mr10} {...actions} circle icon="cd-icon-search"/>
                <Button style={mr10} {...actions} circle icon="cd-icon-delete" type="primary"/>
                <Button style={mr10} {...actions} circle icon="cd-icon-edit" type="success"/>
                <Button style={mr10} {...actions} circle icon="cd-icon-circle-close" type="info"/>
                <Button style={mr10} {...actions} circle icon="cd-icon-mic" type="warning"/>
                <Button style={mr10} {...actions} circle icon="cd-icon-back" type="danger"/>
                <Button style={mr10} {...actions} circle loading plain type="danger"/>
            </div>
        )
    })
    .add('group', () => {
        return (
            <div>
                <Button.Group>
                    <Button {...actions} icon="cd-icon-arrow-left" type="primary">Previous
                        Page</Button>
                    <Button {...actions} appendIcon="cd-icon-arrow-right" type="primary">Next
                        Page</Button>
                </Button.Group>
                <br/>
                <br/>
                <Button.Group>
                    <Button {...actions} icon="cd-icon-edit"/>
                    <Button {...actions} icon="cd-icon-share"/>
                    <Button {...actions} icon="cd-icon-delete"/>
                </Button.Group>
            </div>
        )
    });