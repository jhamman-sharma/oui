
import PropTypes from 'prop-types';
import React from 'react';

const Item = props => (
  <div data-test-section={ props.testSection } className="oui-form-field__item">
    { props.children }
  </div>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  testSection: PropTypes.string,
};

export default Item;
