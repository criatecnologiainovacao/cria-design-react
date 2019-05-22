import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import initStoryshots from '@storybook/addon-storyshots';

import Tag from './Tag';

initStoryshots();

export const actions = {
    onClose: action('Closed'),
    onClick: action('Clicked')
};

const mr10 = {
    marginRight: '10px'
};

storiesOf('Tag', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .add('default', () => <Tag>Tag Default</Tag>)
    .add('on click', () => {
        return (
            <Tag style={{ cursor: 'pointer' }} onClick={actions.onClick}>Tag Clickable</Tag>
        )
    })
    .add('types', () => {
        return (
            <div>
                <Tag style={mr10}>Primary</Tag>
                <Tag style={mr10} type={text('Type button 2', 'success')}>Success</Tag>
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
    .add('closable', () => {
        return (
            <div>
                <Tag style={mr10} closable {...actions}>Primary</Tag>
                <Tag style={mr10} closable type="success" {...actions}>Success</Tag>
                <Tag style={mr10} closable type="info" {...actions}>Info</Tag>
                <Tag style={mr10} closable type="warning" {...actions}>Warning</Tag>
                <Tag style={mr10} closable type="danger" {...actions}>Danger</Tag>
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
                <Tag style={mr10} round closable {...actions}>Rounded Closable</Tag>
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
                <Tag style={mr10} closable {...actions}>Default</Tag>
                <Tag style={mr10} closable {...actions} size="medium">Medium</Tag>
                <Tag style={mr10} closable {...actions} size="small">Small</Tag>
                <Tag style={mr10} closable {...actions} size="mini">Mini</Tag>
                <br/>
                <br/>
                <Tag style={mr10} closable {...actions} round>Default</Tag>
                <Tag style={mr10} closable {...actions} round size="medium">Medium</Tag>
                <Tag style={mr10} closable {...actions} round size="small">Small</Tag>
                <Tag style={mr10} closable {...actions} round size="mini">Mini</Tag>
            </div>
        )
    });