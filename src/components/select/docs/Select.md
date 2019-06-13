## Select

Quando houver muitas opções, use um menu suspenso para exibir e selecionar as desejadas.

### Uso basico

:::demo `value` é o valor do` Option` atualmente selecionado.

```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: ''
  };
}

render() {
  return (
    <Select value={this.state.value}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
:::

### Opção desabilitada

:::demo Defina o valor de `disabled` em ` Option` para `true` para desativar esta opção.

```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2',
      disabled: true
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: ''
  };
}

render() {
  return (
    <Select value={this.state.value}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} disabled={el.disabled} />
        })
      }
    </Select>
  )
}
```
:::

### Desabilitado

Desative o componente inteiro.

:::demo Defina `disabled` de` Select` para desativá-lo.
```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }],
    value: ''
  };
}

render() {
  return (
    <Select value={this.state.value} disabled={true}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
:::

### Select apagavel

Você pode limpar Selecionar usando um ícone claro.

::: demo Defina o atributo `clearable` para` Select` e um ícone de apagar aparecerá. Note que 'limpável' é apenas para seleção única.
```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: ''
  };
}

render() {
  return (
    <Select value={this.state.value} clearable={true}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
:::

### Multi select simples

Seleção múltipla usa tags para exibir as opções selecionadas.

:::demo Defina o atributo `multiple` para` Select` para ativar o modo múltiplo. Nesse caso, o valor de `selected` será um array de opções selecionadas.
```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: []
  };
}

render() {
  return (
    <Select value={this.state.value} multiple={true}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
:::

### Personalizado

Você pode personalizar modelos HTML para opções.

::: demo Inserir modelos HTML personalizados em `Option`.

```js
constructor(props) {
  super(props);

  this.state = {
    cities: [{
      value: 'Beijing',
      label: 'Beijing'
    }, {
      value: 'Shanghai',
      label: 'Shanghai'
    }, {
      value: 'Nanjing',
      label: 'Nanjing'
    }, {
      value: 'Chengdu',
      label: 'Chengdu'
    }, {
      value: 'Shenzhen',
      label: 'Shenzhen'
    }, {
      value: 'Guangzhou',
      label: 'Guangzhou'
    }],
    value: []
  };
}

render() {
  return (
    <Select value={this.state.value}>
      {
        this.state.cities.map(el => {
          return (
            <Select.Option key={el.value} label={el.label} value={el.value}>
              <span style={{float: 'left'}}>{el.label}</span>
              <span style={{float: 'right', color: '#8492a6', fontSize: 13}}>{el.value}</span>
            </Select.Option>
          )
        })
      }
    </Select>
  )
}
```
:::

### Grupos de opções

Exibe opções em grupos.

::: demo Use `OptionGroup` para agrupar as opções, e seu atributo` label` significa o nome do grupo.

```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      label: 'Popular cities',
      options: [{
        value: 'Shanghai',
        label: 'Shanghai'
      }, {
        value: 'Beijing',
        label: 'Beijing'
      }]
    }, {
      label: 'City name',
      options: [{
        value: 'Chengdu',
        label: 'Chengdu'
      }, {
        value: 'Shenzhen',
        label: 'Shenzhen'
      }, {
        value: 'Guangzhou',
        label: 'Guangzhou'
      }, {
        value: 'Dalian',
        label: 'Dalian'
      }]
    }],
    value: ''
  };
}

render() {
  return (
    <Select value={this.state.value}>
      {
        this.state.options.map(group => {
          return (
            <Select.OptionGroup key={group.label} label={group.label}>
              {
                group.options.map(el => {
                  return (
                    <Select.Option key={el.value} label={el.label} value={el.value}>
                      <span style={{float: 'left'}}>{el.label}</span>
                      <span style={{float: 'right', color: '#8492a6', fontSize: 13}}>{el.value}</span>
                    </Select.Option>
                  )
                })
              }
            </Select.OptionGroup>
          )
        })
      }
    </Select>
  )
}
```
:::

### Filtro

Você pode filtrar as opções para as suas desejadas.

::: demo Adicionando `filterable` a` Select` habilita a filtragem. Por padrão, Select irá encontrar todas as opções cujo atributo `label` contém o valor de entrada. Se você preferir outras estratégias de filtragem, pode passar o `filterMethod`. `filterMethod` é uma` Function` que é chamada quando o valor de entrada é alterado e seu parâmetro é o valor de entrada atual.
```js
constructor(props) {
  super(props);

  this.state = {
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: []
  };
}

render() {
  return (
    <Select value={this.state.value} filterable={true}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
:::

### Busca remota

Insira palavras-chave e pesquise dados do servidor.

::: demo Defina o valor de `filterable` e` remote` com `true` para ativar a pesquisa remota, e você deve passar o` remoteMethod`. `remoteMethod` é uma` Function` que é chamada quando o valor de entrada é alterado e seu parâmetro é o valor de entrada atual.
```js
constructor(props) {
  super(props);

  this.state = {
    options: [],
    states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",   "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  }
}

onSearch(query) {
  if (query !== '') {
    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        loading: false,
        options: this.state.states.map(item => {
          return { value: item, label: item };
        }).filter(item => {
          return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      });
    }, 200);
  } else {
    this.setState({
      options: []
    });
  }
}

