
import PropTypes from 'prop-types';
import React from 'react';

const Row = props => {
  const children = props.children.map(child => (
    <div className="push-double--right">
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
  testSection: PropTypes.string,
};

export default Row;
