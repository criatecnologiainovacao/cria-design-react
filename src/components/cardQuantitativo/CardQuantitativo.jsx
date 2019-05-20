/* @flow */

import React from 'react';
import { Layout } from 'element-react'
import { Component } from '../../../libs';

export default class CardQuantitativo extends Component {

  static defaultProps = {}

  render(): React.DOM {
    const { quantidade, texto, icone } = this.props;
    return (
      <div className="card">
        <Layout.Row>
          <Layout.Col span="6">
            <i className={icone} id="card-icon"/>
          </Layout.Col>
          <Layout.Col span="6">
            <h1>{quantidade}</h1>
          </Layout.Col>
          <Layout.Col span="12">
            <h1>{texto}</h1>
          </Layout.Col>
        </Layout.Row>
      </div>
  );
  }
  }
