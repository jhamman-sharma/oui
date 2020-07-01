import React from "react";
import { storiesOf } from "@storybook/react";
import classnames from 'classnames';

import { withKnobs, select } from "@storybook/addon-knobs";
import "./index.scss";

import { FlexboxInteractiveFlexDirection, FlexboxInteractiveFlex1 } from "./flexboxInteractive";

const stories = storiesOf("HelperClasses/Flexbox", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <section className="example flex">
        <div className="flex--1">
          <h2>.flex</h2>
          <p>
            Flex container. Typically other elements with flex specifications
            will live in a flex container.
          </p>
          <ol className="list--numbered">
            <li>Defines a flex container (gray box)</li>
            <li>Children are flex items (blue boxes)</li>
            <li>
              Block by default vs <code>.inline-flex</code>
            </li>
          </ol>
        </div>
        <div className="demo-only-helper-box-container flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex--column</h2>
          <p>
            Change direction of flex items from row to column. Use{" "}
            <code>.flex--row</code> to overspecify the orientation of flex items
            in a row.
          </p>
        </div>

        <div className="demo-only-helper-box-container flex flex--column">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section className="example">
        <div className="flex">
          <div className="flex--1">
            <h2>.flex--1</h2>
            <p>Fill available width, which stretches backgrounds.</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
            <div className="flex--1">
              <code>flex--1</code> container
            </div>
            <div>2</div>
          </div>
        </div>
        <div className="demo-only-subsection flex">
          <div className="flex--1">
            <h2>.flex--1, .flex--1</h2>
            <p>Distribute width across siblings.</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
            <div className="flex--1">
              <code>flex--1</code> container
            </div>
            <div className="flex--1">
              <code>flex--1</code> container
            </div>
          </div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex--none</h2>
          <p>
            Sizes item based on the height and width of the content, but makes
            it inflexible meaning it can't shrink. This creates the possibility
            of overflowing its container.
          </p>
        </div>

        <div className="demo-only-helper-box-container demo-only-helper-box-container--width-100 flex">
          <div className="flex--none">Some long text to make it overflow.</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex-shrink--none</h2>
          <p>
            Target element will not shrink. It will size based on its content
            and not wrap the content. Other elements will shrink to make space
            for it. There's a possibility for the flexbox container's elements
            to overflow.
          </p>
        </div>

        <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
          <div className="flex-shrink--none">
            Some long text to make everything overflow.
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex-grow--none</h2>
          <p>
            Target element will not grow according to its flex container size.
            It will accomodate its content's size, but not fill its container.
          </p>
        </div>

        <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
          <div className="flex-grow--none">Some short text.</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>
            .flex-align--(start<span className="muted">,</span> center
            <span className="muted">,</span> end)
          </h2>
          <p>For vertical alignment.</p>
        </div>

        <div className="demo-only-helper-box-container flex">
          <div className="flex flex-align--start">
            <span>Start</span>
          </div>

          <div className="flex flex-align--center">
            <span>Center</span>
          </div>

          <div className="flex flex-align--end">
            <span>End</span>
          </div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>
            .flex-justified--(start <span className="muted">,</span> center{" "}
            <span className="muted">,</span> end)
          </h2>
          <p>For horizontal alignment.</p>
        </div>
        <div className="demo-only-helper-box-container flex">
          <div className="flex flex-justified--start">
            <span>Start</span>
          </div>
          <div className="flex flex-justified--center">
            <span>Center</span>
          </div>
          <div className="flex flex-justified--end">
            <span>End</span>
          </div>
        </div>
      </section>

      <section className="example">
        <div className="flex">
          <div className="flex--1">
            <h2>.flex-wrap</h2>
            <p>Apply flex-wrap to a container and all child elements will wrap around in the container.</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex flex-wrap">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
        <div className="demo-only-subsection flex">
          <div className="flex--1">
            <h2>.flex-wrap--reverse</h2>
            <p>Will wrap in reverse</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex flex-wrap--reverse">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex--dead-center</h2>
          <p>
            Easy vertical and horizontal centering, no parent .flex necessary.
          </p>
        </div>

        <div className="demo-only-helper-box-container">
          <div className="flex--dead-center">1</div>
        </div>
      </section>

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
})
.add("Interactive", () => {
  return (
    <div>
      <FlexboxInteractiveFlexDirection/>
      <FlexboxInteractiveFlex1/>
      <section className="example">
        <div className="flex">
          <div className="flex--1">
            <h2>.flex--1</h2>
            <p>Fill available width, which stretches backgrounds.</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
            <div className="flex--1">
              <code>flex--1</code> container
            </div>
            <div>2</div>
          </div>
        </div>
        <div className="demo-only-subsection flex">
          <div className="flex--1">
            <h2>.flex--1, .flex--1</h2>
            <p>Distribute width across siblings.</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
            <div className="flex--1">
              <code>flex--1</code> container
            </div>
            <div className="flex--1">
              <code>flex--1</code> container
            </div>
          </div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex--none</h2>
          <p>
            Sizes item based on the height and width of the content, but makes
            it inflexible meaning it can't shrink. This creates the possibility
            of overflowing its container.
          </p>
        </div>

        <div className="demo-only-helper-box-container demo-only-helper-box-container--width-100 flex">
          <div className="flex--none">Some long text to make it overflow.</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex-shrink--none</h2>
          <p>
            Target element will not shrink. It will size based on its content
            and not wrap the content. Other elements will shrink to make space
            for it. There's a possibility for the flexbox container's elements
            to overflow.
          </p>
        </div>

        <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
          <div className="flex-shrink--none">
            Some long text to make everything overflow.
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex-grow--none</h2>
          <p>
            Target element will not grow according to its flex container size.
            It will accomodate its content's size, but not fill its container.
          </p>
        </div>

        <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
          <div className="flex-grow--none">Some short text.</div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>
            .flex-align--(start<span className="muted">,</span> center
            <span className="muted">,</span> end)
          </h2>
          <p>For vertical alignment.</p>
        </div>

        <div className="demo-only-helper-box-container flex">
          <div className="flex flex-align--start">
            <span>Start</span>
          </div>

          <div className="flex flex-align--center">
            <span>Center</span>
          </div>

          <div className="flex flex-align--end">
            <span>End</span>
          </div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>
            .flex-justified--(start <span className="muted">,</span> center{" "}
            <span className="muted">,</span> end)
          </h2>
          <p>For horizontal alignment.</p>
        </div>
        <div className="demo-only-helper-box-container flex">
          <div className="flex flex-justified--start">
            <span>Start</span>
          </div>
          <div className="flex flex-justified--center">
            <span>Center</span>
          </div>
          <div className="flex flex-justified--end">
            <span>End</span>
          </div>
        </div>
      </section>

      <section className="example">
        <div className="flex">
          <div className="flex--1">
            <h2>.flex-wrap</h2>
            <p>Apply flex-wrap to a container and all child elements will wrap around in the container.</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex flex-wrap">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
        <div className="demo-only-subsection flex">
          <div className="flex--1">
            <h2>.flex-wrap--reverse</h2>
            <p>Will wrap in reverse</p>
          </div>
          <div className="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex flex-wrap--reverse">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
      </section>

      <section className="example flex">
        <div className="flex--1">
          <h2>.flex--dead-center</h2>
          <p>
            Easy vertical and horizontal centering, no parent .flex necessary.
          </p>
        </div>

        <div className="demo-only-helper-box-container">
          <div className="flex--dead-center">1</div>
        </div>
      </section>

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
