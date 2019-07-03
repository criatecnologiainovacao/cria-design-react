## Collapse

Use o componente `Collapse` para armazenar conteúdos de maneira compacta. Pode ser usado com, ou sem, comportamento de `accordion`.

### Uso básico

Múltiplos painéis podem ser expandidos. Para definir qual painel é aberto inicialmente, utilize o atributo `value`.
O alinhamento da seta pode ser definido com o atributo `arrowPosition`.

:::demo
```js
render() {
  const activeName = "consistencia";
  return (
      <div>
            <Collapse value={activeName}>
                <Collapse.Item title="Atomicidade" name="atomicidade">
                    <div>Em uma transação envolvendo duas ou mais partes de informações discretas, ou a transação será executada totalmente ou não será executada, garantindo assim que as transações sejam atômicas.</div>
                </Collapse.Item>
                <Collapse.Item title="Consistência" name="consistencia">
                    <div>A transação cria um novo estado válido dos dados ou em caso de falha retorna todos os dados ao seu estado antes que a transação foi iniciada.</div>
                </Collapse.Item>
                <Collapse.Item title="Isolamento" name="isolamento" arrowPosition="left">
                    <div>Uma transação em andamento mas ainda não validada deve permanecer isolada de qualquer outra operação, ou seja, garantimos que a transação não será interferida por nenhuma outra transação concorrente.</div>
                </Collapse.Item>
                <Collapse.Item title="Durabilidade" name="durabilidade" arrowPosition="left">
                    <div>Dados validados são registados pelo sistema de tal forma que mesmo no caso de uma falha e/ou reinício do sistema, os dados estão disponíveis em seu estado correto.</div>
                </Collapse.Item>
            </Collapse>
            <small>Fonte: http://medium.com/opensanca/o-que-%C3%A9-acid-59b11a81e2c6</small>
      </div>
  )
}
```
:::

### Accordion

No modo accordion, apenas um painel pode ser aberto por vez.

:::demo Ative o accordio usando o atributo `accordion` no `Collapse`.
```js
render() {
  const activeName = "atomicidade";
  return (
    <Collapse value={activeName} accordion>
        <Collapse.Item title="Atomicidade" name="atomicidade">
            <div>Em uma transação envolvendo duas ou mais partes de informações discretas, ou a transação será executada totalmente ou não será executada, garantindo assim que as transações sejam atômicas.</div>
        </Collapse.Item>
        <Collapse.Item title="Consistência" name="consistencia">
            <div>A transação cria um novo estado válido dos dados ou em caso de falha retorna todos os dados ao seu estado antes que a transação foi iniciada.</div>
        </Collapse.Item>
        <Collapse.Item title="Isolamento" name="isolamento" arrowPosition="left">
            <div>Uma transação em andamento mas ainda não validada deve permanecer isolada de qualquer outra operação, ou seja, garantimos que a transação não será interferida por nenhuma outra transação concorrente.</div>
        </Collapse.Item>
        <Collapse.Item title="Durabilidade" name="durabilidade" arrowPosition="left">
            <div>Dados validados são registados pelo sistema de tal forma que mesmo no caso de uma falha e/ou reinício do sistema, os dados estão disponíveis em seu estado correto.</div>
        </Collapse.Item>
    </Collapse>
  )
}
```
:::

### Custom title

Além de usar o atributo `title`, você pode customizar o título do painel com slots, adicionando ícones e outros comportamentos.

:::demo
```js
render() {
  return (
    <Collapse>
      <Collapse.Item title={<span>Atomicidade<i className="cd-icon-s-home" style={{fontSize: '18px', color: 'tomato', marginLeft: '4px'}}></i></span>}>
        <div>Em uma transação envolvendo duas ou mais partes de informações discretas, ou a transação será executada totalmente ou não será executada, garantindo assim que as transações sejam atômicas.</div>
      </Collapse.Item>
    </Collapse>
  )
}
```
:::

### Collapse Attributes
| Atributo      | Descrição          | Tipo      | Valores aceitos       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| accordion | se o modo accordion estará ativado | boolean | — | false |
| value | o painel ativo no momento | string (modo accordion) / array (modo não-accordion) | — | — |

### Collapse Events
| Nome do evento | Descrição | Parâmetros |
|---------|---------|---------|
| onChange | disparado quando o painel ativo é alterado | activeNames: string (modo accordion) / array (modo não-accordion) |

### Collapse Item Attributes
| Atributo      | Descrição          | Tipo      | Valores aceitos       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | identificador único do painel | string/number | — | — |
| title | título do painel | string | — | — |
| arrowPosition | posição da seta no cabeçalho do painel | string | right / left | right |
