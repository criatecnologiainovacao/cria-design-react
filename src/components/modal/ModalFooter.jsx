/* @flow */

import React from 'react';
import { Component } from '../../../libs';

export default class ModalFooter extends Component {
    render(): React.DOM {
        return (
            <div style={this.style()} className={this.className('cd-modal__footer')}>
                {this.props.children}
            </div>
        )
    }
}
