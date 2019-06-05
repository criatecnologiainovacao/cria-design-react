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
});