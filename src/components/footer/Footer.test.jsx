import React from 'react';
import { shallow } from 'enzyme';

import Footer from '.';

describe('Footer test', () => {

    it('create', () => {
        const footer = shallow(React.createElement(
            Footer,
            {},
            'TEST'
        ));
        expect(footer.hasClass('cd-footer')).toBeTruthy();
        expect(footer.childAt(0).text()).toBe('TEST');
    });

    it('create', () => {
        const footer = shallow(React.createElement(
            Footer,
            { height: '100px' },
            'TEST'
        ));
        expect(footer.hasClass('cd-footer')).toBeTruthy();
        expect(footer.childAt(0).text()).toBe('TEST');
        expect(footer.find('.cd-footer')).toHaveStyle({ height: '100px' });
    });

});
