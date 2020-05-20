import React from 'react';
import { mount } from 'enzyme';

import Col from '../Col';
import Row from '../Row';

// npx yarn jest ./src/components/Layout/

describe('component/Layout/Col', function() {
  it('should only render a single tests-section per Col component', function() {
    const component = mount(
      <Row data-test-section="selected-audiences" removeGutters={ true }>
        <Col small="fillSpace">hello</Col>
        <Col small="fillSpace">hello</Col>
        <Col small="fillSpace">hello</Col>
        <Col small="fillSpace">hello</Col>
      </Row>
    );
    console.log(component.html());
  });
});
