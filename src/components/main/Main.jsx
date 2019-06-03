/* @flow */

import React from 'react';
import { Component } from '../../../libs';

export default class Main extends Component {

    render(): React.DOM {
        const {
            children
        } = this.props;

        return (
            <section className="cd-main">
                {children}
            </section>
        )
    }
}
