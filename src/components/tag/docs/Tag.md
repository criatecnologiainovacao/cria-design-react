## Dialog

Informs users while preserving the current page state.

### Basic usage

Dialog pops up a dialog box, and it's quite customizable.

:::demo Set the `visible` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `Dialog.Body` and `Dialog.Footer`. The optional `title` attribute (empty by default) is for defining a title.

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
    </div>
  )
}
```
:::

### Customizations

The content of Dialog can be anything, even a table or a form. This example shows how to use Element Table and Form with Dialog。

:::demo

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
     
    </div>
  )
}
```
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | title of Dialog. Can also be passed with a named slot (see the following table) | string    | — | — |
| size      | size of Dialog | string    | tiny/small/large/full | small |
| top      | value for `top` of Dialog CSS, works when `size` is not `full` | string    | — | 15% |
| modal     | whether a mask is displayed | boolean   | — | true |
| modalAppendToBody     | whether to append modal to body element. If false, the modal will be appended to Dialog's parent element | boolean   | — | true |
| lockScroll     | whether scroll of body is disabled while Dialog is displayed | boolean   | — | true |
| customClass      | custom class names for Dialog | string    | — | — |
| closeOnClickModal | whether the Dialog can be closed by clicking the mask | boolean    | — | true |
| closeOnPressEscape | whether the Dialog can be closed by pressing ESC | boolean    | — | true |
| showClose | whether to show a close button | boolean    | — | true |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| onOpen | triggers when the Dialog opens | — |
| onClose | triggers when the Dialog closes | — |
