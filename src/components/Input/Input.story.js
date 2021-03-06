import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import Input from './index';

const stories = storiesOf('Input', module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories
  .add('Input with knobs', () => {
    return (
      <Input
        defaultValue={ text('defaultValue', 'some default value') }
        displayError={ boolean('displayError', false) }
        hasSpellCheck={ boolean('hasSpellCheck', false) }
        id="input-01"
        isFilter={ boolean('isFilter', false) }
        isDropdown={ boolean('isDropdown', true) }
        isOptional={ boolean('isOptional', false) }
        label={ text('Label', 'Always Include a Label') }
        max={ number('max', 50) }
        maxLength={ number('maxLength', 250) }
        min={ number('min', 10) }
        onChange={ action('on change') }
        onBlur={ action('on blur') }
        onKeyDown={ action('on key press') }
        placeholder={ text('placeholder', 'just a placeholder') }
        isRequired={ boolean('isRequired', false) }
        type={ select('type', ['text', 'password', 'number', 'date'], 'text') }
      />
    );
  })
  .add('Inputs', () => {
    return (
      <div>
        <fieldset>
          <Input
            id="input-01"
            label="Field label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-02"
            label="Label for required field"
            isRequired={ true }
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-03"
            label="Field label"
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-04"
            label="Field label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-05"
            label="Field label"
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-06"
            label="Field label"
            placeholder="Has an error"
            note="A short description or note describing the error."
            type="text"
            displayError={ true }
          />
        </fieldset>
        <fieldset>
          <Input id="input-07" label="Start Time" type="time" />
        </fieldset>
      </div>
    );
  })
  .add('Error states', () => {
    return (
      <div>
        <fieldset>
          <Input
            id="input-01"
            label="Field label"
            displayError={ true }
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-02"
            label="Field label"
            displayError={ true }
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Input
            id="input-03"
            label="Field Label"
            displayError={ true }
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            type="text"
          />
        </fieldset>
      </div>
    );
  })
  .add('With Icons or Clear Button', () => {
    return (
      <div
        className="flex flex--column flex-justified--between"
        style={{ height: '500px' }}>
        <Input
          leftIconName="search"
          id="input-01"
          label="With leftIconName"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          type="text"
        />

        <Input
          rightIconName="search"
          id="input-02"
          label="With rightIconName"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          type="text"
        />

        <Input
          leftIconName="calendar"
          rightIconName="exclamation"
          id="input-03"
          label="With both leftIconName and rightIconName"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          type="text"
        />

        <Input
          id="input-04"
          label="Input with Clear Button"
          hasClearButton={ true }
          placeholder="Just a placeholder"
          type="text"
        />

        <Input
          id="input-05"
          label="Search with Icon and Clear Button"
          leftIconName="search"
          hasClearButton={ true }
          placeholder="Just a placeholder"
          type="text"
        />
      </div>
    );
  });
