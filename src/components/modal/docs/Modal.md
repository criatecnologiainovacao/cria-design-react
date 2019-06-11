## Modal

Informa os usuários enquanto preserva o estado atual da página.

### Uso básico

O Modal abre uma caixa de diálogo e é bastante personalizável.

::: demo Defina o atributo `visible` com um` Boolean` e o Modal mostra quando é `true`. O Modal tem duas partes: `Modal.Body` e` Modal.Footer`. O atributo opcional `title` (vazio por padrão) é para definir um título.

```js
constructor(props) {
  super(props);

  this.state = {
    dialogVisible: false
  };
}

render() {
  return (
    <div>
      <Button type="text" onClick={ () => this.setState({ dialogVisible: true }) }>Click to open the Modal</Button>
      <Modal
        title="Modal"
        size="tiny"
        visible={ this.state.dialogVisible }
        onCancel={ () => this.setState({ dialogVisible: false }) }
        lockScroll={ false }
      >
        <Modal.Body>
          <span>Message body</span>
        </Modal.Body>
        <Modal.Footer className="dialog-footer">
          <Button onClick={ () => this.setState({ dialogVisible: false }) }>Cancel</Button>
          <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
```
:::

### Personalizações

O conteúdo do Modal pode ser qualquer coisa, até mesmo uma tabela ou um formulário. Este exemplo mostra como usar a Tabela de Elementos e o Formulário com Modal。

::: demo

```js
constructor(props) {
  super(props);

  this.state = {
    dialogVisible2: false,
    dialogVisible3: false,
    form: {
      name: '',
      region: ''
    }
  };

  this.table = {
    columns: [
      {
        label: "Date",
        prop: "date",
        width: 150
      },
      {
        label: "Name",
        prop: "name",
        width: 100
      },
      {
        label: "Address",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    }, {
      date: '2016-05-04',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    }, {
      date: '2016-05-01',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    }, {
      date: '2016-05-03',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    }]
  };
}

render() {
  return (
    <div>
      <Button type="text" onClick={ () => this.setState({ dialogVisible2: true }) } type="text">Open a Table nested Modal</Button>
      <Modal
        title="Shipping Address"
        visible={ this.state.dialogVisible2 }
        onCancel={ () => this.setState({ dialogVisible2: false }) }
      >
        <Modal.Body>
          {this.state.dialogVisible2 && (
            <Table
             style={{width: '100%'}}
             stripe={true}
             columns={this.table.columns}
             data={this.table.data} />
          )}
        </Modal.Body>
      </Modal>
      <Button type="text" onClick={ () => this.setState({ dialogVisible3: true }) } type="text">Open a Form nested Modal</Button>
      <Modal
        title="Shipping Address"
        visible={ this.state.dialogVisible3 }
        onCancel={ () => this.setState({ dialogVisible3: false }) }
      >
        <Modal.Body>
          <Form model={this.state.form}>
            <Form.Item label="Promotion name" labelWidth="120">
              <Input value={this.state.form.name}></Input>
            </Form.Item>
            <Form.Item label="Zones" labelWidth="120">
            </Form.Item>
          </Form>
        </Modal.Body>

        <Modal.Footer className="dialog-footer">
          <Button onClick={ () => this.setState({ dialogVisible3: false }) }>Cancelar</Button>
          <Button type="primary" onClick={ () => this.setState({ dialogVisible3: false }) }>Enviar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
```
:::

### Atributos

| Atributo | Descrição | Digite | Valores aceitos | Padrão |
| ---------- | -------------- | ---------- | ------------ -------------------- | -------- |
| title | título do Modal. Também pode ser passado com um slot nomeado (consulte a tabela a seguir) | string | - | - |
| size | tamanho do Modal | string | minúsculo / pequeno / grande / cheio | pequeno |
| top | valor para `top` do Modal CSS, funciona quando` size` não é `full` | string | - | 15% |
| modal | se uma máscara é exibida | booleano | - | verdadeiro |
| modalAppendToBody | se deve anexar modal ao elemento body. Se falso, o modal será anexado ao elemento pai do Modal | booleano | - | verdadeiro |
| lockScroll | se a rolagem do corpo está desativada enquanto o Modal é exibido | booleano | - | verdadeiro |
| customClass | nomes de classe personalizados para o Modal | string | - | - |
| closeOnClickModal | se o Modal pode ser fechado clicando na máscara | booleano | - | verdadeiro |
| closeOnPressEscape | se o Modal pode ser fechado pressionando ESC | booleano | - | verdadeiro |
| showClose | se deve mostrar um botão de fechar | booleano | - | verdadeiro |

### Eventos
| Nome do Evento | Descrição | Parâmetros |
| ---------- | -------- | ---------- |
| onOpen | dispara quando o Modal abre | - |
| onClose | dispara quando o Modal fecha | - |
