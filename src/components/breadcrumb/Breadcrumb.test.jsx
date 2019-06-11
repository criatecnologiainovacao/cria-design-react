import React from 'react';
import { mount, shallow } from 'enzyme';

import Breadcrumb from '../breadcrumb';

describe('Breadcrumb test', () => {
    it('basic usage', () => {
        const w = shallow(
            <Breadcrumb>
                <Breadcrumb.Item>TEST</Breadcrumb.Item>
                <Breadcrumb.Item>TEST1</Breadcrumb.Item>
            </Breadcrumb>
        );
        expect(w.is('.cd-breadcrumb')).toBe(true);
    });

    it('test children', () => {
        const w = mount(
            <Breadcrumb separator="">
                <Breadcrumb.Item>TEST</Breadcrumb.Item>
                <Breadcrumb.Item>TEST1</Breadcrumb.Item>
                <Breadcrumb.Item>TEST2</Breadcrumb.Item>
                <Breadcrumb.Item>TEST3</Breadcrumb.Item>
            </Breadcrumb>
        );
        expect(w.find('.cd-breadcrumb__item').length).toBe(4);
    });

    it('test separator', () => {
        const w = mount(
            <Breadcrumb separator="/">
                <Breadcrumb.Item>TEST</Breadcrumb.Item>
                <Breadcrumb.Item>TEST1</Breadcrumb.Item>
                <Breadcrumb.Item>TEST2</Breadcrumb.Item>
                <Breadcrumb.Item>TEST3</Breadcrumb.Item>
            </Breadcrumb>
        );
        expect(w.find('.cd-breadcrumb__separator').at(0).text()).toBe('/');
    });
});