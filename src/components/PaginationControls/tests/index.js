import React from 'react';
import { mount } from 'enzyme';

import PaginationControls from '../index';

describe('components/PaginationControls', () => {
  const goToPageStub = jest.fn();
  describe('with Buttons', () => {
    it('should render a default controls', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 5 }
          totalPages={ 10 }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('.oui-pagination-controls').exists()).toBe(true);
      expect(component.find('li').length).toBe(11);
    });

    it('should adjust slots when totalSlots is passed in', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 14 }
          totalPages={ 40 }
          totalSlots={ 11 }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('li').length).toBe(13);
    });

    it('should render properly when current page is in the middle', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 20 }
          totalPages={ 40 }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('li > span').length).toBe(2);
    });

    it('should render properly when current page is at the end', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 36 }
          totalPages={ 40 }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('li > span').length).toBe(1);
    });

    it('should render properly when current page is out of bounds', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 36 }
          totalPages={ 10 }
          goToPage={ goToPageStub }
        />
      );
      expect(
        component.find('button[aria-label="Page 10, current page"]').exists()
      ).toBe(true);
    });

    it('should render properly when number of pages is less than slots', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 5 }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('li').length).toBe(7);
    });

    it('should not render any anchors when an href url is not passed in', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 5 }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('li a').length).toBe(0);
    });

    it('should indicate the current page for screen readers', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 2 }
          totalPages={ 20 }
          totalSlots={ 11 }
          goToPage={ goToPageStub }
        />
      );
      expect(
        component.find('button[aria-label="Page 2, current page"]').exists()
      ).toBe(true);
    });

    it('should disable the previous button when currentPage is 1', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 20 }
          goToPage={ goToPageStub }
        />
      );

      expect(
        component
          .find('button[aria-label="Previous Page"]')
          .getDOMNode()
          .attributes.getNamedItem('disabled').value
      ).not.toBe(null);
    });

    it('should disable the next button then currentPage is last page', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 10 }
          totalPages={ 10 }
          goToPage={ goToPageStub }
        />
      );
      expect(
        component
          .find('button[aria-label="Previous Page"]')
          .getDOMNode()
          .attributes.getNamedItem('disabled')
      ).toBe(null);
      expect(
        component
          .find('button[aria-label="Next Page"]')
          .getDOMNode()
          .attributes.getNamedItem('disabled').value
      ).not.toBe(null);
    });

    it('should add a spinner and disable all links if isLoading is true', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 10 }
          isLoading={ true }
          goToPage={ goToPageStub }
        />
      );
      expect(component.find('button[disabled]').length).toBe(10);
      expect(component.find('.oui-spinner').exists()).toBe(true);
    });

    it('should call goToPage when link is clicked', () => {
      const goToPageSpy = jest.fn();
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 10 }
          goToPage={ goToPageSpy }
        />
      );
      component.find('button[aria-label="Page 2"]').simulate('click');

      expect(goToPageSpy).toHaveBeenCalled();
    });

    it('should not call goToPage when link is "clicked" but controls are loading', () => {
      const goToPageSpy = jest.fn();
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 10 }
          isLoading={ true }
          goToPage={ goToPageSpy }
        />
      );
      component.find('button[aria-label="Page 2"]').simulate('click');

      expect(goToPageSpy).not.toHaveBeenCalled();
    });
  });

  describe('with Links via href', () => {
    it('should accurately add page numbers when hrefBaseUrl is passed', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 10 }
          hrefBaseUrl="https://google.com/page-[pageNumber]"
        />
      );
      // One for the page 2 and one for the Next button
      expect(component.find('a[href="https://google.com/page-2"]').length).toBe(
        2
      );
      expect(component.find('a[href="https://google.com/page-7"]').length).toBe(
        1
      );
    });

    it('should throw a prop type error when hrefBaseUrl is passed without the proper string', () => {
      spyOn(console, 'error').and.stub();

      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 10 }
          hrefBaseUrl="https://google.com/page-[number]"
        />
      );
      expect(component.find('a[href="https://google.com/page-7"]').length).toBe(
        0
      );
      // eslint-disable-next-line no-console
      expect(console.error.calls.all()[0].args[0]).toContain(
        'Invalid prop \'hrefBaseUrl\' supplied to \'PaginationControls\'. Must contain the string \'[pageNumber]\''
      );
    });

    it('should not render any buttons when hrefBaseUrl is passed', () => {
      spyOn(console, 'error').and.stub();

      const component = mount(
        <PaginationControls
          currentPage={ 1 }
          totalPages={ 10 }
          hrefBaseUrl="https://google.com/page-[pageNumber]"
        />
      );
      expect(component.find('li > button').length).toBe(0);
    });

    it('should indicate the current page for screen readers', () => {
      const component = mount(
        <PaginationControls
          currentPage={ 2 }
          totalPages={ 20 }
          totalSlots={ 11 }
          hrefBaseUrl="https://google.com/page-[pageNumber]"
        />
      );
      expect(
        component.find('a[aria-label="Page 2, current page"]').exists()
      ).toBe(true);
    });
  });
});
