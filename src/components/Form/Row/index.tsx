
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
  fillWidth: PropTypes.bool,
  testSection: PropTypes.string,
};

export default Row;
