import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../button';

describe('Button test', () => {

    it('create', () => {
        const button = shallow(React.createElement(
            Button,
            { type: 'primary' },
            'TEST'
        ));
        expect(button.hasClass('cd-button--primary')).toBeTruthy();
        expect(button.childAt(0).text()).toBe('TEST');
    });

    it('icon', () => {
        const button = shallow(React.createElement(
            Button,
            { icon: 'cd-icon-search' },
            'TEST'
        ));
        expect(button.childAt(0).hasClass('cd-icon-search')).toBeTruthy();
    });

    it('appendIcon', () => {
        const button = shallow(React.createElement(
            Button,
            { appendIcon: 'cd-icon-search' },
            'TEST'
        ));
        expect(button.childAt(1).hasClass('cd-icon-search')).toBeTruthy();
        expect(button.childAt(1).hasClass('cd-icon')).toBeTruthy();
    });

    it('nativeType', () => {
        const button = shallow(React.createElement(
            Button,
            {
                nativeType: 'submit'
            },
            'TEST'
        ));
        expect(button.prop('type')).toBe('submit');
    });

    it('loading', () => {
        const button = shallow(React.createElement(
            Button,
            { loading: true },
            'TEST'
        ));
        expect(button.hasClass('is-loading')).toBeTruthy();
        expect(button.childAt(0).hasClass('cd-icon-loading')).toBeTruthy();
    });

    it('disabled', () => {
        const button = shallow(React.createElement(
            Button,
            { disabled: true },
            'TEST'
        ));
        expect(button.hasClass('is-disabled')).toBeTruthy();
    });

    it('size', () => {
        const button = shallow(React.createElement(
            Button,
            { size: 'large' },
            'TEST'
        ));
        expect(button.hasClass('cd-button--large')).toBeTruthy();
    });

    it('plain', () => {
        const button = shallow(React.createElement(
            Button,
            { plain: true },
            'TEST'
        ));
        expect(button.hasClass('is-plain')).toBeTruthy();
    });

    it('round', () => {
        const button = shallow(React.createElement(
            Button,
            { round: true },
            'TEST'
        ));
        expect(button.hasClass('is-round')).toBeTruthy();
    });

    it('circle', () => {
        const button = shallow(React.createElement(
            Button,
            { circle: true },
            'TEST'
        ));
        expect(button.hasClass('is-circle')).toBeTruthy();
    });

    it('click', () => {
        const fn = sinon.spy();
        const button = shallow(React.createElement(
            Button,
            { onClick: fn },
            'TEST'
        ));
        button.simulate('click');
        expect(fn.callCount).toBe(1);
    });

    it('loading implies disabled', () => {
        const fn = sinon.spy();
        const button = shallow(React.createElement(
            Button,
            { loading: true, onClick: fn },
            'TEST'
        ));
        button.simulate('click');
        expect(fn.callCount).toBe(0);
    });

    it('should Button.Group be created', function () {
        const buttonGroup = shallow(
            <Button.Group>
                <Button>TEST</Button>
                <Button>TEST2</Button>
            </Button.Group>
        );

        expect(buttonGroup.hasClass('cd-button-group')).toBeTruthy();
    });
});