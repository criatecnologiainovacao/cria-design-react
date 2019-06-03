import React from 'react';
import {shallow} from 'enzyme';

import Menu from './Menu';
import MenuItem from "./MenuItem";
import MenuItemGroup from "./MenuItemGroup";

describe('Menu tests', () => {

    it('should create default menu', () => {

        const menu = shallow(<Menu></Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
    });

    it('should create default menu collapsed', () => {

        const menu = shallow(<Menu collapsed></Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.hasClass('cd-menu--collapse')).toBeTruthy();
    });

    it('should create default menu without title', () => {

        const menu = shallow(<Menu titleDisabled></Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.children()).toHaveLength(0);
    });

    it('should create default menu with multiple childrens', () => {

        const menu = shallow(<Menu titleDisabled defaultActive="0">
            <MenuItem index="0"></MenuItem>
            <MenuItem index="1"></MenuItem>
            <MenuItem index="2"></MenuItem>
            <MenuItem index="3"></MenuItem>
            <MenuItem index="4"></MenuItem>
            <MenuItem index="5"></MenuItem>
            <MenuItem index="6"></MenuItem>
        </Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.childAt(0).type()).toEqual(MenuItem)
        expect(menu.childAt(0).dive().hasClass('is-active')).toBeTruthy()
        expect(menu.childAt(1).dive().hasClass('is-active')).toBeFalsy()
        expect(menu.children()).toHaveLength(7);
    });

    it('should create horizontal menu', () => {

        const menu = shallow(<Menu mode="horizontal"></Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.hasClass('cd-menu--horizontal')).toBeTruthy();
    });


    it('should create custom menu', () => {

        const menu = shallow(<Menu title="customMenu"></Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.find('.cd-menu').text()).toEqual("customMenu");
    });


    it('should create default menu with childrens', () => {

        const menu = shallow(
        <Menu>
            <MenuItem index="0"> MenuItem </MenuItem>
        </Menu>);

        expect(menu.hasClass('cd-menu')).toBeTruthy();
        expect(menu.childAt(1).type()).toEqual(MenuItem)
        expect(menu.childAt(1).find('.cd-menu-item')).toBeTruthy()
    });

    it('should create default menu with childrens', () => {

        const menu = shallow(
            <Menu>
                <MenuItemGroup title="ItemGroup">
                    <MenuItem index="0">MenuItem</MenuItem>
                </MenuItemGroup>
            </Menu>);

        expect(menu.hasClass('cd-menu')).toBeTruthy();
        expect(menu.childAt(1).type()).toEqual(MenuItemGroup)
        expect(menu.childAt(1).find('.cd-menu-item-group')).toBeTruthy()
        expect(menu.childAt(1).childAt(0).find('.cd-menu-item')).toBeTruthy()
    });

    it('should create default menu collapsed with childrens', () => {

        const menu = shallow(
            <Menu collapsed>
                <MenuItemGroup title="ItemGroup">
                    <MenuItem index="0">MenuItem</MenuItem>
                </MenuItemGroup>
            </Menu>);

        expect(menu.hasClass('cd-menu')).toBeTruthy();
        expect(menu.hasClass('cd-menu--collapse')).toBeTruthy();
        expect(menu.childAt(1).type()).toEqual(MenuItemGroup)
        expect(menu.childAt(1).find('.cd-menu-item-group')).toBeTruthy()
        expect(menu.childAt(1).childAt(0).find('.cd-menu-item')).toBeTruthy()
    });

});
