import React from 'react';
import sinon from 'sinon';

import { mount } from 'enzyme';
import Button from '../button';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

describe('Modal test', () => {

    it('create', () => {
        const modal = mount(
            <Modal
                title="Tips"
                size="tiny"
                visible={false}
                lockScroll={false}
            >
                <ModalBody>
                    <span>This is a message</span>
                </ModalBody>
                <ModalFooter className="modal-footer">
                    <Button>Cancel</Button>
                    <Button type="primary">Confirm</Button>
                </ModalFooter>
            </Modal>
        );

        expect(modal.find('.cd-modal').exists()).toBe(true);
        modal.find('.cd-modal__wrapper').simulate('click');
        modal.find('.cd-modal__wrapper').simulate('keydown', {
            keyCode: 27
        });

        modal.setProps({
            visible: true
        });

        modal.setProps({
            lockScroll: true,
            visible: false
        });

        modal.setProps({
            visible: true
        });

        modal.setProps({
            visible: false
        });

        modal.unmount();
    });

    it('create', () => {
        const onClose = sinon.spy();
        const modal = mount(
            <Modal
                title="Tips"
                size="tiny"
                visible={false}
                lockScroll={false}
                onCancel={onClose}
            >
                <ModalBody>
                    <span>This is a message</span>
                </ModalBody>
                <ModalFooter className="modal-footer">
                    <Button>Cancel</Button>
                    <Button type="primary">Confirm</Button>
                </ModalFooter>
            </Modal>
        );

        expect(modal.find('.cd-modal').exists()).toBe(true);
        modal.find('.cd-modal__headerbtn').simulate('click');
        expect(onClose.callCount).toBe(1);
    });

    it('deve acionar o evento de open quando a modal já vier aberta', () => {
        const onOpen = sinon.spy();
        const modal = mount(
            <Modal
                title="Tips"
                size="tiny"
                visible={true}
                lockScroll={false}
                onOpen={onOpen}
            >
                <ModalBody>
                    <span>This is a message</span>
                </ModalBody>
                <ModalFooter className="modal-footer">
                    <Button>Cancel</Button>
                    <Button type="primary">Confirm</Button>
                </ModalFooter>
            </Modal>
        );

        expect(onOpen.callCount).toBe(1);
    });

    it('deve acionar o evento de open quando a modal for aberto', () => {
        const onOpen = sinon.spy();
        const isVisible = false;
        const modal = mount(
            <Modal
                title="Tips"
                size="tiny"
                visible={isVisible}
                lockScroll={false}
                onOpen={onOpen}
            >
                <ModalBody>
                    <span>This is a message</span>
                </ModalBody>
                <ModalFooter className="modal-footer">
                    <Button>Cancel</Button>
                    <Button type="primary">Confirm</Button>
                </ModalFooter>
            </Modal>
        );

        modal.setProps({
            visible: true
        });

        expect(onOpen.callCount).toBe(1);
    });
});
