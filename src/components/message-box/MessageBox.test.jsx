import MessageBox from '.';

describe('MessageBox test', () => {
    beforeEach(() => {
        const el = document.querySelector('.cd-message-box');
        if (!el) return;
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    });

    it('Deve exibir um message box', () => {
        MessageBox.alert('Message', 'Title', { type: 'success', showCancelButton: true });

        expect(document.querySelector('.cd-message-box')).not.toBeNull();
    });

    it('Deve fechar com click no botão de confirmação', done => {
        const resolve = jest.fn();
        MessageBox.alert(
            'Message', 'Title',
            { type: 'success', confirmButtonClass: 'confirm-btn', customClass: 'messageBox-confirm'}
        ).then(resolve);

        const confirmButton = document.querySelector('.confirm-btn');
        expect(confirmButton).not.toBeNull();

        confirmButton.click();
        
        setTimeout(() => {
            expect(resolve).toHaveBeenCalled();
            done();
        }, 1000);
    });

    it('Deve fechar com click no botão de cancelamento', done => {
        const reject = jest.fn();
        MessageBox.alert(
            'Message', 'Title',
            { type: 'info', showCancelButton: true, cancelButtonClass: 'cancel-btn', customClass: 'messageBox-cancel'}
        ).then(() => {}).catch(reject);

        const cancelButton = document.querySelector('.cancel-btn');
        expect(cancelButton).not.toBeNull();

        cancelButton.click();

        setTimeout(() => {
            expect(reject).toHaveBeenCalled();
            done();
        }, 1000);
        
    });
});
