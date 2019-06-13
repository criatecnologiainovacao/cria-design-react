import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Select from './Select';
import Option from './Option';
import OptionGroup from './OptionGroup';

const group = {
    options: [
        {
            label: 'Popular cities',
            options: [
                {
                    value: 'Shanghai',
                    label: 'Shanghai'
                }, {
                    value: 'Beijing',
                    label: 'Beijing'
                }
            ]
        }, {
            label: 'City name',
            options: [
                {
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
                }
            ]
        }
    ],
    value: ''
};

const options = [
    {
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
    }
];

let value = ''


describe('Select test', () => {

    it('create', () => {
        const select = mount(
            <Select value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(5);
        select.find('Input').simulate('click');
        select.find('ul').childAt(1).find('li').simulate('click');
        expect(select.find('Select').state().selectedLabel).toBe('Option2')

    });

    it('prefixIcon', () => {
        const select = mount(
            <Select prefixIcon="cd-icon-time" value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('.cd-icon-time').exists()).toBe(true);

    });

    it('disabled', () => {
        const select = mount(
            <Select disabled value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('Input').childAt(0).hasClass('is-disabled')).toBe(true);
        select.find('Input').simulate('click');
        select.find('ul').childAt(1).find('li').simulate('click');
        expect(select.find('Select').state().selectedLabel).toBe('')

    });

    it('disabled select', () => {
        const select = mount(
            <Select value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} disabled={el.disabled} label={el.label}
                                       value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').childAt(1).find('li').hasClass('is-disabled')).toBe(true);
        select.find('ul').childAt(1).find('li').simulate('click');
        expect(select.find('Select').state().selectedLabel).toBe('')
        select.find('ul').childAt(2).find('li').simulate('click');
        expect(select.find('Select').state().selectedLabel).toBe('Option3')

    });

    it('clearable single select', () => {
        const fn = sinon.spy();
        const select = mount(
            <Select clearable onClear={fn} value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        select.find('Input').simulate('click');
        select.find('ul').childAt(1).find('li').simulate('click');
        expect(select.find('Select').state().selectedLabel).toBe('Option2')
        select.find('Input').simulate('mouseenter');
        select.find('.cd-icon-circle-close').simulate('click');
        expect(fn.callCount).toBe(1);
        expect(select.find('Select').state().selectedLabel).toBe('')

    });

    it('Basic multiple select', () => {
        const select = mount(
            <Select multiple value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        select.find('Input').simulate('click');
        select.find('ul').childAt(1).find('li').simulate('click');
        select.find('ul').childAt(2).find('li').simulate('click');
        expect(Array.isArray(select.find('Select').state().selectedLabel)).toBe(true)
        expect(select.find('Select').state().selectedLabel[0]).toBe('Option2')
        expect(select.find('Select').state().selectedLabel[1]).toBe('Option3')

    });

    it('custom template', () => {
        const select = mount(
            <Select value={value}>
                {
                    options.map(el => {
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

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(5);

    });

    it('grouping', () => {
        const select = mount(
            <Select value={group.value}>
                {
                    group.options.map(group => {
                        return (
                            <OptionGroup key={group.label} label={group.label}>
                                {
                                    group.options.map(el => {
                                        return (
                                            <Option key={el.value} label={el.label}
                                                    value={el.value}>
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

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(12);

    });

    it('filtiring', () => {
        const select = mount(
            <Select filterable value={value}>
                {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value}/>
                    })
                }
            </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(5);

    });

    /*it('remote', () => {

        let loading = false;

        const select = mount(
          <Select multiple filterable remote loading={loading}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(5);

    });*/
});
