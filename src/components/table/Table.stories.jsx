import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../table';

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
]

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
  data: [{
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
  }]
}


storiesOf('Table', module)
  .add('basic', () => {
    return (
      <div>
        <Table
          style={{ width: '100%' }}
          columns={columns}
          data={data}
        />
      </div>
    )
  })
  .add('striped', () => {
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
  })
  .add('border', () => {
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
  })
  .add('single select', () => {
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
  })
  .add('multiple select', () => {
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
  })
  .add('hidden header', () => {
    return (
      <div>
        <Table
          style={{width: '100%'}}
          columns={columnsMultipleSelect}
          data={data}
          border
          showHeader={false}
          height={250}
          onSelectChange={(selection) => { console.log(selection) }}
          onSelectAll={(selection) => { console.log(selection) }}
        />
      </div>
    )
  })
  .add('expandable', () => {
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
  });


