import React from 'react';

import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Code from "../../src/components/Code/index";
import Button from "../../src/components/Button/index";
import ButtonRow from "../../src/components/ButtonRow/index";

export class FlexDirection extends React.Component {
  state = {
    flexDirection: 'row',
  };

  switchFlexDirection = direction => {
    this.setState({flexDirection: direction});
    }

  render() {
      const {flexDirection} = this.state;
        let flexDirectionClassnames = classNames(
            'demo-only-helper-box-container',
            'demo-only-helper-box-container--width-container',
            'flex',
            `flex--${flexDirection}`,
        );
    const leftContent = flexDirection === 'row' ? <p className="push--left"> Change direction of flex items from row to column. Use{" "}
    <code>.flex--row</code> to overspecify the orientation of flex items
    in a row.</p> : <p className="push--left"> Change direction of flex items from row to column. Use{" "}
    <code>.flex--column</code> to specify the orientation of flex items
    in a column.</p>
    return (
        <section className="demo-only-section flex flex--column">
            <h2>Flex direction</h2>
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
                    {leftContent}
                    <div className="flex--dead-center">
                        <div className={flexDirectionClassnames}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </div>
                <div className="flex--1 push--left demo-only-code-box">
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

export class Flex1 extends React.Component {
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
          let flexClassnames = classNames(
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
            <section className="demo-only-section flex flex--column">
                <h2>Sizing</h2>
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
                            Fill available width, which stretches backgrounds. Multiple{" "} 
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
 
export class FlexNone extends React.Component {
    state = {
        flexTab: 'none',
    };

    switchFlexTab = tab => {
        this.setState({flexTab: tab});
    }

    render() {
        const {flexTab} = this.state;
        let flexDirectionClassnames = classNames(
            'demo-only-helper-box-container',
            'flex',
            {'flex--none': flexTab === 'none',
            // 'demo-only-helper-box-container--width-100': flexTab === 'none',
            // 'demo-only-helper-box-container--width-300': flexTab !== 'none',
            [`flex-${flexTab}--none`]: flexTab !== 'none'},
            'demo-only-helper-box-container--width-300',
        ); 
        let leftContent;
        let codeContent;
        switch (flexTab) {
            case 'none':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Sizes item based on the height and width of the content, but makes
                            it inflexible meaning it can't shrink. This creates the possibility
                            of overflowing its container.
                            It is the equivalent of combining these commands:</p>
                        <ol className="list--bullet">
                            <li><code>flex-shrink--none</code></li>
                            <li><code>flex-grow--none</code></li>
                            <li><code>flex-basis: auto</code></li>
                        </ol>
                        <div className="flex--dead-center push--top flex--column">
                            <div className={flexDirectionClassnames}>
                                <div className="flex--none">Some long text to make everything overflow.</div>
                            </div>
                            <div className={flexDirectionClassnames + " push--top"}>
                                <div className="flex--none">Some short text.</div>
                            </div>
                        </div>
                    </div>
                )
                codeContent = "<div className='flex'>\n   <div className='flex--none'>\n       Some long text to make everything overflow.\n   </div>\n</div>\n<div className='flex'>\n   <div className='flex--none'>\n       Some short text.\n   </div>\n</div>"
                break;
            case 'shrink':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Target element will not shrink. It will size based on its content
                            and not wrap the content. Other elements will shrink to make space
                            for it. There's a possibility for the flexbox container's elements
                            to overflow.
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames}>
                                <div className="flex-shrink--none">
                                    Some long text to make everything overflow.
                                </div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                        </div>
                    </div>
                )
                codeContent = "<div className='flex'>\n   <div className='flex-shrink--none'>\n       Some long text to make it overflow.\n   </div>\n   <div>1</div>\n   <div>2</div>\n</div>"
                break;
            case 'grow':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Target element will not grow according to its flex container size.
                            It will accomodate its content's size, but not fill its container.
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames}>
                                <div className="flex-grow--none">Some short text.</div>
                            </div>
                        </div>
                    </div>
                )
                codeContent = "<div className='flex'>\n   <div className='flex-grow--none'>\n       Some short text.\n   </div>\n</div>"
                break;
        }
        return (
            <section className="demo-only-section flex flex--column">
                <h2>Restricting flex</h2>
                <div className="push--bottom">
                    <TabNav activeTab={flexTab} style={['sub']}>
                        <TabNav.Tab onClick={() => this.switchFlexTab('none')} tabId="none">
                            flex--none
                        </TabNav.Tab> 
                        <TabNav.Tab onClick={() => this.switchFlexTab('shrink')} tabId="shrink">
                            flex-shrink--none
                        </TabNav.Tab> 
                        <TabNav.Tab onClick={() => this.switchFlexTab('grow')} tabId="grow">
                            flex-grow--none
                        </TabNav.Tab> 
                    </TabNav>
                </div>
                <div className="flex flex--row">
                    {leftContent}
                    <div className="flex--1 push--left demo-only-code-box">
                        <Code
                            hasCopyButton={true}
                            isHighlighted={true}
                            type={ 'block'}
                            language={ 'html'}>
                            {codeContent}
                        </Code>
                    </div>
                </div>
            </section>
        );
    }
}

