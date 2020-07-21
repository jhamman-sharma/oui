import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Dropdown from '../Dropdown';
import SearchPicker from './index.js';
import Spinner from '../Spinner';
import Icon from 'react-oui-icons';

import { getSearchFunction } from './mock_api';
import Row from '../Layout/Row';

const searchFunction = getSearchFunction();

const stories = storiesOf('Forms|SearchPicker', module);
stories.addDecorator(withKnobs).addDecorator((story) => (
  <div
    id="root-preview"
    style={{
      display: 'flex',
      flex: 1,
      height: '100vh',
    }}>
    {story()}
  </div>
));

stories
  .add('Default', () => {
    return (
      <SearchPicker
        onItemSelected={ action('keyboard selection item') }
        searchFunction={ searchFunction }
        supportedTypes={ ['feature'] }>
        {({
          availableEntities,
          renderInput,
          isLoading,
          searchQuery,
          currentFauxFocusIndex,
          resultsText,
        }) => (
          <Dropdown width={ 600 } fullWidth={ true } renderActivator={ renderInput }>
            <Dropdown.Contents minWidth={ 600 } isLoading={ isLoading }>
              <Dropdown.ListItem ignoreToggle={ true }>
                <span className="micro muted soft--sides">
                  {resultsText.summary}
                </span>
              </Dropdown.ListItem>
              {availableEntities.map((item, index) => (
                <Dropdown.ListItem key={ index }>
                  <Dropdown.BlockLink
                    hasFauxFocus={ currentFauxFocusIndex === index }
                    onClick={ action(`click dropdown block link ${item.name}`) }>
                    <Dropdown.BlockLinkText text={ item.name } />
                    <Dropdown.BlockLinkSecondaryText
                      secondaryText={ item.description }
                    />
                  </Dropdown.BlockLink>
                </Dropdown.ListItem>
              ))}
              {isLoading && <Spinner hasOverlay={ true } />}
            </Dropdown.Contents>
          </Dropdown>
        )}
      </SearchPicker>
    );
  })
  .add('With Create Button', () => {
    return (
      <SearchPicker
        onItemSelected={ action('keyboard selection item') }
        additionalItems={ 1 }
        searchFunction={ searchFunction }
        supportedTypes={ ['feature'] }>
        {({
          availableEntities,
          renderInput,
          isLoading,
          searchQuery,
          currentFauxFocusIndex,
          resultsText,
        }) => (
          <Dropdown width={ 600 } fullWidth={ true } renderActivator={ renderInput }>
            <Dropdown.Contents minWidth={ 600 } isLoading={ isLoading }>
              <Dropdown.ListItem>
                <Dropdown.BlockLink
                  hasFauxFocus={ currentFauxFocusIndex === 0 }
                  onClick={ action('click create dropdown block link') }>
                  <div className="flex flex-align--center">
                    Create new audience
                  </div>
                </Dropdown.BlockLink>
              </Dropdown.ListItem>
              <Dropdown.ListItem ignoreToggle={ true }>
                <span className="micro muted soft--sides">
                  {resultsText.summary}
                </span>
              </Dropdown.ListItem>
              {availableEntities.map((item, index) => (
                <Dropdown.ListItem key={ index }>
                  <Dropdown.BlockLink
                    hasFauxFocus={ currentFauxFocusIndex === index + 1 }
                    onClick={ action(`click dropdown block link ${item.name}`) }>
                    <Dropdown.BlockLinkText text={ item.name } />
                    <Dropdown.BlockLinkSecondaryText
                      secondaryText={ item.description }
                    />
                  </Dropdown.BlockLink>
                </Dropdown.ListItem>
              ))}
              {isLoading && <Spinner hasOverlay={ true } />}
            </Dropdown.Contents>
          </Dropdown>
        )}
      </SearchPicker>
    );
  })
  .add('In a Dropdown', () => {
    return (
      <Dropdown
        buttonContent="Selected Variation Name"
        arrowIcon="down"
        shouldHideChildrenOnClick={ false }
        style="outline">
        {({ handleHideChildren }) => (
          <Dropdown.Contents minWidth={ 600 } direction="right">
            <Dropdown.ListItem>
              <Dropdown.BlockLink
                hasFauxFocus={ false }
                onClick={ action('click create dropdown block link') }>
                <Row verticalAlignment="center" paddedContent="sides">
                  <Icon name="add" />
                  <p className="soft--left flush">Create new variation</p>
                </Row>
              </Dropdown.BlockLink>
            </Dropdown.ListItem>
            <SearchPicker
              onItemSelected={ action('keyboard selection item') }
              additionalItems={ 1 }
              searchFunction={ searchFunction }
              supportedTypes={ ['variation'] }>
              {({
                availableEntities,
                renderInput,
                isLoading,
                searchQuery,
                currentFauxFocusIndex,
                resultsText,
              }) => (
                <React.Fragment>
                  <Dropdown.ListItem>{renderInput()}</Dropdown.ListItem>
                  <Dropdown.ListItem ignoreToggle={ true }>
                    <span className="micro muted soft--sides">
                      {resultsText.summary}
                    </span>
                  </Dropdown.ListItem>
                  {availableEntities.map((item, index) => (
                    <Dropdown.ListItem key={ index }>
                      <Dropdown.BlockLink
                        hasFauxFocus={ currentFauxFocusIndex === index + 1 }
                        onClick={ action(
                          `click dropdown block link ${item.name}`
                        ) }>
                        <Dropdown.BlockLinkText text={ item.name } />
                        <Dropdown.BlockLinkSecondaryText
                          secondaryText={ item.description }
                        />
                      </Dropdown.BlockLink>
                    </Dropdown.ListItem>
                  ))}
                  {isLoading && <Spinner hasOverlay={ true } />}
                </React.Fragment>
              )}
            </SearchPicker>
          </Dropdown.Contents>
        )}
      </Dropdown>
    );
  });
