import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from "@sambego/storybook-state";

import Radio from '.';

const store = new Store({
    valueRadio1: "1",
    valueRadio3: "1",
});

function onChangeRadio1(val) {
    store.set({...store, valueRadio1: val});
}

function onChangeRadio3(val) {
    store.set({...store, valueRadio3: val});
}

storiesOf('Formulário|Radio', module)
    .add('default', () => {
        return (
            <State store={store}>
                <Radio value="1" checked={store.valueRadio1 === "1"} onChange={onChangeRadio1}>Option A</Radio>
                <Radio value="2" checked={store.valueRadio1 === "2"} onChange={onChangeRadio1}>Option B</Radio>
            </State>
        )
    })
    .add('disabled', () => {
        return (
            <div>
                <Radio value="1" disabled={false} checked={true}>I'm enabled</Radio>
                <Radio value="2" disabled={true}>I'm disabled</Radio>
            </div>
        )
    })
    .add('grouped', () => {
        return (
            <State store={store}>
                <Radio.Group value={store.valueRadio3} onChange={onChangeRadio3}>
                    <Radio value="1">Option A</Radio>
                    <Radio value="2">Option B</Radio>
                    <Radio value="3">Option C</Radio>
                </Radio.Group>
            </State>
        )
    });
