import React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from '.';
import Button from '../button';

const open = () => {
    Notification({
      title: 'Título',
      message: 'Aviso do sistema'
    });
}
  
const open2 = () => {
    Notification({
      title: 'Atenção',
      message: 'Essa mensagem não desaparece automaticamente',
      duration: 0
    });
}

const open3 = () => {
    Notification({
      title: 'Success',
      message: 'Mensagem de sucesso',
      type: 'success',
      duration: 0
    });
}
  
const open4 = () => {
    Notification({
      title: 'Warning',
      message: 'Mensagem de advertência',
      type: 'warning'
    });
}
  
const open5 = () => {
    Notification.info({
      title: 'Info',
      message: 'Mensagem de informação padrão'
    });
}
  
const open6 = () => {
    Notification.error({
      title: 'Error',
      message: 'Mensagem de erro'
    });
}

const open7 = () => {
    Notification.success({
      title: 'Position',
      message: 'Também é possível exibir notificações à esquerda',
      position: 'left'
    });
}

storiesOf('Notificação|Notification', module)
    .add('default', () => {
        return (
            <div>
                <Button plain={true} onClick={open}>Fecha automaticatimente</Button>
            </div>
        )
    })
    .add('sticky', () => {
        return (
            <div>
                <Button plain={true} onClick={open2}>Não fecha automaticamente</Button>
            </div>
        )
    })
    .add('types', () => {
        return (
            <div>
                <Button plain={true} onClick={open3}>Success</Button>
                <Button plain={true} onClick={open4}>Warning</Button>
                <Button plain={true} onClick={open5}>Info</Button>
                <Button plain={true} onClick={open6}>Error</Button>
            </div>
        )
    })
    .add('left', () => {
        return (
            <div>
                <Button plain={true} onClick={open7}>Notificação à esquerda</Button>
            </div>
        )
    });