import React from 'react';
import { shallow } from 'enzyme';

import Loading from '.';

describe('Loading test', () => {
    it('deve renderizar um componente de loading simples', () => {

        const component = shallow(<Loading/>);

        expect(component.find('.cd-loading-spinner').exists()).toBeTruthy();

    });

    it('deve renderizar um componente de loading fullscreen', () => {

        const component = shallow(<Loading fullscreen={true}/>);

        expect(component.find('.cd-loading-spinner').exists()).toBeTruthy();

    });

    it('deve permitir especificar o texto', () => {

        const texto = 'Carregando informações...';

        const component = shallow(<Loading fullscreen={true} text={texto}/>);

        expect(component.find('.cd-loading-text').exists()).toBeTruthy();

    });

    it('deve permitir desabilitar o comportamento de loading', () => {

        const component = shallow(<Loading loading={false}/>);

        expect(component.find('.cd-loading-spinner').exists()).toBeFalsy();

        // Para fins de cobertura de testes
        component.instance().componentWillUnmount();

    });
});
