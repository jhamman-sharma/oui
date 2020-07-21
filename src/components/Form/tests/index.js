import React from 'react';
import { mount } from 'enzyme';
import Form from '../index';
import Input from '../../Input/index';

describe('Form Component ', () => {
  it('renders any children passed in', () => {
    const component = mount(<Form
      title='This is a Form'>
      <Form.Section>
        <Form.Item>
          <Input
            label="Input label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            testSection="input-1-form-test"
            type="text"
          />
        </Form.Item>
        <Form.Item>
          <Input
            label="Input label"
            note="A short description or note about this field."
            placeholder="Just a placeholder"
            testSection="input-2-form-test"
            type="text"
          />
        </Form.Item>
      </Form.Section>
    </Form>);
    expect(component.find('[data-test-section="input-1-form-test"]').length).toBe(1);
    expect(component.find('[data-test-section="input-2-form-test"]').length).toBe(1);
  });

  it('renders a description when passed in', () => {
    const descriptionString = 'This is a description';
    const component = mount(<Form
      title='This is a Form' description={ descriptionString }>
      <Form.Item>
        <Input
          label="Input label"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          testSection="input-1-form-test"
          type="text"
        />
      </Form.Item>
    </Form>);
    expect(component.find('.oui-form-fields').containsMatchingElement(<p>{descriptionString}</p>)).toBe(true);
  });

  it('should render a popover when helpIcon is clicked', () => {
    const popoverString = 'This is a popover string';
    const component = mount(<Form
      title='This is a Form' helpIcon={ true } popoverText={ popoverString }>
      <Form.Item>
        <Input
          label="Input label"
          note="A short description or note about this field."
          placeholder="Just a placeholder"
          testSection="input-1-form-test"
          type="text"
        />
      </Form.Item>
    </Form>);
    component
      .find('.oui-form-fields')
      .find('HelpPopover')
      .simulate('click');
    const popOverContent = component.find('Popover');
    expect(popOverContent.length).toBe(1);
    expect(popOverContent.text()).toContain(popoverString);
  });

  describe('Form section', () => {
    it('renders a description when passed in', () => {
      const descriptionString = 'This is a section description';
      const component = mount(<Form>
        <Form.Section testSection='section-test-section' title='This is a section' description={ descriptionString }>
          <Form.Item>
            <Input
              label="Input label"
              note="A short description or note about this field."
              placeholder="Just a placeholder"
              testSection="input-1-form-test"
              type="text"
            />
          </Form.Item>
        </Form.Section>
      </Form>);
      expect(
        component
          .find('[data-test-section="section-test-section"]')
          .containsMatchingElement(<div>{descriptionString}</div>)
      ).toBe(true);
    });

    it('should render a popover when helpIcon is clicked', () => {
      const popoverString = 'This is a popover string';
      const component = mount(<Form
        title='This is a Form' >
        <Form.Section
          testSection='section-test-section'
          title='This is a section'
          helpIcon={ true }
          popoverText={ popoverString }>
          <Form.Item>
            <Input
              label="Input label"
              note="A short description or note about this field."
              placeholder="Just a placeholder"
              testSection="input-1-form-test"
              type="text"
            />
          </Form.Item>
        </Form.Section>
      </Form>);
      component
        .find('[data-test-section="section-test-section"]')
        .find('HelpPopover')
        .simulate('click');
      const popOverContent = component.find('Popover');
      expect(popOverContent.length).toBe(1);
      expect(popOverContent.text()).toContain(popoverString);
    });

    describe('Form row', () => {
      it('renders any children passed in', () => {
        const component = mount(<Form
          title='This is a Form'>
          <Form.Section>
            <Form.Row testSection='row-test-section' >
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  testSection="input-1-form-test"
                  type="text"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  testSection="input-2-form-test"
                  type="text"
                />
              </Form.Item>
            </Form.Row>
          </Form.Section>
        </Form>);
        expect(component.find('[data-test-section="input-1-form-test"]').length).toBe(1);
        expect(component.find('[data-test-section="input-2-form-test"]').length).toBe(1);
      });

      it('takes up full width when isFullWidth is true', () => {
        const component = mount(<Form
          title='This is a Form'>
          <Form.Section>
            <Form.Row isFullWidth={ true } testSection='row-test-section' >
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  testSection="input-1-form-test"
                  type="text"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  testSection="input-2-form-test"
                  type="text"
                />
              </Form.Item>
            </Form.Row>
          </Form.Section>
        </Form>);
        expect(component
          .find('[data-test-section="row-test-section"]')
          .find('.flex--1').length).toBe(2);
      });
    });
  });
});
