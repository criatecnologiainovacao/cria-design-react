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
        if (!this.props.disableCloseDefault) {
            this.setState({visible: false})
        }
          if (this.props.onClose) this.props.onClose();
    }

    render() {
        const {
            id,
            type,
            icon,
            onClick,
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
                        id={id}
                        onClick={onClick}
                        style={this.style()}
                        className={
                            this.className(
                                'cd-tag',
                                type && `cd-tag--${type}`,
                                size && `cd-tag--${size}`,
                                onClick && `cd-tag--clickable`,
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
                            <i className="cd-tag__close cd-icon-close"
                               onClick={this.handleClose.bind(this)}/>
                        }
                    </span>
                </View>
            </Transition>
        )
    }

}

Tag.propTypes = {
    id: PropTypes.string,
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
    onClick: PropTypes.func,
    disableCloseDefault: PropTypes.bool
};
