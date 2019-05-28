import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import StepBar from "./StepBar";

export const steps = ['Test1'];

describe('StepBar test', () => {

    it('create', () => {
        const stepBar = shallow(<StepBar steps={steps}/>);
        expect(stepBar.hasClass('cd-step-bar-content')).toBeTruthy();
        expect(stepBar.childAt(0).hasClass('cd-step-bar')).toBeTruthy();
    });

    it('clickable', () => {
        let activeStep = 0;
        const stepBar = shallow(<StepBar steps={steps} activeStep={activeStep} clickable/>);
        expect(stepBar.hasClass('cd-step-bar-content')).toBeTruthy();
        expect(stepBar.childAt(0).hasClass('cd-step-bar')).toBeTruthy();
        expect(stepBar.childAt(0).childAt(0).hasClass('is-clickable')).toBeTruthy();
    });

    it('onClick', () => {
        const onClick = sinon.spy();
        let activeStep = 1;
        const stepBar = shallow(<StepBar steps={steps} activeStep={activeStep} onClick={onClick} clickable/>);

        stepBar.find('.cd-step-bar').find('.is-clickable').simulate('click');

        expect(onClick.calledOnce).toBe(true);
        expect(stepBar.hasClass('cd-step-bar-content')).toBeTruthy();
        expect(stepBar.childAt(0).hasClass('cd-step-bar')).toBeTruthy();
        expect(stepBar.childAt(0).childAt(0).hasClass('is-clickable')).toBeTruthy();
    });
});
