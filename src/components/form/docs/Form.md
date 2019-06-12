## Formulário

O formulário consiste em `input`, `radio`, `select`, `checkbox` e assim por diante. Com o formulário, você pode coletar, verificar e enviar dados.

### Formulário básica

Inclui todos os tipos de itens de entrada, como `input`, `select`, `radio` e `checkbox`.

::: demo Em cada componente `form`, você precisa de um campo `form-item` para ser o container de seu item de entrada.
```js
constructor(props) {
  super(props);

  this.state = {
    form: {
      name: '',
      region: '',
      date1: null,
      date2: null,
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    }
  };
}

onSubmit(e) {
  e.preventDefault();
}

onChange(key, value) {
  this.state.form[key] = value;
  this.forceUpdate();
}

render() {
  return (
    <Form className="en-US" model={this.state.form} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>
      <Form.Item label="Activity name">
        <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
      </Form.Item>
      <Form.Item label="Activity zone">
        <Select value={this.state.form.region} placeholder="Please select your zone">
          <Select.Option label="Zone 1" value="shanghai"></Select.Option>
          <Select.Option label="Zone 2" value="beijing"></Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Activity time">
        <Layout.Col span="11">
          <Form.Item prop="date1" labelWidth="0px">
          </Form.Item>
        </Layout.Col>
        <Layout.Col className="line" span="2">-</Layout.Col>
        <Layout.Col span="11">
          <Form.Item prop="date2" labelWidth="0px">

          </Form.Item>
        </Layout.Col>
      </Form.Item>
      <Form.Item label="Instant delivery">
      </Form.Item>
      <Form.Item label="Activity type">~~~~
      </Form.Item>
      <Form.Item label="Resources">
      </Form.Item>
      <Form.Item label="Activity form">
        <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" nativeType="submit">Create</Button>
        <Button>Cancel</Button>
      </Form.Item>
    </Form>
  )
}
```
:::

### Formatação em linha

Quando o espaço vertical é limitado e a forma é relativamente simples, você pode colocá-lo em uma linha.

::: demo Defina o atributo `inline` como` true` e o formulário será inline.

```js
constructor(props) {
  super(props);

  this.state = {
    form: {
      user: '',
      region: ''
    }
  };
}

onSubmit(e) {
  e.preventDefault();
}

onChange(key, value) {
  this.setState({
    form: Object.assign(this.state.form, { [key]: value })
  });
}

render() {
  return (
    <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
      <Form.Item>
        <Input value={this.state.form.user} placeholder="Approved by" onChange={this.onChange.bind(this, 'user')}></Input>
      </Form.Item>
      <Form.Item>
        <Select value={this.state.form.region} placeholder="Activity zone">
          <Select.Option label="Zone 1" value="shanghai"></Select.Option>
          <Select.Option label="Zone 2" value="beijing"></Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button nativeType="submit" type="primary">Query</Button>
      </Form.Item>
    </Form>
  )
}
```
:::

### Alinhamento

Dependendo do seu design, existem várias maneiras diferentes de alinhar seu elemento de etiqueta.

::: demo O atributo `label-position` decide como os rótulos se alinham, pode ser` top` ou `left`. Quando definido como `top`, os rótulos serão colocados no topo do campo de formulário.

```js
constructor(props) {
  super(props);

  this.state = {
    labelPosition: 'right',
    form: {
      name: '',
      region: '',
      type: ''
    }
  };
}

onPositionChange(value) {
  this.setState({ labelPosition: value });
}

onChange(key, value) {
  this.setState({
    form: Object.assign(this.state.form, { [key]: value })
  });
}

render() {
  return (
    <div>
      <div style={{ margin: 20 }}></div>
      <Form className="demo-form-stacked" model={this.state.form} labelPosition={this.state.labelPosition} labelWidth="100">
        <Form.Item label="Name">
          <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
        </Form.Item>
        <Form.Item label="Activity zone">
          <Input value={this.state.form.region} onChange={this.onChange.bind(this, 'region')}></Input>
        </Form.Item>
        <Form.Item label="Activity form">
          <Input value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}></Input>
        </Form.Item>
      </Form>
    </div>
  )
}
```
:::

### Validação

O componente Form permite que você verifique seus dados, ajudando você a encontrar e corrigir erros.

