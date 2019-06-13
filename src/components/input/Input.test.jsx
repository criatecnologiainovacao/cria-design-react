import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';

import Input from './Input';

describe('Input test', () => {
    it('create', () => {
        const w = shallow(
            <Input placeholder="Input"/>
        );
        expect(w.hasClass('cd-input')).toBeTruthy();
        w.find('input').simulate('input', {
            target: {
                value: 'Teste'
            }
        })
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

    it('autosize', () => {
        const input = mount(
            <Input type="textarea" autoSize={{minRows: 2, maxRows: 3}}/>
        );

        expect(input).toHaveState({textareaStyle: {resize: undefined, height: '-12px'}});

    });

    it('input events', () => {
        const onChange = sinon.spy();
        const onFocus = sinon.spy();
        const onBlur = sinon.spy();

        const input = shallow(
            <Input
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                value="Teste"
            />
        );

        input.find('input').simulate('focus');
        expect(onFocus.callCount).toBe(1);

        jest.useFakeTimers()
        input.find('input').simulate('blur');
        expect(onBlur.callCount).toBe(1);
        jest.runAllTimers()

        input.find('input').simulate('change', {target: {value: '10'}});
        expect(onChange.callCount).toBe(1);
    });

    it('hovering', () => {
        const input = mount(
            <Input value="Teste"/>
        );

        input.simulate('mouseenter');
        expect(input.state('hovering')).toBe(true);

        input.simulate('mouseleave');
        expect(input.state('hovering')).toBe(false);
    });

    it('clear', () => {
        const onClear = sinon.spy();
        const onChange = sinon.spy();
        let state = 'teste';

        const input = mount(
            <Input
                onClear={onClear}
                value={state}
                onChange={onChange}
                clearable
            />
        );

        input.find('.cd-input__inner').simulate('focus');

        const closeIcon = input.find('.cd-input__clear');
        closeIcon.simulate('click');

        expect(onClear.calledOnce).toBe(true);
        expect(onChange.calledOnce).toBe(true);
    });

    it('password', () => {
        const onChange = sinon.spy();
        let state = 'teste';

        const input = mount(
            <Input
                value={state}
                onChange={onChange}
                showPassword
            />
        );

        input.find('.cd-input__inner').simulate('focus');

        const closeIcon = input.find('.cd-input__clear');

        expect(input).toHaveState({passwordVisible: false});

        closeIcon.simulate('click');

        expect(input).toHaveState({passwordVisible: true});
    });

    it('word limit', () => {
        const onChange = sinon.spy();
        let state = 'teste';

        const input = mount(
            <Input
                value={state}
                onChange={onChange}
                showWordLimit
            />
        );

        const textarea = mount(
            <Input
                type="textarea"
                value={state}
                onChange={onChange}
                showWordLimit
            />
        );

        expect(input.find('.cd-input__count')).toBeTruthy();
        expect(textarea.find('.cd-input__count')).toBeTruthy();
    });

    it('prepend', () => {
        const input = mount(
            <Input
                prepend="TESTE"
            />
        );

        expect(input.find('.cd-input-group__prepend')).toBeTruthy();
    });

    it('append', () => {
        const input = mount(
            <Input
                append="TESTE"
            />
        );

        expect(input.find('.cd-input-group__append')).toBeTruthy();
    });

    it('suffix', () => {
        const input = mount(
            <Input
                suffix="TESTE"
            />
        );

        expect(input.find('.cd-input__suffix-inner__suffix')).toBeTruthy();
    });

    it('multiple', () => {
        const input = mount(
            <Input
                multiple
            />
        );

        input.instance()

        expect(input.find('.is-multiple')).toBeTruthy()
        input.find('.cd-select__input').instance().value = 'Teste'
        expect(input.instance().getInput().value).toBe('Teste')
        input.find('.cd-select__input').simulate('change')
        input.find('.cd-select__input').simulate('keypress')
        input.find('.cd-select__input').simulate('keydown', {keyCode: 13})
        expect(input.state().multipleValue).toStrictEqual(['Teste'])
        input.find('.cd-select__input').simulate('keydown', {keyCode: 8})
        expect(input.state().multipleValue).toStrictEqual([])
        input.find('.cd-select__input').instance().value = 'Teste'
        input.find('.cd-select__input').simulate('keydown', {keyCode: 13})
        expect(input.state().multipleValue).toStrictEqual(['Teste'])
        input.find('.cd-tag__close').simulate('click')
    })
});
