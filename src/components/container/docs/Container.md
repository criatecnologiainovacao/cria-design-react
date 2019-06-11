## Container
Componentes de organização principais das telas

`<Container>`: Container de componentes. Quando usado com um `<Header>` ou `<Footer>`, todos os componentes filhos vão ser organizados verticalmente, caso contrário, horizontalmente.

`Header>`: Container de cabeçalho.

`<Aside>`: Container lateral, geralmente usado para menus laterais.

`<Main>`: Container com os elementos centrais.

`<Footer>`: Container do rodapé.

### Common layouts

:::demo
```js
render() {
  return (
    <div>
        <Container>
          <Header>Header</Header>
        </Container>
        
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
          <Footer>Footer</Footer>
        </Container>
        
        <Container>
          <Aside width="200px">Aside</Aside>
          <Main>Main</Main>
        </Container>
        
        <Container>
          <Header>Header</Header>
          <Container>
            <Aside width="200px">Aside</Aside>
            <Main>Main</Main>
          </Container>
        </Container>
        
        <Container>
          <Header>Header</Header>
          <Container>
            <Aside width="200px">Aside</Aside>
            <Container>
              <Main>Main</Main>
              <Footer>Footer</Footer>
            </Container>
          </Container>
        </Container>
        
        <Container>
          <Aside width="200px">Aside</Aside>
          <Container>
            <Header>Header</Header>
            <Main>Main</Main>
          </Container>
        </Container>
        
        <Container>
          <Aside width="200px">Aside</Aside>
          <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
          </Container>
        </Container>

    </div>
    )
}
```
:::

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | Orientação da organização dos elementos. | string | horizontal / vertical | vertical when nested with `Header` or `Footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Altura do cabeçalho. | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | Largura do menu lateral. | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Altura do rodapé. | string | — | 60px |
