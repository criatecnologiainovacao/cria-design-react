/* eslint-disable react/destructuring-assignment,no-unused-vars */
/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';
import Footer from "../footer";
import Header from "../header";

export default class Container extends Component {

    isVertical() {
        if (this.props.direction === 'vertical') {
            return true;
        } else if (this.props.direction === 'horizontal') {
            return false;
        }
        return this.props.children
            ? (Array.isArray(this.props.children) ? this.props.children[0] === Footer || this.props.children[0].type === Header :
                this.props.children === Footer || this.props.children.type === Header)
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
