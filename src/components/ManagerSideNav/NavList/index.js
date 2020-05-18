import React from 'react';
import PropTypes from 'prop-types';

const NavList = (props) => (
  <nav className="sidenav__section" data-test-section={ props.testSection }>
    {(props.label || props.rightLabel) && (
      <div className="sidenav__section__title muted">
        <h5>{props.label}</h5>
        {props.rightLabel && <h6>{props.rightLabel}</h6>}
        {props.popover}
      </div>
    )}
    <ul className="nav-list">{props.children}</ul>
  </nav>
);

NavList.propTypes = {
  /** Content to render within the list */
  children: PropTypes.node,
  /** Label to use for this section */
  label: PropTypes.string,
  /** Popover to display next to the label */
  popover: PropTypes.bool,
  /** Optional text to display to the right of the label */
  rightLabel: PropTypes.bool,
  /** Value used for testing via data-test-section attribute */
  testSection: PropTypes.bool,
};

export default NavList;
