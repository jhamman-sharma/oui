import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var BellIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/bell-16.svg');

var BellIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/bell-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var BellIcon = function BellIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = BellIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = BellIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = BellIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

BellIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default BellIcon;