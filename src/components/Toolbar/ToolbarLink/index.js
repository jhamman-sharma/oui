import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import ToolbarItemContents from '../ToolbarItemContents';

const ToolbarLink = (props, context) => (
  <a
    className={ classNames({
      flex: true,
      toolbar__button: true,
      'is-active': props.isActive,
      ['link--disabled']: props.isDisabled,
      'pointer-events--none': props.isDisabled,
    }) }
    data-test-section={ props.testSection }
    href={ props.href }>
    { ToolbarItemContents(props) }
  </a>
);

ToolbarLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
  onClick: PropTypes.func,
  testSection: PropTypes.string,
  title: PropTypes.string,
};

export default ToolbarLink;
