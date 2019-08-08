/* @flow */

import React from 'react';
import { Component, PropTypes, Transition, View } from '../../../libs';

type State = {
    bodyOverflow: string,
}

export default class Modal extends Component {
    static defaultProps = {
        visible: false,
        title: '',
        size: 'small',
        top: '15%',
        modal: true,
        lockScroll: true,
        closeOnClickModal: true,
        closeOnPressEscape: true,
        showClose: true
    };

    constructor(props: Object) {
        super(props);
        this.wrap = React.createRef();
        this.state = {
            visible: props.visible,
            bodyOverflow: ''
        };
        if (this.props.visible && this.props.onOpen) {
            this.props.onOpen();
        }
    }

    componentWillReceiveProps(nextProps: Object): void {
        const { bodyOverflow } = this.state;
        const { lockScroll, modal, visible } = this.props;

        if (nextProps.visible !== visible) {
            this.setState({
                visible: nextProps.visible
            })
        }

        if (this.willOpen(this.props, nextProps)) {
            if (lockScroll && document.body && document.body.style) {
                if (!bodyOverflow) {
                    this.setState({
                        bodyOverflow: document.body.style.overflow
                    });
                }
                document.body.style.overflow = 'hidden';
            }
            if (this.props.onOpen) {
                this.props.onOpen();
            }
        }

        if (this.willClose(this.props, nextProps) && lockScroll) {
            if (modal && bodyOverflow !== 'hidden' && document.body && document.body.style) {
                document.body.style.overflow = bodyOverflow;
            }
        }

    }

    componentDidUpdate(prevProps: Object): void {
        if (this.willOpen(prevProps, this.props)) {
            this.wrap.current.focus();
        }
    }

    componentWillUnmount(): void {
        const { lockScroll } = this.props;
        if (lockScroll && document.body && document.body.style) {
            document.body.style.removeProperty('overflow');
        }
    }

    onKeyDown(e: SyntheticKeyboardEvent<any>): void {
        const { closeOnPressEscape } = this.props;
        if (closeOnPressEscape && e.keyCode === 27) {
            this.close(e);
        }
    }

    handleWrapperClick(e: SyntheticEvent<HTMLDivElement>): void {
        const { closeOnClickModal } = this.props;
        if (e.target instanceof HTMLDivElement) {
            if (closeOnClickModal && e.target === e.currentTarget) {
                this.close(e);
            }
        }
    }

    close(e: any): void {
        if (this.props.onCancel) {
            this.props.onCancel(e);
        } else {
            this.setState({
                visible: false
            })
        }

    }

    willOpen(prevProps: Object, nextProps: Object): boolean {
        return (!prevProps.visible && nextProps.visible);
    }

    willClose(prevProps: Object, nextProps: Object): boolean {
        return (prevProps.visible && !nextProps.visible);
    }

    render(): React.DOM {
        const { title, size, top, modal, customClass, showClose, children } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <Transition name="modal-fade">
                    <View show={visible}>
                        <div
                            ref={this.wrap}
                            style={{ zIndex: 1013 }}
                            className={this.classNames('cd-modal__wrapper')}
                            onClick={e => this.handleWrapperClick(e)}
                            onKeyDown={e => this.onKeyDown(e)}
                        >
                            <div
                                ref="modal"
                                style={this.style(size === 'full' ? {} : { 'top': top })}
                                className={this.className('cd-modal', `cd-modal--${size}`, customClass)}
                            >
                                <div className="cd-modal__header">
                                    <span className="cd-modal__title">{title}</span>
                                    {
                                        showClose && (
                                            <button type="button" className="cd-modal__headerbtn"
                                                    onClick={e => this.close(e)}>
                                                <i className="cd-modal__close cd-icon cd-icon-close"/>
                                            </button>
                                        )
                                    }
                                </div>
                                {children}
                            </div>
                        </div>
                    </View>
                </Transition>
                {
                    modal && (
                        <View show={visible}>
                            <div className="v-modal" style={{ zIndex: 1012 }}/>
                        </View>
                    )
                }
            </div>
        );
    }

    state: State;
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string,
    size: PropTypes.string,
    top: PropTypes.string,
    modal: PropTypes.bool,
    customClass: PropTypes.string,
    lockScroll: PropTypes.bool,
    closeOnClickModal: PropTypes.bool,
    closeOnPressEscape: PropTypes.bool,
    onCancel: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    showClose: PropTypes.bool
};
