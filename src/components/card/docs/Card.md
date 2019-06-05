## Card
Integra as informações em um container de card.

### Basic usage

Um Card inclui um título, conteúdo e operações.

:::demo Um Card é feito de `header` e `body`. `header` é opcional, e o seu conteúdo depende de um slot.

```js
render() {
  return (
    <Card
      className="box-card"
      header={
        <div className="clearfix">
          <span style={{ "lineHeight": "36px" }}>Card Name</span>
          <span style={{ "float": "right" }}>
            <Button type="primary">Operation Button</Button>
          </span>
        </div>
      }
    >
      <div className="text item">List item 1</div>
      <div className="text item">List item 2</div>
      <div className="text item">List item 3</div>
      <div className="text item">List item 4</div>
    </Card>
  )
}
```
:::

### Card simples

A parte do header pode ser omitida.

:::demo
```js
render() {
  return (
    <Card className="box-card">
      <div className="text item">List item 1</div>
      <div className="text item">List item 2</div>
      <div className="text item">List item 3</div>
      <div className="text item">List item 4</div>
    </Card>
  )
}
```
:::

### Card com título

O Card pode conter o título.

:::demo O atributo `title` aceita uma string e será exibida como o título do Card.
```js
render() {
  return (
    <Card title="Título" className="box-card">
      <div className="text item">List item 1</div>
      <div className="text item">List item 2</div>
      <div className="text item">List item 3</div>
      <div className="text item">List item 4</div>
    </Card>
  )
}
```
:::

### Shadows

O Card possui três configurações bases de shadow

:::demo O atributo `shadow` aceita os valores `always` _(default)_, `hover` e `never`.
```js
render() {
  return (
    <Layout.Row>
      <Layout.Col span={ 6 } offset={ 0 }>
        <Card title="Shadow always"/>
      </Layout.Col>
      <Layout.Col span={ 6 } offset={ 2 }>
        <Card title="Shadow hover" shadow="hover"/>
      </Layout.Col>
      <Layout.Col span={ 6 } offset={ 2 }>
        <Card title="Shadow never" shadow="never"/>
      </Layout.Col>
    </Layout.Row>
  )
}
```
:::

### Atributos
| Atributo | Descrição | Tipo | Valores aceitos | Padrão |
|---------- |-------- |---------- |-------------  |-------- |
| header | Cabeçalho customizável do card. | string/outros elementos| — | — |
| title | Título do card. | string | — | — |
| shadow | Estilo de sombra do card. | string | always / hover / never | always |
| bodyStyle | Estilo CSS do body | object | — | { padding: '20px' } |