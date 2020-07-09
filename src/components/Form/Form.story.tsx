import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import noop from 'lodash.noop';
import { action } from '@storybook/addon-actions';

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
          <Form.Section title="Form section">
            <Form.Item>
              <Input
                label="Field label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
              />
            </Form.Item>
            <Form.Row>
              <Form.Item>
                <Input
                  label="Field label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  label="Field label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                />
              </Form.Item>
            </Form.Row>
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
          </Form.Section>
          <Form.Section title="Form section" description="This is the section description">
            <Input
              label="Field label"
              note="A short description or note about this field."
              placeholder="Just a placeholder"
              type="text"
            />
            <Input
              label="Field label"
              note="A short description or note about this field."
              placeholder="Just a placeholder"
              type="text"
            />
          </Form.Section>
        </Form>
      </div>
    ))
  );
