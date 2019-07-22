/* @flow */

import React from 'react';
import { Component, PropTypes, Transition, View } from '../../../libs';
import { cleanScrollBar } from '../table/utils';
import Button from '../button';

const typeMap = {
    success: 'circle-check',
    info: 'warning-outline msgbox-info-icon',
    warning: 'warning-outline',
    error: 'circle-close'
};

type State = {
    visible: boolean
};

export default class MessageBox extends Component {
    state: State;

    constructor(props: Object) {
        super(props);

        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        cleanScrollBar()
        this.setState({ visible: true });
        document.activeElement && document.activeElement.blur()
    }

    confirmButtonText(): string {
        return this.props.confirmButtonText || 'OK';
    }

    cancelButtonText(): string {
        return this.props.cancelButtonText || 'Cancelar';
    }

    typeClass(): string {
        return this.props.type && typeMap[this.props.type] && `cd-icon-${typeMap[this.props.type]}`;
    }

    handleAction(action: string): void {
        const { promise } = this.props;

        switch (action) {
            case 'cancel':
                promise.reject();
                break;
            case 'confirm':
                promise.resolve();
                break;
            default:
                break;
        }

        this.close();
    }

    close(): void {
        this.setState({
            visible: false
        });
    }

    render(): React.DOM {
        const { willUnmount, title, message, showCancelButton, cancelButtonClass, showConfirmButton, confirmButtonClass, customClass } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <div style={{ position: 'absolute', zIndex: 2001 }}>
                    <Transition
                        name="msgbox-fade"
                        onAfterLeave={() => {
                            willUnmount && willUnmount()
                        }}
                    >
                        <View show={visible}>
                            <div className={this.classNames('cd-message-box__wrapper', customClass)}>
                                <div className="cd-message-box">
                                    <div className="cd-message-box__content">
                                        {
                                            <div className={this.classNames('cd-message-box__status', this.typeClass())} />
                                        }
                                        {
                                            title && (
                                                <div className="cd-message-box__header">
                                                    <div className="cd-message-box__title">{title}</div>
                                                </div>
                                            )
                                        }
                                        {
                                            message && (
                                                <div className="cd-message-box__message">
                                                    {message}
                                                </div>
                                            )
                                        }
                                        <div className="cd-message-box__btns">
                                            {
                                                showCancelButton &&
                                                <Button className={cancelButtonClass} icon="cd-icon-close"
                                                    onClick={this.handleAction.bind(this, 'cancel')}>{this.cancelButtonText()}</Button>
                                            }
                                            {
                                                showConfirmButton &&
                                                <Button className={this.classNames('cd-button--primary', confirmButtonClass)} icon="cd-icon-check"
                                                    onClick={this.handleAction.bind(this, 'confirm')}>{this.confirmButtonText()}</Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </View>
                    </Transition>
                </div>
                <Transition name="v-modal">
                    <View show={visible}>
                        <div className="v-modal" style={{ zIndex: 1006 }} />
                    </View>
                </Transition>
            </div>
        )
    }
}

MessageBox.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
    title: PropTypes.string,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    showCancelButton: PropTypes.bool,
    showConfirmButton: PropTypes.bool,
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    cancelButtonClass: PropTypes.string,
    confirmButtonClass: PropTypes.string,
    customClass: PropTypes.string,
    promise: PropTypes.object
}

MessageBox.defaultProps = {
    title: '',
    type: 'success',
    showCancelButton: false,
    showConfirmButton: true
}
