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
      <div className="flex flex-justified--between flex-align--center flex--1 soft--ends soft-double--sides">
        <div className=" flex flex--1 flex-align--center">
          {props.leftContent}
        </div>
        {props.rightContent}
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
