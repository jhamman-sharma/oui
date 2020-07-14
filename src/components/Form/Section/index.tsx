
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
  /** Description for Fieldset */
  description: PropTypes.node,
  /** Indicates whether to include a help popover */
  helpIcon: PropTypes.bool,
  /** Indicates whether to include the "optional" tag to the section */
  isOptional: PropTypes.bool,
  /** Indicates whether to include a red star to the section */
  isRequired: PropTypes.bool,
  /** Text for popover */
  popoverText: PropTypes.string,
  /** Title for popover */
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  /** Title for Section */
  title: PropTypes.string,
};

export default Section;
