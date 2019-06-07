import React from 'react';
import { storiesOf } from '@storybook/react';
import {number, withKnobs} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {withA11y} from "@storybook/addon-a11y";
import StepBar from './StepBar';

export const steps = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6'];

export const actionsClick = {
    onClick: action('Clicked')
};

storiesOf('Navegação|Steps', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .add('default', () =>
      <StepBar steps={steps} />
    )
    .add('cliclable', () => (
      <StepBar steps={steps} activeStep={number("activeStep", 0)} clickable />
    ))
    .add('onClick', () => (
      <StepBar steps={steps} activeStep={number("activeStep", 0)} {...actionsClick} clickable />
    ))
;
