import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const Link = ({
  ariaLabel,
  children,
  href,
  onClick,
  isDisabled = false,
  isFullWidth = false,
  newWindow = false,
  style,
  testSection,
}) => {
  const classes = classNames({
    ['link']: true,
    [`link--${style}`]: style,
    ['link--disabled']: isDisabled,
    'pointer-events--none': isDisabled,
    'width--1-1': isFullWidth,
    'display--inline-block ': isFullWidth,
  });

  if (!href && !onClick) {
    return (
      <span
        data-oui-component={ true }
        className={ classes }
        data-test-section={ testSection }
        data-track-id={ testSection }
        disabled={ isDisabled }>
        { children }
      </span>
    );
  }

  return (
    <a
      aria-label={ ariaLabel }
      data-oui-component={ true }
      href={ href }
      className={ classes }
      data-test-section={ testSection }
      data-track-id={ testSection }
      onClick={ onClick }
      { ...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
      disabled={ isDisabled }>
      { children }
    </a>
  );
};

Link.propTypes = {
  /** Label to use for screen readers */
  ariaLabel: PropTypes.string,
  /** Text/node that is linked */
  children: PropTypes.node.isRequired,
  /** Href for the anchor element */
  href: PropTypes.string,
  /** Disable link and interactivity */
  isDisabled: PropTypes.bool,
  /** Whether or not this link is full width */
  isFullWidth: PropTypes.bool,
  /** Open link in new window */
  newWindow: PropTypes.bool,
  /** Click handler function */
  onClick: PropTypes.func,
  /** Link style options */
  style: PropTypes.oneOf([
    'default',
    'dark',
    'muted',
    'bad-news',
    'reverse',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Link;
