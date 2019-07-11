import React from 'react';
import { storiesOf } from '@storybook/react';

import Collapse from '.';

const collapse = props => <Collapse {...props}>
    <Collapse.Item title="Atomicidade" name="atomicidade">
        <div>Em uma transação envolvendo duas ou mais partes de informações discretas, ou a
            transação será executada totalmente ou não será executada, garantindo assim que as
            transações sejam atômicas.
        </div>
    </Collapse.Item>
    <Collapse.Item title="Consistência" name="consistencia">
        <div>A transação cria um novo estado válido dos dados ou em caso de falha retorna todos os
            dados ao seu estado antes que a transação foi iniciada.
        </div>
    </Collapse.Item>
    <Collapse.Item title="Isolamento" name="isolamento">
        <div>Uma transação em andamento mas ainda não validada deve permanecer isolada de qualquer
            outra operação, ou seja, garantimos que a transação não será interferida por nenhuma
            outra transação concorrente.
        </div>
    </Collapse.Item>
    <Collapse.Item title="Durabilidade" name="durabilidade">
        <div>Dados validados são registados pelo sistema de tal forma que mesmo no caso de uma falha
            e/ou reinício do sistema, os dados estão disponíveis em seu estado correto.
        </div>
    </Collapse.Item>
</Collapse>;

storiesOf('Outros|Collapse', module)
    .add('default', () => {
        collapse({ activeName: 'consistencia' });
    })

    .add('accordion', () => {
        collapse({ activeName: 'atomicidade', accordion: true });
    })

    .add('título customizado', () => {
        return (
            <Collapse>
                <Collapse.Item title={<span>Atomicidade<i className="cd-icon-s-home" style={{
                    fontSize: '18px',
                    color: 'tomato',
                    marginLeft: '4px'
                }}/></span>}>
                    <div>Em uma transação envolvendo duas ou mais partes de informações discretas,
                        ou a transação será executada totalmente ou não será executada, garantindo
                        assim que as transações sejam atômicas.
                    </div>
                </Collapse.Item>
            </Collapse>
        )
    })

    .add('posições da seta', () => {
        return (
            <Collapse>
                <Collapse.Item title="Seta à direita">
                    <div>A seta pode ser posicionada à direita</div>
                </Collapse.Item>
                <Collapse.Item title="Seta à esquerda" arrowPosition="left">
                    <div>A seta pode ser posicionada à esquerda</div>
                </Collapse.Item>
            </Collapse>
        )
    });
