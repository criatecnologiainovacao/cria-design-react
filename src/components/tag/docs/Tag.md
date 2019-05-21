## Tag

Usado para marcação e seleção.

### Uso básico

Use the type attribute to define Tag's type. In addition, the color attribute can be used to set the background color of the Tag.

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

Além do tamanho padrão, o componente **Tag** possui mais três tamanhos adicionais, para ser usado em diferentes cenários.


:::demo Use o atributo `size` para alterar os tamanhos entre `medium`, `small` ou `mini`.

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

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | title of Dialog. Can also be passed with a named slot (see the following table) | string    | — | — |
| size      | size of Dialog | string    | tiny/small/large/full | small |
| top      | value for `top` of Dialog CSS, works when `size` is not `full` | string    | — | 15% |
| modal     | whether a mask is displayed | boolean   | — | true |
| modalAppendToBody     | whether to append modal to body element. If false, the modal will be appended to Dialog's parent element | boolean   | — | true |
| lockScroll     | whether scroll of body is disabled while Dialog is displayed | boolean   | — | true |
| customClass      | custom class names for Dialog | string    | — | — |
| closeOnClickModal | whether the Dialog can be closed by clicking the mask | boolean    | — | true |
| closeOnPressEscape | whether the Dialog can be closed by pressing ESC | boolean    | — | true |
| showClose | whether to show a close button | boolean    | — | true |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| onOpen | triggers when the Dialog opens | — |
| onClose | triggers when the Dialog closes | — |
