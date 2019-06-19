/* @flow */

import * as React from 'react';
import { Component, PropTypes, Animate, View } from '../../../libs';

const { Transition } = Animate

const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

type State = {
  visible: boolean
};

export default class Notification extends Component {
  state: State;

  constructor(props: Object) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  onClose() {
    this.setState({ visible: false }, () => this.stopTimer());
    if (this.props.onClose) {
        this.props.onClose();
    }
  }

  startTimer() {
    const { duration } = this.props
    if (duration) {
      this.timeout = setTimeout(() => this.onClose(), duration)
    }
  }

  stopTimer() {
    clearTimeout(this.timeout);
  }

  close() {
    this.onClose();
  }

  typeClass(): string {
    const { type } = this.props
    return type && typeMap[type] ? typeMap[type] : '';
  }

  typeIconClass(): string {
    const { type } = this.props
    return type && typeMap[type] ? `cd-icon-${ typeMap[type] }` : '';
  }

  render() {
    const { visible } = this.state
    const { onClose = () => false, willUnmount, top, type, iconClass, title, message, position } = this.props
    return (
      <Transition
        unmountOnExit
        transitionClass={{
          exiting: 'cd-notification-fade-leave-active',
          exited: 'cd-notification-fade-enter'
        }}
        in={visible}
        onEnter={() => {
          this.offsetHeight = this.rootDOM.offsetHeight;
        }}
        onExit={() => willUnmount(this.offsetHeight, parseInt(this.rootDOM.style.top))}
        onExited={() => onClose()}
      >
        <View show={visible}>
          <div
            ref={(ele) => { this.rootDOM = ele; }}
            className={`cd-notification ${position} ${this.typeClass()}`}
            style={{
              top,
              zIndex: 9999
            }}
            onMouseEnter={this.stopTimer.bind(this)}
            onMouseLeave={this.startTimer.bind(this)}
            onClick={this.onClick.bind(this)}
          >
            {
              type && (
                <i className={this.classNames('cd-notification__icon', this.typeIconClass(), iconClass)} />
              )
            }
            <div
              className={
                this.classNames('cd-notification__group', {
                  'is-with-icon': this.typeIconClass() || iconClass
                })
              }
            >
              <h2 className="cd-notification__title">{title}</h2>
              <div className="cd-notification__content">{message}</div>
              <div className="cd-notification__closeBtn cd-icon-close" onClick={this.onClose.bind(this)} />
            </div>
          </div>
        </View>
      </Transition>
    )
  }
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
  title: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  duration: PropTypes.number,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  top: PropTypes.number,
  position: PropTypes.string
}

Notification.defaultProps = {
  duration: 4500,
  top: 16,
  position: 'right'
}