export class FlexAligning extends React.Component {
    state = {
        flexTab: 'align',
    };

    switchFlexTab = tab => {
        this.setState({flexTab: tab});
    }

    render() {
        const {flexTab} = this.state;
        let flexDirectionClassnames = classNames(
            'demo-only-helper-box-container',
            {'demo-only-helper-box-container--height-160': flexTab!=='justified',
            'demo-only-helper-box-container--width-160': flexTab==='justified' || flexTab ==='center',
            'flex--dead-center': flexTab === 'center',
            'flex': flexTab !== 'center',}
        ); 
        let leftContent;
        let codeContent;
        switch (flexTab) {
            case 'align':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Vertically aligns any children.
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames + " flex-align--start"}>
                                <div>
                                    Start
                                </div>
                            </div>
                            <div className={flexDirectionClassnames + " flex-align--center"}>
                                <div>
                                    Center
                                </div>
                            </div>
                            <div className={flexDirectionClassnames + " flex-align--end"}>
                                <div>
                                    End
                                </div>
                            </div>                           
                        </div>
                    </div>
                )
                codeContent = "<div className='flex flex-align--start'>\n   <div>Start</div>\n</div>\n<div className='flex flex-align--center'>\n   <div>Center</div>\n</div>\n<div className='flex flex-align--end'>\n    <div>End</div>\n</div>"
                break;
            case 'justified':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Horizontally aligns children.
                        </p>
                        <div className="flex--dead-center flex--column">
                            <div className={flexDirectionClassnames + " flex-justified--start"}>
                                <div>
                                    Start
                                </div>
                            </div>
                            <div className={flexDirectionClassnames + " push--top flex-justified--center"}>
                                <div>
                                    Center
                                </div>
                            </div>
                            <div className={flexDirectionClassnames + " push--top flex-justified--end"}>
                                <div>
                                    End
                                </div>
                            </div>                            
                        </div>
                    </div>
                )
                codeContent = "<div className='flex flex-justified--start'>\n   <div>Start</div>\n</div>\n<div className='flex flex-justified--center'>\n   <div>Center</div>\n</div>\n<div className='flex flex-justified--end'>\n    <div>End</div>\n</div>"
                break;
            case 'between':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Horizontally aligns children to have equal spacing between them.
                        </p>
                        <div className="flex--dead-center flex--column">
                            <div className={"demo-only-helper-box-container demo-only-helper-box-container--width-300 push--top flex flex-justified--between"}>
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    3
                                </div>
                            </div>  
                        </div>
                    </div> 
                )
                codeContent = "<div className='flex flex-justified--between'>\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n</div>"
                break;
            case 'center':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Easy vertical and horizontal centering, no parent .flex necessary.
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames}>
                                <div>center</div>
                            </div>                           
                        </div>
                    </div>
                )
                codeContent = "<div className='flex--dead-center'>\n    <div>center</div>\n</div>"
                break;
            case 'self':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Vertically aligns itself (vs <code>flex-align--</code> which aligns its children).
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames}>
                                <div className="flex-self--start">
                                    Start
                                </div>
                            </div>
                            <div className={flexDirectionClassnames}>
                                <div className="flex-self--center">
                                    Center
                                </div>
                            </div>
                            <div className={flexDirectionClassnames}>
                                <div className="flex-self--end">
                                    End
                                </div>
                            </div>                         
                        </div>
                    </div>
                )
                codeContent = "<div className='flex'>\n   <div className='flex-self--start'>Start</div>\n</div>\n<div className='flex'>\n   <div className='flex-self--center'>Center</div>\n</div>\n<div className='flex'>\n    <div className='flex-self--end'>End</div>\n</div>"
                break;
        }
        return (
            <section className="demo-only-section flex flex--column">
                <h2>Alignment</h2>
                <div className="push--bottom">
                    <TabNav activeTab={flexTab} style={['sub']}>
                        <TabNav.Tab onClick={() => this.switchFlexTab('align')} tabId="align">
                            flex-align--(start, center, end)
                        </TabNav.Tab>
                        <TabNav.Tab onClick={() => this.switchFlexTab('self')} tabId="self">
                            flex-self--(start, center, end)
                        </TabNav.Tab>  
                        <TabNav.Tab onClick={() => this.switchFlexTab('justified')} tabId="justified">
                            flex-justified--(start, center, end)
                        </TabNav.Tab> 
                        <TabNav.Tab onClick={() => this.switchFlexTab('between')} tabId="between">
                            flex-justified--between
                        </TabNav.Tab>
                        <TabNav.Tab onClick={() => this.switchFlexTab('center')} tabId="center">
                            flex--dead-center
                        </TabNav.Tab> 
                    </TabNav>
                </div>
                <div className="flex flex--row">
                    {leftContent}
                    <div className="flex--1 push--left demo-only-code-box">
                        <Code
                            hasCopyButton={true}
                            isHighlighted={true}
                            type={ 'block'}
                            language={ 'html'}>
                            {codeContent}
                        </Code>
                    </div>
                </div>
            </section>
        );
    }
}

