/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Header extends Component {

    render(): React.DOM {
        const {
            id,
            height,
            children
        } = this.props;

        return (
            <header id={id} className="cd-header" style={{ height: height }}>
                {children}
            </header>
        )
    }
}

Header.propTypes = {
    height: PropTypes.string,
    id: PropTypes.string
};

Header.defaultProps = {
    height: '60px'
};
