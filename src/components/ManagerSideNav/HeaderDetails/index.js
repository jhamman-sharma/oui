import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderDetails = ({ items, spaceBelow }) => {
  const itemList = items.map((item, ind) => {
    if (item.isVisible !== undefined && !item.isVisible) {
      return null;
    }

    return [
      <div
        key={ `label-${item.label}` }
        className={ classNames({
          'sidenav__details__title': true,
          'muted': true,
          'flush--bottom': true,
          'push--top': ind > 0,
        }) }>
        <h5>{item.label}</h5>
      </div>,
      <span key={ `value-${item.label}` } className="sidenav__details__item">
        {item.value}
      </span>,
    ];
  });

  return (
    <div
      className={ classNames({
        sidenav__details: true,
        'soft-double--bottom': spaceBelow,
      }) }>
      {itemList}
    </div>
  );
};

HeaderDetails.propTypes = {
  /** List of details to display */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]).isRequired,
    }),
  ).isRequired,
  /** Whether or not the details have extra space below */
  spaceBelow: PropTypes.bool,
};

HeaderDetails.defaultProps = {
  spaceBelow: false,
};

export default HeaderDetails;
