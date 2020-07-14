import React from 'react';

import { storiesOf } from '@storybook/react';

import Form from './index';
import Input from '../Input';
import DatePicker from '../DatePicker/DatePicker.js';

const stories = storiesOf('Form', module);
stories
  .addDecorator(story => <div className="soft-quad--sides">{story()}</div>);

stories
  .add(
    'Default', (() => (
      <div className="push-double--top">
        <Form title="Form title" description="This is the form description">
          <Form.Section isRequired={true} title="Form section">
            <Form.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Form.Item>
            <Form.Row>
              <Form.Item>
                <DatePicker
                  inputId="date-picker-id"
                  initialDate={ null }
                  isFocused={ false }
                />
                <p>I appear after the calendar</p>
              </Form.Item>
              <Form.Item>
                <DatePicker
                  inputId="date-picker-id"
                  initialDate={ null }
                  isFocused={ false }
                />
                <p>I appear after the calendar</p>
              </Form.Item>
            </Form.Row>
            <Form.Row fillWidth={true}>
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Form.Item>
            </Form.Row>
          </Form.Section>
          <Form.Section isOptional={true} helpIcon={true} popoverText="This is some helpful text" title="Form section" description="This is the section description">
            <Form.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Form.Item>
            <Form.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Form.Item>
          </Form.Section>
          <Form.Section title="Form section" description="This is the section description">
            <Form.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Form.Item>
          </Form.Section>
        </Form>
      </div>
    ))
  )
  .add(
    'Replicated "New A/B Test" form', (() => (
      <div className="push-double--top">
        <Form>
          <Form.Section title="Experiment Name">
            <Form.Item>
              <Input
                label="Add a name for your experiment"
                type="text"
              />
            </Form.Item>
          </Form.Section>
          <Form.Section title="Experiment Key">
            <Form.Item>
              <Input
                label="Use this to uniquely identify the experiment"
                type="text"
              />
            </Form.Item>
          </Form.Section>
          <Form.Section isOptional={true} title="Description">
            <Form.Item>
              <Input
                label="What is your experiment? State your hypothesis and notes here."
                type="text"
              />
            </Form.Item>
          </Form.Section>
        </Form>
      </div>
    ))
  );
