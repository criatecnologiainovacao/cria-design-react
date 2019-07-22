## Notification

Exibe uma notificação no canto superior direito da página.

### Uso básico
   
   ::: demo 
   Defina o `layout` com diferentes elementos de paginação que você deseja exibir separados por vírgula. 
   Os elementos de paginação são: `prev` (um botão navegando para a página anterior), 
   `next` (um botão navegando para a próxima página).
   
   ```js
   render() {
       return (
           <div className="first">
             <div className="block">
               <span className="demonstration">Quando você tem poucas páginas</span>
               <Pagination layout="prev, pager, next" total={50}/>
             </div>
             <div className="block">
               <span className="demonstration">Quando você tem mais de 7 páginas</span>
               <Pagination layout="prev, pager, next" total={1000}/>
             </div>
           </div>
         )
   }
   ```
   
   :::
   
### Paginação Pequena

::: demo 
Basta definir o atributo `small` como `true` e a paginação se torna menor.

```js
render() {
       return ( <Pagination layout="prev, pager, next" total={50} small={true} /> )         
}
```

:::

### Atributos

| Atributo      | Descrição          | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| small     | Se usar paginação pequena | boolean   | — | false |
| pageSize      | Contagem de itens de cada página | number    | — | 10 |
| currentPage  | Número da página atual | number  | — | 1 |
| layout  | Layout de paginação, elementos separados por uma vírgula | string  | vertical/horizontal | vertical |
   
 ### Eventos
 | Nome do evento | Descrição | Parameters |
 |---------- |-------- |---------- |
 | onCurrentChange | Dispara quando alterações de página atual. | A nova página atual
|