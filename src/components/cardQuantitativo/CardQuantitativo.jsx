/* @flow */

import React from 'react';
import { Component } from '../../../libs';

export default class CardQuantitativo extends Component {

  static defaultProps = {}

  render(): React.DOM {
    const { quantidade, texto, icone } = this.props;
    return (
      <div className="card">
        <i className={icone} id="card-icon" />
        <h1>{quantidade}</h1>
        <h1>{texto}</h1>
      </div>
  );
  }
  }
