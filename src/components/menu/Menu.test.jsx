import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import SubMenu from './SubMenu'

describe('Menu tests', () => {

    it('should create default menu', () => {

        const menu = shallow(<Menu/>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
    });

    it('should create default menu collapsed', () => {

        const menu = shallow(<Menu collapsed/>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.hasClass('cd-menu--collapse')).toBeTruthy();
        menu.find('.menu-icon').simulate('click');
        expect(menu.hasClass('cd-menu--collapse')).toBeFalsy();
    });

    it('should create default menu without title', () => {

        const menu = shallow(<Menu titleDisabled/>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.children()).toHaveLength(0);
    });

    it('should create default menu with multiple childrens', () => {

        const menu = shallow(
            <Menu titleDisabled defaultActive="0">
                <MenuItem index="0"/>
                <MenuItem index="1"/>
                <MenuItem index="2"/>
                <MenuItem index="3"/>
                <MenuItem index="4"/>
                <MenuItem index="5"/>
                <MenuItem index="6"/>
            </Menu>
        );

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.childAt(0).type()).toEqual(MenuItem);
        expect(menu.childAt(0).dive().hasClass('is-active')).toBeTruthy();
        expect(menu.childAt(1).dive().hasClass('is-active')).toBeFalsy();
        menu.childAt(1).dive().simulate('click');
        expect(menu.childAt(1).dive().hasClass('is-active')).toBeTruthy();
        expect(menu.children()).toHaveLength(7);
    });

    it('open menu', () => {

        const onClose = sinon.spy();
        const onOpen = sinon.spy();
        const menu = mount(
            <Menu
                collapsed
                title="Menu"
                defaultActive="0"
                onClose={onClose}
                onOpen={onOpen}
                uniqueOpened
            >
                <MenuItem index="0"/>
                <SubMenu index="3">
                    <MenuItem index="1"/>
                </SubMenu>
            </Menu>
        );

        expect(menu).toHaveState({ collapse: true });

        const collapseButton = menu.find('.cd-menu-icon button');
        collapseButton.simulate('click');

        expect(menu).toHaveState({ collapse: false });

        menu.instance().handleSubmenuClick(3);

    });

    it('should create horizontal menu', () => {

        const menu = shallow(<Menu mode="horizontal"/>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.hasClass('cd-menu--horizontal')).toBeTruthy();
    });

    it('should create horizontal menu with child', () => {

        const menu = shallow(<Menu onSelect={function () {

        }} mode="horizontal" defaultActive="0">
            <MenuItem index="0"/>
            <MenuItem index="1"/>
            <MenuItem index="2"/>
            <SubMenu index="3">
                <MenuItem index="1"/>
            </SubMenu>
            <MenuItem index="4"/>
            <MenuItem index="5"/>
            <MenuItem index="6"/>
        </Menu>);

        expect(menu.childAt(1).type()).toEqual(MenuItem);
        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.hasClass('cd-menu--horizontal')).toBeTruthy();
        expect(menu.childAt(2).dive().hasClass('is-active')).toBeFalsy();
        menu.childAt(2).dive().simulate('click');
        expect(menu.childAt(2).dive().hasClass('is-active')).toBeTruthy();
        expect(menu.childAt(3).type()).toEqual(SubMenu);
    });

    it('should create menu with child and submenu active', () => {
        const menu = mount(
            <Menu onClose={() => {

            }} uniqueOpened defaultActive="0">
                <SubMenu icon="cd-icon-message" title="Navigator Two" index="0">
                    <MenuItem index="0"/>
                </SubMenu>
            </Menu>
        );

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.childAt(0).childAt(1).type()).toEqual(SubMenu);
        expect(menu.childAt(0).find('.cd-submenu').hasClass('is-opened')).toBeTruthy();
        menu.instance().handleSubmenuClick(1, [0, 1, 2]);
        menu.instance().handleSubmenuClick(1);
        menu.instance().closeMenu(1)

    });

    it('should create menu horizontal with child and submenu', () => {

        const menu = mount(
            <Menu mode="horizontal" defaultActive="0">
                <SubMenu icon="cd-icon-message" title="Navigator Two" index="0">
                    <MenuItem index="0"/>
                </SubMenu>
            </Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.childAt(0).childAt(0).type()).toEqual(SubMenu);

        jest.useFakeTimers();
        menu.find('SubMenu').instance().handleClick();
        jest.runAllTimers();

        jest.useFakeTimers();
        menu.find('SubMenu').instance().handleMouseenter();
        jest.runAllTimers();

        jest.useFakeTimers();
        menu.find('SubMenu').instance().handleMouseleave();
        jest.runAllTimers();

        menu.find('SubMenu').instance().onItemSelect(0, [1])

    });

    it('should create menu horizontal with child and submenu - events', () => {

        const onOpen = sinon.spy();
        const onClose = sinon.spy();

        const menu = mount(
            <Menu mode="horizontal" defaultActive="0" onOpen={onOpen} onClose={onClose}>
                <SubMenu icon="cd-icon-message" title="Navigator Two" index="0">
                    <MenuItem index="0"/>
                </SubMenu>
            </Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.childAt(0).childAt(0).type()).toEqual(SubMenu);
        menu.find('SubMenu').instance().handleClick();
        menu.find('SubMenu').instance().handleClick();
        menu.find('SubMenu').instance().handleMouseenter();
        menu.find('SubMenu').instance().handleMouseleave();
        menu.find('SubMenu').instance().onItemSelect(0, [1]);
        expect(onOpen.calledOnce).toBe(true);
        expect(onClose.calledOnce).toBe(true);

    });

    it('should create menu horizontal with child and submenu - unique open', () => {

        const onOpen = sinon.spy();
        const onClose = sinon.spy();

        const menu = mount(
            <Menu mode="horizontal" defaultActive="0" onOpen={onOpen} onClose={onClose}
                  uniqueOpened>
                <SubMenu icon="cd-icon-message" title="Navigator Two" index="0">
                    <MenuItem index="0"/>
                </SubMenu>
                <SubMenu icon="cd-icon-message" title="Navigator Three" index="1">
                    <MenuItem index="1"/>
                </SubMenu>
            </Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        menu.find('SubMenu').first().instance().handleClick();
        menu.find('SubMenu').last().instance().handleClick();

    });

    it('should create menu with child and submenu and menuItem', () => {

        const menu = mount(
            <Menu defaultActive="0">

                <SubMenu icon="cd-icon-message" title="Navigator Two" index="0">
                    <MenuItemGroup title="Teste">
                        <MenuItem index="0"/>
                    </MenuItemGroup>
                </SubMenu>

            </Menu>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.childAt(0).childAt(1).type()).toEqual(SubMenu);
    });

    it('should create custom menu', () => {

        const menu = shallow(<Menu title="customMenu"/>);

        expect(menu.find('.cd-menu').exists()).toBeTruthy();
        expect(menu.find('.cd-menu').text()).toEqual('customMenu');
    });


    it('should create default menu with childrens', () => {

        const menu = shallow(
            <Menu>
                <MenuItem index="0"> MenuItem </MenuItem>
            </Menu>);

        expect(menu.hasClass('cd-menu')).toBeTruthy();
        expect(menu.childAt(1).type()).toEqual(MenuItem);
        expect(menu.childAt(1).find('.cd-menu-item')).toBeTruthy();
        menu.childAt(1).simulate('click')
    });

    it('should create default menu with children', () => {

        const menu = shallow(
            <Menu>
                <MenuItemGroup title="ItemGroup">
                    <MenuItem index="0">MenuItem</MenuItem>
                </MenuItemGroup>
            </Menu>);

        expect(menu.hasClass('cd-menu')).toBeTruthy();
        expect(menu.childAt(1).type()).toEqual(MenuItemGroup);
        expect(menu.childAt(1).find('.cd-menu-item-group')).toBeTruthy();
        expect(menu.childAt(1).childAt(0).find('.cd-menu-item')).toBeTruthy();
        menu.childAt(1).simulate('click');
        menu.childAt(1).simulate('click')
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
        expect(menu.childAt(1).type()).toEqual(MenuItemGroup);
        expect(menu.childAt(1).find('.cd-menu-item-group')).toBeTruthy();
        menu.childAt(1).dive().simulate('click');
        menu.childAt(1).dive().simulate('click');
        expect(menu.childAt(1).childAt(0).find('.cd-menu-item')).toBeTruthy()
    });

});
