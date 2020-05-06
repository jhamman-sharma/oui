import PropTypes from 'prop-types';
import React from 'react';

const ToolbarItemContents = props => (
  <div className="flex flex-align--center editor__select-size__text">
    { props.icon && (
      <svg className="lego-icon push--right vertical-align--middle">
        <use xlinkHref={ props.icon } />
      </svg>
    )}
    <div>
      { props.title && (
        <div className="editor__select-size__value">
          { props.title }
        </div>
      )}

      <span>{ props.label }</span>
    </div>

    { props.isDropdown && (
      <span className="lego-arrow-inline--down push--left" />
    )}
  </div>
);

ToolbarItemContents.propTypes = {
  icon: PropTypes.string,
  isDropdown: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
  title: PropTypes.string,
};

export default ToolbarItemContents;
