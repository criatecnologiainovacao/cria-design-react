import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Component } from '../../../libs';

var CardQuantitativo = function (_Component) {
  _inherits(CardQuantitativo, _Component);

  function CardQuantitativo() {
    _classCallCheck(this, CardQuantitativo);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CardQuantitativo.prototype.render = function render() {
    var _props = this.props,
        quantidade = _props.quantidade,
        texto = _props.texto,
        icone = _props.icone;

    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement('i', { className: icone, id: 'card-icon' }),
      React.createElement(
        'h1',
        null,
        quantidade
      ),
      React.createElement(
        'h1',
        null,
        texto
      )
    );
  };

  return CardQuantitativo;
}(Component);

CardQuantitativo.defaultProps = {};
export default CardQuantitativo;