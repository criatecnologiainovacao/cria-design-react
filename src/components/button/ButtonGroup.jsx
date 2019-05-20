/* @flow */

import React from 'react';
import { Component } from '../../lib';

export default class ButtonGroup extends Component {
  render(): React.DOM {
    return (
      <div style={this.style()} className={this.className('cd-button-group')}>
        {this.props.children}
      </div>
    )
  }
}