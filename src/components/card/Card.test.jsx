import React from 'react';
import { shallow } from 'enzyme';

import Card from '../card';

describe('Card test', () => {
    it('render header', () => {
        const w = shallow(
            <Card header="HEADER"/>
        );
        expect(w.find('.cd-card__header').at(0).text()).toBe('HEADER');
    });

    it('render title', () => {
        const w = shallow(
            <Card title="TITLE"/>
        );
        expect(w.find('.cd-card__title').at(0).text()).toBe('TITLE');
    });

    it('render body', () => {
        const w = shallow(
            <Card>BODY</Card>
        );
        expect(w.find('.cd-card__body').at(0).text()).toBe('BODY');
    });

    it('use bodyStyle', () => {
        const bodyStyle = {
            padding: '5px',
            border: '1px solid blue'
        };
        const w = shallow(
            <Card bodyStyle={bodyStyle}/>
        );
        expect(w.find('.cd-card__body').at(0).prop('style')).toEqual(bodyStyle);
    });

    it('shadow', () => {
        const always = shallow(<Card shadow="always"/>);
        const hover = shallow(<Card shadow="hover"/>);
        const never = shallow(<Card shadow="never"/>);

        expect(always.find('.cd-card')).toHaveClassName('is-always-shadow');
        expect(hover.find('.cd-card')).toHaveClassName('is-hover-shadow');
        expect(never.find('.cd-card')).toHaveClassName('is-never-shadow');
    });
});