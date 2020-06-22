import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function DropdownListItem(props) {
  const classes = classNames({
    'hard--sides': props.hardSides,
    'hard--top': props.hardTop,
    'soft--sides': props.role === 'separator',
    'oui-dropdown__item--separator': props.role === 'separator',
    'oui-dropdown__item': true,
    'no-border': props.removeBorderTop,
  });

  function handleMouseDownCapture(event) {
    // Make the mousedown event a no-op for separators.
    // This prevents clicks on them from stealing focus.
    if (props.role === 'separator') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function handleOnClick(event) {
    if (props.role === 'separator') {
      event.preventDefault();
      event.stopPropagation();
    } else if (props.ignoreToggle) {
      event.ignoreToggle = true;
      event.persist();
    }
  }

  return (
    <li className={ classes } onClick={ handleOnClick } onMouseDownCapture={ handleMouseDownCapture } role={ props.role }>
      {props.children}
    </li>
  );
}

DropdownListItem.propTypes = {
  /** Nodes to display within */
  children: PropTypes.node,
  /** Remove padding from sides */
  hardSides: PropTypes.bool,
  /** Remove padding from top */
  hardTop: PropTypes.bool,
  /** Instructs the Dropdown parent to ignore clicks for toggle purposes. */
  ignoreToggle: PropTypes.bool,
  /** Removes border if true */
  removeBorderTop: PropTypes.bool,
  /**
   * Aria role for this list item. See roles here:
   * https://www.w3.org/WAI/PF/aria/roles
   */
  role: PropTypes.string,
};
