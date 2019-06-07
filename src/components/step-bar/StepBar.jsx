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

    changeStep(index) {
        this.setState({ activeStep: index })
    }

    render(): React.DOM {
        const {
            steps,
            clickable,
            onClick
        } = this.props;

        return (
            <ul className={this.className('cd-step-bar')}>
                {steps.map((value, index) => {
                               return (
                                   <li key={index} className={this.className(
                                       this.state.activeStep === index && 'is-active',
                                       clickable && 'is-clickable')} onClick={clickable ?
                                                                              () => {
                                                                                  this.changeStep(index);
                                                                                  onClick();
                                                                              } : {}
                                   }
                                   >
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