::: demo Basta adicionar o atributo `rule` para o componente `Form`, passar as regras de validação e definir o atributo `prop` para o `Form-Item` como uma chave específica que precisa ser validada. Veja mais informações em [async-validator] (https://github.com/yiminghe/async-validator).

```js
constructor(props) {
  super(props);

  this.state = {
    form: {
      name: '',
      region: '',
      date1: null,
      date2: null,
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    rules: {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' }
      ],
      region: [
        { required: true, message: 'Please select Activity zone', trigger: 'change' }
      ],
      date1: [
        { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
      ],
      date2: [
        { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
      ],
      type: [
        { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
      ],
      resource: [
        { required: true, message: 'Please select activity resource', trigger: 'change' }
      ],
      desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' }
      ]
    }
  };
}

handleSubmit(e) {
  e.preventDefault();

  this.refs.form.validate((valid) => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}

handleReset(e) {
  e.preventDefault();

  this.refs.form.resetFields();
}

onChange(key, value) {
  this.setState({
    form: Object.assign({}, this.state.form, { [key]: value })
  });
}

render() {
  return (
    <Form ref="form" className="en-US" model={this.state.form} rules={this.state.rules} labelWidth="120">
      <Form.Item label="Activity name" prop="name">
        <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
      </Form.Item>
      <Form.Item label="Activity zone" prop="region">
        <Select value={this.state.form.region} placeholder="Activity zone" onChange={this.onChange.bind(this, 'region')}>
          <Select.Option label="Zone 1" value="shanghai"></Select.Option>
          <Select.Option label="Zone 2" value="beijing"></Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Activity time" required={true}>
        <Layout.Col span="11">
          <Form.Item prop="date1" labelWidth="0px">
          </Form.Item>
        </Layout.Col>
        <Layout.Col className="line" span="2">-</Layout.Col>
        <Layout.Col span="11">
          <Form.Item prop="date2" labelWidth="0px">
          </Form.Item>
        </Layout.Col>
      </Form.Item>
      <Form.Item label="Instant delivery" prop="delivery">
      </Form.Item>
      <Form.Item label="Activity type" prop="type">
      </Form.Item>
      <Form.Item label="Resources" prop="resource">
      </Form.Item>
      <Form.Item label="Activity form" prop="desc">
        <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={this.handleSubmit.bind(this)}>Create</Button>
        <Button onClick={this.handleReset.bind(this)}>Reset</Button>
      </Form.Item>
    </Form>
  )
}
```
:::

### Regras de validação personalizadas

::: demo Este exemplo mostra como personalizar suas próprias regras de validação para concluir uma verificação de senha de dois fatores.

```js
constructor(props) {
  super(props);

  this.state = {
    form: {
      pass: '',
      checkPass: '',
      age: ''
    },
    rules: {
      pass: [
        { required: true, message: 'Please input the password', trigger: 'blur' },
        { validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please input the password'));
          } else {
            if (this.state.form.checkPass !== '') {
              this.refs.form.validateField('checkPass');
            }
            callback();
          }
        } }
      ],
      checkPass: [
        { required: true, message: 'Please input the password again', trigger: 'blur' },
        { validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please input the password again'));
          } else if (value !== this.state.form.pass) {
            callback(new Error('Two inputs don\'t match!'));
          } else {
            callback();
          }
        } , trigger: 'blur'}
      ],
      age: [
        { required: true, message: 'Please input the age', trigger: 'blur' },
        { validator: (rule, value, callback) => {
          var age = parseInt(value, 10);

          setTimeout(() => {
            if (!Number.isInteger(age)) {
              callback(new Error('Please input digits'));
            } else{
              if (age < 18) {
                callback(new Error('Age must be greater than 18'));
              } else {
                callback();
              }
            }
          }, 1000);
        }, trigger: 'change' }
      ]
    }
  };
}

handleSubmit(e) {
  e.preventDefault();

  this.refs.form.validate((valid) => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}

handleReset(e) {
  e.preventDefault();

  this.refs.form.resetFields();
}

onChange(key, value) {
  this.setState({
    form: Object.assign({}, this.state.form, { [key]: value })
  });
}

render() {
  return (
    <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
      <Form.Item label="Password" prop="pass">
        <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
      </Form.Item>
      <Form.Item label="Confirm" prop="checkPass">
        <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
      </Form.Item>
      <Form.Item label="Age" prop="age">
        <Input value={this.state.form.age} onChange={this.onChange.bind(this, 'age')}></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
        <Button onClick={this.handleReset.bind(this)}>Reset</Button>
      </Form.Item>
    </Form>
  )
}
```
:::

### Excluir ou adicionar itens de formulário dinamicamente

::: demo Além de passar todas as regras de validação de uma vez no componente de formulário, você também pode passar as regras de validação ou excluir regras em um único campo de formulário dinamicamente.

```js
constructor(props) {
  super(props);

  this.state = {
    form: {
      domains: [{
        key: 1,
        value: ''
      }],
      email: ''
    },
    rules: {
      email: [
        { required: true, message: 'Please input email address', trigger: 'blur' },
        { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
      ]
    }
  };
}

handleSubmit(e) {
  e.preventDefault();

  this.refs.form.validate((valid) => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}

removeDomain(item, e) {
  var index = this.state.form.domains.indexOf(item);

  if (index !== -1) {
    this.state.form.domains.splice(index, 1);
    this.forceUpdate();
  }

  e.preventDefault();
}

addDomain(e) {
  e.preventDefault();

  this.state.form.domains.push({
    key: this.state.form.domains.length,
    value: ''
  });

  this.forceUpdate();
}

onEmailChange(value) {
  this.setState({
    form: Object.assign({}, this.state.form, { email: value })
  });
}

onDomainChange(index, value) {
  this.state.form.domains[index].value = value;
  this.forceUpdate();
}

render() {
  return (
    <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-dynamic">
      <Form.Item prop="email" label="Email">
        <Input value={this.state.form.email} onChange={this.onEmailChange.bind(this)}></Input>
      </Form.Item>
      {
        this.state.form.domains.map((domain, index) => {
          return (
            <Form.Item
              key={index}
              label={`Domain ${index}`}
              prop={`domains:${index}`}
              rules={{
                type: 'object', required: true,
                fields: {
                  value: { required: true, message: 'Domain can not be null', trigger: 'blur' }
                }
              }}
            >
              <Input value={domain.value} onChange={this.onDomainChange.bind(this, index)}></Input>
              <Button onClick={this.removeDomain.bind(this, domain)}>Delete</Button>
            </Form.Item>
          )
        })
      }
      <Form.Item>
        <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
        <Button onClick={this.addDomain.bind(this)}>New domain</Button>
      </Form.Item>
    </Form>
  )
}
```
:::

### Atributos de formulário

| Atributo | Descrição | Tipo | Valores aceitos | Padrão |
| ---- | ---- | ---- | ---- | ---- |
| model | dados do componente de formulário | objeto | - | - |
| rules | regras de validação de formulário | objeto | - | - |
| inline | se o formulário está em linha | booleano | - | false |
| label-position | posição do rótulo | string | esquerda / direita / topo | direita |
| label-width | largura da etiqueta, e todos os itens de formulário herdarão de `Form` | string | - | - |
| label-suffix | sufixo do rótulo | string | - | - |
| show-message | se deve mostrar a mensagem de erro | booleano | - | verdadeiro |

### Métodos de formulário

| Método | Descrição | Parâmetros |
| ---- | ---- | ---- |
| validate | o método para validar todo o formulário | Função (retorno de chamada: Função (boolean)) |
| validateField | o método para validar um determinado item de formulário | Função (prop: string, retorno de chamada: Função (errorMessage: string)) |
| resetFields | redefinir todos os campos e remover o resultado da validação | - |

### Atributos de item de formulário

| Atributo | Descrição | Tipo | Valores aceitos | Padrão |
| ---- | ---- | ---- | ---- | ---- |
| prop | uma chave do `modelo` | string | chaves do modelo que passaram para `form` |
| label | rótulo | string | - | - |
| label-width | largura da etiqueta, e. '50px' | string | - | - |
| required | se o campo é obrigatório ou não, será determinado pelas regras de validação se omitido | string | - | false |
| rules | regras de validação de formulário | objeto | - | - |
| error | mensagem de erro de campo, defina seu valor e o campo validará o erro e mostrará esta mensagem imediatamente | string | - | - |
| show-message | se deve mostrar a mensagem de erro | booleano | - | verdadeiro |
