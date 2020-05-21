import React from 'react';
import Row from '../Layout/Row';
import Container from '../Layout/Container';
import SummaryBarCol from './SummaryBarCol';

// Per SummaryBar:
// titleText: ""
// timestampText: ""

// headerTitle: "Primary Metric",
// hasHeaderHelp: false,
// hasBodyHelp: false,
// bodyContent: [{"value": "Increase in unique comversions per visitor...",}]

// //empty col
// headerTitle: "",
// bodyContent: [],

// <SummaryBar>
//   <SummaryBarCol></SummaryBarCol>
//   <SummaryBarCol></SummaryBarCol>
// </SummaryBar>

const SummaryBar = (props) => {
  return (
    <Container
      outlineDebug={ false }
      pushRowsTop={ false }
      pullRowPadding={ false }
      paddedContent="around"
      removeGutters={ false }
      fluid={ true }
      data-oui-component={ true }
      data-test-section={ props.testSection }>
      <Row>
        <div className="flex flex-justifined--between">
          <h3>{props.titleText}</h3>
          <p>{props.timestampText}</p>
        </div>
      </Row>
      <Row
        border="ends"
        paddedContent="ends">
        { props.children }
      </Row>
    </Container>
  );
};

SummaryBar.SummaryBarCol = SummaryBarCol;

export default SummaryBar;
