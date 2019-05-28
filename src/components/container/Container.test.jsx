import React from 'react';
import {shallow} from 'enzyme';

import Container from ".";
import Header from "../header";

describe('Container test', () => {

    it('create', () => {
        const container = shallow(React.createElement(
            Container,
            {},
          <p>TEST</p>
        ));
        expect(container.hasClass('cd-container')).toBeTruthy();
        expect(container.childAt(0).text()).toBe('TEST');

        const containerVerticalAuto = shallow(React.createElement(
            Container,
            {},
           <Header> Header </Header>
        ));

        expect(containerVerticalAuto.hasClass('cd-container')).toBeTruthy();
        expect(containerVerticalAuto.childAt(0).text()).toBe('<Header />');
        expect(containerVerticalAuto.hasClass('is-vertical')).toBeTruthy();
    });

    it('direction', () => {
        const containerVertical = shallow(React.createElement(
            Container,
            {
                direction: 'vertical'
            },
          <p>TEST</p>
        ));
        expect(containerVertical.hasClass('cd-container')).toBeTruthy();
        expect(containerVertical.hasClass('is-vertical')).toBeTruthy();
        expect(containerVertical.childAt(0).text()).toBe('TEST');

        const containerHorizontal = shallow(React.createElement(
            Container,
            {
                direction: 'horizontal'
            },
          <p>TEST</p>
        ));
        expect(containerHorizontal.hasClass('cd-container')).toBeTruthy();
        expect(containerHorizontal.hasClass('is-vertical')).toBeFalsy();
    });
});
