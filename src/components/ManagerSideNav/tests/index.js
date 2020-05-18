import React from 'react';
import { mount } from 'enzyme';
import ManagerSideNav from '..';
import Link from '../../Link';
import Switch from '../../Switch';

describe('ManagerSideNav', function() {
  it('should render a default nav', function() {
    let component = mount(
      <ManagerSideNav>
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          projectName="CTP Bank - Full Stack"
          primaryTitle="recurring_deposit"
          secondaryTitle="Recurring Deposit"
        />
        <ManagerSideNav.NavList label="Rules">
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link isFullWidth={ true } href="#variations">
                Variations
              </Link>
            }
          />
        </ManagerSideNav.NavList>
      </ManagerSideNav>
    );
    expect(component.find('.sidenav__body').length).toBe(1);
    expect(component.find('.sidenav__section').length).toBe(1);
    expect(component.find('.sidenav__section__title').length).toBe(1);

  });

  it('should not render a proper nav when correct children not supplied', function() {
    let component = mount(
      <ManagerSideNav>
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          projectName="CTP Bank - Full Stack"
          primaryTitle="recurring_deposit"
          secondaryTitle="Recurring Deposit"
        />
        <ManagerSideNav.NavItem
          isActive={ false }
          leftContent={
            <Link isFullWidth={ true } href="#variations">
              Variations
            </Link>
          }
        />
      </ManagerSideNav>
    );
    expect(component.find('.sidenav__body').length).toBe(1);
    expect(component.find('.sidenav__section').length).toBe(0);
    expect(component.find('.nav-list__link').length).toBe(0);

  });

  describe('Header', function() {
    it('should render a back link when hasBackLink is true', function() {
      let component = mount(
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          projectName="CTP Bank - Full Stack"
          primaryTitle="recurring_deposit"
          secondaryTitle="Recurring Deposit"
        />
      );

      expect(component.find('.nav-link--back').length).toBe(1);
    });

    it('should call the back link callback when link is clicked', function() {
      const backLinkClickSpy = jest.fn();

      let component = mount(
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          backLinkOnClick={ backLinkClickSpy }
          projectName="CTP Bank - Full Stack"
          primaryTitle="recurring_deposit"
          secondaryTitle="Recurring Deposit"
        />
      );
      component.find('.nav-link--back').simulate('click');
      expect(backLinkClickSpy).toHaveBeenCalled();
    });

    it('should style the title properly when usesMonospaceStyling is true', function() {
      const backLinkClickSpy = jest.fn();

      let component = mount(
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          backLinkOnClick={ backLinkClickSpy }
          usesMonospaceStyling={ true }
          projectName="CTP Bank - Full Stack"
          primaryTitle="recurring_deposit"
          secondaryTitle="Recurring Deposit"
        />
      );
      expect(component.find('.delta').length).toBe(1);
      expect(component.find('.monospace').length).toBe(1);
    });

    it('should render children for any details passed in', function() {
      let component = mount(
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          usesMonospaceStyling={ true }
          projectName="CTP Bank - Full Stack"
          primaryTitle="recurring_deposit"
          secondaryTitle="Recurring Deposit">
          <ManagerSideNav.HeaderDetails
            items={ [
              {
                label: 'Created by',
                value: 'Sophia Hernandez',
              },
              {
                label: 'Edited by',
                value: 'Sophia Hernandez',
              },
            ] }
          />
        </ManagerSideNav.Header>
      );
      expect(component.find('.sidenav__details').length).toBe(1);
      expect(component.find('.sidenav__details__title').length).toBe(2);
      expect(component.find('.sidenav__details__item').length).toBe(2);
    });
  });

  describe('NavItem', function() {
    it('should render left aligned content when leftContent is passed in', function() {
      let component = mount(
        <ManagerSideNav.NavItem
          isActive={ false }
          leftContent={
            <Link isFullWidth={ true } href="#variations">
              Variations
            </Link>
          }
        />
      );

      expect(component.find('.nav-list__link').length).toBe(1);
      expect(component.find('.link').length).toBe(1);
      expect(component.find('.is-active').length).toBe(0);
    });

    it('should render right aligned content when rightContent is passed in', function() {
      let component = mount(
        <ManagerSideNav.NavItem
          isActive={ false }
          testSection="dev-item"
          leftContent={
            <Link isFullWidth={ true } href="#long">
              <p className="flush line--tight">
                Another environment with a very long name
              </p>
              <p className="micro muted flush line--tight">Environment</p>
            </Link>
          }
          rightContent={
            <Switch
              ariaLabel="Turn feature on in Another Environment"
              elementId={ 'long-toggle' }
              checked={ false }
            />
          }
        />
      );

      expect(component.find('.link').length).toBe(1);
      expect(component.find('.oui-switch').length).toBe(1);
    });

    it('should render an active item when isActive is true', function() {
      let component = mount(
        <ManagerSideNav.NavItem
          isActive={ true }
          leftContent={
            <Link isFullWidth={ true } href="#variations">
              Variations
            </Link>
          }
        />
      );

      expect(component.find('.is-active').length).toBe(1);
    });

    it('should correctly trigger any actions within the content', function() {
      const linkClickSpy = jest.fn();
      let component = mount(
        <ManagerSideNav.NavItem
          isActive={ true }
          leftContent={
            <Link isFullWidth={ true } onClick={ linkClickSpy } href="#variations">
              Variations
            </Link>
          }
        />
      );

      component.find('.link').simulate('click');
      expect(linkClickSpy).toHaveBeenCalled();
    });
  });
});
