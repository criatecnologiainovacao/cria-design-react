/* @flow */

import React from 'react';
import { Component, PropTypes, View } from '../../../libs';

type State = {
    index: number,
    visible: boolean,
    hitState: boolean
};

export default class Option extends Component {
    state: State;

    constructor(props: Object) {
        super(props);

        this.state = {
            index: -1,
            visible: true,
            hitState: false
        }
    }

    componentWillMount() {
        this.parent().onOptionCreate(this);

        this.setState({
                          index: this.parent().state.options.indexOf(this)
                      });

        if (this.currentSelected() === true) {
            this.parent().addOptionToValue(this, true);
        }
    }

    componentWillUnmount() {
        this.parent().onOptionDestroy(this);
    }

    parent(): Object {
        return this.context.component;
    }

    currentSelected(): boolean {
        return this.props.selected || (this.parent().props.multiple ?
                                       this.parent().state.value.indexOf(this.props.value) > -1 :
                                       this.parent().state.value === this.props.value);
    }

    currentLabel(): string {
        return this.props.label ||
               ((typeof this.props.label === 'string' || typeof this.props.label === 'number')
                ? this.props.label
                : '');
    }

    itemSelected(): boolean {
        if (Object.prototype.toString.call(this.parent().state.selected) === '[object Object]') {
            return this === this.parent().state.selected;
        } else if (Array.isArray(this.parent().state.selected)) {
            return this.parent()
                       .state
                       .selected
                       .map(el => el.props.value)
                       .indexOf(this.props.value) > -1;
        }

        return false;
    }

    hoverItem() {
        if (!this.props.disabled && !this.parent().props.disabled) {
            this.parent().setState({
                                       hoverIndex: this.parent().state.options.indexOf(this)
                                   });
        }
    }

    selectOptionClick() {
        if (this.props.disabled !== true && this.parent().props.disabled !== true) {
            this.parent().onOptionClick(this);
        }
    }

    queryChange(query: string) {
        const parsedQuery = query.toString()
                                 .replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
        const visible = new RegExp(parsedQuery, 'i').test(this.currentLabel());

        this.setState({ visible });

        return !visible;
    }

    resetIndex() {
        this.setState({
                          index: this.parent().state.options.indexOf(this)
                      });
    }

    render() {
        const { visible, index } = this.state;

        return (
            <View show={visible}>
                <li
                    style={this.style()}
                    className={this.className('cd-select-dropdown__item', {
                        'selected': this.itemSelected(),
                        'is-disabled': this.props.disabled || this.parent().props.disabled,
                        'hover': this.parent().state.hoverIndex === index
                    })}
                    onMouseEnter={this.hoverItem.bind(this)}
                    onClick={this.selectOptionClick.bind(this)}
                >
                    {this.props.children || <span>{this.currentLabel()}</span>}
                </li>
            </View>
        )
    }
}

Option.contextTypes = {
    component: PropTypes.any
};

Option.propTypes = {
    value: PropTypes.any.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selected: PropTypes.bool,
    disabled: PropTypes.bool
}
