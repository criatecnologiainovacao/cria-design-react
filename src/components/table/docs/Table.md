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
| onSelect | triggers when user clicks the checkbox in a row. | selection, row |
| onSelectAll | triggers when user clicks the checkbox in table header. | selection |
| onSelectChange | triggers when selection changes	 | selection |
| onCellMouseEnter | triggers when hovering into a cell.	 | row, column, cell, event |
| onCellMouseLeave | triggers when hovering out of a cell.	 | row, column, cell, event |
| onCellClick | triggers when clicking a cell.	 | row, column, cell, event |
| onCellDblClick | triggers when double clicking a cell.	 | row, column, cell, event |
| onRowClick | triggers when clicking a row. | row, event, column |
| onRowContextMenu | triggers when user right clicks on a row. | row, event |
| onRowDblClick | triggers when double clicking a row. | row, event |
| onHeaderClick | triggers when clicking a column header. | column, event |
| onSortChange | triggers when Table's sorting changes. | { column, prop, order } |
| onFilterChange | column's key. If you need to use the filterChange event, this attribute is mandatory to identify which column is being filtered	. | filters |
| onCurrenteChange | triggers when current row changes. | currentRow, oldCurrentRow |
| onHeaderDragend | triggers when finish dragging header. | newWidth, oldWidth, column, event |
| onExpand | triggers when user expands or collapses a row. | row, expanded |


<!-- Missing Table Methods e Table-column Attributes,  -->

