## Tag

Usado para marcação e seleção.

### Uso básico

:::demo Use o atributo `type` para definir o tipo da Tag.

```js
render() {
  return (
    <div>
      <Tag>Default</Tag>
      <Tag type="success">Success</Tag>
      <Tag type="info">Info</Tag>
      <Tag type="warning">Warning</Tag>
      <Tag type="danger">Danger</Tag>
    </div>
  )
}
```
:::

### Tag removível

:::demo O atributo `closable` pode ser usado para definir uma tag removível. Este atributo aceita um `Boolean`. Por padrão a tag removível possui uma animação. Se não deseja usá-la, você pode passar o atributo `disableTransitions`, que aceita um valor `Boolean`, para `true`. O evento `onClose` ativa quando a Tag é removida.

```js
constructor(props) {
  super(props);

  this.tags = [
    { id: 1, name: "Tag 1" },
    { id: 2, name: "Tag 2" },
    { id: 3, name: "Tag 3" },
    { id: 4, name: "Tag 4" },
    { id: 5, name: "Tag 5" }
  ];
  
}

handleClose(tag) {
  this.tags.splice(this.tags.indexOf(tag), 1)
}

render() {
  return (
    <div>
     {
       this.tags.map(tag => (
          <Tag key={tag.id} closable onClick={this.handleClose.bind(this, tag.id)}>{tag.name}</Tag>
        )
      )
     }
    </div>
  )
}
```
:::

### Tamanhos

Além do tamanho padrão, o componente Tag possui mais três tamanhos adicionais, para ser usado em diferentes cenários.


:::demo Use o atributo `size` para alterar os tamanhos entre `medium`, `small` ou `mini`.

```js
render() {
  return (
    <div>
      <Tag>Default</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="small">Small</Tag>
      <Tag size="mini">Mini</Tag>
    </div>
  )
}
```
:::

### Arredondado

:::demo O atributo `round` é usado para arredondar as bordas da Tag.

```js
render() {
  return (
    <div>
      <Tag round closable>Default</Tag>
      <Tag round type="success">Success</Tag>
      <Tag round type="info">Info</Tag>
      <Tag round type="warning">Warning</Tag>
      <Tag round type="danger">Danger</Tag>
    </div>
  )
}
```
:::

### Ícones

:::demo É possível adicionar ícones à Tag. Com o atributo `icon`, passando o nome do ícone, o ícone será apresentado antes do texto da Tag. Já com o atributo `appendIcon` o ícone será apresentado depois do texto. Ambos podem ser usados sem texto algum ficando apenas uma Tag com ícone. O `appendIcon` não aparecerá caso a Tag for `closable`.

```js
render() {
  return (
    <div>
      <Tag icon="cd-icon-delete"/>
      <Tag icon="cd-icon-search" type="success">Success</Tag>
      <Tag round appendIcon="cd-icon-info" type="warning">Warning</Tag>
    </div>
  )
}
```
:::

### Bordas

:::demo Use o atributo `hit` para criar bordas para a Tag.

```js
render() {
  return (
    <div>
      <Tag hit icon="cd-icon-delete"/>
      <Tag hit icon="cd-icon-search" type="success">Success</Tag>
      <Tag hit round appendIcon="cd-icon-info" type="warning">Warning</Tag>
      <Tag hit round type="info">Info</Tag>
      <Tag hit type="danger">Danger</Tag>
    </div>
  )
}
```
:::

### Cor sólida

:::demo Use o atributo `solid` para que o estilo de cores da Tag seja as primárias.

```js
render() {
  return (
    <div>
      <Tag solid>Default</Tag>
      <Tag solid type="success">Success</Tag>
      <Tag solid type="info">Info</Tag>
      <Tag solid type="warning">Warning</Tag>
      <Tag solid type="danger">Danger</Tag>
    </div>
  )
}
```
:::

### Atributos

| Atributo      | Descrição          | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type     | O tipo da Tag. Determina seu estilo de cores. | string    | success/info/warning/danger | — |
| size      | Tamanho da Tag. | string    | medium/small/mini | — |
| closable  | Se a Tag pode ser removível ou não | boolean  | — | false |
| disableTransitions | Se, ao remover a Tag, a animação será desativada. Só funciona com `closable` ativo. | boolean   | — | false |
| round     | Se a Tag terá as bordas arredondadas. | boolean   | — | false |
| hit     | Se a Tag terá bordas | boolean   | — | false |
| solid     | Se a Tag terá cores sólidas | boolean   | — | false |
| icon      | Ícone da Tag. | string    | — | — |
| appendIcon | Ícone que aparecerá depois do texto da Tag. Só funciona se `closable` estiver desativo | string  | — | — |

### Eventos
| Nome do evento | Descrição | Parâmetros |
|---------- |-------- |---------- |
| onClick | Ativa quando a Tag é clicada. | — |
| onClose | Ativa quando a Tag é fechada. | — |
