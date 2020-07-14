
import PropTypes from 'prop-types';
import React from 'react';

import HelpPopover from '../HelpPopover';
import Section from './Section';
import Item from './Item';
import Row from './Row';

import classNames from 'classnames';


const Form = props => {
  const formTitleClasses = classNames(
    {'push--bottom': props.description,
    'push-double--bottom': !props.description}
  )
  return (
  <form data-test-section={ props.testSection } className="oui-form-fields">
    { props.title && (
      <h2 className={formTitleClasses}>
        { props.title }
        { props.helpIcon && (
          <HelpPopover
            popoverTitle={ props.popoverTitle }
            horizontalAttachment="left"
            verticalAttachment="middle">
            <p>{ props.popoverText }</p>
          </HelpPopover>

        ) }
      </h2>
    ) }

    { props.description && (
      <h5 className="push-double--bottom">
        { props.description }
      </h5>
    ) }

    { props.children }
  </form>
)};

Form.Section = Section;
Form.Item = Item;
Form.Row = Row;

Form.propTypes = {
  children: PropTypes.node.isRequired,
  /** Description for Form */
  description: PropTypes.node,
  /** Indicates whether to include a help popover */
  helpIcon: PropTypes.bool,
  /** Text for popover */
  popoverText: PropTypes.string,
  /** Title for popover */
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  /** Title for Form */
  title: PropTypes.string,
};

export default Form;
