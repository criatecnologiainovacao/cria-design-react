/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Header extends Component {

    render(): React.DOM {
        const {
            height,
            children
        } = this.props;

        return (
            <header className="cd-header" style={{ height: height }}>
                {children}
            </header>
        )
    }
}

Header.propTypes = {
    height: PropTypes.string
};

Header.defaultProps = {
    height: '60px'
};
