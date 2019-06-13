## Popover

### Uso básico

Similar ao componente Tooltip, utiliza o `Popper.js` na implementação.
O conteúdo do Popover deve ser passado no atributo `content`. O elemento que irá disparar o Popover deve ser incluído como filho do Popover.

:::demo O atributo `trigger` é usado para definir como o Popover é disparado: `hover`, `click`, `focus` ou `manual`.

Neste exemplo, os elementos `Button` e `Input` dispararão os Popovers.

```js
render() {
  return (
    <div>
      <Popover placement="top-start" title="Title" width="200" trigger="hover" content="Esse é o conteúdo do popover">
        <Button>Ative no hover</Button>
      </Popover>
      <Popover placement="bottom" title="Title" width="200" trigger="click" content="Esse é o conteúdo do popover">
        <Button>Ative no clique</Button>
      </Popover>
      <Popover placement="right" title="Title" width="200" trigger="focus" content="Esse é o conteúdo do popover">
        <Button>Ative no foco</Button>
      </Popover>
      <Popover placement="right" title="Title" width="200" trigger="manual" visible={true} content="Meu popover já vem aberto">
        <Input value="Popover ativado manualmente"/>
      </Popover>
    </div>
  )
}
```
:::

### Componentes aninhados

No exemplo abaixo, veja como é possível inserir um componente qualquer como conteúdo do Popover.

:::demo

```js
render() {
  return (
    <Popover placement="right" title="Meu super componente" width="400" trigger="click" content={(
      <div>
        <h3>Sou um componente customizado</h3>
        <Button>Ok</Button>
      </div>)}>
      <Button>Clique para ativar</Button>
    </Popover>
  )
}
```
:::

### Componente aninhado com comportamento

Use um componente com comportamento no Popover como alternativa mais leve a um Dialog ou Modal.

:::demo
```js
constructor(props){
  super(props);

  this.state = {};
}

onDismiss() {
  this.setState({
    visible: false
  });
}

render() {
  return (
    <Popover placement="top" width="250" trigger="click" visible={this.state.visible} content={(
      <div>
        <p>Tem certeza que deseja remover?</p>
        <div style={{textAlign: 'right', margin: 0}}>
          <Button size="mini" type="text" onClick={this.onDismiss.bind(this)}>Cancelar</Button>
          <Button type="primary" size="mini" onClick={this.onDismiss.bind(this)}>Confirmar</Button>
        </div>
      </div>
    )}>
      <Button>Remover</Button>
    </Popover>
  )
}
```
:::

### Atributos

| Atributo      | Descrição          | Tipo      | Valores aceitos       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  trigger | Como o popover é disparado | string  | click/focus/hover/manual |    click    |
|  title              | Título do popover | string | — | — |
|  content        |  Conteúdo do popover, pode ser substituído com um `slot` padrão    | string            | — | — |
|  width        |  Largura do popover  | string, number            | — | min-width: 150px |
|  placement        |  Posição do popover  | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  visible        |  Se o popover é visível por padrão  | Boolean           | — |  false |
|  transition     |  Animação de transição do popover      | string             | — | fade-in-linear |
|  visibleArrow   |  Se a ponta (setinha) do popover é exibido ou não | boolean | — | true |
|  popperClass        |  Classe personalizada do popover | string | — | — |