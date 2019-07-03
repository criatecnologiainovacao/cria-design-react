/* @flow */

import React from 'react';
import Popper from 'popper.js';
import { Component, PropTypes, Transition, View } from '../../../libs';

type State = {
    showPopper: boolean;
}

export default class Tooltip extends Component {
    state: State;

    static defaultProps = {
        effect: "dark",
        placement: "bottom",
        disabled: false,
        transition: "fade-in-linear",
        visibleArrow: true,
        openDelay: 0,
        manual: false
    }

    constructor(props: Object) {
        super(props);

        this.state = {
            showPopper: false
        }
    }

    componentWillReceiveProps(props: Object) {
        if (props.visible !== this.props.visible) {
            this.setState({
                showPopper: props.visible
            });
        }
    }

    showPopper(): void {
        if (!this.props.manual) {
            this.timeout = setTimeout(() => {
                this.setState({ showPopper: true });
            }, this.props.openDelay);
        }
    }

    hidePopper(): void {
        if (!this.props.manual) {
            clearTimeout(this.timeout);
            this.setState({ showPopper: false });
        }
    }

    onEnter(): void {
        const { popper, reference, arrow } = this.refs;

        if (arrow) {
            arrow.setAttribute('x-arrow', '');
        }

        this.popperJS = new Popper(reference, popper, {
            placement: this.props.placement,
            modifiers: {
                computeStyle: {
                    gpuAcceleration: false
                }
            }
        });
    }

    onAfterLeave(): void {
        this.popperJS.destroy();
    }

    render(): React.DOM {
        const { effect, content, disabled, transition, visibleArrow } = this.props;

        return (
          <div style={this.style()} className={this.className('cd-tooltip')} onMouseEnter={this.showPopper.bind(this)} onMouseLeave={this.hidePopper.bind(this)}>
            <div ref="reference" className="cd-tooltip__rel">
              <div>{ this.props.children }</div>
            </div>
            {
                    !disabled && (
                    <Transition name={transition} onEnter={this.onEnter.bind(this)} onAfterLeave={this.onAfterLeave.bind(this)}>
                      <View show={this.state.showPopper}>
                        <div ref="popper" className={ this.classNames("cd-tooltip__popper", `is-${effect}`) }>
                          <div>{ content }</div>
                          { visibleArrow && <div ref="arrow" className="popper__arrow" /> }
                        </div>
                      </View>
                    </Transition>
                    )
                }
          </div>
        )
    }
}

Tooltip.propTypes = {
    effect: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    placement: PropTypes.oneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']),
    disabled: PropTypes.bool,
    transition: PropTypes.string,
    visibleArrow: PropTypes.bool,
    openDelay: PropTypes.number,
    manual: PropTypes.bool,
    visible: PropTypes.bool
};