import React from 'react';
import { shallow, mount } from 'enzyme';

import Collapse from '.';

describe('Collapse test', () => {
    it('deve renderizar um componente de collapse simples', () => {
        const collapse = shallow(
            <Collapse>
                <Collapse.Item title="Título">
                    <div>Conteúdo</div>
                </Collapse.Item>
            </Collapse>
        )

        expect(collapse).not.toBeNull();

        expect(collapse.find('.cd-collapse').exists()).toBeTruthy();
    });

    it('deve renderizar um componente de collapse com mais de um item', () => {
        const collapse = mount(
            <Collapse>
                <Collapse.Item title="Título" name="primeiroItem">
                    <div>Conteúdo</div>
                </Collapse.Item>
                <Collapse.Item title="Título 2" name="segundoItem" arrowPosition="left">
                    <div>Conteúdo 2</div>
                </Collapse.Item>
            </Collapse>
        )

        expect(collapse).not.toBeNull();

        expect(collapse.find('.cd-collapse-item').exists()).toBeTruthy();

        expect(collapse.find('.cd-collapse-item')).toHaveLength(2);
    });

    it('deve permitir eventos de click', () => {
        // const onClick = sinon.spy();
        const collapse = shallow(
            <Collapse value="primeiroItem">
                <Collapse.Item title="Título" name="primeiroItem">
                    <div>Conteúdo</div>
                </Collapse.Item>
                <Collapse.Item title="Título 2" name="segundoItem">
                    <div>Conteúdo</div>
                </Collapse.Item>
            </Collapse>
        )
        
        expect(collapse).not.toBeNull();
        
        // Primeiro item deve vir selecionado
        expect(collapse).toHaveState({activeNames: ['primeiroItem']});
        expect(collapse.childAt(0).dive().hasClass('is-active')).toBeTruthy();
        
        // Após o click, o item não deve mais estar selecionado
        collapse.childAt(0).dive().find('.cd-collapse-item__header').simulate('click');
        expect(collapse.childAt(0).dive().hasClass('is-active')).toBeFalsy();
    });

    it('deve permitir eventos de click em modo acoordion', () => {
        const collapse = shallow(
            <Collapse accordion>
                <Collapse.Item title="Título" name="primeiroItem">
                    <div>Conteúdo</div>
                </Collapse.Item>
                <Collapse.Item title="Título 2" name="segundoItem">
                    <div>Conteúdo</div>
                </Collapse.Item>
            </Collapse>
        )

        expect(collapse).not.toBeNull();
        
        expect(collapse.childAt(0).dive().hasClass('is-active')).toBeFalsy();

        collapse.childAt(0).dive().find('.cd-collapse-item__header').simulate('click');
        expect(collapse.childAt(0).dive().hasClass('is-active')).toBeTruthy();

        collapse.childAt(1).dive().find('.cd-collapse-item__header').simulate('click');
        expect(collapse.childAt(0).dive().hasClass('is-active')).toBeFalsy();
        expect(collapse.childAt(1).dive().hasClass('is-active')).toBeTruthy();
    });
});
