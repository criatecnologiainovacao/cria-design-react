/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Footer extends Component {

    render(): React.DOM {
        const {
            height,
            children
        } = this.props;

        return (
            <header className="cd-footer" style={{height: height}}>
                {children}
            </header>
        )
    }
}

Footer.propTypes = {
    height: PropTypes.string
};

Footer.defaultProps = {
    height: '60px'
};
