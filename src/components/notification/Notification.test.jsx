import React from 'react';
import sinon from 'sinon';

import Notification from '.';

describe('Notification test', () => {
    beforeEach(() => {
      const el = document.querySelector('.cd-notification');
      if (!el) return;
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    it('Deve fechar automaticamente', () => {
        Notification({
            title: 'Title',
            message: 'This is a reminder',
            duration: 500
        });

        expect(document.querySelector('.cd-notification')).not.toBeNull();

        setTimeout(() => {
            expect(document.querySelector('.cd-notification')).toBeNull();
        }, 1000);
    });

    it('Deve fechar manualmente', () => {
        const onClose = sinon.spy();
        const onClick = sinon.spy();

        Notification({
            title: 'Title',
            message: 'This is a reminder',
            onClose,
            onClick
        });

        const closeButton = document.querySelector('.cd-notification__closeBtn');
        
        expect(closeButton).not.toBeNull();

        closeButton.dispatchEvent(new Event('click'));

        setTimeout(() => {
            expect(document.querySelector('.cd-notification')).toBeNull();
        }, 1000);
    });

    it('Deve permitir definir um tipo', () => {
        Notification({
            title: 'Title',
            message: 'This is a reminder',
            type: 'success'
        });

        const notification = document.querySelector('.cd-notification');
        
        expect(notification).not.toBeNull();

        expect(notification.className.split(" ").indexOf("success")).toBeGreaterThan(-1);
    });

    it('Deve possuir eventos', () => {
        const onClose = sinon.spy();
        const onClick = sinon.spy();

        Notification({
            title: 'Title',
            message: 'This is a reminder',
            onClose,
            onClick
        });

        const closeButton = document.querySelector('.cd-notification__closeBtn');
        
        expect(closeButton).not.toBeNull();

        closeButton.dispatchEvent(new Event('click'));

        setTimeout(() => {
            expect(document.querySelector('.cd-notification')).toBeNull();
        }, 1000);
    });
});
