import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var GoalIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/goal-16.svg');

var GoalIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/goal-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var GoalIcon = function GoalIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = GoalIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = GoalIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = GoalIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

GoalIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default GoalIcon;