## Botão

Componente de botão.

### Uso básico

:::demo Use os atributos `type`, `plain`, `round` e `circle` para definir o estilo do Botão.

```js
render() {
  return (
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <br/>
        <br/>
        <Button plain>Default</Button>
        <Button plain type="primary">Primary</Button>
        <Button plain type="success">Success</Button>
        <Button plain type="info">Info</Button>
        <Button plain type="warning">Warning</Button>
        <Button plain type="danger">Danger</Button>
        <br/>
        <br/>
        <Button round>Default</Button>
        <Button round type="primary">Primary</Button>
        <Button round type="success">Success</Button>
        <Button round type="info">Info</Button>
        <Button round type="warning">Warning</Button>
        <Button round type="danger">Danger</Button>
        <br/>
        <br/>
        <Button circle icon="cd-icon-search"/>
        <Button circle icon="cd-icon-edit" type="primary"/>
        <Button circle icon="cd-icon-check" type="success"/>
        <Button circle icon="cd-icon-message" type="info"/>
        <Button circle icon="cd-icon-star-off" type="warning"/>
        <Button circle icon="cd-icon-delete" type="danger"/>
    </div>
  )
}
```
:::

### Botões desativados

O atributo `disabled` determina se um atributo está desativado.

:::demo Use o atributo `disabled` para determinar se um botão estará desativado, esse aceita um valor `Boolean`.

```js
render() {
  return (
    <div>
        <Button disabled>Default</Button>
        <Button disabled type="primary">Primary</Button>
        <Button disabled type="success">Success</Button>
        <Button disabled type="info">Info</Button>
        <Button disabled type="warning">Warning</Button>
        <Button disabled type="danger">Danger</Button>
        <br/>
        <br/>
        <Button disabled plain>Default</Button>
        <Button disabled plain type="primary">Primary</Button>
        <Button disabled plain type="success">Success</Button>
        <Button disabled plain type="info">Info</Button>
        <Button disabled plain type="warning">Warning</Button>
        <Button disabled plain type="danger">Danger</Button>
    </div>
  )
}
```
:::

### Botão texto

Botões sem bordas ou background.

:::demo Passe o valor `text` para o atributo `type`.

```js
render() {
  return (
    <div>
        <Button type="text">Default</Button>
        <Button disabled type="text">Primary</Button>
    </div>
  )
}
```
:::

### Ícones

Botões podem ter ícones sozinhos ou acompanhado das labels do botão.

:::demo Para que o ícone apareça anterior ao label do botão, use o atributo `icon`. O mesmo aceita um valor em `String`. _(Pode ser usado os ícones disponíveis nessa biblioteca, ou de terceiros como o material design: *mdi mdi-close*)_. Para que o ícone apareça à direita da label do botão, use o atributo `appendIcon`, que aceita os mesmos valores de `icon`. Ambos atributos, quando passados sem um label de botão, aparecerão sozinhos.

```js
render() {
  return (
    <div>
        <Button type="text" icon="cd-icon-share">Compartilhar</Button>
        <Button icon="cd-icon-delete"/>
        <Button icon="cd-icon-search">Pesquisar</Button>
        <Button appendIcon="cd-icon-upload">Upload</Button>
    </div>
  )
}
```
:::

### Loading

Click no botão para que ele execute algum evento, e apresente o estado de carregamento.

:::demo Passe o atributo `loading` para `true`. O atributo de `loading` sobrepõe o atributo `appendIcon`.

```js
render() {
  return (
    <div>
        <Button loading>Carregando...</Button>
        <Button type="text" loading>Carregando...</Button>
        <Button type="info" loading/>
    </div>
  )
}
```
:::

### Button Group

Botões com operações similares podem ser agrupados.

:::demo Use o componente `Button.Group` para agrupar os Botões.

```js
render() {
  return (
    <div>
        <Button.Group>
            <Button type="primary" icon="cd-icon-arrow-left">Página anterior</Button>
            <Button type="primary" appendIcon="cd-icon-arrow-right">Página posterior</Button>
        </Button.Group>
        <br/>
        <br/>
        <Button.Group>
            <Button type="primary" icon="cd-icon-edit"/>
            <Button type="primary" appendIcon="cd-icon-share"/>
            <Button type="primary" appendIcon="cd-icon-delete"/>
        </Button.Group>
    </div>
  )
}
```
:::

### Tamanhos

Além do tamanho padrão, o componente de `Button` disponibiliza mais três tamanhos diferentes.

:::demo Use o atributo `size` com os valores `medium`, `small` ou `mini`.

```js
render() {
  return (
    <div>
        <Button>Default</Button>
        <Button size="medium">Medium</Button>
        <Button size="small">Small</Button>
        <Button size="mini">Mini</Button>
        <br/>
        <br/>
        <Button round>Default</Button>
        <Button round size="medium">Medium</Button>
        <Button round size="small">Small</Button>
        <Button round size="mini">Mini</Button>
    </div>
  )
}
```
:::

### Atributos

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size     | O tamanho do botão | string    | medium / small / mini | — |
| type      | O tipo do botão | string    | primary / success / warning / danger / info / text | — |
| plain      | Determina se o botão terá o estilo simples | boolean | — | false |
| round     | Determina se o botão terá bordas arredondadas. | boolean   | — | false |
| circle | Determina se será um botão circular. | boolean   | — | false |
| loading | Determina se o botão estará no estado de carregamento. | boolean | — | false |
| disabled | Desativa o botão | boolean | — | false |
| icon | Nome da classe do ícone. Aparecerá antes do label do botão | string | — | — |
| appendIcon | Nome da classe do ícone. Aparecerá depois do label do botão | string | — | — |
| nativeType | O mesmo que o `type` nativo do botão. | string | button / submit / reset | — |

### Eventos
| Nome do evento | Descrição | Parameters |
|---------- |-------- |---------- |
| onClick | Acionado quando o botão é clicado. | — |
