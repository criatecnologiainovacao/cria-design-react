## Botão

Componente de botão.

### Uso básico

Barra de progresso de etapas, pode ser customizada em nomes de etapas e eventos.

:::demo Use os atributos `steps` para definir quais os passos.

```js
constructor(props) {
    super(props);
    this.state = {
        steps : ['Test1','Test2','Test3','Test4','Test5','Test6']
    } 
}

render() {
  return (
    <div>
        <StepBar steps={this.state.steps}/>
    </div>
     )
}
```
:::

### Clickavel

Por padrão o step já vem com ação de click para trocar o passo.
Através da propriedade `clickable` é possivel adicionar o evento de click a barra.
:::demo Adicione ou remova o atributo `clickable` da barra.

```js
constructor(props) {
    super(props);
    this.state = {
        steps : ['Clickable1','Clickable2']
    } 
}

render() {
  return (
    <div>
        <StepBar steps={this.state.steps} clickable/>
    </div>
     )
}
```
:::

### onClick

É possivel adicionar uma ação de click no step, por padrão ela somente muda o step ativo.
:::demo
```js
constructor(props) {
    super(props);
    this.state = {
        steps : ['Click1','Click2','Click3','Click4']
    } 
}
render() {
  return (
    <div>
        <StepBar steps={this.state.steps} clickable onClick={() => alert("Click")}/>
    </div>
     )
}
```
:::

### ActiveStep

É possivel manipular externamente qual o step ativo.
:::demo Modifique o atributo `activeStep` e a barra sera atualizada.
```js
constructor(props) {
    super(props);
    this.state = {
        steps : ['Click1','Click2','Click3','Click4'],
         activeStep: 2
    } 
}
render() {
  return (
    <div>
        <StepBar steps={this.state.steps} activeStep={this.state.activeStep}/>
    </div>
     )
}
```
:::

### Atributos

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| steps     | O tamanho do botão | array    | - | — |
| activeStep      | O tipo do botão | number    | primary / success / warning / danger / info / text | — |
| clickable      | Determina se o botão terá o estilo simples | boolean | — | false |

### Eventos
| Nome do evento | Descrição | Parameters |
|---------- |-------- |---------- |
| onClick | Acionado quando o botão é clicado. | — |
