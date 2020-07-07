import React from 'react';

import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Code from "../../src/components/Code/index";
import Button from "../../src/components/Button/index";
import ButtonRow from "../../src/components/ButtonRow/index";
import Col from "../../src/components/Layout/Col";
import Row from "../../src/components/Layout/Row";
import Container from "../../src/components/Layout/Container";

export class Typography extends React.Component {
  state = {
    flexTab: 'size',
  };

  switchFlexDirection = tab => {
    this.setState({flexTab: tab});
    }

  render() {
      const {flexTab} = this.state;
        let flexDirectionClassnames = classNames(
            'demo-only-helper-box-container',
            'demo-only-helper-box-container--width-container',
            'flex',
            `flex--${flexTab}`,
        ); 
    return (
        <section className="demo-only-section hard--top flex flex--column">
            <h1>Typography</h1>
            <div className="push--bottom">
                <TabNav activeTab={flexTab} style={['sub']}>
                    <TabNav.Tab onClick={() => this.switchFlexDirection('size')} tabId="size">
                        Size
                    </TabNav.Tab> 
                    <TabNav.Tab onClick={() => this.switchFlexDirection('column')} tabId="column">
                        flex--column
                    </TabNav.Tab> 
                </TabNav>
            </div>
            <div className="flex flex--row">
                <div className="flex--1">
                <Container pushRowsTop={true}>
                    <Row>
                        <Col alignSelf="center">
                            <code>giga</code>
                        </Col>
                        <Col alignSelf="end">
                            <div className="giga">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col alignSelf="center">
                            <code>mega</code>
                        </Col>
                        <Col alignSelf="end">
                            <div className="mega">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col alignSelf="center">
                            <code>kilo</code>
                        </Col>
                        <Col alignSelf="end">
                            <div className="kilo">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">h1, alpha</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end alpha">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">h2, beta</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end beta">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">h3, gamma</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end gamma">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">h4, delta</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end delta">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">h5, epsilon</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end epsilon">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col alignSelf="end">
                            <code>h6, zeta</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end zeta">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">milli</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end milli">Typography</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <code className="flex-self--end">micro</code>
                        </Col>
                        <Col>
                            <div className="flex-self--end micro">Typography</div>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className="demo-only-typography-container">
                        Stuff here
                </div>
            </div>
            </section>
    );
  }
}

