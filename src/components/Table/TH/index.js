import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../Button/index';
import ArrowsInline from '../../ArrowsInline/index';

const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
};

const SORT_ORDER_DIRECTION = {
  [SORT_ORDERS.ASC]: 'up',
  [SORT_ORDERS.DESC]: 'down',
};

const TH = ({
  children,
  colSpan,
  isCollapsed,
  isNumerical,
  sorting,
  testSection,
  textAlign,
  width,
}) => {
  let classes = classNames({
    'oui-numerical': isNumerical,
    'oui-cell-collapse': isCollapsed,
  });

  const styles = {
    width: width,
    textAlign,
  };

  const tableHeaderContent = sorting.canSort ? (
    <Button
      onClick={ sorting.handleSort }
      style="unstyled"
      testSection="table-header-sort-button">
      { children }
      <span className="push-half--left">
        <ArrowsInline
          direction={ SORT_ORDER_DIRECTION[sorting.order] }
          testSection="table-header-sort-indicator"
        />
      </span>
    </Button>) :
    (children);

  return (
    <th
      className={ classes }
      data-test-section={ testSection }
      style={ styles }
      colSpan={ colSpan }>
      {tableHeaderContent}
    </th>
  );
};

TH.propTypes = {
  /** Content within the `Table.TH` component */
  children: PropTypes.node,
  /** Number of columns that the cell should span */
  colSpan: PropTypes.number,
  /**
    Tell the cell to take up the least amount of width possible. This only
    works well if the table layout is `auto`, not `fixed`.
  */
  isCollapsed: PropTypes.bool,
  /** Right-align the cell if the contents are numerical */
  isNumerical: PropTypes.bool,
  /** Sorting options */
  sorting: PropTypes.shape({
    /** Indicate if this column should be sortable */
    canSort: PropTypes.boolean,
    /** Function that handles sorting */
    handleSort: PropTypes.func,
    /** Current order. One of 'asc' or 'desc' */
    order: PropTypes.oneOf([SORT_ORDERS.ASC, SORT_ORDERS.DESC]),
  }),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Text alignment */
  textAlign: PropTypes.oneOf(['center', 'right', 'left']),
  /** A number with a unit that becomes the width of the `Table` cell */
  width: PropTypes.string,
};

TH.defaultProps = {
  isCollapsed: false,
  isNumerical: false,
  sorting: { canSort: false },
};

TH.propTypes = {
  /** Checks that all the info for sorting is present.
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  sorting: function verifyHandleSortExists(props) {
    if (props.sorting.canSort && !props.sorting.handleSort) {
      return new Error(
        'Must pass a sorting function.'
      );
    }
    if (props.sorting.canSort && !props.sorting.order) {
      return new Error(
        'Must pass a sorting direction.'
      );
    }
    return null;
  },
};

TH.displayName = 'Table.TH';

export default TH;
