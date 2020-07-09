import React from 'react';
import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Code from "../../src/components/Code/index";
import Table from "../../src/components/Table/index";


const typographySizeInformation = {
    'giga': {
        'fontSize': '65px'
    },
    'mega':  {
        'fontSize': '50px'
    },
    'kilo':  {
        'fontSize': '40px'
    },
    'alpha':  {
        'fontSize': '30px',
        'fontWeight': '300',
        'lineHeight': '1.1',
        'equivalentElement': '<h1>',
    },
    'beta':  {
        'fontSize': '26px',
        'fontWeight': '300',
        'lineHeight': '1.1',
        'equivalentElement': '<h2>',
    },
    'gamma' :  {
        'fontSize': '20px',
        'fontWeight': '400',
        'lineHeight': '1.1',
        'equivalentElement': '<h3>',
    },
    'delta': {
        'fontSize': '18px',
        'equivalentElement': '<h4>',
    },
    'epsilon':  {
        'fontSize': '16px',
        'fontWeight': '400',
        'lineHeight': '1.1',
        'equivalentElement': '<h5>',
    },
    'zeta':  {
        'fontSize': '14px',
        'fontWeight': '500',
        'lineHeight': '1.1',
        'equivalentElement': '<h6>',
    },
    'milli': {
        'fontSize': '13px'
    },
    'micro': {
        'fontSize': '11px'
    },
}

const typographyColorInformation = {
    'base' : {
        'source': 'variable',
        'color': '$brand-color, dark-blue-100',
        'root': '$brand-purple-dark',
    },
    'brand' : {
        'source': 'variable',
        'color': '$brand-color, light-blue-75',
        'root': '#4069FF',
    },
    'good-news' : {
        'source': 'token',
        'color': '$green-dark',
    },
    'warning' : {
        'source': 'token',
        'color': '$orange-dark',
    },
    'bad-news' : {
        'source': 'token',
        'color': '$red-dark',
    },
    'charcoal' : {
        'source': 'variable',
        'color': '$root-color, grey-78',
        'root': '$base-black, 22%',
    },
    'draft' : {
        'source': 'variable',
        'color': '$root-color, draft',
        'root': '#FF9C33',
    },
    'live' : {
        'source': 'variable',
        'color': '$root-color, good-news',
        'root': '#33CF76',
    },
    'reverse': {
        'source': 'variable',
        'color': '$base-white',
    },
    'muted': {
        'source': 'variable',
        'color': '$grey-dark',
    },
    'faint': {
        'source': 'variable',
        'color': '$root-color, grey-12',
        'root': '$base-black, 88%',
    }
}

const typographyStyleInformation = {
    'weight--light': '.weight--light {\n    font-weight: 300\n}',
    'weight--normal': '.weight--normal {\n    font-weight: 400\n}',
    'weight--bold': '.weight--bold {\n    font-weight: 500\n}',
    'style--italic': '.style--italic {\n    font-style: italic\n}',
    'style--normal': '.style--normal {\n    font-style: normal\n}',
    'underline': '.underline {\n    text-decoration: underline\n}',
    'strike': '.strike {\n    text-decoration: line-through\n}',
    'caps': '.caps {\n    text-transform: uppercase\n}',
}

export class Typography extends React.Component {
  state = {
    typographyTab: 'size',
    typographySize: 'micro',
    typographyColor: 'base',
    typographyStyle: 'weight--light',
  };

    switchSizeRow = size => {
        this.setState({typographySize: size});
    }

    switchColorRow = color => {
        this.setState({typographyColor: color});
    }

    switchStyleRow = style => {
        this.setState({typographyStyle: style});
    }
    
    switchTab = tab => {
        this.setState({typographyTab: tab, typographySize: 'micro', typographyColor: 'base', typographyStyle: 'weight--light'});
    }

