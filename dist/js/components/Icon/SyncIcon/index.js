"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */
var SyncIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/sync-16.svg');

var SyncIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/sync-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var SyncIcon = function SyncIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = SyncIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = SyncIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = SyncIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return _react["default"].createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

SyncIcon.propTypes = {
  /** Size of the icon */
  size: _propTypes["default"].oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = SyncIcon;
exports["default"] = _default;