/* @flow */

import React from 'react';
import { Component, Transition, View } from '../../../libs';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    }
  }

  handleClose() {
    this.setState({ visible: false }, () => {
      if (this.props.onClose) this.props.onClose();
    });
  }

  handleClick() {
    if (this.props.onClick) this.props.onClick();
  }

  render() {
    const {
      type,
      hit,
      closable,
      round,
      plain,
      disableTransitions,
      size,
      children
    } = this.props;

    return (
      <Transition name={disableTransitions ? '' : 'cd-zoom-in-center'}>
        <View key={this.state.visible} show={this.state.visible}>
          <span
            style={this.style()}
            onClick={this.handleClick.bind(this)}
            className={
              this.className(
                'cd-tag',
                type && `cd-tag--${type}`,
                size && `cd-tag--${size}`,
                {
                  'is-hit': hit,
                  'is-round': round,
                  'is-plain': plain
                }
              )
            }
          >
            {children}
            {
              closable &&
              <i className="cd-tag__close cd-icon-close" onClick={this.handleClose.bind(this)}/>
            }
          </span>
        </View>
      </Transition>
    )
  }

}

Tag.propTypes = {
  type: PropTypes.string,
  hit: PropTypes.bool,
  closable: PropTypes.bool,
  round: PropTypes.bool,
  plain: PropTypes.bool,
  disableTransitions: PropTypes.bool,
  size: PropTypes.string,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};