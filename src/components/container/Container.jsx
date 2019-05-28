/* eslint-disable react/destructuring-assignment,no-unused-vars */
/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import {Component} from '../../../libs';
import Footer from "../footer";
import Header from "../header";

export default class Container extends Component {

    isVertical() {
        if (this.props.direction === 'vertical') {
            return true;
        } else if (this.props.direction === 'horizontal') {
            return false;
        }
        let childrenFooterOrHeader = false;
        this.props.children.forEach(function (children) {
            if (children.type.displayName === 'Footer' || children.type.displayName === 'Header') {
                childrenFooterOrHeader = true;
            }
        })
        return this.props.children
            ? Array.isArray(this.props.children) ? childrenFooterOrHeader
                : (this.props.children[0].type.displayName === 'Header' || this.props.children[0].type.displayName === 'Footer')
            : false;
    }

    render(): React.DOM {
        const {
            direction,
            children
        } = this.props;

        return (
            <section className={this.className("cd-container", {
                    'is-vertical': this.isVertical()
                }
            )}>
                {children}
            </section>
        )
    }
}

Container.propTypes = {
    direction: PropTypes.string
};
