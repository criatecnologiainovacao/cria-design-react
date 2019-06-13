import React from 'react';
import {mount} from 'enzyme';
import sinon from "sinon";
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

const options = [{
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
}];

let value = '';


describe('Select test', () => {

    it('create', () => {
        const select = mount(
          <Select value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(5);
        select.find("Input").simulate("click");
        select.find('ul').childAt(1).find("li").simulate("click");
        expect(select.find("Select").state().selectedLabel).toBe('Option2')
        select.find(".cd-input__inner").simulate('change', {target: {value: 'My new value'}});

    });

    it('prefixIcon', () => {
        const select = mount(
          <Select prefixIcon="cd-icon-time" value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('.cd-icon-time').exists()).toBe(true);

    });

    it('disabled', () => {
        const select = mount(
          <Select disabled value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('Input').childAt(0).hasClass("is-disabled")).toBe(true);
        select.find("Input").simulate("click");
        select.find('ul').childAt(1).find("li").simulate("click");
        expect(select.find("Select").state().selectedLabel).toBe('')

    });

    it('disabled select', () => {
        const select = mount(
          <Select value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} disabled={el.disabled} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        let clickEvent = new MouseEvent('click');

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').childAt(1).find("li").hasClass("is-disabled")).toBe(true);
        select.find('ul').childAt(1).find("li").simulate("click");
        select.find(".cd-scrollbar__bar.is-vertical").simulate("mousedown");
        select.find(".cd-scrollbar__wrap").simulate("scroll");
        select.find("Scrollbar").instance()._update();
        select.find("Bar").first().instance().mouseMoveDocumentHandler(clickEvent)
        select.find("Bar").first().instance().mouseUpDocumentHandler(clickEvent)
        select.find(".cd-scrollbar__bar.is-vertical").find(".cd-scrollbar__thumb").simulate("mousedown");
        expect(select.find("Select").state().selectedLabel).toBe('');
        select.find('ul').childAt(2).find("li").simulate("click");
        expect(select.find("Select").state().selectedLabel).toBe('Option3')

        select.unmount()

    });

    it('clearable single select', () => {
        const fn = sinon.spy();
        const select = mount(
          <Select clearable onClear={fn} value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        select.find("Input").simulate("click");
        select.find('ul').childAt(1).find("li").simulate("click");
        expect(select.find("Select").state().selectedLabel).toBe('Option2');
        select.find("Input").simulate("mouseenter");
        select.find(".cd-icon-circle-close").simulate("click");
        expect(fn.callCount).toBe(1);
        expect(select.find("Select").state().selectedLabel).toBe('')

    });

    it('Basic multiple select', () => {
        const select = mount(
          <Select multiple value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        select.find("Input").simulate("click");
        select.find('ul').childAt(1).find("li").simulate("click");
        select.find('ul').childAt(2).find("li").simulate("click");
        expect(Array.isArray(select.find("Select").state().selectedLabel)).toBe(true);
        expect(select.find("Select").state().selectedLabel[0]).toBe("Option2");
        expect(select.find("Select").state().selectedLabel[1]).toBe("Option3")
        select.find("Select").find('.cd-icon-close').first().simulate('click')

    });

    it('custom template', () => {
        const select = mount(
          <Select value={value}>
            {
                    options.map(el => {
                        return (
                          <Option key={el.value} label={el.label} value={el.value}>
                            <span style={{float: 'left'}}>{el.label}</span>
                            <span style={{float: 'right', color: '#8492a6', fontSize: 13}}>{el.value}</span>
                          </Option>
                        )
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        select.find('Input').simulate('mouseenter')
        select.find('Input').simulate('mouseleave')
        select.find('Input').simulate('mousedown')
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
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        expect(select.find('ul').children().length).toBe(12);

    });

    it('filtiring', () => {
        const select = mount(
          <Select filterable value={value}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        );

        expect(select.find('.cd-select').exists()).toBe(true);
        select.find("Select").simulate("click");

        expect(select.find('ul').children().length).toBe(5);

        jest.useFakeTimers()
        select.find("Input").find("input").simulate('click');
        jest.runAllTimers()
        select.find(".cd-input__inner").simulate('change', {target: {value: 'My new value'}});

        select.find("Select").setState({
            query: 'Option1'
        });

        expect(select.find("Select").state().filteredOptionsCount).toBe(1)

        select.find('.cd-input__inner').simulate('keypress', {keyCode: 27})
        select.find('.cd-input__inner').simulate('keydown', {keyCode: 27})
        select.find('.cd-input__inner').simulate('keypress', {keyCode: 13})
        select.find('.cd-input__inner').simulate('keydown', {keyCode: 13})
        select.find('.cd-input__inner').simulate('keypress', {keyCode: 8})
        select.find('.cd-input__inner').simulate('keydown', {keyCode: 8})
        select.find('.cd-input__inner').simulate('keypress', {keyCode: 38})
        select.find('.cd-input__inner').simulate('keydown', {keyCode: 38})
        select.find('.cd-input__inner').simulate('keypress', {keyCode: 40})
        select.find('.cd-input__inner').simulate('keydown', {keyCode: 40})
        select.find('.cd-input__inner').simulate('keyup')
        select.find('.cd-input__inner').simulate('mousedown')
    });

    it('remote', () => {

        let loading = false;

        const select = mount(
          <Select value={value} multiple filterable remote loading={loading}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        )

        expect(select.find('.cd-select').exists()).toBe(true);

        expect(select.find("Select").state().visible).toBe(false)

        select.find("Input").find("input").simulate('click');

        expect(select.find("Select").state().visible).toBe(true)

        select.find(".cd-input__inner").simulate('change', {target: {value: 'My new value'}});

        select.find('ul').childAt(1).find("li").simulate("mouseenter");

        select.find("Input").find("input").simulate('click');

        select.find('ul').childAt(1).find("li").simulate("mouseleave");

        select.find("Select").setState({
            query: 'Option1'
        });

        select.find('Input').simulate('mousedown')

        expect(select.find("Select").state().filteredOptionsCount).toBe(1)

        select.find("Select").instance().handleClickOutside()

        expect(select.find("Select").state().visible).toBe(false)

        select.find('.cd-select__input').simulate('keypress', {keyCode: 27})
        select.find('.cd-select__input').simulate('keydown', {keyCode: 27})
        select.find('.cd-select__input').simulate('keypress', {keyCode: 13})
        select.find('.cd-select__input').simulate('keydown', {keyCode: 13})
        select.find('.cd-select__input').simulate('keypress', {keyCode: 8})
        select.find('.cd-select__input').simulate('keydown', {keyCode: 8})
        select.find('.cd-select__input').simulate('keypress', {keyCode: 38})
        select.find('.cd-select__input').simulate('keydown', {keyCode: 38})
        select.find('.cd-select__input').simulate('keypress', {keyCode: 40})
        select.find('.cd-select__input').simulate('keydown', {keyCode: 40})
        select.find('.cd-select__input').simulate('keyup')
        jest.useFakeTimers();
        select.find('.cd-select__input').simulate('change', {target: {value: 'My new value'}})
        jest.runAllTimers();

    });


    it('remote with method', () => {

        let loading = false;

        const select = mount(
          <Select value="Option1" remoteMethod={() => {
            }} multiple filterable remote loading={loading}>
            {
                    options.map(el => {
                        return <Option key={el.value} label={el.label} value={el.value} />
                    })
                }
          </Select>
        )
        select.setProps({
            placeholder: 'placeholder',
            value: ["Option1", "Option2"],
            onVisibleChange: () => {
            }
        });

        select.find("Select").setState({
            query: 'Option1',
            visible: true
        });

        select.find("Input").find("input").simulate('click');

        select.find("Select").instance().handleClickOutside()

    });

});
