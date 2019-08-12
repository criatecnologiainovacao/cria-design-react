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

:::demo Ao digitar um valor e pressionar o botao enter, o valor digitado e adicionado no multipleValue. Clicando no
icone de fechar, o item e removido.
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

### Atributos de Input

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| id | O identificador que será exibido na tag HTML | string | — | — |
| type | O tipo do input. Aceita todos os valores de tipo do Input nativo.  | string | text / textarea | text |
| disabled | Desativa o input | boolean | — | false |
| placeholder | Text que será apresentado internamente no input | string | — | — |
| readOnly | Transforma o input em read only. Ele terá a aparência de um input normal, mas seu valor não poderá ser editado | boolean | — | false |
| autoFocus | Ativando este atributo, o input será renderizado e buscará o foco para si | boolean | — | false |
| maxLength | Tamanho máximo de caracteres aceito pelo input | number | — | — |
| minLength | Tamanho mínimo de caracteres aceito pelo input | number | — | — |
| value | O valor que já virá selecionado no input | string / number | — | — |
| clearable | Ativando este atributo, o input possuirá um ícone que limpará seus valores | boolean | — | false |
| showWordLimit | Ativando este atributo, o input mostrará o limite de caracteres permitidos | boolean | — | false |
| suffixIcon | Ícone que será exibido ao final do input | string | — | — |
| prefixIcon | Ícone que será exibido ao início do input | string | — | — |
| label | Ária label do input | string | — | — |
| tabIndex | Índice para a seqüência ao usar tab | string | — | — |
| suffix | Permite adicionar componentes, HTML ou objetos ao sufixo do input | node | — | — |
| prefix | Permite adicionar componentes, HTML ou objetos ao prefixo do input | node | — | — |
| size | Define o tamanho do input. Não reconhecido pelo tipo 'textarea' | string | large / medium /  small / mini | medium |
| prepend | Objetos DOM que serão inseridos à frente do input. Não reconhecido pelo tipo 'textarea' | node | — | — |
| append | Objetos DOM que serão inseridos posterior ao input. Não reconhecido pelo tipo 'textarea' | node | — | — |
| showPassword | Ativando este atributo, um ícone de exibir os valores de uma senha será adicionado. Não reconhecido pelo tipo 'textarea' | boolean | — | false |
| autosize | Ativando este atributo, ou passando o objeto de size, um input do tipo 'textarea' aumentará conforme definido. Se o atributo passado for true, o textarea crescerá conforme a necessidade. Passando o objeto: { maxRows: number, minRows: number} a altura respeitará essas definições.| boolean / object | — | false |
| multiple | Define se o input aceitará múltiplos valores. Exibirá para cada valor uma tag. | boolean | — | false |
| multipleValue | Substitui o atributo value, para inputs do tipo multiple | array | — | — |
| tagType | Para inputs com 'multiple' ativo, define o tipo da tag usada para apresentação | string | primary / success / info / warning / danger | primary |
| tagRounded | Para inputs com 'multiple' ativo, define se a tag usada para apresentação está rounded | boolean | — | true |
| tagSize | Para inputs com 'multiple' ativo, define o tamanho da tag usada para apresentação | string | medium / small / mini | small |
| tagSolid | Para inputs com 'multiple' ativo, define se a tag usada para apresentação, estará com 'solid' ativa | boolean | — | false |
| tagHit | Para inputs com 'multiple' ativo, define se a tag usada para apresentação, estará com 'hit' ativa | boolean | — | false |
| closeable | Para inputs com 'multiple' ativo, define se a tag poderá ou não ser removida | boolean | — | true |
| autoComplete | Ativando este atributo, o auto complete do input será ativado | boolean | — | false |

### Eventos
| Nome do evento | Descrição | Parameters |
|---------- |-------- |---------- |
| onChange | Acionado quando o atributo value muda. | value |
| onBlur | Acionado quando o input é perde o foco | value |
| onChange | Será acionado à cada mudança do valor do input | value |
| onClear | Será acionado quando o input for limpado usando o atributo clearable | — |
| onClick | Será acionado quando o input for clicado | — |
| onIconClick | Será acionado quando o ícone do input for clicado | — |
