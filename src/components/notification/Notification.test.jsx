import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Popover from '.';
import Button from '../button';

describe('Notification test', () => {
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
});
