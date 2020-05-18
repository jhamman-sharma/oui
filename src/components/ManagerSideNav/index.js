import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import NavList from './NavList';
import NavItem from './NavItem';
import HeaderDetails from './HeaderDetails';


const ManagerSideNav = (props) => {
  const { testSection, children } = props;

  const renderChildrenByType = ComponentType =>
    React.Children
      .toArray(children)
      .filter(child => child.type === ComponentType)
      .map(element => React.cloneElement(element));

  return (
    <div
      data-ui-component={ true }
      data-test-section={ testSection }
      className={ 'oui-manager-side-nav stage__item__content--column' }>
      { renderChildrenByType(Header) }
      <div className="sidenav__body">
        { renderChildrenByType(NavList) }
      </div>
    </div>
  );
};

ManagerSideNav.propTypes = {
  // eslint-disable-next-line valid-jsdoc
  /* Allowed children are ManagerSideNav's Header and NavList*/
  children: (props, propName) => {
    const prop = props[propName];
    let error = null;
    React.Children.forEach(prop, (child) => {
      if (child === null) {
        return;
      }
      if (![Header, NavList].includes(child.type)) {
        error = new Error('Children of ManagerSideNav should be of type Header or NavList.');
      }
    });
    return error;
  },
  /** Value used for testing via data-test-section attribute */
  testSection: PropTypes.string,
};

ManagerSideNav.defaultProps = {
  testSection: '',
};

ManagerSideNav.Header = Header;
ManagerSideNav.HeaderDetails = HeaderDetails;
ManagerSideNav.NavList = NavList;
ManagerSideNav.NavItem = NavItem;

export default ManagerSideNav;
