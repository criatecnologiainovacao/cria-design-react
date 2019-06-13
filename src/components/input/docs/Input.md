## Input

Input de dados.

### Uso básico

:::demo df

```js
render() {
  return (
    <div>
        <Input placeholder="Digite aqui..."/>
    </div>
  )
}
```
:::

### Inputs desativados

O atributo `disabled` determina se um atributo está desativado.

:::demo Use o atributo `disabled` para determinar se um input estará desativado, esse aceita um valor `Boolean`.

```js
render() {
  return (
    <div>
        <Input disabled placeholder="Input disabled"/>
        <br/>
        <br/>
        <Input type="textarea" disabled placeholder="Textarea disabled"/>
    </div>
  )
}
```
:::

### Ícones

O input aceita um ícone tanto antes como após seu conteúdo.

:::demo Use o atributo `prefixIcon` para adicionar um ícone ao início do input, e `suffixIcon` para adicioná-lo ao final.

```js
render() {
  return (
    <div>
        <Input prefixIcon="cd-icon-search" placeholder="Busque aqui..."/>
        <br/>
        <br/>
        <Input suffixIcon="cd-icon-edit" placeholder="Edite este campo"/>
    </div>
  )
}
```
:::

### Clearable

:::demo Transforme o atributo em clearable com o atributo `clearable`.

```js
render() {
  return (
    <div>
        <Input clearable placeholder="Digite aqui..."/>
    </div>
  )
}
```
:::

### Password

:::demo Utilize o atributo `showPassword` para criar um input de password que pode ser visível ou não.

```js
render() {
  return (
    <div>
        <Input showPassword placeholder="Digite sua senha aqui..."/>
    </div>
  )
}
```
:::

### Autosize textarea

:::demo Definir a propriedade `autoSize` para um textarea faz com que a altura seja ajustada automaticamente com base no conteúdo. Um objeto pode ser fornecido para dimensionar automaticamente para um valor mínimo e máximo de linhas.

```js
render() {
  return (
    <div>
        <Input type="textarea" autoSize placeholder="Digite aqui..."/>
        <br/>
        <br/>
        <Input type="textarea" placeholder="Digite aqui..." autoSize={{ minRows: 2, maxRows: 4 }}/>
    </div>
  )
}
```
:::

### Multiple input

A propriedade `multiple` como verdadeira faz com que o Input aceite varios valores.

:::demo Definir 
```js
render() {
  return (
    <div style={{display: 'flex'}}>
        <Input ref="input" multiple />
        <Button style={{
            height: '38px',
           'margin-left': '20px'
        }} onClick={() => {alert(this.refs.input.state.multipleValue)}}>Click</Button>
    </div>
  )
}
```
:::
