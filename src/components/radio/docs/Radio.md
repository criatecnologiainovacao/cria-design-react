## Radio button

Seleção única entre múltiplas opções.

### Uso básico

Radio buttons não devem ter muitas opções. Se este for o caso, prefira outros componentes, como Checkbox ou Select.

:::demo Para criar um componente radio, basta realizar o _bind_ na variável `value`. Também é possível alterar o estado do Radio com o atributo `checked`.
```js
constructor(props) {
  super(props);

  this.state = {
    value: 1
  }
}

onChange(value) {
  this.setState({ value });
}

render() {
  return (
    <div>
      <Radio value="1" checked={this.state.value === 1} onChange={this.onChange.bind(this)}>Option A</Radio>
      <Radio value="2" checked={this.state.value === 2} onChange={this.onChange.bind(this)}>Option B</Radio>
    </div>
  )
}
```
:::

### Desabilitado

Utilize o atributo `disabled` para desabilitar o Radio.

:::demo Atribua um valor ao atributo `disabled` (ou realize um _bind_).
```js
render() {
  return (
    <div>
      <Radio value="1" disabled={true} id="my-radio-disabled">Estou desabilitado</Radio>
      <Radio value="2" disabled={false} id="my-radio-enabled">Estou habilitado!</Radio>
    </div>
  )
}
```
:::

### Radio button group

Utilize o grupo de Radio buttons quando as opções forem mutuamente exclusivas.

:::demo Combine um `Radio.Group` com elementos `Radio` para exibir um grupo de Radio buttons. É preciso realizar o _bind_ no atributo `value` do `Radio.Group` e defina o label dos elementos `Radio`. No `Radio.Group`, registre um _listener_ no evento `onChange` do `Radio.Group` para ser notificado do valor do `Radio` selecionado no momento.

```js
constructor(props) {
  super(props);

  this.state = {
    value: 3
  }
}

onChange(value) {
  this.setState({ value });
}

render() {
  return (
    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>
      <Radio value="3">Option A</Radio>
      <Radio value="6">Option B</Radio>
      <Radio value="9">Option C</Radio>
    </Radio.Group>
  )
}
```
:::

### Atributos dos componentes Radio e Radio.Group

 Atributo      | Descrição          | Tipo      | Valores aceitos       | Default
---- | ---- | ---- | ---- | ----
checked | Determina se o Radio está marcado | boolean | — | false
value | O valor interno do Radio | string/number/boolean | — | —
disabled | Determina se o Radio está desabilitado | boolean | — | false
name | Atributo nativo 'name' | string    |      —         |     —
id | Atributo nativo 'id' do input | string    |      —         |     —

### Eventos dos componentes Radio e Radio.Group

| Nome do evento | Descrição | Parâmetros |
--- | --- | ---
onChange | Disparado quando o valor interno for alterado | O `value` do Radio selecionado