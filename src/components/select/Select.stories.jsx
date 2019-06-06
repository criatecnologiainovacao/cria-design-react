import React from 'react';
import {storiesOf} from '@storybook/react';
/* eslint-disable no-unused-expressions */
import Select from "./Select";
import Option from "./Option";
import OptionGroup from "./OptionGroup";

const group = {
    options: [{
        label: 'Popular cities',
        options: [{
            value: 'Shanghai',
            label: 'Shanghai'
        }, {
            value: 'Beijing',
            label: 'Beijing'
        }]
    }, {
        label: 'City name',
        options: [{
            value: 'Chengdu',
            label: 'Chengdu'
        }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
        }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
        }, {
            value: 'Dalian',
            label: 'Dalian'
        }]
    }],
    value: ''
};
const state = {
    options: [{
        value: 'Option1',
        label: 'Option1'
    }, {
        value: 'Option2',
        label: 'Option2',
        disabled: true
    }, {
        value: 'Option3',
        label: 'Option3'
    }, {
        value: 'Option4',
        label: 'Option4'
    }, {
        value: 'Option5',
        label: 'Option5'
    }],
    value: '',
    cities: [{
        value: 'Beijing',
        label: 'Beijing'
    }, {
        value: 'Shanghai',
        label: 'Shanghai'
    }, {
        value: 'Nanjing',
        label: 'Nanjing'
    }, {
        value: 'Chengdu',
        label: 'Chengdu'
    }, {
        value: 'Shenzhen',
        label: 'Shenzhen'
    }, {
        value: 'Guangzhou',
        label: 'Guangzhou'
    }]
};

let loading = false;

const onSearch = (query) => {
    if (query !== '') {
        loading = true

        setTimeout(() => {
                loading = false
                state.options = state.states.map(item => {
                    return { value: item, label: item };
                }).filter(item => {
                    return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
        }, 200);
    } else {
            state.options = []
    }
}

storiesOf('Select', module)
    .add('default', () => (
      <Select value={state.value}>
        {
                state.options.map(el => {
                    return <Option key={el.value} label={el.label} value={el.value} />
                })
            }
      </Select>
    ))
    .add('Disabled option', () => (
      <Select value={state.value}>
        {
                    state.options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} disabled={el.disabled} />
                    })
                }
      </Select>
        )
    )
    .add('Disabled select', () => (
      <Select value={state.value} disabled={true}>
        {
                    state.options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
      </Select>
        )
    )
    .add('clearable', () => (
      <Select value={state.value} clearable={true}>
        {
                    state.options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
      </Select>
        )
    )
    .add('multiple', () => (
      <Select value={state.value} multiple={true}>
        {
                    state.options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
      </Select>
        )
    )
    .add('custom', () => (
      <Select value={state.value}>
        {
                    state.cities.map(el => {
                        return (
                          <Option key={el.value} label={el.label} value={el.value}>
                            <span style={{float: 'left'}}>{el.label}</span>
                            <span style={{float: 'right', color: '#8492a6', fontSize: 13}}>{el.value}</span>
                          </Option>
                        )
                    })
                }
      </Select>
        )
    )
    .add('grouping', () => (
      <Select value={group.value}>
        {
                    group.options.map(group => {
                        return (
                          <OptionGroup key={group.label} label={group.label}>
                            {
                                    group.options.map(el => {
                                        return (
                                          <Option key={el.value} label={el.label} value={el.value}>
                                            <span style={{float: 'left'}}>{el.label}</span>
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
                state.options.map(el => {
                    return <Option key={el.value} label={el.label} value={el.value} />
                })
            }
      </Select>
        )
    )
    .add('remote', () => (
      <Select value={state.value} multiple={true} filterable={true} remote={true} remoteMethod={onSearch.bind(this)} loading={loading}>
        {
                state.options.map(el => {
                    return <Option key={el.value} label={el.label} value={el.value} />
                })
            }
      </Select>
        )
    )

;
