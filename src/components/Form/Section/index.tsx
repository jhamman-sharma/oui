
import PropTypes from 'prop-types';
import React from 'react';
import HelpPopover from '../../HelpPopover';

import classNames from 'classnames';

const Section = props => { 
  let headerClasses = classNames(
    'push--bottom',
    {'oui-label--required': props.isRequired}
  )
  return (
  <div data-test-section={ props.testSection } className="soft-triple--bottom">
    { props.title && (
      <h3 className={headerClasses}>
        { props.title }
        { props.isOptional && (
          <label className="oui-label__optional">(Optional)</label>
        ) }
        { props.helpIcon && (
          <HelpPopover
            popoverTitle={ props.popoverTitle }
            horizontalAttachment="left"
            verticalAttachment="middle">
            <p>{ props.popoverText }</p>
          </HelpPopover>

        ) }
      </h3>
    ) }

    { props.description && (
      <div className="push-double--bottom">
        { props.description }
      </div>
    ) }

    { props.children }
  </div>
)};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.node,
  helpIcon: PropTypes.bool,
  isOptional: PropTypes.bool,
  isRequired: PropTypes.bool,
  popoverText: PropTypes.string,
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  title: PropTypes.string,
};

export default Section;
