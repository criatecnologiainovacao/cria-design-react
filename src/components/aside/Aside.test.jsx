import React from 'react';
import {shallow} from 'enzyme';

import Aside from ".";

describe('Aside test', () => {

    it('create', () => {
        const aside = shallow(React.createElement(
            Aside,
            {},
            'TEST'
        ));
        expect(aside.hasClass('cd-aside')).toBeTruthy();
        expect(aside.childAt(0).text()).toBe('TEST');
    });

    it('width', () => {
        const aside = shallow(React.createElement(
            Aside,
            { width: '50px' },
            'TEST'
        ));
        expect(aside.hasClass('cd-aside')).toBeTruthy();
        expect(aside.childAt(0).text()).toBe('TEST');
        expect(aside.find('.cd-aside')).toHaveStyle({width: '50px'});
    });
});
