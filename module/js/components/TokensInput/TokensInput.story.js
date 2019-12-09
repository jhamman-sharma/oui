function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import TokensInputCore from './index.js';
var SAMPLE_DATA = [{
  name: 'error',
  style: 'error'
}, {
  name: 'no-style'
}, {
  name: 'primary',
  style: 'primary'
}, {
  name: 'secondary',
  style: 'secondary'
}, {
  name: 'tertiary',
  style: 'tertiary'
}];
var SAMPLE_DATA_WITH_SPACES = [{
  name: 'errors present',
  style: 'error'
}, {
  name: 'primary token',
  style: 'primary'
}, {
  name: 'secondary token',
  style: 'secondary'
}, {
  name: 'tertiary token',
  style: 'tertiary'
}]; // Helper wrapper class to store the state so the stories are usable/interactive

var TokensInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TokensInput, _React$Component);

  function TokensInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TokensInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TokensInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      tokens: _this.props.tokens
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (tokens) {
      _this.setState({
        tokens: tokens
      });

      _this.props.onChange(tokens);
    });

    return _this;
  }

  _createClass(TokensInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tokens = _this$props.tokens,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["tokens", "onChange"]); //eslint-disable-line


      return React.createElement(TokensInputCore, _extends({
        tokens: this.state.tokens,
        onChange: this.onChange
      }, rest));
    }
  }]);

  return TokensInput;
}(React.Component);

TokensInput.propTypes = TokensInputCore.propTypes;
TokensInput.defaultProps = TokensInputCore.defaultProps;
storiesOf('TokensInput', module).addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
}).add('Default', function () {
  return React.createElement(TokensInput, {
    onChange: action('tokens changed'),
    tokens: SAMPLE_DATA
  });
}).add('With extraAddKeys', function () {
  return React.createElement(TokensInput, {
    onChange: action('tokens changed'),
    tokens: SAMPLE_DATA_WITH_SPACES,
    extraAddKeys: [' ', '_', ';', '|', '.']
  });
});