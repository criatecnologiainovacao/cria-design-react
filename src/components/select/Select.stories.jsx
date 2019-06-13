import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from './Select';
import Option from './Option';
import OptionGroup from './OptionGroup';

const cidades = {
    opcoes: [
        {
            label: 'Cidades populares',
            opcoes: [
                {
                    value: 'Varginha',
                    label: 'Varginha'
                }, {
                    value: 'Lavras',
                    label: 'Lavras'
                }
            ]
        }, {
            label: 'Nome da cidade',
            opcoes: [
                {
                    value: 'Boa esperança',
                    label: 'Boa esperança'
                }, {
                    value: 'Tres coraçoes',
                    label: 'Tres coraçoes'
                }, {
                    value: 'Nepomuceno',
                    label: 'Nepomuceno'
                }, {
                    value: 'Tres pontas',
                    label: 'Tres pontas'
                }
            ]
        }
    ],
    value: ''
};
const state = {
    opcoes: [
        {
            value: 'Opção1',
            label: 'Opção1'
        }, {
            value: 'Opção2',
            label: 'Opção2',
            disabled: true
        }, {
            value: 'Opção3',
            label: 'Opção3'
        }, {
            value: 'Opção4',
            label: 'Opção4'
        }, {
            value: 'Opção5',
            label: 'Opção5'
        }
    ],
    value: '',
    cidades: [
        {
            value: 'Varginha',
            label: 'Varginha'
        }, {
            value: 'Lavras',
            label: 'Lavras'
        }, {
            value: 'Tres coraçoes',
            label: 'Tres coraçoes'
        }, {
            value: 'Boa esperança',
            label: 'Boa esperança'
        }, {
            value: 'Tres pontas',
            label: 'Tres pontas'
        }, {
            value: 'Nepomuceno',
            label: 'Nepomuceno'
        }
    ]
};

let loading = false;

export const actionRemote = {
    remoteMethod: action('remoteMethod')
};

storiesOf('Formulário|Select', module)
    .add('default', () => (
        <Select value={state.value}>
            {
                state.opcoes.map(el => {
                    return <Option key={el.value} label={el.label} value={el.value}/>
                })
            }
        </Select>
    ))
    .add('prefixIcon', () => (
        <Select prefixIcon="cd-icon-time" value={state.value}>
            {
                state.opcoes.map(el => {
                    return <Option key={el.value} label={el.label} value={el.value}/>
                })
            }
        </Select>
    ))
    .add('Disabled option', () => (
             <Select value={state.value}>
                 {
                     state.opcoes.map(el => {
                         return <Option key={el.value} label={el.label} value={el.value}
                                        disabled={el.disabled}/>
                     })
                 }
             </Select>
         )
    )
    .add('Disabled select', () => (
             <Select value={state.value} disabled={true}>
                 {
                     state.opcoes.map(el => {
                         return <Option key={el.value} label={el.label} value={el.value}/>
                     })
                 }
             </Select>
         )
    )
    .add('clearable', () => (
             <Select value={state.value} clearable={true}>
                 {
                     state.opcoes.map(el => {
                         return <Option key={el.value} label={el.label} value={el.value}/>
                     })
                 }
             </Select>
         )
    )
    .add('multiple', () => (
             <Select value={state.value} multiple={true}>
                 {
                     state.opcoes.map(el => {
                         return <Option key={el.value} label={el.label} value={el.value}/>
                     })
                 }
             </Select>
         )
    )
    .add('custom', () => (
             <Select value={state.value}>
                 {
                     state.cidades.map(el => {
                         return (
                             <Option key={el.value} label={el.label} value={el.value}>
                                 <span style={{ float: 'left' }}>{el.label}</span>
                                 <span style={{
                                     float: 'right',
                                     color: '#8492a6',
                                     fontSize: 13
                                 }}>{el.value}</span>
                             </Option>
                         )
                     })
                 }
             </Select>
         )
    )
    .add('grouping', () => (
             <Select value={cidades.value}>
                 {
                     cidades.opcoes.map(group => {
                         return (
                             <OptionGroup key={group.label} label={group.label}>
                                 {
                                     group.opcoes.map(el => {
                                         return (
                                             <Option key={el.value} label={el.label} value={el.value}>
                                                 <span style={{ float: 'left' }}>{el.label}</span>
                                                 <span style={{
                                                     float: 'right',
                                                     color: '#8492a6',
                                                     fontSize: 13
                                                 }}>
                                              {el.value}
                                            </span>
                                             </Option>
                                         )
                                     })
                                 }
                             </OptionGroup>
                         )
                     })
                 }
             </Select>
         )
    )
    .add('filtering', () => (
             <Select value={state.value} filterable={true}>
                 {
                     state.opcoes.map(el => {
                         return <Option key={el.value} label={el.label} value={el.value}/>
                     })
                 }
             </Select>
         )
    )
    .add('remote', () => (
             <Select value={state.value} multiple={true} filterable={true} {...actionRemote}
                     remote={true} loading={loading}>
                 {
                     state.cidades.map(el => {
                         return <Option key={el.value} label={el.label} value={el.value}/>
                     })
                 }
             </Select>
         )
    )

;
