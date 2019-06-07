import React from 'react';
import { storiesOf } from '@storybook/react';

import StepBar from './StepBar';
import { action } from '@storybook/addon-actions';

export const steps = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6'];

export const actionsClick = {
    onClick: action('Clicked')
};

let activeStep = 0;

storiesOf('Navegação|Steps', module)
    .add('default', () =>
        <StepBar steps={steps}/>
    )
    .add('cliclable', () => (
        <StepBar steps={steps} activeStep={activeStep} clickable/>
    ))
    .add('onClick', () => (
        <StepBar steps={steps} activeStep={activeStep} {...actionsClick} clickable/>
    ))
;
