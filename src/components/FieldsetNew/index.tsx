import PropTypes from 'prop-types';
import React from 'react';

import HelpPopover from '../HelpPopover';
import Row from '../Form/Row';
import Item from '../Form/Item';

import classNames from 'classnames';

const Fieldset = props => {
  let headerClasses = classNames(
    'push--bottom',
    'gamma',
    {'oui-label--required': props.isRequired}
  )
  let fieldsetClasses = classNames(
    {'soft-triple--bottom': props.bottomSpacing}
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
  bottomSpacing: PropTypes.bool,
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

export default Fieldset;
