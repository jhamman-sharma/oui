function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../Spinner';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Button = function Button(_ref) {
  var _classNames;

  var ariaLabel = _ref.ariaLabel,
      isSubmit = _ref.isSubmit,
      isLink = _ref.isLink,
      children = _ref.children,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      loadingText = _ref.loadingText,
      onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      size = _ref.size,
      style = _ref.style,
      testSection = _ref.testSection,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'default' : _ref$width,
      buttonRef = _ref.buttonRef,
      title = _ref.title;
  var buttonClassNames = classNames('oui-button', (_classNames = {}, _defineProperty(_classNames, "oui-button--".concat(style), style), _defineProperty(_classNames, "oui-button--".concat(size), size), _defineProperty(_classNames, "oui-button--".concat(width), width), _defineProperty(_classNames, 'is-active', isActive), _defineProperty(_classNames, 'oui-button--loading', isLoading), _classNames));
  var type = isSubmit ? 'submit' : 'button';

  function handleOnClick(event) {
    if (isDisabled || isLoading) {
      return;
    }

    onClick(event);
  }

  if (isLink) {
    return React.createElement("div", {
      "data-oui-component": true,
      className: buttonClassNames,
      disabled: isDisabled,
      onBlur: onBlur,
      "data-test-section": testSection,
      ref: buttonRef
    }, children);
  }

  return React.createElement("button", {
    "data-oui-component": true,
    className: buttonClassNames,
    disabled: isDisabled || isLoading,
    type: type,
    onBlur: onBlur,
    onClick: handleOnClick,
    onMouseDown: onMouseDown,
    "data-test-section": testSection,
    "aria-label": ariaLabel,
    "aria-live": "polite",
    title: title,
    ref: buttonRef
  }, isLoading && React.createElement(Spinner, {
    "data-test-section": "button-spinner",
    size: "tiny"
  }), isLoading ? loadingText || 'Processing' : children);
};

Button.propTypes = {
  /** Describes buttons that have an icon but no text */
  ariaLabel: PropTypes.string,

  /** React ref to the underlying button component */
  buttonRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]),

  /** Text within the button */
  children: PropTypes.node.isRequired,

  /** Render button with active state */
  isActive: PropTypes.bool,

  /** Prevent users from interacting with the button */
  isDisabled: PropTypes.bool,

  /** Changes the button to a div for insertion within a Link component */
  isLink: PropTypes.bool,

  /** When true, adds a spinner to the button and disables the button */
  isLoading: PropTypes.bool,

  /** Make the button act as a submit button */
  isSubmit: PropTypes.bool,

  /** When the button adds a spinner, it displays this text */
  loadingText: PropTypes.string,

  /** Function that fires when the button loses focus */
  onBlur: PropTypes.func,

  /** Function that fires when the button is clicked on */
  onClick: PropTypes.func,

  /** Function that fires when the button is mouse downed */
  onMouseDown: PropTypes.func,

  /** Various height and width options */
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'narrow', 'tight']),

  /** Various color options */
  style: PropTypes.oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'outline-reverse', 'plain', 'toggle', 'underline', 'unstyled']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Title of the button shown as tooltip text when the button is hovered */
  title: PropTypes.string,

  /** Various height and width options */
  width: PropTypes.oneOf(['default', 'full'])
};
Button.defaultProps = {
  isLink: false,
  isLoading: false,
  isDisabled: false,
  isSubmit: false,
  loadingText: '',
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onMouseDown: function onMouseDown() {},
  width: 'default'
};
Button.displayName = 'Button';
export default Button;