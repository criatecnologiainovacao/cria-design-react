import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Form from '../form';
import Input from '../input';
import Button from '../button';

const data = {
    name: '',
    desc: undefined
};
const data2 = {
    name: ['', ''],
    desc: []
};

const rules = {
    name: [
        { required: true, message: 'Please input Activity name', trigger: ['blur'] },
        { max: 20, message: 'Please input Activity name', trigger: 'blur' }
    ],
    desc: [
        { max: 30, message: 'Please input activity form', trigger: 'blur' }
    ]
};

const handleChange = (key, value) => {
    data[key] = value;
};

const fixture = props => mount(
    <Form model={data} {...props}>
        <Form.Item label="Activity name" prop="name">
            <Input value={data.name} onChange={handleChange.bind(this, 'name')}/>
        </Form.Item>
        <Form.Item required label="Activity form" prop="desc">
            <Input
                type="textarea"
                value={data.desc}
                onChange={handleChange.bind(this, 'desc')}
            />
        </Form.Item>
        <Form.Item>
            <Button type="primary" nativeType="submit">Create</Button>
            <Button>Cancel</Button>
        </Form.Item>
    </Form>
);

describe('Form tests', () => {
    it('label width', () => {
        const prop = { labelWidth: '200' };

        const form = fixture(prop);

        expect(form.find('.cd-form-item__label').first())
            .toHaveStyle({ width: 200 });
    });

    it('label position', () => {
        const top = { labelPosition: 'top' };
        const left = { labelPosition: 'left' };
        const right = { labelPosition: 'right' };

        const formTop = fixture(top);
        const formLeft = fixture(left);
        const formRight = fixture(right);

        expect(formTop.find('.cd-form')).toHaveClassName('cd-form--label-top');
        expect(formLeft.find('.cd-form')).toHaveClassName('cd-form--label-left');
        expect(formRight.find('.cd-form')).toHaveClassName('cd-form--label-right');
    });

    it('label suffix', () => {
        const suffix = { labelSuffix: ':' };

        const form = fixture(suffix);

        expect(form.find('.cd-form-item__label').first().text()).toBe('Activity name:')
    });

    it('inline', () => {
        const prop = { inline: true };

        const form = fixture(prop);

        expect(form.find('.cd-form')).toHaveClassName('cd-form--inline');
    });

    it('blur validate', () => {
        const cb = sinon.spy();
        const prop = { rules: rules, onSubmit: cb, model: data };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();
        const input = form.find('.cd-input__inner');

        input.simulate('focus');
        input.simulate('blur');

        expect(field)
            .toHaveState(
                { error: rules.name[0].message, valid: false, validating: false }
            );
    });

    it('method validate', () => {
        const cb = sinon.spy();
        const prop = { rules: rules, onSubmit: cb, model: data };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();

        form.instance().validate(cb);

        expect(field)
            .toHaveState(
                { error: rules.name[0].message, valid: false, validating: false }
            );
        expect(cb.calledOnce).toBe(true);
    });

    it('method validate - pass', () => {
        const cb = sinon.spy();
        const prop = { model: data };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();

        form.instance().validate(cb);

        expect(field)
            .toHaveState(
                { error: '', valid: false, validating: false }
            );
        expect(cb.calledOnce).toBe(true);
    });

    it('method validate - no fields', () => {
        const cb = sinon.spy();

        const form = mount(
            <Form>
                <Form.Item>
                    <Button type="primary" nativeType="submit">Create</Button>
                    <Button>Cancel</Button>
                </Form.Item>
            </Form>
        );

        form.instance().validate(cb);

        expect(cb.calledOnce).toBe(true);
    });

    it('blur validate - pass', () => {
        const cb = sinon.spy();
        const prop = { onSubmit: cb, model: data };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();
        const input = form.find('.cd-input__inner');

        input.simulate('focus');
        input.simulate('blur');

        expect(field)
            .toHaveState(
                { error: '', valid: false, validating: false }
            );
    });

    it('method validate field', () => {
        const cb = sinon.spy();
        const cb2 = sinon.spy();
        const prop = { rules: rules, onSubmit: cb, model: data };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();

        form.instance().validateField('name', cb);
        form.instance().validateField('desc', cb2);

        expect(field)
            .toHaveState(
                { error: rules.name[0].message, valid: false, validating: false }
            );
        expect(cb.calledOnce).toBe(true);
    });

    it('method validate field - no field', () => {
        const cb = sinon.spy();
        const prop = { rules: rules, onSubmit: cb, model: data };

        const form = fixture(prop);

        try {
            form.instance().validateField('nofield', cb);
        } catch (e) {
            expect(e.toString()).toBe('Error: must call validateField with valid prop string!');
        }
    });

    it('remove field', () => {
        const prop = { model: data };

        const form = fixture(prop);

        form.unmount();

        expect(form).not.toExist();
    });

    it('reset fields', () => {
        const prop = { model: data };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();

        form.instance().resetFields();

        expect(field)
            .toHaveState(
                { error: '', valid: true, validating: false }
            );
    });

    it('reset fields - data2', () => {
        const prop = { model: data2 };

        const form = fixture(prop);
        const field = form.find('.cd-form').children().first();

        form.instance().resetFields();

        expect(field)
            .toHaveState(
                { error: '', valid: true, validating: false }
            );
    });

    it('on field change', () => {
        const cb = sinon.spy();

        const form = mount(
            <Form model={data}>
                <Form.Item label="Activity name" prop="name">
                    <Input value={data.name} onChange={cb}/>
                </Form.Item>
            </Form>
        );
        const input = form.find('.cd-input__inner');

        input.simulate('change', { target: { value: 'teste' } });

        expect(cb.calledOnce).toBe(true);
    });

    it('on field change - reset fields', () => {
        const cb = sinon.spy();

        const form = mount(
            <Form model={data2}>
                <Form.Item label="Activity name" prop="name">
                    <Input value={data.name} onChange={cb}/>
                </Form.Item>
            </Form>
        );
        const input = form.find('.cd-input__inner');

        form.instance().resetFields();

        input.simulate('change', { target: { value: 'teste' } });

        expect(cb.calledOnce).toBe(true);

    });
});