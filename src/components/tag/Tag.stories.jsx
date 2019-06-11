import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Tag from './Tag';

export const actionsClick = {
    onClick: action('Clicked')
};

export const actionClose = {
    onClose: action('Closed')
};

const mr10 = {
    marginRight: '10px'
};

storiesOf('Dados|Tag', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .add('default', () => <Tag>Tag Default</Tag>)
    .add('types', () => {
        return (
            <div>
                <Tag style={mr10}>Primary</Tag>
                <Tag style={mr10} type={text('Type button 2', 'success')}>
                    Success
                </Tag>
                <Tag style={mr10} type="info">Info</Tag>
                <Tag style={mr10} type="warning">Warning</Tag>
                <Tag style={mr10} type="danger">Danger</Tag>
            </div>
        )
    })
    .add('icon', () => {
        return (
            <div>
                <Tag style={mr10} icon="cd-icon-edit">Primary</Tag>
                <Tag style={mr10} appendIcon="cd-icon-edit" type="success">Success</Tag>
                <Tag style={mr10} icon="cd-icon-star-on" type="info"/>
                <Tag style={mr10} icon="cd-icon-edit" type="warning">Warning</Tag>
                <Tag style={mr10} icon="cd-icon-edit" type="danger">Danger</Tag>
            </div>
        )
    })
    .add('clickable', () => {
        return (
            <div>
                <Tag style={mr10} {...actionsClick}>Primary</Tag>
                <Tag style={mr10} type="success" {...actionsClick}>Success</Tag>
                <Tag style={mr10} type="info" {...actionsClick}>Info</Tag>
                <Tag style={mr10} type="warning" {...actionsClick}>Warning</Tag>
                <Tag style={mr10} type="danger" {...actionsClick}>Danger</Tag>
            </div>
        )
    })
    .add('closable', () => {
        return (
            <div>
                <Tag style={mr10} closable {...actionClose}>Primary</Tag>
                <Tag style={mr10} closable type="success" {...actionClose}>Success</Tag>
                <Tag style={mr10} closable type="info" {...actionClose}>Info</Tag>
                <Tag style={mr10} closable type="warning" {...actionClose}>Warning</Tag>
                <Tag style={mr10} closable type="danger" {...actionClose}>Danger</Tag>
            </div>
        )
    })
    .add('hit', () => {
        return (
            <div>
                <Tag style={mr10} hit>Primary</Tag>
                <Tag style={mr10} hit type="success">Success</Tag>
                <Tag style={mr10} hit type="info">Info</Tag>
                <Tag style={mr10} hit type="warning">Warning</Tag>
                <Tag style={mr10} hit type="danger">Danger</Tag>
            </div>
        )
    })
    .add('solid', () => {
        return (
            <div>
                <Tag style={mr10} solid>Primary</Tag>
                <Tag style={mr10} solid type="success">Success</Tag>
                <Tag style={mr10} solid type="info">Info</Tag>
                <Tag style={mr10} solid type="warning">Warning</Tag>
                <Tag style={mr10} solid type="danger">Danger</Tag>
            </div>
        )
    })
    .add('rounded', () => {
        return (
            <div>
                <Tag style={mr10} round>Rounded</Tag>
                <Tag style={mr10} round hit>Rounded Hit</Tag>
                <Tag style={mr10} round appendIcon="cd-icon-star-on" type="success">
                    Rounded Success
                </Tag>
                <Tag style={mr10} round appendIcon="cd-icon-star-on">VIP</Tag>
                <Tag style={mr10} round hit type="success">Rounded Success Hit</Tag>
                <Tag style={mr10} round closable {...actionClose}>Rounded Closable</Tag>
            </div>
        )
    })
    .add('size', () => {
        return (
            <div>
                <Tag style={mr10}>Default</Tag>
                <Tag style={mr10} size="medium">Medium</Tag>
                <Tag style={mr10} size="small">Small</Tag>
                <Tag style={mr10} size="mini">Mini</Tag>
                <br/>
                <br/>
                <Tag style={mr10} round>Default</Tag>
                <Tag style={mr10} round size="medium">Medium</Tag>
                <Tag style={mr10} round size="small">Small</Tag>
                <Tag style={mr10} round size="mini">Mini</Tag>
                <br/>
                <br/>
                <Tag style={mr10} closable {...actionClose}>Default</Tag>
                <Tag style={mr10} closable {...actionClose} size="medium">Medium</Tag>
                <Tag style={mr10} closable {...actionClose} size="small">Small</Tag>
                <Tag style={mr10} closable {...actionClose} size="mini">Mini</Tag>
                <br/>
                <br/>
                <Tag style={mr10} closable {...actionClose} round>Default</Tag>
                <Tag style={mr10} closable {...actionClose} round size="medium">Medium</Tag>
                <Tag style={mr10} closable {...actionClose} round size="small">Small</Tag>
                <Tag style={mr10} closable {...actionClose} round size="mini">Mini</Tag>
            </div>
        )
    });
