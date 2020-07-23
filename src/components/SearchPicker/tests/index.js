import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

import { getSearchFunction } from '../mock_api';
import MOCK_DATA from '../mock_api/mock_data';

import SearchPicker from '../';

const MOCK_API_DELAY = 100;

const searchFunction = getSearchFunction(MOCK_API_DELAY);

const getDelayedPromise = (delay = 0) => new Promise(r => setTimeout(r, delay));


describe('components/SearchPicker', () => {
  let component;
  let renderedData;
  let onItemSelectedStub;

  describe('default case', () => {
    beforeEach(() => {
      onItemSelectedStub = jest.fn();
      component = mount(
        <SearchPicker
          onItemSelected={ onItemSelectedStub }
          searchFunction={ searchFunction }
          supportedTypes={ ['feature'] }>
          {(data) => {
            renderedData = data;
            return (
              <div>
                {data.renderInput()}
                <p>A list of entities</p>
              </div>
            );
          }}
        </SearchPicker>
      );
    });

    it('should render component same as snapshot', () => {
      expect(mountToJson(component)).toMatchSnapshot();
    });

    it('should pass a default list of items on creation', () => {
      return getDelayedPromise().then(() => {
        component.find('input').simulate('click');
      })
        .then(() => getDelayedPromise(MOCK_API_DELAY))
        .then(() => {
          component.update();
          expect(renderedData.availableEntities).toHaveLength(5);
        });
    });

    it('should update the list when a search term is entered', () => {
      return getDelayedPromise().then(() => {
        component.find('input').simulate('mouseenter');
        component.find('input').simulate('click');
        component.find('input').simulate('change', { target: { value: '123' }});
      })
        // Account for our mock API delay and the debounce delay
        .then(() => getDelayedPromise(MOCK_API_DELAY + 10))
        .then(() => {
          component.update();
          expect(renderedData.availableEntities).toHaveLength(1);
          expect(renderedData.availableEntities[0].name).toContain('My feature 123');
        });
    });

    it('should pass isLoading, searchQuery, and availableEntities correctly', () => {
      expect(renderedData.isLoading).toBe(true);
      return getDelayedPromise(MOCK_API_DELAY).then(() => {
        expect(renderedData.searchQuery).toBe('');
        expect(renderedData.isLoading).toBe(false);
        component.find('input').simulate('mouseenter');
        component.find('input').simulate('click');
        component.find('input').simulate('change', { target: { value: '123' }});
      })
        // Wait for debounce
        .then(() => getDelayedPromise(10))
        .then(() => {
          expect(renderedData.searchQuery).toBe('123');
          expect(renderedData.isLoading).toBe(true);
        })
        // Account for our mock API delay and the debounce delay
        .then(() => getDelayedPromise(MOCK_API_DELAY + 10))
        .then(() => {
          component.update();
          expect(renderedData.isLoading).toBe(false);
          expect(renderedData.availableEntities).toEqual([MOCK_DATA[0]]);
        });
    });
    it('should wait to show results until all queries are completed', function() {
      expect(renderedData.isLoading).toBe(true);
      return getDelayedPromise(MOCK_API_DELAY).then(() => {
        expect(renderedData.resultsText).toEqual({summary: 'Recently created features'});
        component.find('input').simulate('mouseenter');
        component.find('input').simulate('click');
        component.find('input').simulate('change', { target: { value: '123' }});
      })
        // Wait for debounce
        .then(() => getDelayedPromise(10))
        .then(() => {
          expect(renderedData.searchQuery).toBe('123');
          expect(renderedData.isLoading).toBe(true);
          component.update();
          expect(renderedData.resultsText).toEqual({summary: 'Searching for "features" matching "123"'});
          component.find('input').simulate('mouseenter');
          component.find('input').simulate('click');
          component.find('input').simulate('change', { target: { value: '202' }});
        })
        .then(() => getDelayedPromise(MOCK_API_DELAY))
        .then(() => {
          component.update();
          expect(renderedData.resultsText).toEqual({summary: 'Searching for "features" matching "202"'});
        })
        // Account for our mock API delay and the debounce delay
        .then(() => getDelayedPromise(MOCK_API_DELAY + 10))
        .then(() => {
          component.update();
          expect(renderedData.isLoading).toBe(false);
          expect(renderedData.resultsText).toEqual({summary: 'Found 1 features matching "202"'});
        });
    });
    it('should render the number of available entities in the results text', function() {
      // We need to pass in selected entities to properly test this
      component.setProps({ selectedEntityIds: [202, 205, 207] });
      component.update();
      component.find('input').simulate('mouseenter');
      component.find('input').simulate('click');
      component.find('input').simulate('change', { target: { value: 'audience 20' }});
      return getDelayedPromise(MOCK_API_DELAY + 10).then(() => {
        component.update();
        expect(renderedData.resultsText).toEqual({summary: 'Found 4 features matching "audience 20"'});
      });
    });
  });

  describe('searchFunction responses', () => {
    it('should update state when an Array is returned from searchFunction', () => {
      onItemSelectedStub = jest.fn();
      const allGoodSearchFn = jest.fn(() => new Promise(resolve => resolve([
        {
          id: 123,
          name: 'My feature 123',
          type: 'feature',
          description: 'A very cool feature',
        },
      ])));
      component = mount(
        <SearchPicker
          onItemSelected={ onItemSelectedStub }
          searchFunction={ allGoodSearchFn }
          supportedTypes={ ['feature'] }>
          {(data) => {
            renderedData = data;
            return (
              <div>
                {data.renderInput()}
                <p>A list of entities</p>
              </div>
            );
          }}
        </SearchPicker>
      );
      return allGoodSearchFn().then(() => {
        const defaultResultsState = component.children().instance().state.defaultResults;
        expect(defaultResultsState).toEqual([
          {
            id: 123,
            name: 'My feature 123',
            type: 'feature',
            description: 'A very cool feature',
          },
        ]);
      });
    });
    it('should not update state when an object is returned from searchFunction', () => {
      onItemSelectedStub = jest.fn();
      const notGoodSearchFn = jest.fn((() => new Promise(resolve => resolve({}))));
      component = mount(
        <SearchPicker
          onItemSelected={ onItemSelectedStub }
          searchFunction={ notGoodSearchFn }
          supportedTypes={ ['feature'] }>
          {(data) => {
            renderedData = data;
            return (
              <div>
                {data.renderInput()}
                <p>A list of entities</p>
              </div>
            );
          }}
        </SearchPicker>
      );
      return notGoodSearchFn().then(() => {
        const defaultResultsState = component.children().instance().state.defaultResults;
        expect(defaultResultsState).toEqual([]);
      });
    });
    it('should not update state when undefined is returned from searchFunction', () => {
      onItemSelectedStub = jest.fn();
      const notGoodSearchFn = jest.fn((() => new Promise(resolve => resolve(undefined))));
      component = mount(
        <SearchPicker
          onItemSelected={ onItemSelectedStub }
          searchFunction={ notGoodSearchFn }
          supportedTypes={ ['feature'] }>
          {(data) => {
            renderedData = data;
            return (
              <div>
                {data.renderInput()}
                <p>A list of entities</p>
              </div>
            );
          }}
        </SearchPicker>
      );
      return notGoodSearchFn().then(() => {
        const defaultResultsState = component.children().instance().state.defaultResults;
        expect(defaultResultsState).toEqual([]);
      });
    });
  });
});
