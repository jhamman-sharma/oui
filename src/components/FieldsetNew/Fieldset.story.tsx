import React from 'react';

import { storiesOf } from '@storybook/react';

import Fieldset from './index';
import Form from '../Form';
import Input from '../Input';
import DatePicker from '../DatePicker/DatePicker.js';

const stories = storiesOf('Fieldset', module);
stories
  .addDecorator(story => <div className="soft-quad--sides">{story()}</div>);

stories
  .add(
    'In a form', (() => (
      <div className="push-double--top">
        <Form>
          <Fieldset isRequired={true} title="Fieldset section" 
            description="The title of the fieldset will be considered the legend of the fieldset. The default of a Fieldset (titleSize='large') is visually comparable to a Form.Section. Fieldset should only be used if there are multiple inputs in the section that are linked (think address or credit card fields). If they are not closely linked, Form.Section is more appropriate.">
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Fieldset.Item>
            <Fieldset.Row>
              <Fieldset.Item>
                <DatePicker
                  inputId="date-picker-id"
                  initialDate={ null }
                  isFocused={ false }
                />
                <p>I appear after the calendar</p>
              </Fieldset.Item>
              <Fieldset.Item>
                <DatePicker
                  inputId="date-picker-id"
                  initialDate={ null }
                  isFocused={ false }
                />
                <p>I appear after the calendar</p>
              </Fieldset.Item>
            </Fieldset.Row>
            <Fieldset.Row fillWidth={true}>
              <Fieldset.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Fieldset.Item>
              <Fieldset.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Fieldset.Item>
            </Fieldset.Row>
          </Fieldset>
          <Form.Section title="Form section" description="All of the options to customize a Form.Section are also available on Fieldset.">
            <Form.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Form.Item>
            <Fieldset 
              titleSize='small' 
              title="Small fieldset title" 
              description="We're using a small title because this fieldset belongs in this section.">
              <Fieldset.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Fieldset.Item>
              <Fieldset.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Fieldset.Item>
            </Fieldset>
          </Form.Section>
        </Form>
      </div>
    ))
  )
  .add(
    'Standalone', (() => (
      <div className="push-double--top">
        <Fieldset isRequired={true} title="Fieldset section" 
          description="Fieldsets can also be used separately from Forms. However do consider using them in Forms for good practice.">
          <Fieldset.Item>
            <Input
              label="Input label"
              note="A short description or note about this field."
              placeholder="Just a placeholder"
              type="text"
            />
          </Fieldset.Item>
          <Fieldset.Row>
            <Fieldset.Item>
              <DatePicker
                inputId="date-picker-id"
                initialDate={ null }
                isFocused={ false }
              />
              <p>I appear after the calendar</p>
            </Fieldset.Item>
            <Fieldset.Item>
              <DatePicker
                inputId="date-picker-id"
                initialDate={ null }
                isFocused={ false }
              />
              <p>I appear after the calendar</p>
            </Fieldset.Item>
          </Fieldset.Row>
          <Fieldset.Row fillWidth={true}>
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Fieldset.Item>
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Fieldset.Item>
          </Fieldset.Row>
        </Fieldset>
      </div>
    ))
  );
