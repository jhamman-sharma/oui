
import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';

const Row = props => {
  const rowClassname = classNames(
    "push-double--right",
    {'flex--1': props.fillWidth}
  )
  const children = props.children.map((child, idx) => (
    <div key={idx} className={rowClassname}>
      {child}
    </div>
  ))
  return (
  <div data-test-section={ props.testSection } className="flex">
    {children}
  </div>
)};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  /** Indicates whether items in the row should take up as much width as possible */
  fillWidth: PropTypes.bool,
  testSection: PropTypes.string,
};

export default Row;
