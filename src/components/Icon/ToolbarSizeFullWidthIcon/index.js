import React from 'react';

/* eslint-disable max-len */
const ToolbarSizeFullWidthIcon24 = require('!babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/24/toolbar-size-full-width-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarSizeFullWidthIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 24:
      Svg = ToolbarSizeFullWidthIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

ToolbarSizeFullWidthIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarSizeFullWidthIcon;
