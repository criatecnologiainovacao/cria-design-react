/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../../libs';
import calcTextareaHeight from './calcTextareaHeight';

type State = {
    textareaStyle: { resize: string, height?: string },
    hovering: boolean,
    focused: boolean,
    passwordVisible: boolean
}

export default class Input extends Component {
    static defaultProps = {
        type: 'text',
        autoSize: false,
        autoComplete: 'off',
        validateEvent: true
    };

    constructor(props: Object) {
        super(props);

        this.state = {
            textareaStyle: { resize: props.resize },
            hovering: false,
            focused: false,
            passwordVisible: false
        };
    }

    componentDidMount() {
        this.setNativeInputValue();
        this.resizeTextarea();
    }

    // componentWillUpdate(nextProps, nextState): void {
    //     this.updateNativeValue();
    // }

    handleChange(e: SyntheticInputEvent<any>): void {
        const { onChange } = this.props;
        if (onChange) {
            onChange(e.target.value);
        }
        this.resizeTextarea();
        this.updateNativeValue();
    }

    handleFocus(e: SyntheticEvent<any>): void {
        const { onFocus } = this.props;
        this.setState({ focused: true });
        if (onFocus) onFocus(e);
    }

    handleBlur(e: SyntheticEvent<any>): void {
        const { onBlur } = this.props;
        this.setState({ focused: false });
        if (onBlur) onBlur(e);
    }

    handleCompositionStart(): void {
        this.setState({ isComposing: true });
    }

    handleIconClick(e: SyntheticEvent<any>): void {
        if (this.props.onIconClick) {
            this.props.onIconClick(e)
        }
    }

    handleKeyUp(e: SyntheticEvent<any>): void {
        if (this.props.onKeyUp) {
            this.props.onKeyUp();
        }
    }