  render() {
    const {typographyTab, typographySize, typographyColor, typographyStyle} = this.state;
    const currentSize = typographySizeInformation[typographySize];
    const currentColor = typographyColorInformation[typographyColor];
    const currentStyle = typographyStyleInformation[typographyStyle];

    let tabContent;
    switch (typographyTab) {
        case 'size':
            tabContent = 
                <div className="flex flex-align--start push-double--sides"> 
                    <div className="flex--1">
                        <Table style="rule">
                            <Table.THead>
                                <Table.TR>
                                    <Table.TH>
                                        Helper Class
                                    </Table.TH>
                                    <Table.TH>
                                        Example
                                    </Table.TH>
                                </Table.TR>
                            </Table.THead>
                            <Table.TBody>
                                <TypographyRow onRowClick={() => this.switchSizeRow('micro')} isSelected={typographySize === 'micro'} helperClass='micro' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('milli')} isSelected={typographySize === 'milli'} helperClass='milli' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('zeta')} isSelected={typographySize === 'zeta'} helperClass='zeta' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('epsilon')} isSelected={typographySize === 'epsilon'} helperClass='epsilon' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('delta')} isSelected={typographySize === 'delta'} helperClass='delta' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('gamma')} isSelected={typographySize === 'gamma'} helperClass='gamma' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('beta')} isSelected={typographySize === 'beta'} helperClass='beta' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('alpha')} isSelected={typographySize === 'alpha'} helperClass='alpha' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('kilo')} isSelected={typographySize === 'kilo'} helperClass='kilo' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('mega')} isSelected={typographySize === 'mega'} helperClass='mega' isSizeDemonstration={true}/>
                                <TypographyRow onRowClick={() => this.switchSizeRow('giga')} isSelected={typographySize === 'giga'} helperClass='giga' isSizeDemonstration={true}/>
                            </Table.TBody>
                        </Table>
                    </div>
                    <div className="demo-only-typography-container demo-only-typography-container--floating color--base soft-double--ends soft-double--sides push-double--top push-double--left border--all border-radius">
                        <div className="flex">
                            <div className="weight--bold">Font size</div>
                            <div className="anchor--right">{currentSize.fontSize}</div>
                        </div>
                        {currentSize.fontWeight && 
                            <div className="flex">
                                <div className="weight--bold">Font weight</div>
                                <div className="anchor--right">{currentSize.fontWeight}</div>
                            </div>}
                        {currentSize.lineHeight && 
                            <div className="flex">
                                <div className="weight--bold">Line height</div>
                                <div className="anchor--right">{currentSize.lineHeight}</div>
                            </div>}
                        {currentSize.equivalentElement && 
                            <div className="push--top">Equivalent to the <span className="weight--bold">{currentSize.equivalentElement}</span> element, which should be used instead of this class when hierarchy needs to be conveyed. If purely stylistic, the class is fine.
                            </div>
                            }
                    </div>
                </div>
            break;
        case 'color':
            tabContent = 
                <div className="flex flex-align--start push-double--sides"> 
                    <div className="flex--1">
                        <Table style="rule">
                            <Table.THead>
                                <Table.TR>
                                    <Table.TH>
                                        Helper Class
                                    </Table.TH>
                                    <Table.TH>
                                        Example
                                    </Table.TH>
                                </Table.TR>
                            </Table.THead>
                            <Table.TBody>
                                <TypographyRow onRowClick={() => this.switchColorRow('base')} isSelected={typographyColor === 'base'} helperClass='color--base'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('charcoal')} isSelected={typographyColor === 'charcoal'} helperClass='color--charcoal'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('muted')} isSelected={typographyColor === 'muted'} helperClass='muted'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('faint')} isSelected={typographyColor === 'faint'} helperClass='faint' darkBackground={true}/>
                                <TypographyRow onRowClick={() => this.switchColorRow('reverse')} isSelected={typographyColor === 'reverse'} helperClass='reverse' darkBackground={true}/>
                                <TypographyRow onRowClick={() => this.switchColorRow('warning')} isSelected={typographyColor === 'warning'} helperClass='color--warning'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('draft')} isSelected={typographyColor === 'draft'} helperClass='color--draft'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('bad-news')} isSelected={typographyColor === 'bad-news'} helperClass='color--bad-news'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('brand')} isSelected={typographyColor === 'brand'} helperClass='color--brand'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('good-news')} isSelected={typographyColor === 'good-news'} helperClass='color--good-news'/>
                                <TypographyRow onRowClick={() => this.switchColorRow('live')} isSelected={typographyColor === 'live'} helperClass='color--live'/>
                            </Table.TBody>
                        </Table>
                        </div>
                    <div className="demo-only-typography-container demo-only-typography-container--width-350 color--base soft-double--ends soft-double--sides push--top push-double--left border--all border-radius">
                        <div className="flex">
                            <div className="weight--bold push-double--right">Source</div>
                            <div className="anchor--right">{currentColor.source}</div>
                        </div>
                        <div className="flex">
                            <div className="weight--bold push-double--right">Referencing</div>
                            <div className="anchor--right">{currentColor.color}</div>
                        </div>
                        {currentColor.root && 
                            <div className="flex">
                                <div className="weight--bold push-double--right">Root color</div>
                                <div className="anchor--right">{currentColor.root}</div>
                            </div>}
                    </div>
                </div>
            break;
        case 'style':
            tabContent = 
                <div className="flex flex-align--start push-double--sides"> 
                    <div className="flex--1">
                    <Table style="rule">
                        <Table.THead>
                            <Table.TR>
                                <Table.TH>
                                    Helper Class
                                </Table.TH>
                                <Table.TH>
                                    Example
                                </Table.TH>
                            </Table.TR>
                        </Table.THead>
                        <Table.TBody>
                            <TypographyRow onRowClick={() => this.switchStyleRow('weight--light')} isSelected={typographyStyle === 'weight--light'} helperClass='weight--light' />
                            <TypographyRow onRowClick={() => this.switchStyleRow('weight--normal')} isSelected={typographyStyle === 'weight--normal'} helperClass='weight--normal'/>
                            <TypographyRow onRowClick={() => this.switchStyleRow('weight--bold')} isSelected={typographyStyle === 'weight--bold'} helperClass='weight--bold'/>
                            <TypographyRow onRowClick={() => this.switchStyleRow('style--italic')} isSelected={typographyStyle === 'style--italic'} helperClass='style--italic'/>
                            <TypographyRow onRowClick={() => this.switchStyleRow('style--normal')} isSelected={typographyStyle === 'style--normal'} helperClass='style--normal'/>
                            <TypographyRow onRowClick={() => this.switchStyleRow('underline')} isSelected={typographyStyle === 'underline'} helperClass='underline'/>
                            <TypographyRow onRowClick={() => this.switchStyleRow('strike')} isSelected={typographyStyle === 'strike'} helperClass='strike'/>
                            <TypographyRow onRowClick={() => this.switchStyleRow('caps')} isSelected={typographyStyle === 'caps'} helperClass='caps'/>
                        </Table.TBody>
                    </Table>
                    </div>
                    <div className="demo-only-typography-container color--base soft-double--ends soft-double--sides push--top push-double--left border--all border-radius">
                        <Code
                            isHighlighted={true}
                            type={ 'block'}
                            language={ 'css'}>
                            {currentStyle}
                        </Code>
                    </div>
                </div>
            break;
    }
    return (
        <section className="demo-only-section hard--top flex flex--column">
            <h1>Typography</h1>
            <p>The following examples illustrate the various typography helper classes that are available through OUI's CSS.</p>
            <div className="push--bottom">
                <TabNav activeTab={typographyTab} style={['sub']}>
                    <TabNav.Tab onClick={() => this.switchTab('size')} tabId="size">
                        Size
                    </TabNav.Tab> 
                    <TabNav.Tab onClick={() => this.switchTab('color')} tabId="color">
                        Color
                    </TabNav.Tab> 
                    <TabNav.Tab onClick={() => this.switchTab('style')} tabId="style">
                        Style
                    </TabNav.Tab> 
                </TabNav>
            </div>
            {tabContent}
            </section>
    );
  }
}

interface TypographyRowProps {
    onRowClick: () => void,
    isSelected: boolean,
    helperClass: string,
    isSizeDemonstration?: boolean,
    darkBackground?: boolean,
}
  
class TypographyRow extends React.Component<TypographyRowProps> {
    constructor(props: TypographyRowProps) {
        super(props)
    }
  
    render() {
      const {onRowClick, isSelected, helperClass, isSizeDemonstration, darkBackground} = this.props;
      let typographyDemonstrationClasses = classNames(
          helperClass,
          {
              'delta': !isSizeDemonstration,
              'demo-only-typography-dark-background': darkBackground,
          }
      )
      let classes = classNames(
        {'oui-table-row--highlighted': isSelected,},
        'no-border',
      );
      return (
        <tr
            className={ classes }
            onClick={onRowClick}>
            <Table.TD verticalAlign="middle"><code className="push--left">{helperClass}</code></Table.TD>
            <Table.TD verticalAlign="middle"><div className={typographyDemonstrationClasses}>Typography</div></Table.TD>
        </tr>
                      
      );
    }
}
