import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Card from './Card';
import Layout from '../layout';

storiesOf('Outros|Card', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .add('default', () => {
        return (
            <Card>
                <h1>Teste</h1>
            </Card>
        )
    })
    .add('shadow', () => {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span={6} offset={0}>
                        <Card title="Shadow always"/>
                    </Layout.Col>
                    <Layout.Col span={6} offset={2}>
                        <Card title="Shadow hover" shadow="hover"/>
                    </Layout.Col>
                    <Layout.Col span={6} offset={2}>
                        <Card title="Shadow never" shadow="never"/>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    })
    .add('header', () => {
        return (
            <div>
                <Card header={
                    <span>Título</span>
                }>
                    <p>Conteudo</p>
                </Card>
            </div>
        )
    })
    .add('title', () => {
        return (
            <div>
                <Card title="Section title">
                    <p>Conteudo</p>
                </Card>
            </div>
        )
    });
