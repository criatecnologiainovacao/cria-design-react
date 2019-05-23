import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

describe('Header test', () => {

    it('create', () => {
        const header = shallow(React.createElement(
            Header,
            {},
            'TEST'
        ));
        expect(header.hasClass('cd-header')).toBeTruthy();
        expect(header.childAt(0).text()).toBe('TEST');
    });

    it('create', () => {
        const header = shallow(React.createElement(
            Header,
            { height: '100px'},
            'TEST'
        ));
        expect(header.hasClass('cd-header')).toBeTruthy();
        expect(header.childAt(0).text()).toBe('TEST');
        expect(header.find('.cd-header')).toHaveStyle({height: '100px'});
    });

});
