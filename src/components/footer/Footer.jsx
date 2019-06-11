/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Footer extends Component {

    render(): React.DOM {
        const {
            height,
            children,
            id
        } = this.props;

        return (
            <footer id={id} className={this.className('cd-footer')}
                    style={this.style({ height: height })}>
                {children}
            </footer>
        )
    }
}

Footer.propTypes = {
    height: PropTypes.string,
    id: PropTypes.string
};

Footer.defaultProps = {
    height: '60px'
};
