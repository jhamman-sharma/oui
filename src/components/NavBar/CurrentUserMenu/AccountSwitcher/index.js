/**
 * Switch Accounts with in the user
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Badge from '../../../Badge';
import BlockList from '../../../BlockList';

const AccountSwitcher = (props) => {
  const {
    accountSwitcherItems,
    accountSwitcherHandler,
  } = props;
  return accountSwitcherItems.map(account => {
    function onAccountSelect() {
      accountSwitcherHandler(account);
    }

    return (
      <BlockList.Category
        key={ account.text }
        testSection="switch-account-row">
        <BlockList.Item
          href={ `${!account.isCurrent ? account.url : ''}` }
          onClick={ !account.isCurrent && onAccountSelect }>
          <div
            className={ classNames({
              'color--base': account.isCurrent,
              'color--brand': !account.isCurrent,
            }) }>
            { account.text }
          </div>
          <div className="micro muted">
            { account.description }
          </div>
          { account.isCurrent && (
            <Badge color="primary">
              CURRENT ACCOUNT
            </Badge>
          ) }
        </BlockList.Item>
      </BlockList.Category>
    );
  });
};

AccountSwitcher.propTypes = {
  /** Function Called to Switch Account */
  accountSwitcherHandler: PropTypes.func.isRequired,
  /* User account list */
  accountSwitcherItems: PropTypes.array.isRequired,
};

export default AccountSwitcher;
