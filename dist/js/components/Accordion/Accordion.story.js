"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Accordion = require("../Accordion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Accordion', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Single Section Accordion', function () {
  return _react["default"].createElement("div", {
    className: "height--300"
  }, _react["default"].createElement(_Accordion.Accordion, null, _react["default"].createElement(_Accordion.AccordionSection, {
    title: 'Section 1'
  }, _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis pellentesque justo vel rutrum. Proin aliquam, sem in ullamcorper dignissim, enim sem maximus metus, quis malesuada massa diam non urna. Fusce erat massa, cursus at ex sit amet, tristique bibendum ipsum. Mauris porttitor augue quis leo ultricies, quis volutpat turpis tempus. Nullam interdum condimentum elit sed volutpat. Donec dictum augue sed arcu mollis, vel tincidunt purus mattis. Sed vitae dui nec turpis lobortis pretium non quis risus. Donec lacus lectus, commodo a diam sit amet, congue molestie mauris. Sed quis elit pulvinar, maximus nisl ac, vulputate velit. Etiam pretium libero nibh, nec accumsan metus elementum in. Pellentesque convallis enim felis, id congue orci tincidunt vitae. Maecenas maximus, augue ut venenatis fringilla, massa tortor luctus dolor, non vestibulum enim lectus eu quam. Etiam sagittis sapien at urna sollicitudin finibus."), _react["default"].createElement("p", null, "Maecenas feugiat elit et convallis consequat. Pellentesque eu aliquam elit. Vivamus porta dui sit amet justo tincidunt laoreet. Sed sodales posuere dolor, et maximus tortor molestie sed. Nullam ac tincidunt lorem. Nullam orci mauris, ultricies sed erat eget, euismod aliquet sapien. Nam ornare ipsum sit amet pellentesque mattis. Quisque erat turpis, malesuada vel faucibus eget, fringilla et nibh. Praesent bibendum feugiat libero quis tincidunt. Sed consectetur massa vel metus luctus, ac cursus tellus auctor."), _react["default"].createElement("p", null, "Ut vehicula, ex quis auctor efficitur, nunc quam porta ligula, quis egestas dolor ante nec nibh. Nam vel tincidunt tortor, quis fermentum est. Suspendisse dignissim pretium quam quis eleifend. Mauris consequat sagittis orci at lacinia. Vivamus ex massa, blandit eget malesuada at, tincidunt vitae ipsum. Quisque vel neque diam. Nullam vel tortor elit. Proin porttitor gravida magna, dapibus pharetra nisl. Nulla commodo enim at cursus finibus. Cras ac ipsum pellentesque, mattis ante non, rutrum lacus."), _react["default"].createElement("p", null, "Ut faucibus lorem eros, eu consectetur ex bibendum ac. Morbi commodo tincidunt luctus. Pellentesque blandit efficitur nibh. Suspendisse scelerisque interdum mi, at tempor neque laoreet nec. Sed at viverra enim. Quisque nisl nisi, suscipit dictum ipsum ac, egestas imperdiet odio. Fusce aliquam convallis turpis sed gravida. Vivamus metus orci, luctus nec dolor lacinia, sollicitudin lacinia tortor. Proin maximus, massa a feugiat ultricies, ipsum diam pulvinar nibh, eu dapibus ante sem sed apien. Vivamus tempus erat a turpis mattis, ac sodales sem varius. Nulla eleifend velit id euismod dictum. Nulla facilisi. Integer varius tortor nulla, ornare pellentesque eros sagittis eget."), _react["default"].createElement("p", null, "In id blandit mauris, sed tincidunt neque. Morbi at pellentesque dolor. Nullam dictum nisl ac nibh consectetur gravida ut sed arcu. Nulla maximus justo nec elit sodales, sed elementum turpis tristique. Ut eget nibh nunc. Donec tincidunt elementum fermentum. Mauris a feugiat massa."))));
}).add('Multi-Section Accordion', function () {
  return _react["default"].createElement("div", {
    className: "height--300"
  }, _react["default"].createElement(_Accordion.Accordion, null, _react["default"].createElement(_Accordion.AccordionSection, {
    title: 'Section 1'
  }, "This is the body of section 1"), _react["default"].createElement(_Accordion.AccordionSection, {
    title: 'Section 2'
  }, "This is the body of section 2")));
});