export class FlexWrap extends React.Component {
    state = {
        flexTab: 'wrap',
    };

    switchFlexTab = tab => {
        this.setState({flexTab: tab});
    }

    render() {
        const {flexTab} = this.state;
        let flexDirectionClassnames = classNames(
            'demo-only-helper-box-container',
            'flex',
            'demo-only-helper-box-container--width-300',
            {'flex-wrap': flexTab ==='wrap',
            'flex-wrap--reverse': flexTab === 'reverse'}
        ); 
        let leftContent;
        let codeContent;
        switch (flexTab) {
            case 'wrap':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                        Apply <code>flex-wrap</code> to a container and all child elements will wrap around in the container.
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames}>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                            </div>                           
                        </div>
                    </div>
                )
                codeContent = "<div className='flex flex-wrap'>\n   <div>1</div>\n   <div>2</div>\n   <div>3</div>\n   <div>4</div>\n   <div>5</div>\n   <div>6</div>\n</div>"
                break;
            case 'reverse':
                leftContent = (
                    <div className="flex--1">
                        <p className="push--left">
                            Apply <code>flex-wrap--reverse</code> to a container and all child elements will wrap around in the container in reverse order.
                        </p>
                        <div className="flex--dead-center">
                            <div className={flexDirectionClassnames}>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                            </div>                           
                        </div>
                    </div>
                )
                codeContent = "<div className='flex flex-wrap--reverse'>\n   <div>1</div>\n   <div>2</div>\n   <div>3</div>\n   <div>4</div>\n   <div>5</div>\n   <div>6</div>\n</div>"
                break;
        }
        return (
            <section className="demo-only-section flex flex--column">
                <h2>Wrap</h2>
                <div className="push--bottom">
                    <TabNav activeTab={flexTab} style={['sub']}>
                        <TabNav.Tab onClick={() => this.switchFlexTab('wrap')} tabId="wrap">
                            flex-wrap
                        </TabNav.Tab> 
                        <TabNav.Tab onClick={() => this.switchFlexTab('reverse')} tabId="reverse">
                            flex-wrap--reverse
                        </TabNav.Tab> 
                    </TabNav>
                </div>
                <div className="flex flex--row">
                    {leftContent}
                    <div className="flex--1 push--left demo-only-code-box">
                        <Code
                            hasCopyButton={true}
                            isHighlighted={true}
                            type={ 'block'}
                            language={ 'html'}>
                            {codeContent}
                        </Code>
                    </div>
                </div>
            </section>
        );
    }
}
