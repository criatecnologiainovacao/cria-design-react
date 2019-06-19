## Tabela

Componente tabela

### Uso básico

Tabela básica para mostrar dados.
:::demo After setting attribute data & columns of Table with an object array, you can use prop (corresponding to a key of the object in data array) in column to insert data to table columns, and set the attribute label to define the column name. You can also use the attribute width to define the width of columns.
```js
render() {
    const columns = [
        {
            label: "Date",
            prop: "date",
            width: 180
        },
        {
            label: "Name",
            prop: "name",
            width: 180
        },
        {
            label: "Address",
            prop: "address"
        }
    ];

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

    return (
    <div>
            <Table
            style={{ width: '100%' }}
            columns={columns}
            data={data}
            />
    </div>
    )
}

```
:::

### Stripped Table

Tabela listrada.
:::demo Atributo `stripe` aceita um `Boolean`. Se `true`, tabela será listrada.
```js
render() {
    const columns = [
        {
            label: "Date",
            prop: "date",
            width: 180
        },
        {
            label: "Name",
            prop: "name",
            width: 180
        },
        {
            label: "Address",
            prop: "address"
        }
    ];

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

    return (
    <div>
        <Table
          style={{ width: '100%' }}
          columns={columns}
          data={data}
          stripe={true}
        />
    </div>
    )
}

```
:::

### Tabela com bordas

:::demo Por padrão, Table não tem borda vertical. Se você precisar, você pode modificar o atributo `border` para `true`.
```js
render() {
    const columns = [
        {
            label: "Date",
            prop: "date",
            width: 180
        },
        {
            label: "Name",
            prop: "name",
            width: 180
        },
        {
            label: "Address",
            prop: "address"
        }
    ];

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

    return (
    <div>
        <Table
          style={{ width: '100%' }}
          columns={columns}
          data={data}
          border={true}
        />
    </div>
    )
}

```
:::

### Tabela com única seleção

Seleção de uma única linha também é permitido.

:::demo Table supports single row selection. You can activate it by adding the `highlightCurrentRow` attribute. An event called `onCurrentChange` will be triggered when row selection changes, and its parameters are the rows after and before this change: `currentRow` and `oldCurrentRow`. If you need to display row index, you can add a new `column` with its `type` attribute assigned to `index`, and you will see the index starting from 1.
```js
render() {
    const columns = [
        {
            label: "Date",
            prop: "date",
            width: 180
        },
        {
            label: "Name",
            prop: "name",
            width: 180
        },
        {
            label: "Address",
            prop: "address"
        }
    ];

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

    return (
    <div>
        <Table
          style={{width: '100%'}}
          columns={columns}
          data={data}
          border={true}
          highlightCurrentRow={true}
          onCurrentChange={item => console.log(item)}
        />
    </div>
    )
}

```
:::

### Tabela com múltiplas seleções

Você também pode selecionar múltiplas linhas.
:::demo Activating multiple selection is easy: simply add an `column` with its `type` set to `selection`
```js
render() {
 const columnsMultipleSelect = [
    {
        type: 'selection',
        align: 'center'
    },
    {
        label: "Date",
        prop: "date",
        width: 180
    },
    {
        label: "Name",
        prop: "name",
        width: 180
    },
    {
        label: "Address",
        prop: "address"
    }
]

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

  return (
   <div>
        <Table
          style={{width: '100%'}}
          columns={columnsMultipleSelect}
          data={data}
          border={true}
          height={250}
          onSelectChange={(selection) => { console.log(selection) }}
          onSelectAll={(selection) => { console.log(selection) }}
        />
    </div>
  )
}

```
:::


### Tabela com única seleção com radio

Voce tambem pode usar a tabela com radio.
:::demo Ativar seleção única é fácil: basta adicionar uma `coluna` com seu` tipo` definido para `uniqueSelection` e o atributo `unique` na tabela.
```js
render() {
 const columnUniqueSelect = [
    {
        type: 'uniqueSelection',
        align: 'center'
    },
    {
        label: "Date",
        prop: "date",
        width: 180
    },
    {
        label: "Name",
        prop: "name",
        width: 180
    },
    {
        label: "Address",
        prop: "address"
    }
]

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

  return (
   <div>
        <Table
          style={{width: '100%'}}
          columns={columnUniqueSelect}
          data={data}
          unique
          border={true}
          height={250}
          onSelectChange={(selection) => { console.log(selection) }}
          onSelectAll={(selection) => { console.log(selection) }}
        />
    </div>
  )
}

```
:::

### Tabela sem o Header

