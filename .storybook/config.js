import * as storybook from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

require('../dist/styles.js');

require('../src/oui/oui.scss');

const options = {
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  isFullScreen: false,
  showNav: true,
  showPanel: true,
  showSearchBox: true,
  sortStoriesByKind: false
};

const a11y = {
  a11y: {
    // ... axe options
    element: '#root-preview', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
};

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  require('./overview.story.js');
  require('./tokens.story.js');
  require('./color.story.js');
  require('./borderradius.story.js');
  req.keys().forEach(req);
  require('./app.story.js');
  req.keys().forEach(req)
}

storybook.configure(loadStories, module);
storybook.addDecorator(withA11y);
storybook.addParameters(options);
storybook.addParameters(a11y);
