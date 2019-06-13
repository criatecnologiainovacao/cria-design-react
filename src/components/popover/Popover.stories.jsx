import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './Popover';
import Button from '../button';
import Layout from '../layout';

storiesOf('Outros|Popover', module)
    .add('default', () => <div>
        <Popover placement="top-start" title="Sou ativado no hover" width="200" trigger="hover"
                 content="Esse é o conteúdo do popover">
            <Button>Ative no hover</Button>
        </Popover>
    </div>)
    .add('todos os triggers', () => <div>
        <Popover placement="top-start" title="Title" width="200" trigger="hover"
                 content="Esse é o conteúdo do popover">
            <Button>Ative no hover</Button>
        </Popover>
        <Popover placement="bottom" title="Title" width="200" trigger="click"
                 content="Esse é o conteúdo do popover">
            <Button>Ative no clique</Button>
        </Popover>
        <Popover placement="bottom" title="Title" width="200" trigger="focus"
                 content="Esse é o conteúdo do popover">
            <Button>Ative no foco</Button>
        </Popover>
        <Popover placement="right" title="Title" width="200" trigger="manual" visible={true}
                 content="Meu popover já vem aberto">
            <Button>nem precisa clicar</Button>
        </Popover>
    </div>)
    .add('componente como conteúdo', () => <div>
        <Popover placement="right" title="Meu super componente" width="400" trigger="click"
                 content={(
                     <div>
                         <h3>Sou um componente customizado</h3>
                         <div>Posso ser qualquer componente React</div>
                         <Button>Ok</Button>
                     </div>)}>
            <Button>Clique para ativar</Button>
        </Popover>
    </div>)
    .add('posicionamento', () => <div>
        <Layout.Row>
            <Layout.Col span="12">
                <div>
                    <Popover placement="bottom" title="Posicionamento" width="300" trigger="hover"
                             content="Experimente bottom/bottom-start/bottom-end">
                        <Button>Bottom</Button>
                    </Popover>
                </div>
            </Layout.Col>
            <Layout.Col span="12">
                <div>
                    <Popover placement="left-end" title="Posicionamento" width="300" trigger="hover"
                             content="Experimente left/left-start/left-end">
                        <Button>Left-end</Button>
                    </Popover>
                </div>
            </Layout.Col>
            <Layout.Col span="24">
                <div>
                    <Popover placement="right" title="Posicionamento" width="300" trigger="hover"
                             content="Experimente right/right-start/right-end">
                        <Button>Right-start</Button>
                    </Popover>
                </div>
            </Layout.Col>
            <Layout.Col span="12">
                <div>
                    <Popover placement="top" title="Posicionamento" width="300" trigger="hover"
                             content="Experimente top/top-start/top-end. Se não couber para cima, sou reposicionado.">
                        <Button>Top</Button>
                    </Popover>
                </div>
            </Layout.Col>
        </Layout.Row>
    </div>)
    .add('estilizando', () => <div>
        <Popover placement="top" title="Compacto" width="150" trigger="hover"
                 content="Meu width: 150px;">
            <Button>Compacto</Button>
        </Popover>
        <Popover placement="top" title="Sem setinha" width="500" trigger="hover"
                 content="Não tenho setinha =(" visibleArrow={false}>
            <Button>Sem tip ("setinha")</Button>
        </Popover>
    </div>);