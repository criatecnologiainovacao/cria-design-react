/* eslint-disable react/destructuring-assignment,no-unused-vars */
/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';
import Footer from '../footer';
import Header from '../header';

export default class Container extends Component {

    isVertical() {
        if (this.props.direction === 'vertical') {
            return true;
        } else if (this.props.direction === 'horizontal') {
            return false;
        }
        let childrenFooterOrHeader = false;
        if (Array.isArray(this.props.children)) {
            this.props.children.forEach(function (children) {
                if (children.type === <Footer/>.type || children.type === <Header/>.type) {
                    childrenFooterOrHeader = true;
                }
            })
        }
        return this.props.children
               ? Array.isArray(this.props.children) ? childrenFooterOrHeader
                                                    : (this.props.children.type ===
                                                       <Header/>.type ||
                                                       this.props.children.type === <Footer/>.type)
               : false;
    }

    render(): React.DOM {
        const {
            id,
            children
        } = this.props;

        return (
            <section id={id} className={this.className(
                'cd-container', {
                    'is-vertical': this.isVertical()
                }
            )}>
                {children}
            </section>
        )
    }
}

Container.propTypes = {
    direction: PropTypes.string,
    id: PropTypes.string
};
