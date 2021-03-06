/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

type Context = {
    separator: string
};

export default class Breadcrumb extends Component {
    getChildContext(): Context {
        return {
            separator: this.props.separator
        };
    }

    render() {
        return (
            <div id={this.props.id} style={this.style()}
                 className={this.className('cd-breadcrumb')}>
                {this.props.children}
            </div>
        )
    }
}

Breadcrumb.childContextTypes = {
    separator: PropTypes.string
};

Breadcrumb.propTypes = {
    separator: PropTypes.string,
    id: PropTypes.string
};

Breadcrumb.defaultProps = {
    separator: '/'
};