import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Checkbox from '../checkbox';

const checkbox = (props, name) => mount(
    <Checkbox {...props}>{name}</Checkbox>
);

const groupCheckbox = (props) => mount(
    <Checkbox.Group {...props}>
        <Checkbox label="Option A"/>
        <Checkbox label="Option B"/>
        <Checkbox label="Option C"/>
    </Checkbox.Group>
);

const defaultValue = ['Option A', 'Option B'];

const buttonCheckbox = (props, value = defaultValue) => mount(
    <Checkbox.Group
        value={value}
        {...props}
    >
        {
            value.map((name, index) => {
                return (
                    <Checkbox.Button
                        key={index}
                        label={name}
                    />
                )
            })
        }
    </Checkbox.Group>
);


describe('Checkbox tests', () => {
    it('create', () => {
        const prop = {};
        const name = 'Option1';

        const c = checkbox(prop, name);

        expect(c).toHaveText(name);
    });

    it('create w/ label', () => {

        const c = mount(
            <Checkbox label="Option 1"/>
        );

        expect(c).toHaveText('Option 1');
    });

    it('disabled', () => {

        const c = checkbox({ disabled: true }, 'Disabled');

        expect(c.find('.cd-checkbox__input'))
            .toHaveClassName('is-disabled');
    });

    it('check', () => {

        const c = checkbox({}, 'Check');

        const checkInput = c.find('.cd-checkbox__original');
        checkInput
            .simulate('change', { target: { checked: true } });

        expect(c.find('.cd-checkbox__input'))
            .toHaveClassName('is-checked');
    });

    it('indeterminate', () => {

        const c = checkbox({ indeterminate: true }, 'Check');

        expect(c.find('.cd-checkbox__input'))
            .toHaveClassName('is-indeterminate');
    });

    it('focus', () => {

        const c = checkbox({ focus: true }, 'Check');

        expect(c.find('.cd-checkbox__input'))
            .toHaveClassName('is-focus');
    });

    it('pre checked', () => {

        const c = checkbox({ checked: true }, 'Check');

        expect(c.find('.cd-checkbox__input'))
            .toHaveClassName('is-checked');
    });

    it('on event', () => {

        const c = checkbox({}, 'Check');

        const checkInput = c.find('.cd-checkbox__original');
        checkInput.simulate('focus');

        expect(c).toHaveState({ focus: true });

        checkInput.simulate('blur');

        expect(c).toHaveState({ focus: false });
    });

    it('trueLabel', () => {

        const c = mount(
            <Checkbox
                trueLabel="Checked"
                falseLabel="Unchecked"
            />
        );

        const checkInput = c.find('.cd-checkbox__original');
        checkInput.simulate('change', { target: { checked: true } });

        expect(c).toHaveState({ label: 'Checked' });

        checkInput.simulate('change', { target: { checked: false } });

        expect(c).toHaveState({ label: 'Unchecked' });
    });

    it('group', () => {

        const gc = groupCheckbox({});

        expect(gc.find('.cd-checkbox-group')).toBeTruthy();
    });

    it('group check', () => {
        const cb = sinon.spy();
        const gc = groupCheckbox({ onChange: cb });

        const check = gc.children().children().first();

        const checkInput = check.find('.cd-checkbox__original');
        checkInput
            .simulate('change', { target: { checked: true } });

        expect(check)
            .toHaveState({ checked: true });

        checkInput
            .simulate('change', { target: { checked: false } });

        expect(check)
            .toHaveState({ checked: false });

        expect(cb.callCount).toBe(2);
    });

    it('group check max', () => {
        const cb = sinon.spy();
        const gc = groupCheckbox({ onChange: cb, max: 1 });

        const check = gc.children().children().first();
        const check2 = gc.children().children().last();

        const checkInput = check.find('.cd-checkbox__original');
        const checkInput2 = check2.find('.cd-checkbox__original');

        checkInput
            .simulate('change', { target: { checked: true } });

        checkInput2
            .simulate('change', { target: { checked: true } });

        expect(check)
            .toHaveState({ checked: true });
        expect(check2)
            .toHaveState({ checked: false });

        expect(cb.callCount).toBe(1);
    });

    it('group check min', () => {
        const cb = sinon.spy();
        const gc = groupCheckbox(
            {
                onChange: cb,
                min: 1,
                value: ['Option A']
            }
        );

        const check = gc.children().children().first();

        const checkInput = check.find('.cd-checkbox__original');

        checkInput
            .simulate('change', { target: { checked: false } });

        expect(check)
            .toHaveState({ checked: true });

        expect(cb.callCount).toBe(0);
    });

    it('group uncheck', () => {
        const cb = sinon.spy();
        const gc = groupCheckbox(
            {
                onChange: cb,
                value: ['Option A']
            }
        );

        const check = gc.children().children().first();

        const checkInput = check.find('.cd-checkbox__original');

        checkInput
            .simulate('change', { target: { checked: false } });

        expect(check)
            .toHaveState({ checked: false });

        expect(cb.callCount).toBe(1);
    });

    it('empty group child', () => {
        const gc = mount(
            <Checkbox.Group children={[null]}/>
        );

        expect(gc.find('.cd-checkbox-group').children()).not.toExist();
    });

    it('invalid group child', () => {
        const gc = mount(
            <Checkbox.Group>
                <div/>
            </Checkbox.Group>
        );

        expect(gc.find('.cd-checkbox-group').children()).not.toExist();
    });

    it('button checkbox', () => {
        const bc = buttonCheckbox({});

        expect(bc.find('.cd-checkbox-button')).toBeTruthy();
    });
});
