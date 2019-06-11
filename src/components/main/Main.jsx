/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Main extends Component {

    render(): React.DOM {
        const {
            id,
            children
        } = this.props;

        return (
            <section id={id} className="cd-main">
                {children}
            </section>
        )
    }
}

Main.propTypes = {
    id: PropTypes.string
};