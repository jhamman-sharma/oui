import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Token from '../Token';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import NavBar from '../NavBar';
import Attention from '../Attention';
import Spinner from '../Spinner';
import Tile from '../Tile';
import Radio from '../Radio';

const openLogoUrl =
  'https://app.optimizely.com/dist/static/img/rebrand/logo-f64d2aed989db744b609666199d7d2a2.svg';

type ExampleState = {
  nubbinPointingRef: HTMLDivElement | HTMLElement | null;
};

class ConfigPanelExample extends React.Component<{}, ExampleState> {
  pointingRef: React.RefObject<HTMLDivElement>;
  tileRef: React.RefObject<HTMLDivElement>;
  rowPointingRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    // 1) Create the reference here.
    this.pointingRef = React.createRef<HTMLDivElement>();
    this.tileRef = React.createRef<HTMLDivElement>();
    this.rowPointingRef = React.createRef<HTMLDivElement>();
    this.state = { nubbinPointingRef: null };
  }

  componentDidMount() {
    // 2) Use the ref to store the node in state
    this.setState({ nubbinPointingRef: this.tileRef.current });
  }

  switchRef(target: string) {
    if (target === 'dragAndDrop') {
      this.setState({ nubbinPointingRef: this.pointingRef.current });
    } else if (target === 'tile') {
      this.setState({ nubbinPointingRef: this.tileRef.current });
    } else {
      this.setState({ nubbinPointingRef: this.rowPointingRef.current });
    }
  }

  render() {
    return (
      <div style={{ height: '500px', width: '100%' }}>
        <Container fluid={true} isFullHeight={true}>
          <Row>
            <Col
              // 4) Pass ref to Col with nubbinRef
              nubbinRef={this.state.nubbinPointingRef}
              hasNubbin={true}
              small={6}
              overflow="overflow-y--auto"
            >
              <div
                style={{ height: '800px' }}
                className="soft-double overflow-y--auto"
              >
                <h3>Rules</h3>
                <div className="push-double--bottom">
                  <p>Make the Nubbin point to:</p>
                  <Radio
                    name="nubbin"
                    onChange={this.switchRef.bind(this, 'tile')}
                    label="the Tile"
                    defaultChecked={true}
                  />
                  <Radio
                    name="nubbin"
                    onChange={this.switchRef.bind(this, 'dragAndDrop')}
                    label="the DragAndDrop area"
                  />
                  <Radio
                    name="nubbin"
                    onChange={this.switchRef.bind(this, 'row')}
                    label="the Row"
                  />
                </div>

                <Row
                  paddedContent="around"
                  border="all"
                  rowRef={this.rowPointingRef}
                >
                  <div style={{ height: '50px' }}>Could point here</div>
                </Row>
                <div className="flex flex--column push-double--top" ref={this.pointingRef}>
                  <Token
                    isDraggable={true}
                    name={'This is option 1 for reordering'}
                    order={1}
                    showWell={false}
                  />
                  <Token
                    isDraggable={true}
                    name={'This is option 2 for reordering'}
                    order={2}
                    showWell={false}
                  />
                  <Token
                    isDraggable={true}
                    name={'This is option 3 for reordering'}
                    order={3}
                    showWell={false}
                  />
                </div>
                <div className="push-double--top">
                  The nubbin should point in the middle of this Tile:
                  <Tile
                    // 3) Assign ref to element you want nubbin pointing to
                    tileRef={this.tileRef}
                    name="Alpha"
                    description="ID: 123456"
                  />
                </div>
                <p> Scroll me to see the nubbin move</p>
              </div>
              <div>Hi! 🐶</div>
            </Col>
            <Col
              paddedContent="remove"
              overflow="overflow-y--auto"
              small={6}
              hasShadow={true}
            >
              <div
                className="soft-double background--light"
                style={{ height: '800px' }}
              >
                <h3>Rule Configuration</h3>
                <p> I scroll too </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const storiesForTemplates = storiesOf('LayoutKit/Templates', module);
storiesForTemplates
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

storiesForTemplates
  .add('Config Panel', () => {
    return (
      <React.Fragment>
        <div className="push-double--bottom">
          <Attention type="brand">
            Use a ref passed to Col to place the nubbin properly with hasNubbin
          </Attention>
        </div>
        <ConfigPanelExample />
      </React.Fragment>
    );
  })
  .add('Entire App Frame', () => {
    return (
      <Container
        outlineDebug={boolean('outlineDebug', true)}
        pushRowsTop={boolean('pushRowsTop', true)}
        paddedContent={text('paddedContent', 'none')}
        fluid={boolean('fluid', true)}
      >
        <Row removeGutters={boolean('gutters', false)} shouldWrap={false}>
          <Col small={'fitContent'}>
            <NavBar
              isOpen={true}
              logoUrl={openLogoUrl}
              title="Test Project"
              badgeText="WEB"
              homeUrl="http://optimizely.com"
              trialContent={
                <div className="push-double--bottom push-double--left truncate">
                  {boolean('isOpen', true) && '5 days left in your trial'}
                </div>
              }
            >
              <NavBar.PrimaryLink
                iconName="projects"
                type="pushstate"
                linkLabel="Projects"
                testSection="projects"
              />
              <NavBar.PrimaryLink
                iconName="experiment"
                type="link"
                linkLabel="Experiment"
                testSection="experiment"
                isActive={true}
              />
              <NavBar.PrimaryLink
                iconName="rollouts"
                type="link"
                linkLabel="Features"
                testSection="features"
              />
              <NavBar.PrimaryLink
                iconName="audiences"
                type="link"
                linkLabel="Audiences"
                testSection="audiences"
              />
              <NavBar.PrimaryLink
                iconName="events"
                type="button"
                linkLabel="Events"
                testSection="events"
              />
              <NavBar.PrimaryLink
                iconName="settings"
                type="link"
                linkLabel="Settings"
                testSection="settings"
              />
              <NavBar.PrimaryLink
                iconName="getting-started"
                type="pushstate"
                linkLabel="Getting Started"
                testSection="getting-started"
                hasSeparator={true}
              />
              <NavBar.SecondaryLink
                iconName="program-management"
                type="button"
                linkLabel="Program Management"
                testSection="program-management"
              />
              <NavBar.SecondaryLink
                iconName="help"
                type="link"
                linkLabel="Help"
                testSection="help"
              />
              <NavBar.SecondaryLink
                iconName="feedback"
                type="link"
                linkLabel="Feedback"
                testSection="feedback"
              />
              <NavBar.CurrentUserMenu
                showEmulate={boolean('showEmulate', true)}
                onEmulateClick={action('onEmulateClick')}
                accountSwitcherItems={[
                  {
                    text: 'Account 1',
                    url: '#',
                    description: 'Account 1 Description',
                    isCurrent: false,
                  },
                  {
                    text: 'Account 3',
                    url: '#',
                    description: 'Account 3 Description',
                    isCurrent: false,
                  },
                  {
                    text: 'Account 2',
                    url: '#',
                    description: 'Account 2 Description',
                    isCurrent: true,
                  },
                ]}
                accountSwitcherHandler={action('accountSwitcherHandler')}
                userName="Hassan Khalid"
                accountSettingsUrl="#"
                profileUrl="#"
                logoutUrl="#"
                profileAvatarUrl={text(
                  'profileAvatarUrl',
                  'https://optimizely-profile-images-devel.s3.amazonaws.com/img/user/hassan.khalid%40optimizely.com/c57517e7ee4941d0a5e71f3d89df0c0d.jpg'
                )}
              />
            </NavBar>
          </Col>
          <Col small={'fitContent'}>
            <div style={{ width: '285px' }}>Tabs/Header</div>
          </Col>
          <Col small={'fillSpace'} isReadingColumn={true}>
            <div>Stage (using isReadingColumn on the Col)</div>
          </Col>
        </Row>
      </Container>
    );
  })
  .add('Spinner', () => {
    return (
      <div style={{ height: '550px' }}>
        <Container
          isFullHeight={true}
          outlineDebug={boolean('outlineDebug', true)}
        >
          <Row verticalAlignment="center">
            <Col>
              <Spinner hasOverlay={true} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
