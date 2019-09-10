## Tag

Usado para marcação e seleção.

### Uso básico

Por padrao o menu lateral vem com collapse fechado.

:::demo Use o atributo `collapsed` para definir se ele esta aberto ou fechado.

```js
render() {
  return (
    <div>
      <Menu defaultActive="1">
          <Menu.Item index="1">
              <i className="cd-icon-message"/>
              <span>
                  Navigator One
            </span>
          </Menu.Item>
          <Menu.SubMenu index="2" icon="cd-icon-message" title="Navigator Two">
              <Menu.Item index="2-1"><span>Option 1</span></Menu.Item>
              <Menu.Item index="2-2"><span>Option 2</span></Menu.Item>
              <Menu.Item index="2-3"><span>Option 3</span></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="3"> <i className="cd-icon-message"/><span>Navigator Tree</span></Menu.Item>
      </Menu>
    </div>
  )
}
```
:::


### Titulo

:::demo Use o atributo `title` para definir o tipo da Tag.

```js
render() {
  return (
    <div>
      <Menu titleDisabled collapsed={false} defaultActive="1">
          <Menu.Item index="1">
              <i className="cd-icon-message"/>
              <span>
                  Navigator One
            </span>
          </Menu.Item>
          <Menu.SubMenu index="2" icon="cd-icon-message" title="Navigator Two">
              <Menu.Item index="2-1"><span>Option 1</span></Menu.Item>
              <Menu.Item index="2-2"><span>Option 2</span></Menu.Item>
              <Menu.Item index="2-3"><span>Option 3</span></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="3"> <i className="cd-icon-message"/><span>Navigator Tree</span></Menu.Item>
      </Menu>
    <Menu title={'customTitle'} collapsed={false} defaultActive="1">
          <Menu.Item index="1">
              <i className="cd-icon-message"/>
              <span>
                  Navigator One
            </span>
          </Menu.Item>
          <Menu.SubMenu index="2" icon="cd-icon-message" title="Navigator Two">
              <Menu.Item index="2-1"><span>Option 1</span></Menu.Item>
              <Menu.Item index="2-2"><span>Option 2</span></Menu.Item>
              <Menu.Item index="2-3"><span>Option 3</span></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="3"> <i className="cd-icon-message"/><span>Navigator Tree</span></Menu.Item>
      </Menu>


    </div>
  )
}
```
:::

### Atributos

| Atributo      | Descrição          | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | Define o texto que deve estar escrito | string    | — | Menu |
| titleDisable      | Remove a barra de titulo do menu | boolean    | — | false |
| collapsed  | Altera o estado de collapse do menu | boolean  | — | true |
| mode  | Define se o menu e horizontal ou vertical | string  | vertical/horizontal | vertical |
