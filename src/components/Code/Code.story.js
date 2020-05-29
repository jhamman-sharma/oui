import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import Code from '../Code';

const langOptions = {
  'cs': 'cs',
  'css': 'css',
  'diff': 'diff',
  'html': 'html',
  'java': 'java',
  'javascript': 'javascript',
  'js': 'js',
  'jsx': 'jsx',
  'markdown': 'markdown',
  'md': 'md',
  'objectivec': 'objectivec',
  'php': 'php',
  'python': 'python',
  'ruby': 'ruby',
  'scss': 'scss',
  'swift': 'swift'};

const stories = storiesOf('Code', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ))
  .addParameters({
    knobs: {
      // Allows users to paste JSX into the text knobs (e.g. `<MyComponent>`)
      // w/o it getting rewritten as `&lt;MyComponent&gt`;
      escapeHTML: false,
    },
  });

stories
  .add('Default', (() => {
    return (
      <Code
        hasCopyButton={ boolean('hasCopyButton', true) }
        isHighlighted={ boolean('isHighlighted', true) }
        testSection='my-code-box'
        type={ select('type', {inline: 'inline', block: 'block'}, 'block') }
        language={ select('language', langOptions, 'js') }>
        { text('code', 'var foo = `bar`; \nvar bat = `baz`;') }
      </Code>
    );
  }))
  .add('With styled copy button', (() => {
    return (
      <Code
        copyButtonStyle="none"
        copyButtonUsesTextLabel={ boolean('copyButtonUsesTextLabel', false) }
        hasCopyButton={ boolean('hasCopyButton', true) }
        isHighlighted={ true }
        testSection='my-code-box'
        type={ select('type', {inline: 'inline', block: 'block'}, 'block') }
        language={ select('language', langOptions, 'js') }>
        { text(
          'code', 'var foo = `bar`; var bat = `baz`; var withAReallyReallyLongName = `a value with a really really long string`'
        ) }
      </Code>
    );
  }))
  .add('With wrapped text', (() => {
    return (
      <Code
        hasCopyButton={ boolean('hasCopyButton', true) }
        isHighlighted={ boolean('isHighlighted', true) }
        testSection='my-code-box'
        type={ select('type', {inline: 'inline', block: 'block'}, 'block') }
        language={ select('language', langOptions, 'markdown') }
        maxLineLength={ number('maxLineLength', 100) }>
        { text('code', '# Optimizely React SDK\n\nThis repository houses the React SDK for use with Optimizely Full Stack and Optimizely Rollouts.\n\nOptimizely Full Stack is A/B testing and feature flag management for product development teams. Experiment in any application. Make every feature on your roadmap an opportunity to learn. Learn more at https://www.optimizely.com/platform/full-stack/, or see the [documentation](https://docs.developers.optimizely.com/full-stack/docs).\n\nOptimizely Rollouts is free feature flags for development teams. Easily roll out and roll back features in any application without code deploys. Mitigate risk for every feature on your roadmap. Learn more at https://www.optimizely.com/rollouts/, or see the [documentation](https://docs.developers.optimizely.com/rollouts/docs).') }
      </Code>
    );
  }));
