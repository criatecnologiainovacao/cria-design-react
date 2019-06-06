import React from 'react';
import { mount } from 'enzyme';

import Table from '../table';

const mockTable = props => mount(
    <Table {...props}/>
);

const mockColumn = [
    {
        label: 'Col 1',
        prop: 'col1'
    },
    {
        label: 'Col 2',
        prop: 'col2'
    }
];

const mockData = [
    { col1: 'Teste1', col2: 'Teste2' },
    { col1: 'Teste12', col2: 'Teste22' },
    { col1: 'Teste13', col2: 'Teste23' }
];

describe('Table tests', () => {

    it('create', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn
            }
        );

        expect(table.find('.cd-table')).toBeTruthy();
    });

    it('striped', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                stripe: true
            }
        );

        expect(table.find('.cd-table'))
            .toHaveClassName('cd-table--striped');
    });

    it('fit', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                fit: false
            }
        );

        expect(table.find('.cd-table'))
            .not.toHaveClassName('cd-table--fit');
    });

    it('border', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                border: false
            }
        );

        expect(table.find('.cd-table'))
            .not.toHaveClassName('cd-table--border');
    });

    it('height', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                height: 500
            }
        );

        expect(table.find('.cd-table')).toHaveStyle({ height: 500 });
    });

    it('max height', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                maxHeight: 200
            }
        );

        expect(table.find('.cd-table')).toHaveStyle({ maxHeight: 200 });
    });

    it('show header', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                showHeader: false
            }
        );

        expect(table.find('.cd-table__header-wrapper').exists()).toBe(false);
    });

    it('tableRowClassName', () => {
        const table = mockTable (
            {
                data: mockData,
                columns: mockColumn,
                rowClassName: ((row, index) => {
                    return 'custom-class'
                })
            }
        );
        expect(table.find('.cd-table__row'))
            .toHaveClassName('custom-class');
    });

    it('tableRowClassName diff class in diff rows', () => {
        const table = mockTable (
            {
                data: mockData,
                columns: mockColumn,
                rowClassName: ((row, index) => {
                    if (index === 0) {
                        return 'custom-class-0';
                    }else {
                        return 'diff-custom-class';
                    }
                })
            }
        );
        expect(table)
             .toContainExactlyOneMatchingElement('.custom-class-0');
        
        expect(table).toContainMatchingElement('.diff-custom-class');
    });

    it('row style', () => {
        const table = mockTable (
            {
                data: mockData,
                columns: mockColumn,
                rowStyle: ((row, index) =>   {
                    var style = {
                        height: '60px',
                        fontSize: '20px'        
                     }
                     return style;
                }) 
            }
        );
        for (var i = 0; i < mockData.length; i++ ) {
            expect(table.find('tbody').childAt(i)).toHaveStyle({ height: '60px', fontSize: '20px'});
        }
    });

    it ('displayed text when data is empty', () => {        
        const table = mockTable (
            {
                columns: mockColumn,
                emptyText: "No data was added"
            }
        );
        expect(table).toContainExactlyOneMatchingElement('.cd-table__empty-text');
        expect(table.find('.cd-table__empty-text')).toHaveText('No data was added');
    });
    
    it ('default expand', () => {
        let expandableState = {
            columns: [
                {
                    type: 'expand',
                    expandPannel: function (data) {
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
                    label: 'Date',
                    prop: 'date',
                    width: 400
                },
                {
                    label: 'Name',
                    prop: 'name',
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
                }
            ]
        }

        const table = mockTable (
            {
                data: expandableState.data,
                columns: expandableState.columns
            }
        );
        for (var i = 0; i < expandableState.data.length; i++ ) {
            expect(table.find('tbody').childAt(i).childAt(0)).toHaveClassName('cd-table__expand-column');
        }
    });
    
    it ('expand all', () => {
        let expandableState = {
            columns: [
                {
                    type: 'expand',
                    expandPannel: function (data) {
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
                    label: 'Date',
                    prop: 'date',
                    width: 400
                },
                {
                    label: 'Name',
                    prop: 'name',
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
                }
            ]
        }

        const table = mockTable (
            {
                data: expandableState.data,
                columns: expandableState.columns,
                defaultExpandAll : true
            }
        );
        let i = 0;
        do {
            expect(table.find('tbody').childAt(i)).toHaveClassName('.cd-table__row');
            expect(table.find('tbody').childAt(i+1).childAt(0)).toHaveClassName('.cd-table__expanded-cell'); 
            i += 2;
        }while(i < expandableState.data.length * 2 );
    });

    it ('selection type', () => {
        const data = [
            {
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
            }
        ];
        
        const columnsMultipleSelect = [
            {
                type: 'selection',
                align: 'center'
            },
            {
                label: 'Date',
                prop: 'date',
                width: 180
            },
            {
                label: 'Name',
                prop: 'name',
                width: 180
            },
            {
                label: 'Address',
                prop: 'address'
            }
        ];

        const table = mockTable (
            {
                data: data,
                columns: columnsMultipleSelect
            }
        );

        expect(table.find('thead').childAt(0).childAt(0)).toHaveClassName('cd-table-column--selection');
    });


});