import React from 'react';
import { shallow } from 'enzyme';

import Main from '.';

describe('Header test', () => {

    it('create', () => {
        const main = shallow(React.createElement(
            Main,
            {},
            'TEST'
        ));
        expect(main.hasClass('cd-main')).toBeTruthy();
        expect(main.childAt(0).text()).toBe('TEST');
    });
});
