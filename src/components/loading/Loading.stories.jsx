import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from '.';
import Table from '../table';

const tableData = {
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
};

storiesOf('Notificação|Loading', module)
    .add('default', () => {
        return (
            <div>
                <Loading>
                    <Table
                    style={{width: '100%'}}
                    columns={tableData.columns}
                    data={tableData.data}
                    />
                </Loading>
            </div>
        )
    })
    .add('texto personalizado', () => {
        return (
            <div>
                <Loading text="Carregando dados dos usuários...">
                    <Table
                    style={{width: '100%'}}
                    columns={tableData.columns}
                    data={tableData.data}
                    />
                </Loading>
            </div>
        )
    })
    .add('fullscreen', () => {
        return (
            <Loading fullscreen={true}/>
        )
    });
