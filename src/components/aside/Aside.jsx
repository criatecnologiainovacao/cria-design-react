/* @flow */

import React from 'react';
import {Component} from '../../../libs';
import PropTypes from "prop-types";

export default class Aside extends Component {

    render(): React.DOM {
        const {
            width,
            children
        } = this.props;

        return (
            <section className="cd-aside" style={{width: width}}>
                {children}
            </section>
        )
    }
}

Aside.propTypes = {
    width: PropTypes.string
};

Aside.defaultProps = {
    width: '300px'
};
