import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageBox from '.';
import Button from '../button';

const open = () => {
    MessageBox.alert('O usuário foi criado com sucesso', 'Novo usuário');
}
  
const open2 = () => {
    MessageBox.confirm('Tem certeza que deseja remover este item?', 'Confirmação', { type: 'warning' })
    .then(() => {
        console.log('O botão de confirmar foi clicado');
    })
    .catch(() => {
        console.log('O botão de cancelar foi clicado');
    });
}

const openCustom = () => {
    MessageBox.confirm(
        <span>Foi identificado que já existe um item com essa descrição. <strong>Tem certeza que deseja prosseguir?</strong></span>,
        'Aviso do sistema',
        {
          type: 'info',
          showCancelButton: true,
          confirmButtonText: 'Tenho certeza',
          cancelButtonText: 'Abortar'
        }).then(action => {
          console.log('Confirmado')
        })
        .catch(action => {
          console.log('Cancelado');
        });
}
  
const openSuccess = () => {
    MessageBox.confirm('Tem certeza?', 'Confirmação', { type: 'success' });
}
  
const openInfo = () => {
    MessageBox.confirm('Tem certeza?', 'Confirmação', { type: 'info' });
}
  
const openError = () => {
    MessageBox.confirm('Tem certeza?', 'Confirmação', { type: 'error' });
}

const openWarning = () => {
    MessageBox.confirm('Tem certeza?', 'Confirmação', { type: 'warning' });
}

storiesOf('Notificação|MessageBox', module)
    .add('alert', () => {
        return (
            <div>
                <Button plain={true} onClick={open}>Exibir alerta</Button>
            </div>
        )
    })
    .add('confirm', () => {
        return (
            <div>
                <Button plain={true} onClick={open2}>Exibir confirmação</Button>
            </div>
        )
    })
    .add('types', () => {
        return (
            <div>
                <Button plain={true} onClick={openSuccess}>Success</Button>
                <Button plain={true} onClick={openWarning}>Warning</Button>
                <Button plain={true} onClick={openInfo}>Info</Button>
                <Button plain={true} onClick={openError}>Error</Button>
            </div>
        )
    })
    .add('custom', () => {
        return (
            <div>
                <Button plain={true} onClick={openCustom}>Conteúdo customizado</Button>
            </div>
        )
    });