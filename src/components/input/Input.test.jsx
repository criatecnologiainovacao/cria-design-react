import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Input from './Input';

describe('Input test', () => {
    it('create', () => {
        const w = shallow(
            <Input placeholder="Input"/>
        );
        expect(w.hasClass('cd-input')).toBeTruthy();
    });

    it('disabled', () => {
        const w = shallow(
            <Input disabled/>
        );
        expect(w.find('.cd-input input').prop('disabled')).toBe(true);
    });

    it('prefixIcon', () => {
        const w = shallow(
            <Input
                prefixIcon="cd-icon-time"
                placeholder="Placeholder"
            />
        );
        expect(w.find('.cd-icon-time').exists()).toBeTruthy();
        expect(w.find('.cd-input__icon').exists()).toBeTruthy();
    });

    it('suffixIcon', () => {
        const cb = sinon.spy();
        const w = shallow(
            <Input
                suffixIcon="cd-icon-time"
                placeholder="Placeholder"
            />
        );
        expect(w.find('.cd-icon-time').exists()).toBeTruthy();
        expect(w.find('.cd-input__icon').exists()).toBeTruthy();
    });

    it('size', () => {
        const w = shallow(
            <Input size="large"/>
        );
        expect(w.hasClass('cd-input--large')).toBeTruthy();
    });

    it('type', () => {
        const w = shallow(
            <Input type="textarea"/>
        );
        expect(w.hasClass('cd-textarea')).toBeTruthy();
    });

    it('resize', () => {
        const w = shallow(
            <Input type="textarea" resize="both"/>
        );
        expect(w.find('.cd-textarea__inner').first().prop('style').resize).toBe('both');
    });

    it('input events', () => {
        const onChange = sinon.spy();
        const onFocus = sinon.spy();
        const onBlur = sinon.spy();
        const onClear = sinon.spy();
        const onInput = sinon.spy();

        const input = shallow(
            <Input
                onBlur={onBlur}
                onChange={onChange}
                onClear={onClear}
                onInput={onInput}
                onFocus={onFocus}
                clearable
                value="Teste"
            />
        );

        input.find('input').simulate('focus');
        expect(onFocus.callCount).toBe(1);

        input.find('input').simulate('blur');
        expect(onBlur.callCount).toBe(1);

        input.find('input').simulate('change', { target: { value: '10' } });
        expect(onChange.callCount).toBe(1);
    });

    it('hovering', () => {
        const input = shallow(
            <Input value="Teste"/>
        );

        input.instance().handleHoveringStart();
        expect(input.state('hovering')).toBe(true);

        input.instance().handleHoveringEnd();
        expect(input.state('hovering')).toBe(false);
    });

    it('clear', () => {
        const onClear = sinon.spy();
        const onInput = sinon.spy();

        const input = shallow(
            <Input
                onClear={onClear}
                onInput={onInput}
                value="Teste"
            />
        );

        input.instance().clear();
    });

});