Você também pode modificar a tabela para que não apareça o Header.
:::demo Utilize o atributo `showHeader` para escolher entre mostrar ou não o `Header`.
```js
render() {
 const columnsMultipleSelect = [
    {
        type: 'selection',
        align: 'center'
    },
    {
        label: "Date",
        prop: "date",
        width: 180
    },
    {
        label: "Name",
        prop: "name",
        width: 180
    },
    {
        label: "Address",
        prop: "address"
    }
]

const data = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
    }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
}];

  return (
   <div>
        <Table
          style={{width: '100%'}}
          columns={columnsMultipleSelect}
          data={data}
          border={true}
          height={250}
          showHeader={false}
          onSelectChange={(selection) => { console.log(selection) }}
          onSelectAll={(selection) => { console.log(selection) }}
        />
    </div>
  )
}

```
:::

### Tabela com linha expandida

Quando o conteúdo da linha é muito longo, você pode utilizar a ferramenta para expandir a linha.
:::demo Activate expandable row by adding type="expand" and `expandPannel`. The result returned by `expandPannel` will be rendered as the contents of expanded row.
```js
render() {
    let expandableState = {
        columns: [
            {
            type: 'expand',
            expandPannel: function(data) {
                return (
                <div>
                    <p>State: {data.state}</p>
                    <p>City: {data.city}</p>
                    <p>Address: {data.address}</p>
                    <p>Zip: {data.zip}</p>
                </div>
                )
            }
            },
            {
            label: "Date",
            prop: "date",
            width: 400
            },
            {
            label: "Name",
            prop: "name",
            width: 400
            }
        ],
        data: [
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }, {
                date: '2016-05-08',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }, {
                date: '2016-05-06',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }, {
                date: '2016-05-07',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036'
            }
        ]
}

  return (
   <div>
        <Table
          style={{width: '100%'}}
          columns={expandableState.columns}
          data={expandableState.data}
          border={false}
          onCurrentChange={item=>{console.log(item)}}
        />
    </div>
  )
}

```
:::


### Table Atributos

| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data     | Dados da tabela. | array    | — | — |
| height      | Altura da tabela.  | string / number | —   | — |
| maxHeight      | Altura máxima da tabela. | string / number  | — | — |
| stripe     | Se a tabela é listrada. | boolean   | — | false |
| border | Se a tabela tem bordas na vertical. | boolean   | — | false |
| fit | Se a largura da coluna se ajusta automaticamente ao seu contêiner. | boolean | — | true |
| showHeader | Se o Header é visível. | boolean | — | true |
| highlightCurrentRow	 | Se a linha atual está destacada. | boolean | — | false |
| currentRowKey | key or keys of selected row. | string / number / string[] / number[] | — | — |
| rowClassName | Função que retorna um nome customizado para uma linha. | Function(row, index)/String | — | — |
| rowStyle | Função que retorna um estilo customizado para uma linha. | number | — | — |
| rowKey | Chave de dados de linha, usada para otimizar a renderização. Obrigatório se reserveSelection estiver ativado. Quando o seu tipo é String, o acesso multi-nível é suportado, por ex. user.info.id, mas user.info [0] .id não é suportado, nesse caso, Função deve ser usada.. | Function(row)/String | — | — |
| emptyText | Texto exibido quando os dados estão vazios. Você pode personalizar esta área com o slot = "vazio". | String | — | No Data |
| defaultExpandAll | Se expandir todas as linhas por padrão, só funciona quando a tabela tem um tipo de coluna = "expandir". | Boolean | — | false |
| expandRowKeys | Definir linhas expandidas por este prop, valor do prop é as chaves de expandir linhas, você deve definir rowKey antes de usar este prop. | Array | — | — |
| defaultSort | Defina a coluna e a ordem de classificação padrão. propriedade prop é usada para definir a coluna de classificação padrão, a ordem de propriedade é usada para definir a ordem de classificação padrão. | Object | order: ascending, descending| Se prop for definido e a ordem não estiver definida, o pedido será o padrão para ascendente |
| showSummary | Se deseja exibir uma linha de resumo. | Boolean | — | false |
| sumText | Texto exibido para a primeira coluna da linha de resumo. | String | — | Sum |
| summaryMethod | Método de resumo personalizado. | Function({ columns, data }) | — | — |


