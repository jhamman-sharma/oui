import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button'; // import CloseIcon from '../../Icon/CloseIcon';

import Icon from 'react-oui-icons';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */

var DismissButton = function DismissButton(props) {
  return React.createElement("div", {
    className: "push-half--left flex",
    style: {
      height: '12px',
      width: '12px'
    }
  }, React.createElement(Button, {
    onClick: props.onClick,
    style: "unstyled",
    testSection: props.testSection && "".concat(props.testSection, "-dismiss")
  }, React.createElement(Icon, {
    size: "small",
    name: "close",
    fill: props.fill
  })));
};

DismissButton.propTypes = {
  /** Color of the dismiss X */
  fill: PropTypes.string,

  /** Function to call that dismisses the token */
  onClick: PropTypes.func.isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
DismissButton.defaultProps = {
  fill: 'white'
};
DismissButton.displayName = 'DismissButton';
export default DismissButton;