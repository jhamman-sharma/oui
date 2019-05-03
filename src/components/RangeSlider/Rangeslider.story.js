import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import RangeSlider from './index.js';

const stories = storiesOf('RangeSlider', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', (() => {
  return (
    <RangeSlider
      value={ number('value', 50) }
    />
  );
}))
  .add('disabled', (() => {
    return (
      <div>
        <input type="text" className="oui-text-input push-double--bottom" />
        <RangeSlider
          isDisabled={ true }
          value={ number('value', 50) }
        />
        <input type="text" className="oui-text-input" />
      </div>
    );
  }));
