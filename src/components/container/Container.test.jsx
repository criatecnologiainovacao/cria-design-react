import React from 'react';
import {shallow} from 'enzyme';

import Container from ".";

describe('Container test', () => {

    it('create', () => {
        const container = shallow(React.createElement(
            Container,
            {},
            'TEST'
        ));
        expect(container.hasClass('cd-container')).toBeTruthy();
        expect(container.childAt(0).text()).toBe('TEST');
    });

    it('direction', () => {
        const containerVertical = shallow(React.createElement(
            Container,
            {
                direction: 'vertical'
            },
            'TEST'
        ));
        expect(containerVertical.hasClass('cd-container')).toBeTruthy();
        expect(containerVertical.hasClass('is-vertical')).toBeTruthy();
        expect(containerVertical.childAt(0).text()).toBe('TEST');

        const containerHorizontal = shallow(React.createElement(
            Container,
            {
                direction: 'horizontal'
            },
            'TEST'
        ));
        expect(containerHorizontal.hasClass('cd-container')).toBeTruthy();
        expect(containerHorizontal.hasClass('is-vertical')).toBeFalsy();
    });
});
