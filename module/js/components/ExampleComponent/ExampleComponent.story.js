import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, number, boolean as _boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import Input from '../Input';
import ExampleComponent from './index.js';
/**
 * This is a clone of the contents of README.md,
 * temporarily inlined due to Storybook Issue #3458 (see below)
 *
 * TODO(https://github.com/storybooks/storybook/issues/3458) Remove and use imported README.md #3458 is released and we've updated
 * TODO(https://github.com/storybooks/storybook/issues/4499) Find a way to improve markdown formatting in the "Show Info" section
 */

/* eslint-disable max-len */

var infoAddonConfig = {
  header: false,
  text: "\n# ExampleComponent\n.\n### ABOUT:\nThe ExampleComponent, while not actually exported, serves as a reference for how to create or update components. Every component should include the following:\n.\n-- index.js\n-- ComponentName.story.js\n-- README.mkd\n.\nAditionally, subcomponents or an `index.scss` file can be added to the component and imported in `src/oui/_oui-partials.scss` (please use existing OUI classes when possible and consult UI Eng when adding styles is absolutely necessary).\n.\n### Composition vs Inheritance\n\nAs mentioned in the [docs](https://reactjs.org/docs/composition-vs-inheritance.html), React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components. As you create components and try out new patterns, consider linking to those in this file.\n.\n### Adopt Storybook Driven Development\nStorybook is the best way to learn about, play with, prototype, and build OUI components. Storybook runs locally and will watch for component and documentation updates. Visit http://storybooks-official.netlify.com/ for inspiration on all that is possible!\n.\nEvery component should contain a README, prop definitions, and a robust set of Storybook examples (stories). This will allow for quicker adoption and help Storybook to serve as the best hub for OUI technical documentation. **If you create or update a component, it shouldn't be considered finished until you've completed the following:**\n.\n-- Run Storybook and watch assets via `yarn storybook`\n-- Copy or reference the format of this [ExampleComponent](./data/components/ExampleComponent) to ensure your component's README and stories are set up correctly\n-- Include accurate `propType` configurations and comments, as well as `defaultProps` if applicable (these details are pulled into the _show info_ section)\n-- Add README.md with component usage information and implementation tips (see note below)\n.\n>Note: until Storybook Issues [#3458](https://github.com/storybooks/storybook/issues/3458) and [#4499](https://github.com/storybooks/storybook/issues/4499) are resolved, each component README should be added in your **_*.story.js** file. Additionally using double-spaces at the end of each line and a period + double-space for line breaks will help make the files more readable.\n"
};
storiesOf('Overview/', module).addDecorator(withKnobs).addDecorator(withInfo(infoAddonConfig)).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview",
    className: "reading-column"
  }, story());
}).add('Example Story', function () {
  var OBJECTS_GROUP_NAME = 'Data';
  var aStringValue = text('aString', 'Hello World!');
  var aNumberValue = number('aNumber', 5);

  var aBooleanValue = _boolean('aBoolean', true);

  var anActionString = select('anActionString', ['Lights!', 'Camera!', 'Action!'], 'Action!');
  var anArrayValue = object('anArray', [1, 2, 3], OBJECTS_GROUP_NAME);
  var anObjectValue = object('anObject', {
    width: 50,
    color: 'yellow'
  }, OBJECTS_GROUP_NAME);
  return React.createElement(ExampleComponent, {
    aString: aStringValue,
    aNumber: aNumberValue,
    aBoolean: aBooleanValue,
    aFunction: action(anActionString),
    anArray: anArrayValue,
    anObject: anObjectValue
  }, function (_ref) {
    var aString = _ref.aString,
        aNumber = _ref.aNumber,
        aBoolean = _ref.aBoolean,
        aFunction = _ref.aFunction,
        anArray = _ref.anArray,
        anObject = _ref.anObject,
        handleInputUpdate = _ref.handleInputUpdate,
        name = _ref.name;
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "Example OUI Component"), React.createElement("p", null, "This component uses the ", React.createElement("a", {
      href: "https://reactjs.org/docs/render-props.html",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "render props"), " pattern to allow for more extensibility while abstracting some common complexity. Check out the README in the \"Show Info\" section for more info!"), React.createElement("p", {
      className: "micro"
    }, React.createElement("span", {
      className: "example-background--yellow"
    }, "This text has its background color changed"), " by the ExampleComponent's sass."), React.createElement("h3", {
      className: "push-double--top"
    }, "Abstrating State Management"), React.createElement("div", {
      className: "push--ends"
    }, React.createElement(Input, {
      type: "text",
      onChange: handleInputUpdate,
      value: name,
      placeholder: "Type in me!"
    }), !!name && React.createElement("div", {
      className: "push-half--top"
    }, React.createElement("span", {
      className: "weight--bold"
    }, "Input Value:"), " ", name, React.createElement("div", {
      className: "micro"
    }, "The state for this is stored in the Render Component!"))), React.createElement("h3", {
      className: "push-double--top"
    }, "Using a Render Component to Transform Props"), React.createElement("div", {
      className: "micro"
    }, "Use the Storybook Knobs feature to update these."), React.createElement("div", {
      className: "push--ends"
    }, React.createElement(Button, {
      style: "outline",
      onClick: aFunction
    }, "Press Me and Check Out the Action Logger!")), React.createElement("div", {
      className: "push--ends"
    }, React.createElement("span", {
      className: "weight--bold"
    }, "Updated ", React.createElement("em", null, "anArray"), " value:"), " ", JSON.stringify(anArray)), React.createElement("div", {
      className: "push--ends"
    }, React.createElement("span", {
      className: "weight--bold"
    }, "Updated ", React.createElement("em", null, "anObject"), " value:"), " ", JSON.stringify(anObject)), React.createElement("div", {
      className: "push--ends"
    }, React.createElement("span", {
      className: "weight--bold"
    }, "Updated ", React.createElement("em", null, "aString"), " value:"), " ", aString), React.createElement("div", {
      className: "push--ends"
    }, React.createElement("span", {
      className: "weight--bold"
    }, "Updated ", React.createElement("em", null, "aNumber"), " value:"), " ", aNumber), React.createElement("div", {
      className: "push--ends"
    }, React.createElement("span", {
      className: "weight--bold"
    }, "Updated ", React.createElement("em", null, "aBoolean"), " value:"), " ", String(aBoolean)));
  });
});