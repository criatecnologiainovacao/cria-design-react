## Notification

Exibe uma notificação no canto superior direito da página.

### Uso básico

::: demo O elemento registra o método `Notification` que recebe um objeto como parâmetro.
No caso mais simples, é possível passar apenas os atributos `title` e `message`.
Por padrão, a notificação desaparece após 4500ms, mas é possível especificar o parâmetro `duration` (em ms).
Se o valor passado for `0`, a notificação não desaparecerá automaticamente.

```js
render() {
  return (
    <div>
      <Button plain={true} onClick={this.open.bind(this)}>Fecha automaticatimente</Button>
      <Button plain={true} onClick={this.open2.bind(this)}>Não fecha automaticamente</Button>
    </div>
  )
}

open() {
  Notification({
    title: 'Título',
    message: 'Aviso do sistema'
  });
}

open2() {
  Notification({
    title: 'Atenção',
    message: 'Essa mensagem não desaparece automaticamente',
    duration: 0
  });
}
```
:::

### Tipos

São disponibilizados quatro tipos de notificações: `success`, `warning`, `info` e `error`.

::: demo Para especificar o tipo, basta usar o parâmetro `type`. Também é possível definir o tipo através de métodos auxiliares do objeto `Notification`, como nos exemplos `open5` e `open6`, abaixo.
```js
render() {
  return (
    <div>
      <Button plain={true} onClick={this.open3.bind(this)}>Success</Button>
      <Button plain={true} onClick={this.open4.bind(this)}>Warning</Button>
      <Button plain={true} onClick={this.open5.bind(this)}>Info</Button>
      <Button plain={true} onClick={this.open6.bind(this)}>Error</Button>
    </div>
  )
}

open3() {
  Notification({
    title: 'Success',
    message: 'Mensagem de sucesso',
    type: 'success',
    duration: 0
  });
}

open4() {
  Notification({
    title: 'Warning',
    message: 'Mensagem de advertência',
    type: 'warning'
  });
}

open5() {
  Notification.info({
    title: 'Info',
    message: 'Mensagem de informação padrão'
  });
}

open6() {
  Notification.error({
    title: 'Error',
    message: 'Mensagem de erro'
  });
}
```
:::

### Importação do componente

Para utilizar o componente, basta importar `Notification`:

```javascript
import { Notification } from 'element-react';
```

### Options
| Atributo      | Descrição          | Tipo      | Valores aceitos       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | título | string | — | — |
| message | mensagem descritiva | string/ReactElement | — | — |
| type | tipo da notificação | string | success/warning/info/error | — |
| iconClass | classe customizada para o ícone. Irá sobreescrever o ícone padrão do `type` especificado | string | — | — |
| duration | duração da mensagem, antes de desaparecer. Se for passado `0`, a mensagem não será fechada automaticamente | number | — | 4500 |
| onClose | função de callback quando da notificação fechada | function | — | — |
| onClick | função de callback quando a notificação receber um click | function | — | — |
| top | top | integer | — | 16 |
| position | posição na tela | string | right/left | 'right |

### Methods
`Notification` retorna a instância atual. Para fechá-la manualmente é possível invocar o método `close`.

| Método | Descrição |
| ---- | ---- |
| close | fecha a notificação |