render() {
  return (
    <Select value={this.state.value} multiple={true} filterable={true} remote={true} remoteMethod={this.onSearch.bind(this)} loading={this.state.loading}>
      {
        this.state.options.map(el => {
          return <Select.Option key={el.value} label={el.label} value={el.value} />
        })
      }
    </Select>
  )
}
```
:::

### Atributos Select
| Atributo | Descrição | Tipo | Valores aceitos | Padrão |
| ---------- | -------------- | ---------- | ------------ -------------------- | -------- |
| multiple | se a seleção múltipla está ativada | booleano | - | false |
| disabled | se Selecionar está desativado | booleano | - | false |
| size | tamanho de entrada | string | grande / pequeno / mini | - |
| clearable | se seleção única pode ser desmarcada | booleano | - | false |
| multipleLimit | Número máximo de opções que o usuário pode selecionar quando `multiple` é` true`. Sem limite quando definido para 0 | número | - | 0 |
| name | o atributo name da entrada de seleção | string | - | - |
| placeholder | placeholder | string | - | Selecione |
| filterable | se Selecionar é filtrável | booleano | - | false |
| allowCreate | se a criação de novos itens é permitida. Para usar isso, `filterable` deve ser true | booleano | - | false |
| filterMethod | método de filtro personalizado | função | - | - |
| remote | se as opções são carregadas do servidor | booleano | - | false |
| remoteMethod | método de pesquisa remota personalizada | função | - | - |
| loading | se Select está carregando dados do servidor | booleano | - | false |
| loadingText | texto exibido ao carregar dados do servidor | string | - | Carregando |
| noMatchText | texto exibido quando nenhum dado corresponde à consulta de filtragem | string | - | Não há dados correspondentes |
| noDataText | texto exibido quando não há opções | string | - | Sem dados |
| popperClass | nome de classe personalizado para o menu suspenso de Select | string | - | - |
| selected | valor das opçoes selecionadas quando `multiple` é `true`. | String | - | - |
| value | valor do select quando `multiple` é `false`. | String | - | - |

### Selecionar eventos
| Nome do Evento | Descrição | Parâmetros |
| --------- | --------- | --------- |
| onChange | dispara quando o valor selecionado é alterado | valor selecionado atual |
| onVisibleChange | dispara quando a lista suspensa aparece / desaparece | true quando aparece, e false caso contrário |
| onRemoveTag | dispara quando uma tag é removida no modo múltiplo | valor de tag removido |
| onClear | dispara quando o ícone claro é clicado em uma limpeza Seleciona | - |

### Atributos do grupo de opções
| Atributo | Descrição | Tipo | Valores aceitos | Padrão |
| ---------- | -------------- | ---------- | ------------ -------------------- | -------- |
| label | nome do grupo | string | - | - |
| disabled | se deseja desativar todas as opções neste grupo | booleano | - | false |

### Atributos da Opção
| Atributo | Descrição | Tipo | Valores aceitos | Padrão |
| ---------- | -------------- | ---------- | ------------ -------------------- | -------- |
| value | valor da opção | string / número / objeto | - | - |
| label | label of option, igual a `value` se omitido | string / número | - | - |
| disabled | se a opção está desativada | booleano | - | false |
