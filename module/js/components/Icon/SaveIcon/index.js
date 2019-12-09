import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable max-len */

var SaveIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/save-16.svg');

var SaveIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/save-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var SaveIcon = function SaveIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = SaveIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = SaveIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = SaveIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return React.createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

SaveIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default SaveIcon;