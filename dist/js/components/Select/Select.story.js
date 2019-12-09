"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Select', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    name: "zoo",
    id: "zoo"
  }, _react["default"].createElement("option", {
    value: "one"
  }, "This is option one"), _react["default"].createElement("option", {
    value: "two"
  }, "And this is option two"));
});