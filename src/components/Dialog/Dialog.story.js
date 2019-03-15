import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import noop from 'lodash.noop';

import Dialog from './index.js';
import Button from '../Button';
import ButtonRow from '../ButtonRow';
import Input from '../Input';

const stories = storiesOf('Dialog', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add(
    'Default Dialog',
    withInfo()(() => (
      <div>
        <div>
          {' '}
          <p>You shouldn't see this text behind the dialog.</p>
        </div>
        <Dialog.Wrapper>
          <Dialog.Title subtitle="This is a subtitle">
            This is a Full Screen Dialog
          </Dialog.Title>
          <Dialog.Body>
            <Dialog.Fieldset
              title="Project Name"
              description="Give your project a name"
              isOptional={ false }
              helpIcon={ true }
              popoverTitle="Popover title"
              popoverText="This should help you figure out what to do">
              <Input label="Some data" />
            </Dialog.Fieldset>
            <Dialog.Fieldset
              title="Project Description"
              description="Give your project a description"
              isOptional={ true }
              helpIcon={ true }
              popoverTitle="Popover title"
              popoverText="This should help you figure out what to do">
              <Input label="Some data" />
            </Dialog.Fieldset>
          </Dialog.Body>
          <Dialog.Footer>
            <ButtonRow
              rightGroup={ [
                <Button style="plain" key={ 0 } onClick={ noop }>
                  Cancel
                </Button>,
                <Button style="highlight" key={ 1 } onClick={ noop }>
                  Save
                </Button>,
              ] }
            />
          </Dialog.Footer>
        </Dialog.Wrapper>
      </div>
    ))
  );
