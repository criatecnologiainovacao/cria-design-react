/* @flow */

import React from 'react';
import { Component } from '../../../libs';
import PropTypes from 'prop-types';

export default class Aside extends Component {

    render(): React.DOM {
        const {
            width,
            id,
            children
        } = this.props;

        return (
            <section id={id} className={this.className('cd-aside')}
                     style={this.style({ width: width })}>
                {children}
            </section>
        )
    }
}

Aside.propTypes = {
    width: PropTypes.string,
    id: PropTypes.string
};

Aside.defaultProps = {
    width: '300px'
};
