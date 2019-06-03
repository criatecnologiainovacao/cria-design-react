import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Input from './Input';
import Button from '../button'

const base = {
    width: '300px'
};

storiesOf('Formulário|Input', module)
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .add('default', () => <Input placeholder="Digite aqui" style={base}/>)
    .add('types', () => {
        return (
            <div>
                <Input style={base} placeholder="Type text" type="text"/>
                <br/>
                <br/>
                <Input style={base} placeholder="Type textarea" type="textarea"/>
            </div>
        )
    })
    .add('prefix icon', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Edite aqui"
                    prefixIcon="cd-icon-edit"
                />
            </div>
        )
    })
    .add('suffix icon', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Edite aqui"
                    suffixIcon="cd-icon-edit"
                />
            </div>
        )
    })
    .add('size', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="size default | medium"
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="size small"
                    size="small"
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="size mini"
                    size="mini"
                />
            </div>
        )
    })
    .add('autoFocus', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Edite aqui"
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Edite aqui"
                    autoFocus
                />
            </div>
        )
    })
    .add('disabled', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Disabled"
                    disabled
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Disabled"
                    value="Conteúdo disabled"
                    disabled
                />
                <br/>
                <br/>
                <Input
                    type="textarea"
                    style={base}
                    placeholder="Disabled"
                    disabled
                />
            </div>
        )
    })
    .add('autoSize', () => {
        return (
            <div>
                <Input
                    type="textarea"
                    style={base}
                    placeholder="Com tamanho máximo de linhas"
                    autoSize={{ minRows: 2, maxRows: 4 }}
                />
                <br/>
                <br/>
                <Input
                    type="textarea"
                    style={base}
                    placeholder="Com tamanho extensível"
                    autoSize
                />
                <br/>
                <br/>
                <Input
                    type="textarea"
                    style={base}
                    placeholder="Com tamanho fixo"
                />
            </div>
        )
    })
    .add('clearable', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Clearable"
                    clearable
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Clearable focus"
                    clearable
                    autoFocus
                />
            </div>
        )
    })
    .add('mixed', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Mixed input prepend"
                    prepend="Http://"
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Mixed input append"
                    append=".com"
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Mixed input append"
                    append={
                        <Button
                            icon="cd-icon-search">
                            Buscar
                        </Button>
                    }
                />
            </div>
        )
    })
    .add('password', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Coloque a senha aqui"
                    showPassword
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Coloque a senha aqui"
                    showPassword
                    value="123123"
                />
            </div>
        )
    })
    .add('word limit', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Limite"
                    showWordLimit
                    maxLength={5}
                    value={1222222}
                />
                <br/>
                <br/>
                <Input
                    type="textarea"
                    style={base}
                    placeholder="Limite"
                    showWordLimit
                    maxLength={30}
                    value="Teste"
                />
                <br/>
                <br/>
                <Input
                    style={base}
                    placeholder="Limite"
                    showWordLimit
                    maxLength={5}
                />
            </div>
        )
    })
    .add('readOnly', () => {
        return (
            <div>
                <Input
                    style={base}
                    placeholder="Read only"
                    value="Teste"
                    readOnly
                />
            </div>
        )
    });