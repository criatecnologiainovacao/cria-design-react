## Layout

Cria e organiza o grid através de 24 colunas.

### Uso básico

Criando um Layout básico usando colunas.

::: demo Com os componentes `Layout.Row` e `Layout.Col`, podemos manipular o layout através da propriedade `span`.
```js
render() {
  return (
    <div>
      <Layout.Row>
        <Layout.Col span="24"><div className="grid-content bg-dark"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="12"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="12"><div className="grid-content bg-light"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="8"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="8"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="8"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="4"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-light"></div></Layout.Col>
      </Layout.Row>
    </div>
  )
}
```
:::

### Espaçamento de colunas

Determinando espaçamento entre todas colunas de uma linha.

::: demo As linhas suportam a propriedade `gutter` para indicar quanto espaçamento deve existir entre as colunas, sendo o valor padrão 0.
```js
render() {
  return (
    <Layout.Row gutter="20">
      <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
    </Layout.Row>
  )
}
```
:::

### Offset de colunas

Determinando o espaçamento a esquerda de uma coluna.

::: demo As colunas podem ser "empurradas" através da propriedade `offset`, que determina quantas colunas de espaçamento.

```js
render() {
  return (
    <div>
      <Layout.Row gutter="20">
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6" offset="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="20">
        <Layout.Col span="6" offset="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6" offset="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="20">
        <Layout.Col span="12" offset="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
    </div>
  )
}
```
:::

### Alinhamento

É possível determinar o `type` flex e determinar qual o tipo de `justify`(alinhamento) das colunas.

::: demo Você pode habilitar o `type="flex"` e definir a propriedade `justify` como start, center, end, space-between or space-around.
```js
render() {
  return (
    <div>
      <Layout.Row type="flex" className="row-bg">
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="center">
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="end">
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="space-between">
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="space-around">
        <Layout.Col span="6"><div className="grid-content bg"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-light"></div></Layout.Col>
        <Layout.Col span={6}><div className="grid-content bg"></div></Layout.Col>
      </Layout.Row>
    </div>
  )
}
```
:::

### Layout Responsivo

Como a maioria dos layouts responsivos, sao disponibilizados 4 propriedades de tamanho: xs, sm, md and lg.

::: demo
```js
render() {
  return (
    <Layout.Row gutter="10">
      <Layout.Col xs="8" sm="6" md="4" lg="3"><div className="grid-content bg"></div></Layout.Col>
      <Layout.Col xs="4" sm="6" md="8" lg="9"><div className="grid-content bg-light"></div></Layout.Col>
      <Layout.Col xs="4" sm="6" md="8" lg="9"><div className="grid-content bg"></div></Layout.Col>
      <Layout.Col xs="8" sm="6" md="4" lg="3"><div className="grid-content bg-light"></div></Layout.Col>
    </Layout.Row>
  )
}
```
:::

### Atributos do Row
| Atributo      | Descrição          | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | espaçamento do grid | number | — | 0 |
| type | modo de organização das colunas | string | — | — |
| justify | alinhamento horizontal das colunas. Deve possuir o `type` igual a `flex` | string | start/end/center/space-around/space-between | start |
| align | organização vertical no display flex. Deve possuir o `type` igual a `flex` | string | top/middle/bottom | top |
| tag | tag customizada para o elemento | string | * | div |

### Atributos do Col 
| Atributo      | Descrição          | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | numero de colunas do espaçamento | number | — | — |
| offset | numero de colunas de espaçamento a esquerda | number | — | 0 |
| push |  numero de colunas que a coluna deve empurrar a esquerda | number | — | 0 |
| pull |  numero de colunas que a coluna deve andar a esquerda | number | — | 0 |
| xs | Numero de colunas na resolução `<768px`| number/object (ex.:： {span: 4, offset: 4}) | — | — |
| sm | Numero de colunas na resolução `≥768px`| number/object (ex.:： {span: 4, offset: 4}) | — | — |
| md | Numero de colunas na resolução `≥992`| number/object (ex.:： {span: 4, offset: 4}) | — | — |
| lg | Numero de colunas na resolução `≥1200`| number/object (ex.:： {span: 4, offset: 4}) | — | — |
| tag | tag customizada para o elemento | string | * | div |
