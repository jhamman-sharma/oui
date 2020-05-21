import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Col from '../Layout/Col';
import HelpPopover from '../HelpPopover';

const renderColBodyContent = (bodyContent) => {
  // looping through each item in props.bodyContent
  return (
    <p className={ classNames({ 'good--news': bodyContent.color === 'green', giga: bodyContent.isNumber }) }>
      {bodyContent.value}
    </p>
  );
};
const SummaryBarCol = (props) => {
  return (
    <Col
      border={ 'left' }
      paddedContent="around">
      <div>
        <h4 className="flex">
          {props.headerTitle}
          {props.headerHelpContent && <HelpPopover />}
        </h4>
        <div className="flex flex-justified--between">
          {renderColBodyContent(props.bodyContent)}
          {props.bodyHelpContent && <HelpPopover />}
        </div>
      </div>
    </Col>
  );
};

SummaryBarCol.propTypes = {
  /** Header/label title */
  bodyContent: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  /** Display help tooltip on header */
  bodyHelpContent: PropTypes.node,
  /** Body */
  headerHelpContent: PropTypes.node,
  /** Display help tooltip on body */
  headerTitle: PropTypes.string,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

// headerTitle: "Improvement Over Equal Traffic",
// hasHeaderHelp: false,
// hasBodyHelp: true,
// bodyContent: [{"value": "+3.62pp", "color": "green", "isNumber": true}, {"value": "+725", "color": "green", "isNumber": "true"}]}]

export default SummaryBarCol;
