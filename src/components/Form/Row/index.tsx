
import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'classnames';

const Row = props => {
  const children = props.children.map((child, idx) => {
    const rowClassname = classNames(
      {'flex--1': props.isFullWidth,
      "push-double--right": idx < (props.children.length -1)}
    )
    return (
      <div key={idx} className={rowClassname}>
        {child}
      </div>
    )}
  )
  return (
  <div data-test-section={ props.testSection } className="flex">
    {children}
  </div>
)};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  /** Indicates whether items in the row should take up as much width as possible */
  isFullWidth: PropTypes.bool,
  testSection: PropTypes.string,
};

export default Row;
