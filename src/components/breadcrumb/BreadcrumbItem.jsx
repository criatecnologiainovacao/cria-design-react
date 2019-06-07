/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class BreadcrumbItem extends Component {
    render() {
        return (
            <span style={this.style()} className={this.className('cd-breadcrumb__item')}>
        <span className="cd-breadcrumb__inner" ref="link">{this.props.children}</span>
        <span className="cd-breadcrumb__separator">{this.context.separator}</span>
      </span>
        )
    }
}

BreadcrumbItem.contextTypes = {
    separator: PropTypes.string
};