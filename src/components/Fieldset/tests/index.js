import React from 'react';
import { mount } from 'enzyme';
import Form from '../../Form/index';
import Input from '../../Input/index';
import Fieldset from '../index';

describe('Fieldset Component ', () => {
  it('renders any children passed in', () => {
    const component = mount(<Form>
      <Fieldset>
        <Fieldset.Item>
          <Input
            label="Input label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            testSection="input-1-fieldset-test"
            type="text"
          />
        </Fieldset.Item>
        <Fieldset.Item>
          <Input
            label="Input label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            testSection="input-2-fieldset-test"
            type="text"
          />
        </Fieldset.Item>
      </Fieldset>
    </Form>);
    expect(component.find('[data-test-section="input-1-fieldset-test"]').length).toBe(1);
    expect(component.find('[data-test-section="input-2-fieldset-test"]').length).toBe(1);
  });

  it('renders a description when passed in', () => {
    const descriptionString = 'This is a description';
    const component = mount(<Fieldset
      testSection="fieldset-test" title='This is a Form' description={ descriptionString }>
      <Fieldset.Item>
        <Input
          label="Input label"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          testSection="input-1-fieldset-test"
          type="text"
        />
      </Fieldset.Item>
    </Fieldset>);
    expect(component
      .find('[data-test-section="fieldset-test"]')
      .containsMatchingElement(<div>{descriptionString}</div>)).toBe(true);
  });

  it('should render a popover when helpIcon is clicked', () => {
    const popoverString = 'This is a popover string';
    const component = mount(<Fieldset
      title='This is a Fieldset' testSection="fieldset-test" helpIcon={ true } popoverText={ popoverString }>
      <Fieldset.Item>
        <Input
          label="Input label"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          testSection="input-1-fieldset-test"
          type="text"
        />
      </Fieldset.Item>
    </Fieldset>);
    component
      .find('[data-test-section="fieldset-test"]')
      .find('HelpPopover')
      .simulate('click');
    const popOverContent = component.find('Popover');
    expect(popOverContent.length).toBe(1);
    expect(popOverContent.text()).toContain(popoverString);
  });

  describe('Fieldset row', () => {
    it('renders any children passed in', () => {
      const component = mount(<Form
        title='This is a Form'>
        <Fieldset>
          <Fieldset.Row testSection='row-test-section' >
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                testSection="input-1-fieldset-test"
                type="text"
              />
            </Fieldset.Item>
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                testSection="input-2-fieldset-test"
                type="text"
              />
            </Fieldset.Item>
          </Fieldset.Row>
        </Fieldset>
      </Form>);
      expect(component.find('[data-test-section="input-1-fieldset-test"]').length).toBe(1);
      expect(component.find('[data-test-section="input-2-fieldset-test"]').length).toBe(1);
    });

    it('takes up full width when fillWidth is true', () => {
      const component = mount(<Form
        title='This is a Form'>
        <Fieldset>
          <Fieldset.Row fillWidth={ true } testSection='row-test-section' >
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                testSection="input-1-fieldset-test"
                type="text"
              />
            </Fieldset.Item>
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                testSection="input-2-fieldset-test"
                type="text"
              />
            </Fieldset.Item>
          </Fieldset.Row>
        </Fieldset>
      </Form>);
      expect(component
        .find('[data-test-section="row-test-section"]')
        .find('.flex--1').length).toBe(2);
    });
  });
});

