import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Code from "../../src/components/Code/index";
import Button from "../../src/components/Button/index";
import ButtonRow from "../../src/components/ButtonRow/index";

export class FlexboxInteractiveFlexDirection extends React.Component {
  state = {
    flexDirection: 'row',
  };

  switchFlexDirection = direction => {
    this.setState({flexDirection: direction});
    }

  render() {
      const {flexDirection} = this.state;
        let flexDirectionClassnames = classnames(
            'demo-only-helper-box-container',
            'demo-only-helper-box-container--width-container',
            'flex',
            `flex--${flexDirection}`,
        ); 
    return (
        <section className="example flex flex--column">
            <div className="push--bottom">
                <TabNav activeTab={flexDirection} style={['sub']}>
                    <TabNav.Tab onClick={() => this.switchFlexDirection('row')} tabId="row">
                        flex--row
                    </TabNav.Tab> 
                    <TabNav.Tab onClick={() => this.switchFlexDirection('column')} tabId="column">
                        flex--column
                    </TabNav.Tab> 
                </TabNav>
            </div>
            <div className="flex flex--row">
                <div className="flex--1">
                    <p className="push--left">
                        Change direction of flex items from row to column. Use{" "}
                        <code>.flex--row</code> to overspecify the orientation of flex items
                        in a row.
                    </p>
                    <div className="flex--dead-center">
                        <div className={flexDirectionClassnames}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </div>
                <div className="flex--1 push--left flex flex-align--center demo-only-code-box">
                    <Code
                        hasCopyButton={true}
                        isHighlighted={true}
                        type={ 'block'}
                        language={ 'html'}>
                        { `<div className='flex flex--${flexDirection}'>\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>`}
                    </Code>
                </div>
            </div>
        </section>
    );
  }
}


export class FlexboxInteractiveFlex1 extends React.Component {
    state = {
      flexDivs: ['flex1', 'regular'],
    };
  
    addDiv = divType => {
        const newDivs = this.state.flexDivs.concat([divType]);
        this.setState({flexDivs: newDivs});
    }

    clearAll = () => {
        this.setState({flexDivs: []});
    }
  
    render() {
        const {flexDivs} = this.state;
          let flexClassnames = classnames(
              'demo-only-helper-box-container',
              'demo-only-helper-box-container--width-parent',
              'demo-only-helper-box-container--height-84',
              'flex',
          ); 
        
        let codeContents="<div className='flex'>";
        const flexDivsDisplay = flexDivs.map((divType) => {
            if (divType === "flex1") {
                codeContents += "\n  <div className='flex--1'>flex--1</div>";
                return (
                    <div className="flex--1">
                        <code>flex--1</code>
                    </div>
                )
            }
            codeContents += "\n  <div>reg</div>";
            return (
                <div>reg</div>
            )
        })
        codeContents += "\n</div>";
        return (
            <section className="example flex flex--column">
                <div className="push--bottom">
                    <TabNav activeTab="flex1" style={['sub']}>
                        <TabNav.Tab tabId="flex1">
                          flex--1
                        </TabNav.Tab> 
                    </TabNav>
                </div>
                <div className="flex flex--row">
                    <div className="flex--1">
                        <p className="push--left">
                            Fill available width, which stretches backgrounds. Multiple 
                             <code>flex--1</code> will distribute width among siblings.
                        </p>
                        <div className="flex--dead-center push--bottom">
                            <div className={flexClassnames}>
                                {flexDivsDisplay}
                            </div>
                        </div>
                        <ButtonRow
                            centerGroup={ [
                                <Button style="outline" onClick={() => this.addDiv('flex1')}>Add Flex--1</Button>,
                                <Button style="outline" onClick={() => this.addDiv('regular')}>Add Regular</Button>,
                                <Button style="danger-outline" onClick={() => this.clearAll()}>Clear all</Button>,
                            ]}/>
                    </div>
                    <div className="flex--1 push--left demo-only-code-box">
                        <Code
                            hasCopyButton={true}
                            isHighlighted={true}
                            type={ 'block'}
                            language={ 'html'}>
                            {codeContents}
                        </Code>
                    </div>
                </div>
              
          </section>
      );
    }
  }
  
