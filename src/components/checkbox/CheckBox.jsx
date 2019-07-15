/* @flow */

import React from 'react'
import { Component, PropTypes } from '../../../libs'

type State = {
    checked: boolean,
    focus: boolean,
    label: string,
}

export default class Checkbox extends Component {
    static elementType = 'Checkbox';

    constructor(props: Object) {
        super(props);

        this.state = {
            checked: props.checked,
            focus: props.focus,
            label: Checkbox.getLabel(props)
        };
    }

    static getLabel(props: Object): string {
        if (props.trueLabel || props.falseLabel) {
            return props.checked ? props.trueLabel : props.falseLabel;
        } else {
            return props.label;
        }
    }

    componentWillReceiveProps(nextProps: Object): void {
        this.setState(
            {
                checked: nextProps.checked,
                focus: nextProps.focus,
                label: Checkbox.getLabel(nextProps)
            }
        )
    }

    onFocus(): void {
        this.setState({ focus: true });
    }

    onBlur(): void {
        this.setState({ focus: false });
    }

    onChange(e: SyntheticEvent<any>): void {
        const { label } = this.state;
        const { trueLabel, falseLabel } = this.props;

        const checked = e.target.checked;
        const group = this.context.ElCheckboxGroup;

        if (group) {
            const length = group.state.options.length + (checked ? 1 : -1);

            if (group.props.min !== undefined && length < group.props.min) {
                return;
            }

            if (group.props.max !== undefined && length > group.props.max) {
                return;
            }
        }

        let newLabel = label;

        if (this.props.trueLabel || this.props.falseLabel) {
            newLabel = checked ? trueLabel : falseLabel;
        }

        this.setState({
                          checked: checked,
                          label: newLabel
                      }, () => {
            if (this.props.onChange) {
                this.props.onChange(checked);
            }
        });
    }

    render(): React.DOM {
        return (
            <label style={this.style()} className={this.className('cd-checkbox')}>
        <span className={this.classNames('cd-checkbox__input', {
            'is-disabled': this.props.disabled,
            'is-checked': this.state.checked,
            'is-indeterminate': this.props.indeterminate,
            'is-focus': this.state.focus
        })}>
          <span className="cd-checkbox__inner"/>
          <input
              className="cd-checkbox__original"
              type="checkbox"
              checked={this.state.checked}
              disabled={this.props.disabled}
              onFocus={this.onFocus.bind(this)}
              onBlur={this.onBlur.bind(this)}
              onChange={this.onChange.bind(this)}
          />
        </span>
                {(this.state.label || this.props.children) && <span className="cd-checkbox__label">
          {this.props.children || this.state.label}
        </span>}
            </label>
        )
    }

    state: State;
}

Checkbox.contextTypes = {
    ElCheckboxGroup: PropTypes.any
};

Checkbox.propTypes = {
    label: PropTypes.string,
    trueLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    falseLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    focus: PropTypes.bool,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    checked: false,
    focus: false
};