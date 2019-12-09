import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var ExternalIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/external-16.svg');

var ExternalIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/external-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var ExternalIcon = function ExternalIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = ExternalIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = ExternalIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = ExternalIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

ExternalIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default ExternalIcon;