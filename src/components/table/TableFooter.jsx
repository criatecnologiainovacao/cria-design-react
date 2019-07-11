// @flow
import * as React from 'react';
import { Component } from '../../../libs';
import { getValueByPath, isCellHidden } from './utils';

import { TableFooterProps } from './Types';

export default class TableFooter extends Component<TableFooterProps> {

  get columnsCount(): number {
    return this.props.tableStoreState.columns.length;
  }

  get leftFixedCount(): number {
    return this.props.tableStoreState.fixedColumns.length;
  }

  get rightFixedCount(): number {
    return this.props.tableStoreState.rightFixedColumns.length;
  }

  render() {
    const { tableStoreState, layout, fixed, summaryMethod, sumText } = this.props;
    const sums = summaryMethod ? summaryMethod(tableStoreState.columns, tableStoreState.data) : tableStoreState.columns.map((column, index) => {
      if (index === 0) {
        return sumText;
      }
      const result = tableStoreState.data.reduce((pre, data) => pre + parseFloat(getValueByPath(data, column.property)), 0);
      return isNaN(result) ? '' : result;
    });

    return (
      <table
        className="cd-table__footer"
        cellSpacing="0"
        cellPadding="0"
        style={this.style({
          borderSpacing: 0,
          border: 0
        })}
      >
        <colgroup>
          {tableStoreState.columns.map((column, index) => (
            <col width={column.realWidth} style={{ width: column.realWidth }} key={index} />
          ))}
          {!fixed && (
            <col width={layout.scrollY ? layout.gutterWidth : 0} style={{ width: layout.scrollY ? layout.gutterWidth : 0 }} />
          )}
        </colgroup>
        <tbody>
          <tr>
            {tableStoreState.columns.map((column, index) => (
              <td
                key={index}
                colSpan={column.colSpan}
                rowSpan={column.rowSpan}
                className={this.className(
                  column.headerAlign,
                  column.className,
                  column.labelClassName,
                  column.columnKey,
                  {
                      'is-hidden': isCellHidden(index, tableStoreState.columns, this.props),
                    'is-leaf': !column.subColumns
                  }
                )}
              >
                <div className="cell">
                  {sums[index]}
                </div>
              </td>
            ))}
            {!fixed && (
              <td
                className="gutter"
                style={{ width: layout.scrollY ? layout.gutterWidth : 0 }}
              />
            )}
          </tr>
        </tbody>
      </table>
    );
  }
}