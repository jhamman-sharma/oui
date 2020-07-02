import React from 'react';
import SummaryBar from '../index';
import { shallow, mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';


const basicColumns = [
  {
    header: 'Overall Conversion Rate',
    bodyContent: {
      value: '10,795',
      color: 'red',
      isNumber: true,
    },
  },
  {
    header: 'Test header',
    bodyContent: {
      value: 'Test content',
      color: 'black',
      isNumber: false,
    },
  },
  {
    header: 'Overall Conversion Rate',
    bodyContent: {
      value: '+33pp +6p',
      color: 'green',
      isNumber: true,
    },
  },
  {
    header: 'Rate',
    bodyContent: {
      value: 'Increase in unique conversions per visitor for Register Button event',
      color: 'black',
      isNumber: false,
    },
  },
];

const tooManyColumns = [
  {
    header: 'Overall Conversion Rate',
    bodyContent: {
      value: '10,795',
      color: 'red',
      isNumber: true,
    },
  },
  {
    header: 'Test header',
    bodyContent: {
      value: 'Test content',
      color: 'black',
      isNumber: false,
    },
  },
  {
    header: 'Overall Conversion Rate',
    bodyContent: {
      value: '+33pp +6p',
      color: 'green',
      isNumber: true,
    },
  },
  {
    header: 'Rate',
    bodyContent: {
      value: 'Increase in unique conversions per visitor for Register Button event',
      color: 'black',
      isNumber: false,
    },
  },
  {
    header: 'Overall Conversion Rate',
    bodyContent: {
      value: '+33pp +6p',
      color: 'green',
      isNumber: true,
    },
  },
  {
    header: 'Rate',
    bodyContent: {
      value: 'Increase in unique conversions per visitor for Register Button event',
      color: 'black',
      isNumber: false,
    },
  },
];

const popOverColumns = [
  {
    header: 'Overall Conversion Rate',
    bodyContent: {
      value: '10,795',
      color: 'red',
      isNumber: true,
      headerHelpTooltip: 'Test tooltip content',
    },
    headerHelpTooltip: 'Test tooltip header',
  },
  {
    header: 'Test header',
    bodyContent: {
      value: 'Test content',
      color: 'black',
      isNumber: false,
    },
  },
];

describe('components/SummaryBar', () => {
  it('should render correctly', () => {
    const component = mount(
      <SummaryBar testSection={ 'summary-bar-test' } columns={ basicColumns } title={ 'Test bar' } />
    );
    expect(
      component
        .find('[data-test-section="summary-bar-test"]')
        .find('div[data-test-section="summary-bar-test-col-1-header"]')
        .text()).toBe('Test header');
    expect(
      component
        .find('[data-test-section="summary-bar-test"]')
        .find('div[data-test-section="summary-bar-test-col-1-content"]')
        .text()).toBe('Test content');
  });
  it('should not render over 5 columns', () => {
    const component = shallow(
      <SummaryBar testSection={ 'summary-bar-test' } columns={ tooManyColumns } title={ 'Test bar' } />
    );
    expect(
      component
        .find('[data-test-section="summary-bar-test"]')
        .find('[data-test-section="summary-bar-test-col-5-header"]')
        .exists()).toBeFalsy();
    expect(
      component
        .find('[data-test-section="summary-bar-test"]')
        .find('[data-test-section="summary-bar-test-col-5-content"]')
        .exists()).toBeFalsy();
  });
  it('should render a popover when tooltip is clicked', () => {
    const component = mount(
      <SummaryBar testSection={ 'summary-bar-test' } columns={ popOverColumns } title={ 'Test bar' } />
    );
    component
      .find('[data-test-section="summary-bar-test"]')
      .find('[data-test-section="summary-bar-test-col-0-header"]')
      .find('HelpPopover')
      .simulate('click');
    const popOverContent = component.find('Popover');
    expect(popOverContent.length).toBe(1);
    expect(popOverContent.text()).toContain('Test tooltip header');
  });
});
