import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

import Tag from './Tag';

describe('Tag tests', () => {

    it('should create default tag', () => {

        const tag = shallow(<Tag>TEST</Tag>);

        expect(tag.find('.cd-tag').text()).toEqual('TEST');
    });

    it('should default tag render correctly', () => {

        const tag = renderer
            .create(<Tag>TEST</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should typed tags have correctly classes', () => {

        const successTag = shallow(<Tag type="success">TEST</Tag>);
        const infoTag = shallow(<Tag type="info">TEST</Tag>);
        const warningTag = shallow(<Tag type="warning">TEST</Tag>);
        const dangerTag = shallow(<Tag type="danger">TEST</Tag>);

        expect(successTag.find('.cd-tag')).toHaveClassName('cd-tag--success');
        expect(infoTag.find('.cd-tag')).toHaveClassName('cd-tag--info');
        expect(warningTag.find('.cd-tag')).toHaveClassName('cd-tag--warning');
        expect(dangerTag.find('.cd-tag')).toHaveClassName('cd-tag--danger');
    });

    it('should typed tags render correctly', () => {

        const successTag = renderer.create(<Tag type="success">TEST</Tag>).toJSON();
        const infoTag = renderer.create(<Tag type="info">TEST</Tag>).toJSON();
        const warningTag = renderer.create(<Tag type="warning">TEST</Tag>).toJSON();
        const dangerTag = renderer.create(<Tag type="danger">TEST</Tag>).toJSON();

        expect(successTag).toMatchSnapshot();
        expect(infoTag).toMatchSnapshot();
        expect(warningTag).toMatchSnapshot();
        expect(dangerTag).toMatchSnapshot();
    });

    it('should tag with icon be properly created', () => {

        const tag = shallow(<Tag icon="cd-icon-search">TESTE</Tag>);

        expect(tag.find('i.cd-icon').exists()).toBe(true);
        expect(tag.find('i.cd-icon-search').exists()).toBe(true);
    });

    it('should tag with icon render correctly', () => {

        const tag = renderer
            .create(<Tag icon="cd-icon-search">TESTE</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should tag with appendIcon be properly created', () => {

        const tag = shallow(<Tag appendIcon="cd-icon-search">TESTE</Tag>);

        expect(tag.find('i.cd-append-icon').exists()).toBe(true);
        expect(tag.find('i.cd-icon-search').exists()).toBe(true);
    });

    it('should tag with appendIcon render correctly', () => {

        const tag = renderer
            .create(<Tag appendIcon="cd-icon-search">TESTE</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should tag with appendIcon render correctly (without label)', () => {

        const tag = renderer
            .create(<Tag appendIcon="cd-icon-search"/>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should closable tag have close icon', () => {
        const tag = shallow(<Tag closable>TEST</Tag>);

        expect(tag.find('i.cd-tag__close').exists()).toBe(true);
    });

    it('should closable tag render correctly', () => {
        const tag = renderer
            .create(<Tag closable>TEST</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should have hit class', () => {
        const tag = shallow(<Tag hit>TEST</Tag>);

        expect(tag.find('.cd-tag').first().hasClass('is-hit')).toBeTruthy();
    });

    it('should hit tag render correctly', () => {
        const tag = renderer
            .create(<Tag hit>TEST</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should heve solid class', () => {
        const tag = shallow(<Tag solid>TEST</Tag>);

        expect(tag.find('.cd-tag').first().hasClass('is-solid')).toBeTruthy();
    });

    it('should solid tag render correctly', () => {
        const tag = renderer
            .create(<Tag solid>TEST</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should round tag have properly class', () => {
        const tag = shallow(<Tag round>TEST</Tag>);

        expect(tag.find('.cd-tag').first().hasClass('is-round')).toBeTruthy();
    });

    it('should round tag render correctly', () => {
        const tag = renderer
            .create(<Tag round>TEST</Tag>)
            .toJSON();

        expect(tag).toMatchSnapshot();
    });

    it('should simulate click when onClose is present', () => {
        const onClose = sinon.spy();
        const tag = shallow(React.createElement(
            Tag,
            { type: 'primary', closable: true, onClose: onClose },
            'TEST'
        ));

        tag.find('i.cd-tag__close').simulate('click');

        expect(onClose.calledOnce).toBe(true);
    });
});