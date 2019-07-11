import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Popover from '.';
import Button from '../button';

const testPopover = (component, theEvent) => {
    expect(component.state().showPopper).toBeFalsy();
    expect(component.find('.cd-popover').get(0).props.style).toHaveProperty('display', 'none');

    component.find('button').first().instance().dispatchEvent(new Event(theEvent));
    setTimeout(() => {
        expect(component.state().showPopper).toBeTruthy();
        expect(component.find('.cd-popover').get(0).props.style)
            .not
            .toHaveProperty('display', 'none');
    }, 1000);
};

const popover = trigger => mount(
    <Popover placement="top-start" title="My title"
             width="200" trigger={trigger}
             content="Conteúdo do popover">
        <Button id="popover-trigger">Action to activate</Button>
    </Popover>
);

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

        const component = popover('click');

        testPopover(component, 'click');

    });

    it('Trigger com hover', () => {

        const component = popover('hover');

        testPopover(component, 'mouseenter')

    });

    it('Trigger com hover (esconder popover)', () => {

        const component = popover('hover');

        component.find('button').first().instance().dispatchEvent(new Event('mouseleave'));

        setTimeout(() => {
            expect(component.state().showPopper).toBeFalsy();
            expect(component.find('.cd-popover').get(0).props.style)
                .toHaveProperty('display', 'none');

        }, 1000);

    });

    it('Trigger manual', () => {

        const component = popover('manual');

        component.setState({ showPopper: true });

        expect(component.find('.cd-popover').get(0).props.style)
            .not
            .toHaveProperty('display', 'none');

    });

    it('Trigger no focus', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                     width="200" trigger="focus"
                     content="Conteúdo do popover">
                <Button>Focus to activate</Button>
            </Popover>
        );

        testPopover(component, 'mousedown')

    });

    it('Trigger no focus com input', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                     width="200" trigger="focus"
                     content="Conteúdo do popover">
                <input type="text" value="Focus to activate" onChange={() => {
                }}/>
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
            expect(component.find('.cd-popover').get(0).props.style)
                .not
                .toHaveProperty('display', 'none');
            component.find('input').first().instance().dispatchEvent(new Event('blur'));
        }, 1000);

    });

    it('Escondendo popover', () => {

        const component = mount(
            <Popover placement="top-start" title="My title"
                     visible={true} trigger="manual"
                     content="Conteúdo do popover">
                <Button/>
            </Popover>
        );

        component.setState({ showPopper: true });

        expect(component.find('.cd-popover').get(0).props.style)
            .not
            .toHaveProperty('display', 'none');

        // Um clique fora do popover (por exemplo, no documento) deve fechá-lo
        document.dispatchEvent(new Event('click'));

        expect(component).toHaveState({ showPopper: true });

    });

    it('Só deve alterar o estado no componentWillReceiveProps se o valor recebido for diferente do atual', () => {
        const component = mount(
            <Popover placement="top-start" title="My title"
                     visible={true} trigger="focus"
                     content="Conteúdo do popover">
                <input type="text" value="Focus to activate" onChange={() => {
                }}/>
            </Popover>
        );
        const setstate = sinon.stub(Popover.prototype, 'setState');

        component.setProps({ visible: true });
        expect(setstate.called).toBeFalsy();

        component.setProps({ visible: false });
        expect(setstate.called).toBeTruthy();
    });

});
