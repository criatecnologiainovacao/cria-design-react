## Checkbox

Componente que define o checkbox

### Uso Básico

Checkbox pode ser utilizado sozinho para alternar entre dois estados.

:::demo

```js
render() {
  return (
    <div>
        <Checkbox checked>Option</Checkbox>
    </div>
  )
}
```
:::

### Checkbox desativado

Estado desativado para checkbox.

:::demo Defina o atributo `disabled`. 

```js
render() {
  return (
    <div>
        <Checkbox disabled>Option 1</Checkbox>
        <Checkbox checked disabled>Option 2</Checkbox>
    </div>
  )
}
```
::: 

### Checkbox group

É utilizado para múltiplos checkboxes vinculados a um grupo.

:::demo `Checkbox.Group` element can manage multiple checkboxes in one group by using `value` which is bound as an `Array`. Inside the `Checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, label will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

```js
render() {
    const groupState = {
        checkList: ['Option A', 'Selected and disabled']
  }

  return (
    <div>
        <Checkbox.Group value={groupState.checkList}>
            <Checkbox label="Option A"></Checkbox>
            <Checkbox label="Option B"></Checkbox>
            <Checkbox label="Option C"></Checkbox>
            <Checkbox label="Disabled" disabled></Checkbox>
            <Checkbox label="Selected and disabled" disabled></Checkbox>
        </Checkbox.Group>
    </div>
  )
}
```
::: 

### Button style

Checkbox com estilo de botões.

:::demo É apenas necessário trocar `<cd-checkbox>` eleneto para `<cd-checkbox-button>` elemento. 

```js
render() {
    const buttonState = {
        cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Beijing'],
        checkboxGroup3: ['Guangzhou']
    }
  return (
    <div>
            <div style={{margin: '15px 0'}}></div>
            <Checkbox.Group value={buttonState.checkboxGroup1}>
                {
                    buttonState.cities.map((city, index) => {
                    return <Checkbox.Button key={index} label={city}>{city}</Checkbox.Button>
                })
                }
            </Checkbox.Group>
            <div style={{margin: '15px 0'}}></div>
            <Checkbox.Group value={buttonState.checkboxGroup2} size="small">
                {
                    buttonState.cities.map((city, index) => {
                    return <Checkbox.Button key={index} label={city} disabled={city === 'Shenzhen'}>{city}</Checkbox.Button>
                })
                }
            </Checkbox.Group>
            <div style={{margin: '15px 0'}}></div>
            <Checkbox.Group value={buttonState.checkboxGroup3} size="large" fill="#324057" textColor="#a4aebd" min="1" max="3">
                {
                    buttonState.cities.map((city, index) => {
                    return <Checkbox.Button key={index} label={city}>{city}</Checkbox.Button>
                })
                }
            </Checkbox.Group>
    </div>
  )
}
```
::: 

### Checkbox Atributos

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label     | Valor do checkbox quando utilizado dentro de um Checkbox.Group. | string    | — | — |
| trueLabel      | Valor do checkbox se está marcado.  | string / number    | — | — |
| falseLabel      | Valor do checkbox se não está marcado. | string / number  | — | —  |
| disabled     | Se o checkbox está desativado. | boolean   | — | false |
| checked | Se o checkbox está marcado. | boolean   | — | false |
| indeterminate | O mesmo que indeterminate em um checkbox nativo. | boolean | — | false |

### Checkbox-group Atributos

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value     | Usado para definir o valor selecionado atual. | string[]    | — | — |
| size      | O tamanho dos checkbox buttons.  | string | large / small  | — |
| fill      | cores de borda e background quando o botão está ativado. | string  | — | #20a0ff  |
| textcolor     | Cor da fonte quando o botão está ativado. | string   | — | false |
| min | Quantidade mínima de checkboxes marcadas | number   | — | — |
| max | Quantidade máxima de checkboxes marcadas. | number | — | — |

### Eventos
| Nome do evento | Descrição | Parameters |
|---------- |-------- |---------- |
| onChange | Acionado quando o atributo value muda. | value |