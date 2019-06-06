import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const style = {
    width: '300px'
};

const menuMock = props => {
    return (
        <Menu {...props}>
            <MenuItem index="1">
                <i className="cd-icon-message"/>
                <span>
                    Navigator One
              </span>
            </MenuItem>
            <SubMenu index="2" icon="cd-icon-message" title="Navigator Two">
                <MenuItem index="2-1"><span>Option 1</span></MenuItem>
                <MenuItem index="2-2"><span>Option 2</span></MenuItem>
                <MenuItem index="2-3"><span>Option 3</span></MenuItem>
            </SubMenu>
            <MenuItem index="3"> <i
                className="cd-icon-message"/><span>Navigator Tree</span></MenuItem>
        </Menu>
    );
};

storiesOf('Menu', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return menuMock({ collapsed: boolean('Collapse'), style: style, defaultActive: '1' });
    })
    .add('collapsed', () => {
        return menuMock({ collapsed: boolean('Collapse', true), style: style, defaultActive: '1' });
    })
    .add('horizontal', () => {
        return menuMock({ collapsed: boolean('Collapse'), mode: 'horizontal', defaultActive: '1' });
    })
    .add('title', () => {
        return (
            <div>
                {
                    menuMock({
                                 collapsed: boolean('Collapse'),
                                 titleDisabled: true,
                                 defaultActive: '1'
                             })
                }
                {
                    menuMock({
                                 collapsed: boolean('Collapse'),
                                 title: 'Navigator Two',
                                 defaultActive: '1'
                             })
                }
            </div>
        );
    });
