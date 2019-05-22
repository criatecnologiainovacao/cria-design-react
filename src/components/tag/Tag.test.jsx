import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Tag from './Tag';

describe('Tag test', function () {
    it('tag', function () {
        var w = mount(React.createElement(
            Tag,
            null,
            'TEST'
        ));
        expect(w.find('.cd-tag').text()).toBe('TEST');
    });

    it('type', function () {
        var w = mount(React.createElement(
            Tag,
            { type: 'primary' },
            'TEST'
        ));
        expect(w.find('.cd-tag--primary')).toHaveLength(1);
    });

    it('icon', function () {
        var w = shallow(React.createElement(
            Tag,
            { icon: 'cd-icon-search' },
            'TEST'
        ));
        expect(w.find('i.cd-icon').exists()).toBe(true);
        expect(w.find('i.cd-icon-search').exists()).toBe(true);
    });

    it('appendIcon', function () {
        var w = shallow(React.createElement(
            Tag,
            { appendIcon: 'cd-icon-search' },
            'TEST'
        ));
        expect(w.find('i.cd-icon-search').exists()).toBe(true);
        expect(w.find('i.cd-append-icon').exists()).toBe(true);
    });

    it('closable', function () {
        var w = shallow(React.createElement(
            Tag,
            { type: 'primary', closable: true },
            'TEST'
        ));
        expect(w.find('i.cd-tag__close').exists()).toBe(true);
    });

    it('hit', function () {
        var w = mount(React.createElement(
            Tag,
            { hit: true },
            'TEST'
        ));
        expect(w.find('.cd-tag').first().hasClass('is-hit')).toBeTruthy();
    });

    it('solid', function () {
        var w = mount(React.createElement(
            Tag,
            { solid: true },
            'TEST'
        ));
        expect(w.find('.cd-tag').first().hasClass('is-solid')).toBeTruthy();
    });

    it('round', function () {
        var w = mount(React.createElement(
            Tag,
            { round: true },
            'TEST'
        ));
        expect(w.find('.cd-tag').first().hasClass('is-round')).toBeTruthy();
    });

    it('onClose', function () {
        var onClose = sinon.spy();
        var w = shallow(React.createElement(
            Tag,
            { type: 'primary', closable: true, onClose: onClose },
            'TEST'
        ));

        w.find('i.cd-tag__close').simulate('click');

        expect(onClose.calledOnce).toBe(true);
    });
});