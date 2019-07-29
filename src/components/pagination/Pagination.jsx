/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../../libs';
import Pager from './Pager';

const Pre = props => {
    const disabled = props.internalCurrentPage <= 1 ? 'disabled' : '';
    return (
      <button type="button" disabled={disabled} className={`btn-prev ${disabled}`} onClick={props.prev}>
        <i className="cd-icon cd-icon-arrow-left" />
      </button>
    );
};

const Next = props => {
    const disabled = props.internalCurrentPage === props.internalPageCount ||
    props.internalPageCount === 0
        ? 'disabled'
        : '';

    return (
      <button type="button" disabled={disabled} className={`btn-next ${disabled}`} onClick={props.next}>
        <i className="cd-icon cd-icon-arrow-right" />
      </button>
    );
};

type State = {
    internalPageSize: number,
    total: number,
    pageCount: number,
    internalCurrentPage: number
}

export default class Pagination extends Component {
    state: State;

    constructor(props: Object, context: Object) {
        super(props, context);

        const {
            currentPage,
            pageSizes,
            pageSize,
            total,
            pageCount,
            layout
        } = this.props;
        let internalPageSize = 0;
        if (layout.split(',').indexOf('sizes') > -1 && Array.isArray(pageSizes)) {
            internalPageSize = pageSizes.indexOf(pageSize) > -1
                ? pageSize
                : pageSizes[0];
        } else {
            internalPageSize = pageSize;
        }

        this.state = {
            internalPageSize,
            total,
            pageCount,
            internalCurrentPage: currentPage
                ? this.getValidCurrentPage(currentPage)
                : 1
        };
    }

    pre(): void {
        const oldPage = this.state.internalCurrentPage;
        const newVal = this.state.internalCurrentPage - 1;

        this.setState(
            {
                internalCurrentPage: this.getValidCurrentPage(newVal)
            },
            () => {
                if (this.state.internalCurrentPage !== oldPage) {
                    const onCurrentChange = this.props.onCurrentChange;
                    onCurrentChange && onCurrentChange(this.state.internalCurrentPage);
                }
            }
        );
    }

    next(): void {
        const oldPage = this.state.internalCurrentPage;
        const newVal = this.state.internalCurrentPage + 1;

        this.setState(
            {
                internalCurrentPage: this.getValidCurrentPage(newVal)
            },
            () => {
                if (this.state.internalCurrentPage !== oldPage) {
                    const onCurrentChange = this.props.onCurrentChange;
                    onCurrentChange && onCurrentChange(this.state.internalCurrentPage);
                }
            }
        );
    }

    getValidCurrentPage(value: string | number): number {
        value = parseInt(value, 10);

        let internalPageCount = this.internalPageCount();

        let resetValue;
        if (!internalPageCount) {
            if (isNaN(value) || value < 1) resetValue = 1;
        } else {
            if (value < 1) {
                resetValue = 1;
            } else if (value > internalPageCount) {
                resetValue = internalPageCount;
            }
        }

        if ((resetValue === undefined && isNaN(value)) || resetValue === 0) {
            resetValue = 1;
        }

        return resetValue === undefined ? value : resetValue;
    }

    internalPageCount(): ?number {
        if (this.state) {
            if (typeof this.state.total === 'number') {
                return Math.ceil(this.state.total / this.state.internalPageSize);
            } else if (typeof this.state.pageCount === 'number') {
                return this.state.pageCount;
            }
        }

        return null;
    }

    /*jumperToPage(page: number): void {
        const oldPage = this.state.internalCurrentPage;
        this.setState(
            {
                internalCurrentPage: this.getValidCurrentPage(page)
            },
            () => {
                if (oldPage !== this.state.internalCurrentPage) {
                    const onCurrentChange = this.props.onCurrentChange;
                    onCurrentChange && onCurrentChange(this.state.internalCurrentPage);
                }
            }
        );

        //this.oldValue = null;
    }*/

    handleCurrentChange(val: number): void {
        const oldPage = this.state.internalCurrentPage;
        this.setState(
            {
                internalCurrentPage: this.getValidCurrentPage(val)
            },
            () => {
                if (oldPage !== this.state.internalCurrentPage) {
                    const onCurrentChange = this.props.onCurrentChange;
                    onCurrentChange && onCurrentChange(this.state.internalCurrentPage);
                }
            }
        );
    }

    render(): ?React.DOM {
        const { internalCurrentPage } = this.state;

        const className = this.classNames({
            'cd-pagination': true,
            'cd-pagination__rightwrapper': false,
            'cd-pagination--small': this.props.small
        });

        const children = [];
        const layout = this.props.layout || '';

        if (!layout) return null;

        const components = layout.split(',').map(item => item.trim());
        const TEMPLATE_MAP = {
            prev: (
              <Pre
                key="pre"
                internalCurrentPage={internalCurrentPage}
                prev={this.pre.bind(this)}
                />
            ),
            pager: (
              <Pager
                key="pager"
                currentPage={internalCurrentPage}
                pageCount={this.internalPageCount()}
                onChange={this.handleCurrentChange.bind(this)}
                />
            ),
            next: (
              <Next
                key="next"
                internalCurrentPage={internalCurrentPage}
                internalPageCount={this.internalPageCount()}
                next={this.next.bind(this)}
                />
            )
        };

        components.forEach(compo => {
            if (compo !== '->') {
                children.push(TEMPLATE_MAP[compo]);
            }
        });

        return (
          <div style={this.style()} className={this.className(className)}>
            {children}
          </div>
        );
    }
}

Pagination.propTypes = {
    pageSize: PropTypes.number,
    small: PropTypes.bool,
    total: PropTypes.number,
    pageCount: PropTypes.number,
    currentPage: PropTypes.number,
    layout: PropTypes.string,
    // pageSizes: PropTypes.array,

    //Event
    onCurrentChange: PropTypes.func,
    // onSizeChange: PropTypes.func
};

Pagination.defaultProps = {
    small: false,
    pageSize: 10,
    currentPage: 1,
    layout: 'prev, pager, next, jumper, ->, total'
};