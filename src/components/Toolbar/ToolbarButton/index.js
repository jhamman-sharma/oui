import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import ToolbarItemContents from '../ToolbarItemContents';

const ToolbarButton = (props, context) => (
  <button
    className={ classNames({
      toolbar__button: true,
      'is-active': props.isActive,
    }) }
    type="button"
    disabled={ props.isDisabled }
    data-test-section={ props.testSection }
    data-track-id={ props.testSection }
    onClick={ props.onClick }>
    { ToolbarItemContents(props) }
  </button>
);

ToolbarButton.propTypes = {
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  onClick: PropTypes.func,
  testSection: PropTypes.string,
  title: PropTypes.string,
};

ToolbarButton.defaultProps = {
  isDropdown: false,
  isActive: false,
  isDisabled: false,
};

export default ToolbarButton;
