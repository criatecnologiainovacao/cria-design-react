/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class Button extends Component {

    onClick(e: SyntheticEvent<any>): void {
        if (!this.props.loading) {
            this.props.onClick && this.props.onClick(e);
        }
    }

    render(): React.DOM {
        const {
            id,
            type,
            size,
            disabled,
            loading,
            plain,
            nativeType,
            icon,
            appendIcon,
            round,
            circle,
            autofocus,
            children
        } = this.props;

        return (
            <button
                id={id}
                autoFocus={autofocus}
                style={this.style()}
                className={this.className(
                    'cd-button',
                    type && `cd-button--${type}`,
                    size && `cd-button--${size}`,
                    {
                        'is-disabled': disabled,
                        'is-loading': loading,
                        'is-plain': plain,
                        'is-round': round,
                        'is-circle': circle
                    }
                )}
                disabled={disabled || loading}
                type={nativeType}
                onClick={this.onClick.bind(this)}
            >
                {loading && <i className="cd-icon cd-icon-loading"/>}
                {icon && !loading && <i className={`cd-icon ${icon}`}/>}
                {children && <span>{children}</span>}
                {appendIcon && <i className={`cd-icon ${appendIcon}`}/>}
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    appendIcon: PropTypes.string,
    nativeType: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    plain: PropTypes.bool,
    round: PropTypes.bool,
    circle: PropTypes.bool,
    autofocus: PropTypes.bool
};

Button.defaultProps = {
    type: 'default',
    nativeType: 'button',
    loading: false,
    disabled: false,
    plain: false,
    round: false,
    circle: false,
    autofocus: false
};
