import React from 'react';

import classnames from 'classnames';

import Row from '../Layout/Row';
import HelpPopover from '../HelpPopover';
import Col from '../Layout/Col';
import Container from '../Layout/Container';


type SummaryBarColumn = {
    /** Header of column */
    header?: string;
    /** Content of help popover for header */
    headerHelpTooltip?: string;
    /** Content of column */
    bodyContent? : {
        /** Content value */
        value: string,
        /** Color of content, default is black */
        color?: 'red' | 'green';
        /** Determines the size of the content, numbers are large, text is small. */
        isNumber: boolean,
        /** Content of help popover for content */
        helpTooltip?: string,
    };
}

type SummaryBarProps = {
    /** Title of summary bar */
    title: string;
    /** Extra info appearing in the top right of the bar. Typically last updated date (ie: Updated March 2, 2020 at 3:00pm (America/Los Angeles)) */
    extraInfo?: string;
    /** Content columns where summary info is displayed. Requires 2-5 columns. */
    columns: SummaryBarColumn[];
    /** Test section for element */
    testSection: string;
};

export const SummaryBar: React.SFC<SummaryBarProps> = React.forwardRef(
    (props, ref?: React.Ref<HTMLInputElement>) => {    
    const { title, columns, extraInfo, testSection } = props;
    const maxNumColumns = Math.min(columns.length, 5);
    const columnsToRender = columns.slice(0, 5);
    const columnHeaders = columnsToRender.map((child, idx) => {
        let border;
        if (idx !== maxNumColumns-1) {
            border = 'right'
        }
        return (
            <Col key={idx} border={border} data-test-section={`${testSection}-col-${idx}-header`}>
                <div className={"flex min-width--100"}>
                    {child.header && <div className={"muted micro weight--bold push-half--bottom"}>{child.header}</div>}
                    {child.headerHelpTooltip && <div className={'muted oui-summary-bar-col-header__help-popover'}>
                        <HelpPopover
                        horizontalAttachment="left"
                        verticalAttachment="middle">
                            {child.headerHelpTooltip}
                        </HelpPopover>
                    </div>}
                </div>
            </Col>
        );
    })
    const columnContent = columnsToRender.map((child, idx) => {
        let border;
        if (idx !== maxNumColumns-1) {
            border = 'right'
        }
        let colorClass = child.bodyContent ?  ( child.bodyContent.color === 'green' ? 'color--good-news' : ( child.bodyContent.color === 'red' ? 'color--bad-news' : 'color--base')) : '';
        return (
            <Col key={idx} border={border} data-test-section={`${testSection}-col-${idx}-content`}>
                <div className={"flex min-width--100"}>
                    {child.bodyContent &&  <div className={classnames(
                        colorClass,
                        {
                        'beta weight--normal': child.bodyContent.isNumber,
                        'micro': !child.bodyContent.isNumber,
                        })}>{child.bodyContent.value}</div>}
                    {child.bodyContent && child.bodyContent.helpTooltip && <div className={'muted push-half--left push-half--top'}>
                        <HelpPopover
                        horizontalAttachment="left"
                        verticalAttachment="middle">
                            {child.bodyContent.helpTooltip}
                        </HelpPopover>
                    </div>}
                </div>
            </Col>);
    });

    return (
      <div ref={ref} className={"width--1-1"} data-test-section={testSection}>
          <div className={"flex flex-align--end"}>
            <div className={"color--base push-half--bottom push-double--right gamma"}>{title}</div>
            {extraInfo && <p className={"muted micro anchor--right push-half--bottom"}>{extraInfo}</p>}
          </div>
          <Container
            paddedContent={ 'around' }
            fluid={ true }>
            <Row shouldWrap={false} 
                border="top" 
                paddedContent="top"> 
                {columnHeaders} 
            </Row> 
            <Row shouldWrap={false} 
                border="bottom" 
                paddedContent="bottom"> 
                {columnContent} 
            </Row>
          </Container>
      </div>
    );
  }
);

SummaryBar.displayName = "SummaryBar";

SummaryBar.propTypes = {
    /** Content columns where summary info is displayed. Requires 2-5 columns.
     *  @param {Object} props Object of props
     *  @returns {Error} Error or null
     */
    columns: function verifyNumberOfColumns(props) {
      if ( props.columns.length > 5) {
        return new Error(
          'Number of columns must not exceed 5, only 5 will be shown.'
        );
      } else if ( props.columns.length < 2) {
        return new Error(
          'Number of columns must be greater than 1.'
        );
      }
      return null;
    }
}

export default SummaryBar;
