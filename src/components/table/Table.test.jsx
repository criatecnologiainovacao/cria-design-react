import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';


import Table from '../table';

const mockTable = props => mount(
    <Table {...props} />
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

const summaryColumn = [
    {
        label: "ID",
        prop: "id",
    },
    {
        label: "Name",
        prop: "name",
    },
    {
        label: "Amount 1",
        prop: "amount1"
    },
    {
        label: "Amount 2",
        prop: "amount2"
    },
    {
        label: "Amount 3",
        prop: "amount3"
    }
];

const summaryData = [{
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10
}, {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12
}, {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9
}, {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17
}, {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15
}];

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
        const table = mockTable(
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
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                rowClassName: ((row, index) => {
                    if (index === 0) {
                        return 'custom-class-0';
                    } else {
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
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                rowStyle: ((row, index) => {
                    var style = {
                        height: '60px',
                        fontSize: '20px'
                    }
                    return style;
                })
            }
        );
        for (var i = 0; i < mockData.length; i++) {
            expect(table.find('tbody').childAt(i)).toHaveStyle({ height: '60px', fontSize: '20px' });
        }
    });

    it('displayed text when data is empty', () => {
        const table = mockTable(
            {
                columns: mockColumn,
                emptyText: "No data was added"
            }
        );
        expect(table).toContainExactlyOneMatchingElement('.cd-table__empty-text');
        expect(table.find('.cd-table__empty-text')).toHaveText('No data was added');
    });

    it('default expand', () => {
        const table = mockTable(
            {
                data: expandableState.data,
                columns: expandableState.columns
            }
        );
        for (var i = 0; i < expandableState.data.length; i++) {
            expect(table.find('tbody').childAt(i).childAt(0)).toHaveClassName('cd-table__expand-column');
        }
    });

    it('expand all', () => {
        const table = mockTable(
            {
                data: expandableState.data,
                columns: expandableState.columns,
                defaultExpandAll: true
            }
        );
        let i = 0;
        do {
            expect(table.find('tbody').childAt(i)).toHaveClassName('.cd-table__row');
            expect(table.find('tbody').childAt(i + 1).childAt(0)).toHaveClassName('.cd-table__expanded-cell');
            i += 2;
        } while (i < expandableState.data.length * 2);
    });

    it('selection type', () => {
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
            }
        ];

        const table = mockTable(
            {
                data: mockData,
                columns: columnsMultipleSelect
            }
        );

        expect(table.find('thead').childAt(0).childAt(0)).toHaveClassName('cd-table-column--selection');
        let i = 0;
        for (i = 0; i < mockData.length; i++) {
            expect(table.find('tbody').childAt(i).childAt(0)).toHaveClassName('cd-table-column--selection');
        }
    });

    it('index type', () => {
        const columnsIndex = [
            {
                type: 'index',
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
            }
        ];

        const table = mockTable(
            {
                data: mockData,
                columns: columnsIndex
            }
        );
        expect(table.find('thead').childAt(0).childAt(0)).toHaveText('#');

        let i = 0;
        for (i = 0; i < mockData.length; i++) {

            expect(table.find('tbody').childAt(i).childAt(0)).toHaveText('' + (i + 1));
        }
    });

    it('align center', () => {
        const columnsIndex = [
            {
                type: 'index',
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
            }
        ];

        const table = mockTable(
            {
                data: mockData,
                columns: columnsIndex
            }
        );
        expect(table.find('thead').childAt(0).childAt(0)).toHaveClassName('is-center');
        let i = 0;
        for (i = 0; i < mockData.length; i++) {
            expect(table.find('tbody').childAt(i).childAt(0)).toHaveClassName('is-center');
        }
    });

    it('align right', () => {
        const columnsIndex = [
            {
                type: 'index',
                align: 'right'
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
            }
        ];

        const table = mockTable(
            {
                data: mockData,
                columns: columnsIndex
            }
        );
        expect(table.find('thead').childAt(0).childAt(0)).toHaveClassName('is-right');
        let i = 0;
        for (i = 0; i < mockData.length; i++) {
            expect(table.find('tbody').childAt(i).childAt(0)).toHaveClassName('is-right');
        }
    });

    it('label', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn
            }
        );
        let i = 0;
        for (i = 0; i < mockColumn.length; i++) {
            expect(table.find('thead').childAt(0).childAt(i)).toHaveText('' + mockColumn[i].label);
        }
    });

    it('summary', () => {
        const table = mockTable(
            {
                data: summaryData,
                columns: summaryColumn,
                showSummary: true,
                sumText: 'Total price',
                summaryMethod: (columns, data) => {
                    const dataList = [];
                    for (var i = 0; i < columns.length; i++) {
                        let total = 0;
                        for (let j = 0; j < data.length; j++) {
                            let value = data[j][columns[i]['property']];

                            if (isNaN(value)) {
                                total = 'N/A'
                                break;
                            } else {
                                total += parseFloat(value);
                            }
                        }
                        dataList[i] = isNaN(total) ? total : '$ ' + total;
                    }
                    return dataList;
                },
                border: true
            }
        );

        expect(table)
            .toContainExactlyOneMatchingElement('.cd-table__footer-wrapper');
    });

    it('not show summary attribute', () => {
        const table = mockTable(
            {
                data: summaryData,
                columns: summaryColumn,
                showSummary: false
            }
        );

        expect(table.find('.cd-table'))
            .not.toHaveClassName('cd-table__footer-wrapper');
    });

    it('highlight current row', () => {
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                highlightCurrentRow: true
            }
        )
        
        table.find('tbody').childAt(0).simulate('click');
        expect(table.find('tbody').childAt(0)).toHaveClassName('current-row');    
    });

    it('handle header click', () => {
        const cb = sinon.spy();
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                onHeaderClick : cb
            }
        )
        
        table.find('thead').childAt(0).childAt(0).simulate('click');
        expect(cb.calledOnce).toBe(true);   
    });
    
    it('row click', () => {
        const cb = sinon.spy();
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                onRowClick : cb
            }
        )
        
        table.find('tbody').childAt(0).childAt(0).simulate('click');  
        expect(cb.calledOnce).toBe(true);   
    });

    it('mouse enter event', () => {
        const cb = sinon.spy();
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                onCellMouseEnter: cb
            }
        )
        
        table.find('tbody').childAt(0).childAt(0).simulate('mouseEnter');
        expect(cb.calledOnce).toBe(true);   
    });

    it('mouse leave event', () => {
        const cb = sinon.spy();
        const table = mockTable(
            {
                data: mockData,
                columns: mockColumn,
                onCellMouseLeave: cb
            }
        )
        
        table.find('tbody').childAt(0).childAt(0).simulate('mouseLeave');
        expect(cb.calledOnce).toBe(true);   
    });

    
    it('event expand row', () => {
        const cb = sinon.spy();
        const table = mockTable(
            {
                data: expandableState.data,
                columns: expandableState.columns,
                onExpand: cb
            }
        );
            table.find('.cd-table__expand-icon').first().simulate('click');
            expect(cb.calledOnce).toBe(true);   
    });

});