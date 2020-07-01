import React from "react";
import { storiesOf } from "@storybook/react";
import classnames from 'classnames';

import { withKnobs, select } from "@storybook/addon-knobs";
import "./index.scss";
import TabNav from "../../src/components/TabNav/index";
import Code from "../../src/components/Code/index";

import { FlexAligning, 
  FlexDirection, 
  Flex1, 
  FlexNone,
  FlexWrap } from "./FlexboxInteractive";

const stories = storiesOf("HelperClasses/Flexbox", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <section className="example flex flex--column">
        <TabNav activeTab="flex" style={['dashboard']}>
          <TabNav.Tab tabId="flex">
            flex
          </TabNav.Tab> 
        </TabNav>
        <div className="flex flex--row push--top">
          <div className="flex--1">
            <p>
              Flex container. Typically other elements with flex specifications
              will live in a flex container.
            </p>
            <ol className="list--numbered">
              <li>Defines a flex container (light purple box)</li>
              <li>Children are flex items (dark purple boxes)</li>
            </ol>
            <div className="flex--dead-center flex flex--1 push--top">
              <div className="demo-only-helper-box-container flex">
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>
          <div className="flex--1 demo-only-code-box">
            <Code
              hasCopyButton={true}
              isHighlighted={true}
              type={ 'block'}
              language={ 'html'}>
              { `<div className='flex'>\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>`}
            </Code>
          </div>
        </div>
      </section>
      <FlexDirection/>
      <Flex1/>
      <FlexNone/>
      <FlexAligning/>
      <FlexWrap/>
      <section className="example">
        <div className="flex">
          <div className="flex--1">
            <h2>.flex, .anchor--right</h2>
            <p>Move element without modifying width.</p>
          </div>
          <div className="width--250">
            <div className="flex flex-align--center">
              <div className="flush--bottom box-1">Changes</div>
              <div className="box-2 anchor--right">
                <ul className="lego-badge">
                  <li className="badge__live">4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="example">
        <h2>.flex--1, .flex-align--center x2</h2>
        <p>
          This combines flex--1 to fill the gap while pushing the tiny button
          right, then employs two flex-align--center helper classNamees for inner
          text and button alignment.
        </p>
        <ol className="lego-form-fields">
          <li className="lego-form-field__item">
            <ul className="lego-block-list push-double--bottom ui-sortable">
              <li className="draggable-token hard--sides">
                <div className="flex flex-align--center">
                  <div className="flex--1 box-1">
                    <div className="lego-token-wrap">
                      <div className="push--right push-half--left flex flex-align--center">
                        Audience Name
                      </div>
                      <div className="lego-token lego-token--secondary">
                        <div className="lego-token__text push--right">
                          {" "}
                          Token Component{" "}
                        </div>
                      </div>
                    </div>
                    <span className="box-2 soft--sides">
                      <button
                        className="lego-button lego-button--tiny lego-button--outline"
                        type="button"
                      >
                        {" "}
                        Tiny Button{" "}
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="example">
        <div className="flex">
          <div className="flex--1">
            <h2>Flex all the things</h2>
            <p>
              PreviewUI is our most complicated Flexbox use to date with many
              nested flexboxes combinations, including scrolling.
            </p>
          </div>
          <div className="width--300">
            <div className="flex flex--column">
              <div className="flex flex--row box-1 border--bottom soft--ends soft-double--sides">
                <div className="flex--1">Overview</div>
                <div className="">x</div>
              </div>

              <div className="flex flex--row box-2 border--bottom">
                <div className="flex--1 box-2 flex--dead-center soft">
                  <button className="lego-button lego-button--outline">1</button>
                </div>
                <div className="flex--1 box-2 flex--dead-center soft">
                  <button className="lego-button lego-button--outline">2</button>
                </div>
                <div className="flex--1 box-2 flex--dead-center soft">
                  <button className="lego-button lego-button--outline">3</button>
                </div>
                <div className="flex--1 box-2 flex--dead-center soft">
                  <button className="lego-button lego-button--outline">4</button>
                </div>
              </div>

              <div className="flex flex--column height--150 overflow-y--scroll">
                <div className="flex--1 box-2 flex--dead-center soft-double">
                  ...
                </div>
                <div className="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div className="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div className="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div className="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div className="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
              </div>

              <div className="flex soft-double box-1 border--top">
                <button className="lego-button lego-button--outline flex--1">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
