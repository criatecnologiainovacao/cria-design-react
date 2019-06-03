## Breadcrumb

Indica a localização atual do usuário e quais são os níveis superiores da estrutura. 

### Uso básico

Criando um bradcrumb básico.

:::demo Em `Breadcrumb`, cada `Breadcrumb.Item` é uma tag que é utilizada para todos os níveis iniciando da página inicial. 
```js
render() {
    return (
         <div>
                <Breadcrumb separator="/">
                    <Breadcrumb.Item><a href="/">Homepage</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Previous Page</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a>Page Title</a></Breadcrumb.Item>
                </Breadcrumb>
        </div>  
    )
}
```
:::

### Ícones

Breadcrumb utilizando ícone na `Homepage`.

:::demo 
```js
render() {
    return (
                <div>
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item><a href="/"><span class="cd-icon-s-home"> </span></a></Breadcrumb.Item>
                        <Breadcrumb.Item><a>Previous Page</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a>Page Title</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            )
}
```
:::

### Customização
Customizando a separação dos itens do Breadcrumb.

:::demo O atributo `separator` do tipo `String` determina a separação entre os itens do Breadcrumb. O valor padrão é '`/`'.
```js
render() {
    return (
                <div>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><a href="/">Homepage</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a>Previous Page</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a>Page Title</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            )
}
```
:::



### Breadcrumb Atributos
| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator     | O caracter de separação | string    |  — | / |
