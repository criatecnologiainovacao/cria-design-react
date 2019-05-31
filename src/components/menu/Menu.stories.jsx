import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean, withKnobs} from '@storybook/addon-knobs';
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const style = {
    width: '300px'
}

storiesOf('Menu', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Menu collapsed={boolean("Collapse")} style={style} defaultActive="1">
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
            <MenuItem index="3"> <i className="cd-icon-message"/><span>Navigator Tree</span></MenuItem>
        </Menu>
    )).add('horizontal', () => (
    <Menu collapsed={boolean("Collapse")} mode="horizontal" defaultActive="1">
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
        <MenuItem index="3"> <i className="cd-icon-message"/><span>Navigator Tree</span></MenuItem>
    </Menu>
));
