import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import noop from 'lodash.noop';
import { action } from '@storybook/addon-actions';

import Sheet from './index.js';
import Button from '../Button';
import Fieldset from '../FieldsetNew';
import Input from '../Input';

const stories = storiesOf('Sheet', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add('Default', () => (
    <div>
      <p>This is text behind the sheet that is blocked by the overlay.</p>
      <Sheet
        title={ text('title', 'This is a Sheet') }
        subtitle={ text('subtitle', 'This is an optional subtitle string') }
        hasCloseButton={ boolean('hasCloseButton', true) }
        onClose={ action('Sheet was closed') }
        footerButtonList={ [
          <Button style="plain" key={ 0 } onClick={ noop }>
            Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
            Confirm
          </Button>,
        ] }>
        <Fieldset
          title="Project Name"
          description="Give your project a name"
          isOptional={ false }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-01" label="Some data" type="text" />
          <Input id="input-02" label="Some more data" type="text" />
        </Fieldset>
        <Input id="input-03" label="Some data" type="text" />
        {/* <Fieldset
          title="Project Description"
          description="Give your project a description"
          isOptional={ true }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          
        </Fieldset> */}
        <Fieldset title="Project Details">
          <Input
            id="input-04"
            label="Target URL"
            type="text"
            isRequired={ true }
          />
        </Fieldset>
      </Sheet>
    </div>
  ))
  .add('With a link in subtitle', () => (
    <div>
      <p>This is text behind the sheet that is blocked by the overlay.</p>
      <Sheet
        title={ text('title', 'This is a Sheet') }
        subtitle={
          <p>
            Subtitles can also take nodes,{' '}
            <a href="https://www.optimizely.com/">like a link</a>
          </p>
        }
        hasCloseButton={ boolean('hasCloseButton', true) }
        onClose={ action('Sheet was closed') }
        footerButtonList={ [
          <Button style="plain" key={ 0 } onClick={ noop }>
            Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
            Confirm
          </Button>,
        ] }>
        <Fieldset
          title="Project Name"
          description="Give your project a name"
          isOptional={ false }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-01" label="Some data" type="text" />
          <Input id="input-02" label="Some more data" type="text" />
        </Fieldset>
        <Fieldset
          title="Project Description"
          description="Give your project a description"
          isOptional={ true }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-03" label="Some data" type="text" />
        </Fieldset>
        <Fieldset title="Project Details">
          <Input
            id="input-04"
            label="Target URL"
            type="text"
            isRequired={ true }
          />
        </Fieldset>
      </Sheet>
    </div>
  ))
  .add('With a warning', () => (
    <div>
      <p>This is text behind the sheet that is blocked by the overlay.</p>
      <Sheet
        title={ text('title', 'This is a Sheet') }
        subtitle={
          <p>
            Subtitles can also take nodes,{' '}
            <a href="https://www.optimizely.com/">like a link</a>
          </p>
        }
        hasCloseButton={ boolean('hasCloseButton', true) }
        onClose={ action('Sheet was closed') }
        warningContent={ text(
          'warningContent',
          'You do not have permissions to edit.'
        ) }
        warningTestSection={ text(
          'warningTestSection',
          'sheet-warning-01'
        ) }
        footerButtonList={ [
          <Button style="plain" key={ 0 } onClick={ noop }>
            Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
            Confirm
          </Button>,
        ] }>
        <Fieldset
          title="Project Name"
          description="Give your project a name"
          isOptional={ false }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-01" label="Some data" type="text" />
          <Input id="input-02" label="Some more data" type="text" />
        </Fieldset>
        <Fieldset
          title="Project Description"
          description="Give your project a description"
          isOptional={ true }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-03" label="Some data" type="text" />
        </Fieldset>
        <Fieldset title="Project Details">
          <Input
            id="input-04"
            label="Target URL"
            type="text"
            isRequired={ true }
          />
        </Fieldset>
      </Sheet>
    </div>
  ))
  .add('With centered header', () => (
    <div>
      <p>This is text behind the sheet that is blocked by the overlay.</p>
      <Sheet
        title={ text('title', 'This is a Sheet') }
        subtitle={ text('subtitle', 'This is an optional subtitle string') }
        centerHeader={ boolean('centerHeader', true) }
        hasCloseButton={ boolean('hasCloseButton', true) }
        onClose={ action('Sheet was closed') }
        footerButtonList={ [
          <Button style="plain" key={ 0 } onClick={ noop }>
            Cancel
          </Button>,
          <Button style="highlight" key={ 1 } onClick={ noop }>
            Confirm
          </Button>,
        ] }>
        <Fieldset
          title="Project Name"
          description="Give your project a name"
          isOptional={ false }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-01" label="Some data" type="text" />
          <Input id="input-02" label="Some more data" type="text" />
        </Fieldset>
        <Fieldset
          title="Project Description"
          description="Give your project a description"
          isOptional={ true }
          helpIcon={ true }
          popoverTitle="Popover title"
          popoverText="This should help you figure out what to do">
          <Input id="input-03" label="Some data" type="text" />
        </Fieldset>
        <Fieldset title="Project Details">
          <Input
            id="input-04"
            label="Target URL"
            type="text"
            isRequired={ true }
          />
        </Fieldset>
      </Sheet>
    </div>
  ))
  .add('Without footer', () => {
    return (
      <div>
        <p>This is text behind the sheet that is blocked by the overlay.</p>
        <Sheet
          title={ text('title', 'This is a Sheet') }
          subtitle={ text('subtitle', 'This is an optional subtitle string') }
          hasCloseButton={ boolean('hasCloseButton', true) }
          hasFooter={ boolean('hasFooter', false) }
          onClose={ action('Sheet was closed') }
          footerButtonList={ [
            <Button style="plain" key={ 0 } onClick={ noop }>
              Cancel
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ noop }>
              Confirm
            </Button>,
          ] }>
          <Fieldset
            title="Project Name"
            description="Give your project a name"
            isOptional={ false }
            helpIcon={ true }
            popoverTitle="Popover title"
            popoverText="This should help you figure out what to do">
            <Input id="input-01" label="Some data" type="text" />
            <Input id="input-02" label="Some more data" type="text" />
          </Fieldset>
          <Fieldset
            title="Project Description"
            description="Give your project a description"
            isOptional={ true }
            helpIcon={ true }
            popoverTitle="Popover title"
            popoverText="This should help you figure out what to do">
            <Input id="input-03" label="Some data" type="text" />
          </Fieldset>
          <Fieldset title="Project Details">
            <Input
              id="input-04"
              label="Target URL"
              type="text"
              isRequired={ true }
            />
          </Fieldset>
        </Sheet>
      </div>
    );
  });
