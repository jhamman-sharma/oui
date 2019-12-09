"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _SortableGroup = _interopRequireDefault(require("../SortableGroup"));

var _SortableItem = _interopRequireDefault(require("../SortableItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * getItemStyles
 * @description Calculates the CSS X and Y offsets applied to the drag layer
 * @param {Object} initialOffset X and Y coordinates when dragging began
 * @param {Object} currentOffset X and Y coordinates of drag layer now
 * @returns {Object} React CSS object containing X/Y offset style
 */
function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  var x = initialOffset.x;
  var y = currentOffset.y;
  var transform = "translate(".concat(x, "px, ").concat(y, "px)");
  return {
    transform: transform
  };
}
/**
 * onMoveStub
 * @description No-op function to pass to item preview in drag layer
 */


var onMoveStub = function onMoveStub() {};
/**
 * endDragStub
 * @description No-op function to pass to item preview in drag layer
 */


var endDragStub = function endDragStub() {};

var SortDragLayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SortDragLayer, _React$Component);

  function SortDragLayer() {
    _classCallCheck(this, SortDragLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SortDragLayer).apply(this, arguments));
  }

  _createClass(SortDragLayer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          currentOffset = _this$props.currentOffset,
          isDragging = _this$props.isDragging;
      var hasNewOffset = (currentOffset && currentOffset.y) !== (nextProps.currentOffset && nextProps.currentOffset.y);
      var changedDraggingState = isDragging !== nextProps.isDragging;
      return hasNewOffset || changedDraggingState;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          baseTestSection = _this$props2.baseTestSection,
          currentOffset = _this$props2.currentOffset,
          initialOffset = _this$props2.initialOffset,
          isDragging = _this$props2.isDragging,
          item = _this$props2.item,
          renderItem = _this$props2.renderItem;
      return !!item && isDragging && _react["default"].createElement("div", {
        className: "oui-sortable__drag-preview cursor--move height--1-1 width--1-1 pointer-events--none position--fixed",
        "data-test-section": "".concat(baseTestSection, "-drag-layer")
      }, _react["default"].createElement("ul", {
        className: "oui-sortable__drag-preview__item",
        style: getItemStyles(initialOffset, currentOffset)
      }, item.type === 'item' && _react["default"].createElement(_SortableItem["default"], {
        baseTestSection: baseTestSection,
        endDrag: endDragStub,
        id: item.id,
        isDragPreview: true,
        item: item.data,
        key: item.id,
        onMove: onMoveStub,
        position: item.position,
        render: renderItem
      }), item.type === 'group' && _react["default"].createElement(_SortableGroup["default"], {
        baseTestSection: baseTestSection,
        endDrag: endDragStub,
        id: item.id,
        isDragPreview: true,
        items: item.data,
        key: item.id,
        onMove: onMoveStub,
        position: item.position,
        renderItem: renderItem
      })));
    }
  }]);

  return SortDragLayer;
}(_react["default"].Component);

_defineProperty(SortDragLayer, "propTypes", {
  baseTestSection: _propTypes["default"].string.isRequired,
  currentOffset: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired
  }),
  initialOffset: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired
  }),
  isDragging: _propTypes["default"].bool.isRequired,
  item: _propTypes["default"].shape({
    data: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(_immutable["default"].Map), _propTypes["default"].instanceOf(_immutable["default"].List)]).isRequired,
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    position: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired
  }),
  renderItem: _propTypes["default"].func.isRequired
});

_defineProperty(SortDragLayer, "defaultProps", {
  item: null
});

var _default = (0, _reactDnd.DragLayer)(function (monitor) {
  return {
    currentOffset: monitor.getSourceClientOffset(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    isDragging: monitor.isDragging()
  };
})(SortDragLayer);

exports["default"] = _default;