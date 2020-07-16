import React from 'react';
import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Table from "../../src/components/Table/index";

export class Spacing extends React.Component {
  state = {
    spacingTab: 'intro',
    spacingAddition: 'add',
    spacingOption: 'push',
    spacingAmount: '10px',
    spacingSide: 'all',
  };

    switchSpacingOption = option => {
        this.setState({spacingOption: option});
    }

    switchSpacingAmount = amount => {
        this.setState({spacingAmount: amount});
    }

    switchSpacingSide = side => {
        this.setState({spacingSide: side});
    }

    switchSpacingAddition = add => {
        this.setState({spacingAddition: add});
    }
    
    switchTab = tab => {
        this.setState({spacingTab: tab, spacingAddition: 'add', spacingOption: 'push', spacingAmount: '10px', spacingSide: 'all'});
    }

  render() {
    const {spacingTab, spacingOption, spacingAmount, spacingSide, spacingAddition} = this.state;

    let tabContent;
    let spacingClass = (spacingSide === 'all' ? 
    (spacingAmount === '10px' ? spacingOption : spacingOption + '-' + spacingAmount)
     : (spacingAmount === '10px' ? spacingOption + '--' + spacingSide : spacingOption+'-'+spacingAmount+'--'+spacingSide));
    if (spacingAddition === 'remove') {
        spacingClass = (spacingOption === 'push' ? 
            (spacingSide === 'all'? 'push flush': 'push flush--'+spacingSide) :
            (spacingSide === 'all' ? 'soft hard' : 'soft hard--'+spacingSide));
    } 
    switch (spacingTab) {
        case 'intro':
            const introString = '-{amount}--{side}'
            tabContent = 
            <div className="reading-column push-double--sides"> 
                <p>The model for adding padding or margins consists of <code>push{introString}</code> for margins and <code>soft{introString}</code> for padding.</p>
                <h4>Amount of spacing</h4>
                <p>The options for amount are:
                    <ul className="list list--bullet">
                        <li>half - 5px</li>
                        <li>double - 20px</li>
                        <li>triple - 30px</li>
                        <li>quad - 40px</li>
                    </ul>
                    The default (not specifying an amount) is 10px (ie: <code>push--top</code>). Note: in this case there are only two '-' separating the first and last word of the helper class.
                </p>
                <h4>Location of spacing</h4>
                <p>The options for side are:
                    <ul className="list list--bullet">
                        <li>top</li>
                        <li>bottom</li>
                        <li>left</li>
                        <li>right</li>
                        <li>ends - top & bottom</li>
                        <li>sides - right & left</li>
                    </ul>
                    The default (not specifying a side) applies the margin and padding to all sidees (ie: <code>push-half</code>). Note: in this case there is only one '-' separating the first and last word of the helper class.
                </p>
                <p>For examples of how this works go to the <strong>Interactive examples</strong> tab.</p>
            </div>
            break;
        case 'examples':
            let externalBoxHelperClasses = classNames(
                'border-radius',
                'min-height--50',
                'max-width--300',
                `demo-only-spacing-${spacingOption}-background`,
                {[spacingClass]: spacingOption === 'soft'}
            )
            let internalBoxHelperClasses = classNames(
                'border-radius',
                'flex',
                'flex--dead-center',
                'soft-double',
                'reverse',
                {'demo-only-spacing-push-background': spacingOption === 'soft',
                'demo-only-spacing-soft-background': spacingOption ==='push',
                [spacingClass]: spacingOption === 'push'}
            )
            tabContent = 
                <div className="flex flex--column flex-align--start push-double--sides"> 
                    <p>Click through the different options in the columns to get your desired effect.</p>
                    <div className="flex width--1-1">
                        <div className="width--150 push-quad--left">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Remove or add spacing
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <SpacingRow onRowClick={() => this.switchSpacingAddition('add')} helperClass='add' isSelected={spacingAddition === 'add'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingAddition('remove')} helperClass='remove' isSelected={spacingAddition === 'remove'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className="width--150">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Margin vs. Padding
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <SpacingRow onRowClick={() => this.switchSpacingOption('push')} helperClass='margin' isSelected={spacingOption === 'push'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingOption('soft')} helperClass='padding' isSelected={spacingOption === 'soft'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className="width--100">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Amount
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <SpacingRow disableClick={spacingAddition === 'remove'} onRowClick={() => this.switchSpacingAmount('half')} helperClass='5px' isSelected={spacingAmount === 'half'} />
                                    <SpacingRow disableClick={spacingAddition === 'remove'} onRowClick={() => this.switchSpacingAmount('10px')} helperClass='10px' isSelected={spacingAmount === '10px'} />
                                    <SpacingRow disableClick={spacingAddition === 'remove'} onRowClick={() => this.switchSpacingAmount('double')} helperClass='20px' isSelected={spacingAmount === 'double'} />
                                    <SpacingRow disableClick={spacingAddition === 'remove'} onRowClick={() => this.switchSpacingAmount('triple')} helperClass='30px' isSelected={spacingAmount === 'triple'} />
                                    <SpacingRow disableClick={spacingAddition === 'remove'} onRowClick={() => this.switchSpacingAmount('quad')} helperClass='40px' isSelected={spacingAmount === 'quad'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className="width--100">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Side
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('top')} helperClass='top' isSelected={spacingSide === 'top'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('right')} helperClass='right' isSelected={spacingSide === 'right'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('bottom')} helperClass='bottom' isSelected={spacingSide === 'bottom'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('left')} helperClass='left' isSelected={spacingSide === 'left'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('ends')} helperClass='ends' isSelected={spacingSide === 'ends'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('sides')} helperClass='sides' isSelected={spacingSide === 'sides'} />
                                    <SpacingRow onRowClick={() => this.switchSpacingSide('all')} helperClass='all' isSelected={spacingSide === 'all'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className='flex flex--1 flex--column push-quad--left'>
                            <p className="max-width--300">Helper class: <code>{spacingClass}</code></p>
                            <div className={externalBoxHelperClasses}>
                                <div className={internalBoxHelperClasses}><code>{spacingClass}</code></div>
                            </div>
                            <p className="push--top max-width--300">The dark purple box is the box the helper class is applied to.</p>
                        </div>
                    </div>
                </div>
            break;
    }
    return (
        <section className="demo-only-section hard--top flex flex--column">
            <h1>Spacing</h1>
            <p>The following examples illustrate the various spacing helper classes that are available through OUI's CSS.</p>
            <div className="push--bottom">
                <TabNav activeTab={spacingTab} style={['sub']}>
                    <TabNav.Tab onClick={() => this.switchTab('intro')} tabId="intro">
                        Introduction
                    </TabNav.Tab> 
                    <TabNav.Tab onClick={() => this.switchTab('examples')} tabId="examples">
                        Interactive examples
                    </TabNav.Tab> 
                </TabNav>
            </div>
            {tabContent}
            </section>
    );
  }
}

interface SpacingRowProps {
    onRowClick: () => void,
    isSelected: boolean,
    helperClass: string,
    disableClick?: boolean,
}
  
class SpacingRow extends React.Component<SpacingRowProps> {
    constructor(props: SpacingRowProps) {
        super(props)
    }
  
    render() {
      const {onRowClick, isSelected, helperClass, disableClick} = this.props;
      let classes = classNames(
        {'oui-table-row--highlighted': !disableClick && isSelected,
        'muted': disableClick},
        'no-border',
      );

      return (
        <tr
            className={ classes }
            onClick={onRowClick}>
            <Table.TD verticalAlign="middle"><code className="push-half--left">{helperClass}</code></Table.TD>
        </tr>
                      
      );
    }
}