    handleDownKey(e: SyntheticEvent<any>): void {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e)
        }
    }

    handleMouseDown(e: SyntheticEvent<any>): void {
        if (this.props.onMouseDown) {
            this.props.onMouseDown(e)
        }
    }


    handleCompositionEnd(e: SyntheticEvent<any>): void {
        this.setState({ isComposing: false });
        this.handleInput(e);
    }

    handleHoveringStart(): void {
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter()
        }
        this.setState({ hovering: true });
    }

    handleHoveringEnd(e: SyntheticEvent<any>): void {
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave()
        }
        this.setState({ hovering: false });
    }

    handleInput(e: SyntheticInputEvent<any>): void {
        const { isComposing } = this.state;
        const { onInput } = this.props;
        if (isComposing) return;
        if (e.target.value === this.nativeInputValue()) return;
        if (onInput) onInput(e.target.value);
        this.nativeInputValue();
    }

    focus(): void {
        setTimeout(() => {
            (this.refs.input || this.refs.textarea).focus();
        });
    }

    blur(): void {
        setTimeout(() => {
            (this.refs.input || this.refs.textarea).blur();
        });
    }

    setNativeInputValue() {
        const input = this.getInput();
        if (!input) return;
        if (input.value === this.nativeInputValue()) return;
        input.value = this.nativeInputValue();
    }

    getInput() {
        return this.refs.input || this.refs.textarea;
    }

    clear() {
        const { onChange, onClear } = this.props;
        if (onChange) onChange('');
        if (onClear) onClear();
    }

    resizeTextarea(): void {
        const { autoSize, type } = this.props;

        if (!autoSize || type !== 'textarea') {
            return;
        }

        const minRows = autoSize.minRows;
        const maxRows = autoSize.maxRows;
        const textareaCalcStyle = calcTextareaHeight(this.refs.textarea, minRows, maxRows);

        this.setState(
            {
                textareaStyle: Object.assign({}, this.state.textareaStyle, textareaCalcStyle)
            }
        );
    }

    validateState(): boolean {
        // TODO
        // return this.elFormItem ? this.elFormItem.validateState : '';
    }

    needStatusIcon(): boolean {
        // TODO
        // return this.elForm ? this.elForm.statusIcon : false;
    }

    validateIcon(): boolean {
        // return {
        //     validating: 'el-icon-loading',
        //     success: 'el-icon-circle-check',
        //     error: 'el-icon-circle-close'
        // }[this.validateState];
    }

    getSuffixVisible(): boolean {
        const { suffix, suffixIcon, showPassword } = this.props;
        return suffix ||
               suffixIcon ||
               this.showClear() ||
               showPassword ||
               this.isWordLimitVisible() ||
               (this.validateState() && this.needStatusIcon());
    }

    inputSize(): string {
        const { size } = this.props;
        return size || 'medium';
    }

    inputDisabled(): boolean {
        const { disabled, form } = this.props;
        return disabled || (form || {}).disabled;
    }

    nativeInputValue(): string {
        const { value } = this.props;
        return value === null || value === undefined
               ? ''
               : String(value);
    }

    updateNativeValue(): string {
        const input = this.getInput();
        if (!input) return this.nativeInputValue();

        return input.value;
    }

    showClear(): boolean {
        const { clearable, readOnly } = this.props;
        const { focused, hovering } = this.state;
        return clearable &&
               !this.inputDisabled() &&
               !readOnly &&
               (focused || hovering);
    }

    handlePasswordVisible() {
        const { passwordVisible } = this.state;
        this.setState({ passwordVisible: !passwordVisible });
        this.getInput().focus();
    }

    showPwdVisible(): boolean {
        const { readOnly, showPassword } = this.props;
        const { focused } = this.state;
        return showPassword &&
               !this.inputDisabled() &&
               !readOnly &&
               (!!this.nativeInputValue() || focused);
    }

    isWordLimitVisible(): boolean {
        const { showWordLimit, type, readOnly, showPassword, maxLength } = this.props;
        return showWordLimit &&
               maxLength &&
               (type === 'text' || type === 'textarea') &&
               !this.inputDisabled() &&
               !readOnly &&
               !showPassword;
    }

    upperLimit() {
        return this.props.maxLength;
    }

    textLength() {
        return (this.updateNativeValue() || '').length;
    }

    inputExceed() {
        return this.isWordLimitVisible &&
               (this.textLength() > this.upperLimit());
    }

    showSuffix() {
        return !this.showClear() || !this.showPwdVisible() ||
               !this.isWordLimitVisible();
    }

    render(): React.DOM {
        const {
            append,
            autoComplete,
            autoFocus,
            clearable,
            id,
            label,
            value,
            placeholder,
            prefix,
            prefixIcon,
            prepend,
            readOnly,
            showPassword,
            suffix,
            suffixIcon,
            tabindex,
            type,
            maxLength,
            minLength
        } = this.props;

        const classname = this.classNames(
            type === 'textarea' ? 'cd-textarea' : 'cd-input',
            `cd-input--${this.inputSize()}`,
            {
                'is-disabled': this.inputDisabled(),
                'is-exceed': this.inputExceed(),
                'cd-input-group': prepend || append,
                'cd-input-group--append': !!append,
                'cd-input-group--prepend': !!prepend,
                'cd-input--prefix': prefix || prefixIcon,
                'cd-input--suffix': suffix || suffixIcon || clearable || showPassword
            }
        );

        if (type === 'textarea') {
            return (
                <div
                    style={this.style()}
                    className={this.className(classname)}
                    onMouseEnter={this.handleHoveringStart.bind(this)}
                    onMouseDown={this.handleMouseDown.bind(this)}
                    onMouseLeave={this.handleHoveringEnd.bind(this)}>
                    <textarea
                        id={id}
                        ref="textarea"
                        tabIndex={tabindex}
                        className="cd-textarea__inner"
                        style={this.state.textareaStyle}
                        readOnly={readOnly}
                        autoComplete={autoComplete}
                        onInput={this.handleInput.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        aria-label={label}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        maxLength={maxLength}
                        minLength={minLength}
                    />
                    {this.isWordLimitVisible() && type === 'textarea'
                     && <span
                         className="cd-input__count">{`${this.textLength()} / ${this.upperLimit()}`}</span>}
                </div>
            );
        } else {
            return (
                <div style={this.style()}
                     className={this.className(classname)}
                     onMouseEnter={this.handleHoveringStart.bind(this)}
                     onMouseLeave={this.handleHoveringEnd.bind(this)}>
                    {prepend && <div className="cd-input-group__prepend">{prepend}</div>}
                    <input
                        id={id}
                        ref="input"
                        type={showPassword
                              ? (this.state.passwordVisible ? 'text' : 'password')
                              : type}
                        className="cd-input__inner"
                        value={!Array.isArray(value) ? value : ''}
                        disabled={this.inputDisabled()}
                        readOnly={readOnly}
                        autoComplete={autoComplete}
                        onInput={this.handleInput.bind(this)}
                        onKeyUp={this.handleKeyUp.bind(this)}
                        onKeyDown={this.handleDownKey.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onClick={this.handleIconClick.bind(this)}
                        tabIndex={tabindex}
                        aria-label={label}
                        name={label}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        maxLength={maxLength}
                        minLength={minLength}
                    />
                    {
                        (prefix || prefixIcon) &&
                        <span className="cd-input__prefix">
                            {prefix}
                            {prefixIcon && <i className={`cd-input__icon ${prefixIcon}`}/>}
                        </span>
                    }
                    {
                        this.getSuffixVisible() &&
                        <span className="cd-input__suffix"  onClick={this.handleIconClick.bind(this)}
                           >
                            <span className="cd-input__suffix-inner">
                                {
                                    this.showSuffix() &&
                                    <span className="cd-input__suffix-inner__suffix">
                                        {suffix}
                                    </span>
                                }
                                {suffixIcon && <i className={`cd-input__icon ${suffixIcon}`}/>}
                                {this.showClear() &&
                                 <i className="cd-input__icon cd-icon-circle-close cd-input__clear"
                                    onClick={this.clear.bind(this)}/>}
                                {this.showPwdVisible() &&
                                 <i className="cd-input__icon cd-icon-view cd-input__clear"
                                    onClick={this.handlePasswordVisible.bind(this)}/>}
                                {
                                    this.isWordLimitVisible() &&
                                    <span className="cd-input__count">
                                        <span className="cd-input__count-inner">
                                            {`${this.textLength()} / ${this.upperLimit()}`}
                                        </span>
                                    </span>
                                }
                            </span>
                        </span>

                    }
                    {append && <div className="cd-input-group__append">{append}</div>}
                </div>
            )
        }
    }

    state: State;
}

Input.propTypes = {
    // base
    id: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    value: PropTypes.any,
    clearable: PropTypes.bool,
    showWordLimit: PropTypes.bool,
    validateEvent: PropTypes.bool,
    suffixIcon: PropTypes.string,
    prefixIcon: PropTypes.string,
    label: PropTypes.string,
    tabindex: PropTypes.string,
    suffix: PropTypes.node,
    prefix: PropTypes.node,

    // type !== 'textarea'
    size: PropTypes.oneOf(['large', 'small', 'mini']),
    prepend: PropTypes.node,
    append: PropTypes.node,
    showPassword: PropTypes.bool,

    // type === 'textarea'
    autoSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),

    // event
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onInput: PropTypes.func,
    onIconClick: PropTypes.func,

    // autoComplete
    autoComplete: PropTypes.string,
    inputSelect: PropTypes.func,

    // form related
    form: PropTypes.string
};
