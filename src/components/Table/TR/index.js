import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TR = ({
  isActive,
  isHighlighted,
  noBorder,
  noHover,
  borderStyle,
  backgroundColor,
  testSection,
  children,
}) => {
  let classes = classNames({
    'oui-table-row--active': isActive,
    'oui-table-row--highlighted': isHighlighted,
    'no-border': noBorder,
    'hover--disabled': noHover,
    [`border--${borderStyle}`]: borderStyle,
    [`background--${backgroundColor}`]: backgroundColor,
  });
  return (
    <tr className={ classes } data-test-section={ testSection }>
      {children}
    </tr>
  );
};

TR.propTypes = {
  /** Background color for each row */
  backgroundColor: PropTypes.oneOf(['faint', 'light']),
  /** Border style for each row */
  borderStyle: PropTypes.oneOf(['bottom', 'top', 'sides', 'ends', 'none']),
  /** Expects a `Table.TD` or `Table.TH` component */
  children: PropTypes.node,
  /** If true, add active class */
  isActive: PropTypes.bool,
  /** If true, add class to remove border */
  isHighlighted: PropTypes.bool,
  /** If true, remove hover on inner TDs */
  noBorder: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  noHover: PropTypes.bool,
  /** If true, add highlight class */
  testSection: PropTypes.string,
};

TR.displayName = 'Table.TR';

export default TR;
