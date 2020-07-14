import PropTypes from 'prop-types';
import React from 'react';

import HelpPopover from '../HelpPopover';
import Row from '../Form/Row';
import Item from '../Form/Item';

import classNames from 'classnames';

const Fieldset = props => {
  let headerClasses = classNames(
    {'push--bottom': props.titleSize==='large',
    'push-half--bottom': props.titleSize ==='small',
    'gamma': props.titleSize ==='large',
    'epsilon': props.titleSize ==='small',
    'oui-label--required': props.isRequired}
  )
  let fieldsetClasses = classNames(
    {'push-triple--bottom': props.bottomSpacing,
    'flush--bottom': !props.bottomSpacing}
  )
  return (
  <fieldset data-test-section={ props.testSection } className={fieldsetClasses}>
    { props.title && (
      <legend className={headerClasses}>
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
      </legend>
    ) }

    { props.description && (
      <div className="push--bottom">
        { props.description }
      </div>
    ) }
    { props.children }
  </fieldset>
)};

Fieldset.Row = Row;
Fieldset.Item = Item;

Fieldset.propTypes = {
  /** Adds spacing at the bottom. If used in a Form, make this to true. */
  bottomSpacing: PropTypes.bool,
  /** Children components. Should be Fieldset.Row or Fieldset.Item for proper spacing */
  children: PropTypes.node.isRequired,
  /** Description for Fieldset */
  description: PropTypes.node,
  /** Indicates whether to include a help popover */
  helpIcon: PropTypes.bool,
  /** Indicates whether to include the "optional" tag to the fieldset */
  isOptional: PropTypes.bool,
  /** Indicates whether to include a red star to the fieldset */
  isRequired: PropTypes.bool,
  /** Text for popover */
  popoverText: PropTypes.string,
  /** Title for popover */
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  /** Title for Fieldset */
  title: PropTypes.string,
  /** Size of Fieldset title*/
  titleSize: PropTypes.oneOf([
    'small',
    'large',
  ]),
};

Fieldset.defaultProps ={
  bottomSpacing: true,
  titleSize: 'large',
}

export default Fieldset;
