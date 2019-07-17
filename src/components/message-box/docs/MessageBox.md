## MessageBox

Um conjunto de modais para serem utilizadas como caixa de mensagens, principalmente para confirmações de ações, mensagens de sucesso, erro, ou outros avisos de destaque.

Conteúdo e textos customizados


### Alert

Exibe uma modal que bloqueia outras ações até que o usuário confirme. Retorna uma `Promise` que é chamada quando a modal é fechada.

:::demo Abre um MessageBox por meio do método `alert`. Os parâmetros esperados são `mensagem`, `titulo` e outras `options`. Por padrão, o tipo da modal é de sucesso.

```js
render() {
  return <Button type="text" onClick={this.onClick.bind(this)}>Clique para exibir o Message Box</Button>
}

onClick() {
  MessageBox.alert('O usuário foi criado com sucesso', 'Novo usuário');
}
```
:::

### Confirm

Exibe uma modal que pede confirmação do usuário, com as opções de confirmação e cancelamento. É possível pesonalizar o teor da mensagem ao se utilizar o parâmetro `type` nas `options`. os tipos aceitos são `success`, `warning`, `info` e `error`.

:::demo Ao serem clicados, os botões de confirmação e cancelamento irão, respectivamente, resolver e rejeitar a `Promise` retornada.

```js
render() {
  return <Button type="text" onClick={this.onClick.bind(this)}>Clique para exibir o Message Box de confirmação</Button>
}

onClick() {
  MessageBox.confirm('Tem certeza que deseja remover este item?', 'Confirmação', { type: 'warning' })
    .then(() => {
        console.log('O botão de confirmar foi clicado');
    })
    .catch(() => {
        console.log('O botão de cancelar foi clicado');
    });
}
```
:::

### Customização

O conteúdo da modal pode ser facilmente personalizado. Por exemplo, os textos e classes dos botões e a classe do componente podem ser especificados como `options`. Também é possível utilizar um componente React como conteúdo da mensagem.

:::demo

```js
render() {
  return <Button type="text" onClick={this.onClick.bind(this)}>Clique para exibir o Message Box</Button>
}

onClick() {
  MessageBox.confirm(
    <span>Foi identificado que já existe um item com essa descrição. <strong>Tem certeza que deseja prosseguir?</strong></span>,
    'Aviso do sistema',
    {
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Tenho certeza',
      cancelButtonText: 'Abortar'
    }).then(action => {
      console.log('Confirmado')
    })
    .catch(action => {
      console.log('Cancelado');
    });
}
```
:::

### Importação do componente

Para utilizar o componente, basta importar `MessageBox`:

```javascript
import { MessageBox } from 'element-react';
```

Os métodos disponíveis são: `MessageBox.alert` e `MessageBox.confirm`.

### Options

| Atributo      | Descrição          | Tipo      | Valores aceitos       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | tipo da mensagem, para exibição do ícone | string | success/info/warning/error | — |
| title | título do MessageBox | string | — | — |
| message | conteúdo do MessageBox | string/ReactElement | — | — |
| customClass | classe customizada do container da modal | string | — | - |
| showCancelButton | se o botão de cancelar é exibido | boolean | — | false (true quando chamado com `confirm`) |
| showConfirmButton | se o botão de confirmar é exibido | boolean | — | true |
| cancelButtonText | texto do botão de cancelar | string | — | Cancelar |
| confirmButtonText | texto do botão de confirmar | string | — | OK |
| cancelButtonClass | classe customizada do botão de cancelar  | string | — | — |
| confirmButtonClass | classe customizada do botão de confirmar | string | — | — |