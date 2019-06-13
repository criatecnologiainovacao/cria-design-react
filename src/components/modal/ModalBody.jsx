/* @flow */

import React from 'react';
import { Component } from '../../../libs';

export default class ModalBody extends Component {
  render(): React.DOM {
    return (
      <div style={this.style()} className={this.className('cd-modal__body')}>
        { this.props.children }
      </div>
    )
  }
}
