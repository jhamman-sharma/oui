import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import SummaryBar from './index.js';

storiesOf('SummaryBar/', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo())
  .addDecorator(story => (
    <div id="root-preview">
      { story() }
    </div>
  ))
  .add('Default', (() => {
    return (
      <div>
        <SummaryBar
          title={ 'Summary Bar Title' }
          titleText={ 'Summary Bar Title Text' }
          subtitle={ 'Subtitle but should it contain other elements?' }>
          <SummaryBar.SummaryBarCol
            headerTitle={ 'Primary Metric' }
            headerHelpContent={ 'Test me out' }
            bodyHelpContent={ 'Test body out' }
            bodyContent={{'value': 'Increase in unique comversions per visitor...' }}>
          </SummaryBar.SummaryBarCol>
          <SummaryBar.SummaryBarCol
            headerTitle={ 'Primary Metric' }
            headerHelpContent={ 'Test me out' }
            bodyHelpContent={ 'Test body out' }
            bodyContent={{'value': 'Increase in unique comversions per visitor...' }}>
          </SummaryBar.SummaryBarCol>
          <SummaryBar.SummaryBarCol
            headerTitle={ '' }
            headerHelpContent={ '' }
            bodyHelpContent={ '' }
            bodyContent={{}}>
          </SummaryBar.SummaryBarCol>

          {/* <Col
            paddedContent={ 'around' }>
            <h2 className="push-half--bottom">Some Title</h2>
            Col with border sides
          </Col>
          <SummaryBar.Item
            title={ `bold &lt;strong&gt; boldme &lt;/strong&gt; bold` }>
            <h2>Test 1</h2>
          </SummaryBar.Item>
          <SummaryBar.Item
            title={ ["This is ", <strong>bold me</strong>,  "working."] }>
            Test 2
          </SummaryBar.Item>
          <SummaryBar.Item
            title={ 'Testing Title' }>
            Test 3
          </SummaryBar.Item>
          <SummaryBar.Item
            title={ 'Testing Title' }>
            Test 4
          </SummaryBar.Item>
          <SummaryBar.Item
            title={ 'Testing Title' }>
            Test 5
          </SummaryBar.Item> */}
        </SummaryBar>
      </div>
    );
  }));
