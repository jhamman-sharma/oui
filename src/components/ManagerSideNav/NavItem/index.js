import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavItem = (props) => {
  return (
    <li
      className={ classNames({
        'nav-list__link': true,
        'is-active': props.isActive,
      }) }
      data-test-section={ props.testSection }>
      <div className="flex flex-justified--between flex-align--center flex--1 height--1-1">
        {props.leftContent}
        {props.rightContent && (
          <div className="soft--right">{props.rightContent}</div>
        )}
      </div>
    </li>
  );
};

NavItem.propTypes = {
  /** Whether or not this item is currently selected */
  isActive: PropTypes.bool,
  /**
   * Content to render within the NavItem
   * Will be left aligned
   */
  leftContent: PropTypes.node.isRequired,
  /**
   * Content to render within the NavItem
   * Will be right aligned
   */
  rightContent: PropTypes.node,
  /** String to use for testing */
  testSection: PropTypes.string,
};

export default NavItem;
