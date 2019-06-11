/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { Component } from '../../../libs';

export default class StepBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: this.props.activeStep
        }
    }

    componentWillUpdate(props: Object): void {
        if (props.activeStep !== this.props.activeStep) {
            this.changeStep(props.activeStep)
        }
    }

    changeStep(index) {
        this.setState({ activeStep: index });
        if (this.props.onClick && this.props.clickable) {
            this.props.onClick(index)
        }
    }

    render(): React.DOM {
        const {
            id,
            steps,
            clickable
        } = this.props;

        return (
            <ul id={id} className={this.className('cd-step-bar')} style={this.style()}>
                {
                    steps.map((value, index) => {
                                  return (
                                      <li key={index} className={this.className(
                                          this.state.activeStep === index && 'is-active',
                                          clickable && 'is-clickable')}
                                          onClick={this.changeStep.bind(this, index)}>
                                          <p>{value}</p>
                                      </li>
                                  )
                              }
                    )
                }
            </ul>
        )
    }
}

StepBar.propTypes = {
    id: PropTypes.string,
    steps: PropTypes.array,
    activeStep: PropTypes.number,
    clickable: PropTypes.bool,
    onClick: PropTypes.func
};

StepBar.defaultProps = {
    steps: [],
    activeStep: 0,
    clickable: false
};
