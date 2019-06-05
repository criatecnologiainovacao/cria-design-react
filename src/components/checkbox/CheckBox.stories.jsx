import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './CheckBox';

const groupState = {
    checkList: ['Option A', 'Selected and disabled']
};

const buttonState = {
    cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
    checkboxGroup1: ['Shanghai'],
    checkboxGroup2: ['Beijing'],
    checkboxGroup3: ['Guangzhou']
};

storiesOf('CheckBox', module)
    .add('default', () => {
        return (
            <div>
                <Checkbox checked>Option</Checkbox>
            </div>
        )
    })
    .add('disabled state', () => {
        return (
            <div>
                <Checkbox disabled>Option 1</Checkbox>
                <Checkbox checked disabled>Option 2</Checkbox>
            </div>
        )
    })
    .add('boolean labels', () => {
        return (
            <div>
                <Checkbox
                    trueLabel="Checked"
                    falseLabel="Unchecked"
                />
            </div>
        )
    })
    .add('group', () => {
        return (
            <Checkbox.Group value={groupState.checkList}>
                <Checkbox label="Option A"/>
                <Checkbox label="Option B"/>
                <Checkbox label="Option C"/>
                <Checkbox label="Disabled" disabled/>
                <Checkbox label="Selected and disabled" disabled/>
            </Checkbox.Group>
        )
    })
    .add('max', () => {
        return (
            <Checkbox.Group max={2}>
                <Checkbox label="Option A"/>
                <Checkbox label="Option B"/>
                <Checkbox label="Option C"/>
                <Checkbox label="Disabled" disabled/>
                <Checkbox label="Selected and disabled" disabled/>
            </Checkbox.Group>
        )
    })
    .add('min', () => {
        return (
            <Checkbox.Group max={2}>
                <Checkbox label="Option A" checked/>
                <Checkbox label="Option B" checked/>
                <Checkbox label="Option C"/>
                <Checkbox label="Disabled" disabled/>
                <Checkbox label="Selected and disabled" disabled/>
            </Checkbox.Group>
        )
    })
    .add('button style', () => {
        return (
            <div>
                <div style={{ margin: '15px 0' }}/>
                <Checkbox.Group value={buttonState.checkboxGroup1}>
                    {
                        buttonState.cities.map((city, index) => {
                            return (
                                <Checkbox.Button
                                    key={index}
                                    label={city}
                                >
                                    {city}
                                </Checkbox.Button>
                            )
                        })
                    }
                </Checkbox.Group>
                <div style={{ margin: '15px 0' }}/>
                <Checkbox.Group
                    value={buttonState.checkboxGroup2}
                    size="small"
                >
                    {
                        buttonState.cities.map((city, index) => {
                            return (
                                <Checkbox.Button
                                    key={index}
                                    label={city}
                                    disabled={city === 'Shenzhen'}
                                >
                                    {city}
                                </Checkbox.Button>
                            )
                        })
                    }
                </Checkbox.Group>
                <div style={{ margin: '15px 0' }}/>
                <Checkbox.Group
                    value={buttonState.checkboxGroup3}
                    size="large"
                    fill="#324057"
                    textColor="#a4aebd"
                    min="1"
                    max="3"
                >
                    {
                        buttonState.cities.map((city, index) => {
                            return (
                                <Checkbox.Button
                                    key={index}
                                    label={city}
                                >
                                    {city}
                                </Checkbox.Button>
                            )
                        })
                    }
                </Checkbox.Group>
            </div>
        )
    });

