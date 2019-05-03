import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HelpPopover from './index.js';

const stories = storiesOf('HelpPopover', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', (() => (
    <HelpPopover popoverTitle="This is a popover title">
      This is a popover description. 🤓
    </HelpPopover>
  )))
  .add('hover', (() => (<div>
    <div className="position--relative height--100 text--center">
      <HelpPopover
        popoverTitle="This is a popover title"
        behavior="hover"
        horizontalAttachment="left"
        verticalAttachment="middle">
       You hovered! 🤓
      </HelpPopover>
    </div>
  </div>)));
