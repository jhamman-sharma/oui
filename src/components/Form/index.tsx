
import PropTypes from 'prop-types';
import React from 'react';
import HelpPopover from '../HelpPopover';
import Section from './Section';

const Form = props => (
  <form data-test-section={ props.testSection } className="oui-form__container">
    { props.title && (
      <h2 className="push--bottom">
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
      </h2>
    ) }

    { props.description && (
      <div className="push--bottom">
        { props.description }
      </div>
    ) }

    { props.children }
  </form>
);

Form.Section = Section;

Form.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.node,
  helpIcon: PropTypes.bool,
  popoverText: PropTypes.string,
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  title: PropTypes.string,
};

export default Form;
