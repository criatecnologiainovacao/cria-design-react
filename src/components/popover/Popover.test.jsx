import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Popover from '.';
import Button from '../button';
import Input from '../input';

// const map = {};
// document.addEventListener = jest.fn((event, cb) => {
//   map[event] = cb;
// });

describe('Popover test', () => {
    it('Deve renderizar um popover simples', () => {

        const component = mount(
            <div>
                <Popover placement="top-start" title="My title"
                        width="200" visible={true}
                        content="Conteúdo do popover">
                    <Button>Hover to activate</Button>
                </Popover>
            </div>
        );

        expect(component.find('.cd-popover').exists()).toBeTruthy();
        expect(component.find('.cd-popover__title').text()).toEqual('My title');

    });

    it('Trigger com click', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    width="200" trigger="click"
                    content="Conteúdo do popover">
                <Button id="popover-trigger">Hover to activate</Button>
            </Popover>
        );

        expect(component.state().showPopper).toBeFalsy();
        expect(component.find('.cd-popover').get(0).props.style).toHaveProperty('display', 'none');

        // component.find('#popover-trigger').first().simulate('click');
        component.find('button').first().instance().dispatchEvent(new Event('click'));
        setTimeout(() => {
            expect(component.state().showPopper).toBeTruthy();
            expect(component.find('.cd-popover').get(0).props.style).not.toHaveProperty('display', 'none');
        }, 1000);

    });

    it('Trigger com hover', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    width="200" trigger="hover"
                    content="Conteúdo do popover">
                <Button>Hover to activate</Button>
            </Popover>
        );

        expect(component.state().showPopper).toBeFalsy();
        expect(component.find('.cd-popover').get(0).props.style).toHaveProperty('display', 'none');

        component.find('button').first().instance().dispatchEvent(new Event('mouseenter'));
        setTimeout(() => {
            expect(component.state().showPopper).toBeTruthy();
            expect(component.find('.cd-popover').get(0).props.style).not.toHaveProperty('display', 'none');
        }, 1000);

    });

    it('Trigger com hover (esconder popover)', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    width="200" trigger="hover"
                    content="Conteúdo do popover">
                <Button>Hover to activate</Button>
            </Popover>
        );

        component.find('button').first().instance().dispatchEvent(new Event('mouseleave'));

        setTimeout(() => {
            expect(component.state().showPopper).toBeFalsy();
            expect(component.find('.cd-popover').get(0).props.style).toHaveProperty('display', 'none');

        }, 1000);

    });

    it('Trigger manual', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    width="200" trigger="manual"
                    content="Conteúdo do popover">
                <Button>Hover to activate</Button>
            </Popover>
        );

        component.setState({showPopper: true});

        expect(component.find('.cd-popover').get(0).props.style).not.toHaveProperty('display', 'none');

    });

    it('Trigger no focus', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    width="200" trigger="focus"
                    content="Conteúdo do popover">
                <Button>Focus to activate</Button>
            </Popover>
        );

        expect(component.state().showPopper).toBeFalsy();
        expect(component.find('.cd-popover').get(0).props.style).toHaveProperty('display', 'none');

        component.find('button').first().instance().dispatchEvent(new Event('mousedown'));
        setTimeout(() => {
            expect(component.state().showPopper).toBeTruthy();
            expect(component.find('.cd-popover').get(0).props.style).not.toHaveProperty('display', 'none');
            component.find('button').first().instance().dispatchEvent(new Event('mouseup'));
        }, 1000);

    });

    it('Trigger no focus com input', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    width="200" trigger="focus"
                    content="Conteúdo do popover">
                <input type="text" value="Focus to activate" onChange={() => {}}></input>
            </Popover>
        );

        expect(component.state().showPopper).toBeFalsy();
        expect(component.find('.cd-popover').get(0).props.style).toHaveProperty('display', 'none');

        const cbFocus = sinon.spy();
        const cbBlur = sinon.spy();
        component.find('input').first().instance().onfocus = cbFocus;
        component.find('input').first().instance().onblur = cbBlur;
        component.find('input').first().instance().dispatchEvent(new Event('focus'));

        // Deve exibir o componente no focus
        setTimeout(() => {
            expect(cbFocus.called).toBeTruthy();
            expect(component.state().showPopper).toBeTruthy();
            expect(component.find('.cd-popover').get(0).props.style).not.toHaveProperty('display', 'none');
            component.find('input').first().instance().dispatchEvent(new Event('blur'));
        }, 1000);

    });

    it('Escondendo popover', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                    visible={true} trigger="manual"
                    content="Conteúdo do popover">
                <Button></Button>
            </Popover>
        );

        component.setState({showPopper: true});

        expect(component.find('.cd-popover').get(0).props.style).not.toHaveProperty('display', 'none');

        document.dispatchEvent(new Event('click'));

        expect(component).toHaveState({showPopper: true});

    });

    it('Só deve alterar o estado no componentWillReceiveProps se o valor for diferente', () => {
        const component = mount(
            <Popover placement="top-start" title="My title"
                    visible={true} trigger="focus"
                    content="Conteúdo do popover">
                <input type="text" value="Focus to activate" onChange={() => {}}></input>
            </Popover>
        );
        const setstate = sinon.stub(Popover.prototype, 'setState');

        component.setProps({visible: true});
        expect(setstate.called).toBeFalsy();

        component.setProps({visible: false});
        expect(setstate.called).toBeTruthy();
    });

});
