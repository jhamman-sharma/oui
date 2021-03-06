import React, { useCallback } from 'react';
import classNames from 'classnames';

import Label from '../Label';
import Icon from 'react-oui-icons';
import ButtonIcon from '../ButtonIcon';

type InputProps = {
  /** The default value of the input used on initial render */
  defaultValue?: string;

  /** Includes search icon if true */
  displayError?: boolean;

  /** Whether or not to automatically focus this input */
  focus?: boolean;

  /** Whether or not to add a clear button to right of input */
  hasClearButton?: boolean;

  /** Disables spell checking when set to false */
  hasSpellCheck?: boolean;

  /** Id of the input to properly associate with the input's label */
  id?: string;

  /** Prevents input from being modified and appears disabled */
  isDisabled?: boolean;

  /** Includes error if true */
  isFilter?: boolean;

  /** Adds an optional label if there is a label provided */
  isOptional?: any;

  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly?: boolean;

  /** Includes required asterisk label if true */
  isRequired?: any;

  /** Text that describes the input */
  label?: string;

  /** Name of the icon to place on left side of input */
  leftIconName?: string;

  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max?: number;

  /**
   * Max length of the input value. Should be used only when type is 'text',
   * 'email', 'search', 'password', 'tel', or 'url'.
   */
  maxLength?: number;

  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min?: number;

  /** Form note for the input */
  note?: string | null;

  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
   */
  onBlur?: (...args: any[]) => any;

  /** Function that fires when the input loses focus after the value changes */
  onChange?: (...args: any[]) => any;

  /** Function that fires when the input's clear button is clicked */
  onClearButtonClick?: (...args: any[]) => any;

  /** Function that fires when the input is clicked */
  onClick?: (...args: any[]) => any;

  /** Function that fires when the input gains focus */
  onFocus?: (...args: any[]) => any;

  /** Function that fires anytime the input value changes */
  onInput?: (...args: any[]) => any;

  /** Function that fires when a key is pressed down */
  onKeyDown?: (...args: any[]) => any;

  /** Input placeholder text */
  placeholder?: string;

  /** Name of the icon to place on right side of input */
  rightIconName?: string;

  /** Input step value */
  step?: string;

  /** Hook for automated JavaScript tests */
  testSection?: string;

  /** Align text inside input. Default is left. */
  textAlign?: 'left' | 'right';

  /** Supported input types */
  type:
    | 'text'
    | 'password'
    | 'date'
    | 'number'
    | 'email'
    | 'url'
    | 'search'
    | 'tel'
    | 'time';

  /** Text within the input */
  value?: string | number;
};

const Input: React.SFC<InputProps> = React.forwardRef(
  (props, ref?: React.Ref<HTMLInputElement>) => {
    const {
      defaultValue,
      displayError,
      focus,
      hasClearButton,
      hasSpellCheck,
      id,
      isDisabled,
      isFilter,
      isOptional,
      isReadOnly,
      isRequired,
      label,
      leftIconName,
      max,
      maxLength,
      min,
      note,
      onBlur,
      onChange,
      onClearButtonClick,
      onClick,
      onFocus,
      onInput,
      onKeyDown,
      placeholder,
      rightIconName,
      step,
      testSection,
      textAlign,
      type,
      value,
    } = props;
    const renderNote = useCallback(
      () => (
        <div
          className="oui-form-note"
          data-test-section={testSection && testSection + '-note'}
        >
          {note}
        </div>
      ),
      [note, testSection]
    );

    const renderIcon = (iconName) => {
      return <Icon name={iconName} size="medium" />;
    };

    const renderClearButton = () => {
      return <ButtonIcon title="Clear Input" iconName='close' size="small" style='plain' onClick={onClearButtonClick}/>;
    };

    const renderInput = () => {
      let hasAlignStyle = false;
      if (textAlign) {
        hasAlignStyle = true;
      }
      let classes = classNames(
        'oui-text-input',
        { 'oui-text-input--read-only': isReadOnly },
        { 'oui-text-input--search': isFilter },
        { 'oui-form-bad-news': displayError },
        { [`text--${textAlign}`]: hasAlignStyle }
      );

      let input = (
        <input
          data-oui-component={true}
          className={classes}
          id={id}
          ref={ref}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={isRequired}
          readOnly={isReadOnly}
          disabled={isDisabled}
          onInput={onInput}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          min={min}
          max={max}
          spellCheck={hasSpellCheck}
          step={step}
          {...(typeof maxLength === 'undefined' ? {} : { maxLength })}
          data-test-section={testSection}
          autoFocus={focus}
        />
      );

      if (leftIconName || rightIconName || hasClearButton) {
        let containerClasses = classNames('position--relative', {
          [`oui-text-input-with-icon--left`]: leftIconName,
          [`oui-text-input-with-icon--right`]: rightIconName,
        });
        return (
          <div className={containerClasses}>
            {leftIconName && (
              <span className="flex oui-input-icon__left">
                {renderIcon(leftIconName)}
              </span>
            )}
            {input}
            {(rightIconName && !hasClearButton) && (
              <span className="flex oui-input-icon__right">
                {renderIcon(rightIconName)}
              </span>
            )}
            {hasClearButton && (
              <span className="flex oui-text-input__clear-button">
                {renderClearButton()}
              </span>
            )}
          </div>
        );
      }
      return input;
    };

    if (label) {
      return (
        <div
          data-oui-component={true}
          className={classNames({ 'oui-form-bad-news': displayError })}
        >
          <Label
            testSection={testSection && testSection + '-label'}
            isRequired={isRequired}
            isOptional={isOptional}
            inputId={id}
          >
            {label}
          </Label>
          {renderInput()}
          {note && renderNote()}
        </div>
      );
    }
    return (
      <React.Fragment>
        {renderInput()}
        {note && renderNote()}
      </React.Fragment>
    );
  }
);

Input.propTypes = {
  /** Id to link label and input for accessibility reasons
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  id: function verifyIDProp(props) {
    if (props.label && !props.id) {
      return new Error(
        'Inputs must include an id when a label is specified for accessibility purposes.'
      );
    }
    return null;
  },
  /** Adds an optional label if there is a label provided
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isOptional: function verifyIsOptionalProp(props) {
    if (props.isOptional && !props.label) {
      return new Error(
        'Must include a value for the label prop to use the isOptional prop'
      );
    }
    return null;
  },
  /** Includes required asterisk label if true
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isRequired: function verifyIsRequiredProp(props) {
    if (props.isRequired && !props.label) {
      return new Error(
        'Must include a value for the label prop to use the isRequired prop'
      );
    }
    return null;
  },
};

Input.displayName = 'Input';
Input.defaultProps = {
  note: null,
  isRequired: false,
  hasSpellCheck: true,
};

export default Input;
