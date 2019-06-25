## Tooltip

Moldura flutuante que abre quando passa-se o mouse sobre o elemento da interface. 

### Uso básico

Tooltip tem 9 posicionamentos.

:::demo 
Use o atributo `content` para definir o conteúdo de exibição quando passar o mouse. O atributo `placement` determina a posição da `tooltip`. Seu valor é `[orientação] - [alinhamento]` com quatro orientações `top`, `left`, `right`, `bottom` e três alinhamentos `start`, `end`, `null` e o alinhamento padrão é `null`.
`
```js
render() {
  return (
    <div className="box">
                    <div className="top">
                        <Tooltip className="item" effect="dark" content="Top Left prompts info" placement="top-start">
                            <Button>top-start</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Top Center prompts info" placement="top">
                            <Button>top</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Top Right prompts info" placement="top-end">
                            <Button>top-end</Button>
                        </Tooltip>
                    </div>
                    <div className="left">
                        <Tooltip className="item" effect="dark" content="Left Top prompts info" placement="left-start">
                            <Button>left-start</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Left Center prompts info" placement="left">
                            <Button>left</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
                            <Button>left-end</Button>
                        </Tooltip>
                    </div>
    
                    <div className="right">
                        <Tooltip className="item" effect="dark" content="Right Top prompts info" placement="right-start">
                            <Button>right-start</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Right Center prompts info" placement="right">
                            <Button>right</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
                            <Button>right-end</Button>
                        </Tooltip>
                    </div>
                    <div className="bottom">
                        <Tooltip className="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
                            <Button>bottom-start</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
                            <Button>bottom</Button>
                        </Tooltip>
                        <Tooltip className="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
                            <Button>bottom-end</Button>
                        </Tooltip>
                    </div>
                </div>
  )
}
```
:::

### Temas
   
   :::demo Definir `effect` para modificar o tema. O valor padrão é `dark`.
   
   ```js
   render() {
     return (
       <div className="temas">
             <Tooltip content="Top center" placement="top">
               <Button>Dark</Button>
             </Tooltip>
             <Tooltip content="Bottom center" placement="bottom" effect="light">
               <Button>Light</Button>
             </Tooltip>
       </div>
     )
   }
   ```
:::

### Mais conteúdo

:::demo Definir `effect` para modificar o tema. O valor padrão é `dark`.

```js
render() {
  return (
     <div className="temas">
        <Tooltip
              placement="top"
              content={
                <div>multiple lines<br/>second line</div>
              }
            >
              <Button>Top center</Button>
        </Tooltip>
    </div>
  )
}
```
:::

### Table Atributos

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| effect     | Tema do Tooltip. | String    | dark / light | — |
| content      | Mostra o conteúdo.  | String / Node | —   | — |
| placement      | Posição do Tooltip. | String | top / top-start / top-end /bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom |
| visible     | Visibilidade do Tooltip. | Boolean   | — | false |
| disabled | Se o Tolltip está desativado. | Boolean   | — | false |
| transition | Nome da animação. | String   | — | fade-in-linear |
| visibleArrow | Se uma seta é exibida. | Boolean | — | true |
| openDelay | Atraso de aparição, em milissegundo. | Number | — | 0 |
| manual | Se deve controlar manualmente o Tooltip. mouseenter e mouseleave não terão efeitos se configurados como true. | Boolean | true / false | false |