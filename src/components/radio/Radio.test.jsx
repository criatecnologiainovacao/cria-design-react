import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Radio from './index';

describe('Radio button tests', () => {
    it('Deve renderizar um Radio simples', () => {
        const component = mount(<Radio value="1" checked={true}>My label</Radio>);

        expect(component.find('.cd-radio').exists()).toBeTruthy();
        expect(component.find('.cd-radio__label').text()).toEqual('My label');
        expect(component.find('.is-checked').exists()).toBeTruthy();

    });

    it('Deve disparar o evento onChange', () => {
        const onChange = sinon.spy();

        const component = shallow(<Radio
            value="1"
            onChange={onChange}>My label</Radio>);
        
        expect(component.find('.is-checked').exists()).toBeFalsy();

        component.find('input').simulate('change', {target: { checked: true }});

        expect(onChange.calledOnce).toBeTruthy();
        expect(component.find('.is-checked').exists()).toBeTruthy();
        expect(component.state().checked).toBeTruthy();
    });

    it('Deve disparar eventos ao receber ou perder o foco', () => {
        const onFocus = sinon.spy();
        const onBlur = sinon.spy();

        const component = shallow(<Radio
            value="1"
            onFocus={onFocus}
            onBlur={onBlur}/>);
        
        component.find('input').simulate('focus');
        expect(component.state().focus).toBe(true);

        component.find('input').simulate('blur');
        expect(component.state().focus).toBe(false);
    });

    it('Deve renderizar Radio desabilitado', () => {
        const component = shallow(<Radio
            disabled={true}
            value="1">My label</Radio>);

        expect(component.find('.is-disabled').exists()).toBeTruthy();
        expect(component.state().disabled).toBeFalsy();
    });

    it('Deve renderizar todos os Radios de um Radio.Group', () => {
        const component = shallow(
            <Radio.Group value="1">
                <Radio value="1" checked={true}>Option A</Radio>
                <Radio value="2">Option B</Radio>
                <Radio value="3">Option C</Radio>
            </Radio.Group>
        );

        expect(component.find('.el-radio-group').exists()).toBeTruthy();
        expect(component.children()).toHaveLength(3);
    });

    it('Deve renderizar um Radio.Group sem elementos', () => {
        const component = shallow(
            <Radio.Group value="1"/>
        );

        expect(component.find('.el-radio-group').exists()).toBeTruthy();
        expect(component.children()).toHaveLength(0);
    });

    it('Deve renderizar um Radio.Group sem elementos Radio', () => {
        const component = shallow(
            <Radio.Group value="1">
                <div>Teste 123</div>
            </Radio.Group>
        );

        expect(component.find('.el-radio-group').exists()).toBeTruthy();
        expect(component.children()).toHaveLength(0);
    });

    it('Deve disparar o evento onChange do Radio.Group', () => {
        const onChange = sinon.spy();

        const component = shallow(
            <Radio.Group value="1" onChange={onChange}>
                <Radio value="1" checked={true}>Option A</Radio>
                <Radio value="2">Option B</Radio>
                <Radio value="3">Option C</Radio>
            </Radio.Group>
        );
        
        component.childAt(1).simulate('change', {target: { checked: true }});

        expect(onChange.calledOnce).toBeTruthy();
    });

    it('Deve alterar o valor checked quando ele for diferente do atual', () => {
        const component = mount(<Radio value="1" checked={true}>My label</Radio>);
        const setstate = sinon.stub(Radio.prototype, 'setState');

        component.setProps({checked: true});
        expect(setstate.called).toBeFalsy();

        component.setProps({checked: false});
        expect(setstate.called).toBeTruthy();
    });
});