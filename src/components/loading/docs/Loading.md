## Loading

Exibe uma animação enquanto dados são carregados.

### Loading dentro de um container

Exibe a animação dentro de um container, como um `Table`.

:::demo

```js
constructor(props) {
  super(props);

  this.table = {
    columns: [
      {
        label: "Date",
        prop: "date",
        width: 180
      },
      {
        label: "Nome",
        prop: "name",
        width: 180
      },
      {
        label: "Endereço",
        prop: "address"
      }
    ],
    data: [{
      date: '2019-07-02',
      name: 'Sr. Fulano',
      address: 'Rua Central, nº 123'
    }, {
      date: '2019-07-04',
      name: 'Dr. Ciclano',
      address: 'Alameda dos Desconhecidos, nº 234'
    }, {
      date: '2019-07-01',
      name: 'Msc. Beltrana',
      address: 'Avenida Lateral, s/n'
    }]
  }
}

render() {
  return (
    <div className="cd-loading-demo">
      <Loading>
        <Table
          style={{width: '100%'}}
          columns={this.table.columns}
          data={this.table.data}
        />
      </Loading>
    </div>
  )
}
```
:::

### Loading com texto personalizado

É possível personalizar a mensagem do componente de `Loading`.

:::demo Adicionar o atributo `text` para exibir um texto personalizado abaixo do _spinner_.
```js
constructor(props) {
  super(props);

  this.table = {
    columns: [
      {
        label: "Date",
        prop: "date",
        width: 180
      },
      {
        label: "Nome",
        prop: "name",
        width: 180
      },
      {
        label: "Endereço",
        prop: "address"
      }
    ],
    data: [{
      date: '2019-07-02',
      name: 'Sr. Fulano',
      address: 'Rua Central, nº 123'
    }, {
      date: '2019-07-04',
      name: 'Dr. Ciclano',
      address: 'Alameda dos Desconhecidos, nº 234'
    }, {
      date: '2019-07-01',
      name: 'Msc. Beltrana',
      address: 'Avenida Lateral, s/n'
    }]
  }
}

render() {
  return (
    <div className="el-loading-demo">
      <Loading text="Carregando dados dos usuários...">
        <Table
          style={{width: '100%'}}
          columns={this.table.columns}
          data={this.table.data}
        />
      </Loading>
    </div>
  )
}
```
:::

### Loading em fullscreen

:::demo Adicione o atributo `fullscreen` para exibir o `Loading` em tela cheia, sendo adicionado ao `body` da página.

```js
constructor(props) {
  super(props);

  this.state = {
    fullscreen: false
  }
}

onClick() {
  clearTimeout(this.timeout);

  this.timeout = setTimeout(() => {
    this.setState({
      fullscreen: false
    });
  }, 3000);

  this.setState({
    fullscreen: true
  });
}

render() {
  return (
    <div>
      <Button type="primary" onClick={this.onClick.bind(this)}>Loading em fullscreen por 3 segundos</Button>
      {
        this.state.fullscreen && <Loading fullscreen={true} />
      }
    </div>
  )
}
```
:::

### Options
| Atributo      | Descrição          | Tipo      | Valores aceitos       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fullscreen | exibe o loading em tela cheia | boolean | — | true |
| text | texto exibido abaixo do _spinner_ | string | — | — |
| loading | controla o estado do componente, exibindo-o, ou não | bool | - | true |