### Eventos
| Nome do evento | Descrição | Parameters |
|---------- |-------- |---------- |
| onSelect | Dispara quando o usuário clica na caixa de seleção em uma linha. | selection, row |
| onSelectAll | Dispara quando o usuário clica na caixa de seleção no cabeçalho da tabela. | selection |
| onSelectChange | Ativa quando a seleção muda.	 | selection |
| onCellMouseEnter | Desencadeia quando pairar em uma célula.	 | row / column / cell /event |
| onCellMouseLeave | Desencadeia quando pairando fora de uma célula.	 | row / column / cell /event|
| onCellClick | Ativa ao clicar em uma célula.	 | row / column / cell /event |
| onCellDblClick | Ativa ao clicar duas vezes em uma célula. | row / column / cell /event |
| onRowClick | Ativa ao clicar em uma linha. | row / event / column |
| onRowContextMenu | Dispara quando o usuário clica com o botão direito em uma linha. | row / event |
| onRowDblClick | Dispara ao clicar duas vezes em uma linha. | row / event |
| onHeaderClick | Aciona ao clicar em um cabeçalho de coluna. | column / event |
| onSortChange | Dispara quando existem alterações de ordenação da tabela. | { column, prop, order } |
| onFilterChange | Chave da coluna. Se você precisar usar o evento filterChange, esse atributo será obrigatório para identificar qual coluna está sendo filtrada. | filters |
| onCurrenteChange | Dispara quando a linha atual é alterada. | currentRow / oldCurrentRow |
| onHeaderDragend | Aciona quando terminar arrastando o cabeçalho. | newWidth / oldWidth / column  event |
| onExpand | Dispara quando o usuário expande ou recolhe uma linha. | row / expanded |

### Métodos
| Nome do evento | Descrição | Atributos |
|---------- |-------- |---------- |
| clearSelection | Usado em seleção múltipla Tabela, limpar seleção, pode ser útil quando reserveSelection está ativado. | selection |
| toggleRowSelection	 | Usado na tabela de seleção múltipla, alterna se uma determinada linha é selecionada. Com o segundo parâmetro, você pode definir diretamente se esta linha está selecionada. | row / selected |
| setCurrentRow | Usado na tabela de seleção única, defina uma determinada linha selecionada. Se chamado sem nenhum parâmetro, irá limpar a seleção.	 | row |

### Atributos das colunas
| Atributo      | Descrição | Tipo      | Valores aceitos       | Padrão  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type     | Tipo da coluna. Se definido como seleção, a coluna exibirá a caixa de seleção. Se definido como index, a coluna exibirá o índice da linha (visualizando a partir de 1). Se definido para expandir, a coluna exibirá o ícone de expansão. | string  | selection / index / expand	 | — |
| label      | Rótulo da coluna.  | string  | —   | — |
| columnKey     | Chave da coluna. Se você precisar usar o evento onFilterChange, precisará deste atributo para identificar qual coluna está sendo filtrada. | string   | string | — |
| prop      | Nome do campo. Você também pode usar seu alias: property.  | string | —   | — |
| width     | Largura da coluna. | string | — | — |
| minWidth      | Largura mínima da coluna. Colunas com largura tem uma largura fixa, enquanto colunas com minWidth tem uma largura que é distribuída em proporção.  | string | —   | — |
| fixed     | Se a coluna é fixada à esquerda / direita. Será fixado à esquerda se for verdade. | string/boolean | true / left / right	 | — |
| render      | Função de renderização personalizada.  |Function(row, column, index) | —   | — |
| renderHeader      | Função de renderização para o cabeçalho da tabela desta coluna.  | Function(column) | —   | — |
| sortable     | Se a coluna pode ser classificada. A classificação remota pode ser feita configurando esse atributo como 'custom' e ouvindo o evento sortChange da Table. | boolean / string	 | true / false / custom	 | false |
| sortMethod      | Método de classificação, funciona quando a classificação é verdadeira. Deve devolver um booleano.  | Function(a, b)	 | —   | — |
| resizable      | Se a largura da coluna pode ser redimensionada, funciona quando a borda de elTable é verdadeira.  | boolean | —   | false |
| align     | Alinhamento. | string  | left / center / right	 | left |
| headerAlign      | Alinhamento do cabeçalho da tabela. Se omitido, o valor do atributo de alinhamento acima será aplicado.  | String | left / center/right	  | — |
| className      | Nome da classe de células na coluna.  | string | —   | — |
| labelClassName     | Nome da classe do rótulo dessa coluna. | string | — | — |
| selectable      | Função que determina se uma determinada linha pode ser selecionada, funciona quando o tipo é 'seleção'.  | Function(row, index)	 | —   | — |
| reserveSelection      | Se reservar seleção após atualização de dados, funciona quando o tipo é 'seleção'.  |  boolean | —   | false|
| filters      | Uma matriz de opções de filtragem de dados. Para cada elemento dessa matriz, o texto e o valor são obrigatórios.  | string / number | —   | — |
| filterPlacement      | Posicionamento para o menu suspenso de filtros.  | String	 | —   | — |
| filterMultiple      | Se a filtragem de dados suporta várias opções.  | Boolean	 | —   | true |
| filterMethod      | Método de filtragem de dados. Se filterMultiple estiver ativado, esse método será chamado várias vezes para cada linha, e uma linha será exibida se uma das chamadas retornar true.  | Function(value, row)	 | —   | — |
| filteredValue      | Valor de filtro para dados selecionados, pode ser útil quando o cabeçalho da tabela é renderizado com renderHeader.  | Array | —   | — |







