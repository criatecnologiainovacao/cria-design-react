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
            icon,
            appendIcon,
            hit,
            solid,
            closable,
            round,
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
                          'is-solid': solid
                      }
                  )
              }
          >
              {icon && <i className={`cd-icon ${icon}`}/>}
              {children && <span>{children}</span>}
              {appendIcon && !closable && <i className={`cd-append-icon ${appendIcon}`}/>}
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
    icon: PropTypes.string,
    appendIcon: PropTypes.string,
    hit: PropTypes.bool,
    solid: PropTypes.bool,
    closable: PropTypes.bool,
    round: PropTypes.bool,
    disableTransitions: PropTypes.bool,
    size: PropTypes.string,
    onClose: PropTypes.func,
    onClick: PropTypes.func
};