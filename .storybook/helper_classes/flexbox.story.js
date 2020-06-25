import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs, select } from "@storybook/addon-knobs";
import "./index.scss";

const stories = storiesOf("HelperClasses/Flexbox", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <section class="example flex">
        <div class="flex--1">
          <h2>.flex</h2>
          <p>
            Flex container. Typically other elements with flex specifications
            will live in a flex container.
          </p>
          <ol class="list--numbered">
            <li>Defines a flex container (gray box)</li>
            <li>Children are flex items (blue boxes)</li>
            <li>
              Block by default vs <code>.inline-flex</code>
            </li>
          </ol>
        </div>
        <div class="demo-only-helper-box-container flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>.flex--column</h2>
          <p>
            Change direction of flex items from row to column. Use{" "}
            <code>.flex--row</code> to overspecify the orientation of flex items
            in a row.
          </p>
        </div>

        <div class="demo-only-helper-box-container flex flex--column">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section class="example">
        <div class="flex">
          <div class="flex--1">
            <h2>.flex--1</h2>
            <p>Fill available width, which stretches backgrounds.</p>
          </div>
          <div class="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
            <div class="flex--1">
              <code>flex--1</code> container
            </div>
            <div>2</div>
          </div>
        </div>
        <div class="demo-only-subsection flex">
          <div class="flex--1">
            <h2>.flex--1, .flex--1</h2>
            <p>Distribute width across siblings.</p>
          </div>
          <div class="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
            <div class="flex--1">
              <code>flex--1</code> container
            </div>
            <div class="flex--1">
              <code>flex--1</code> container
            </div>
          </div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>.flex--none</h2>
          <p>
            Sizes item based on the height and width of the content, but makes
            it inflexible meaning it can't shrink. This creates the possibility
            of overflowing its container.
          </p>
        </div>

        <div class="demo-only-helper-box-container demo-only-helper-box-container--width-100 flex">
          <div class="flex--none">Some long text to make it overflow.</div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>.flex-shrink--none</h2>
          <p>
            Target element will not shrink. It will size based on its content
            and not wrap the content. Other elements will shrink to make space
            for it. There's a possibility for the flexbox container's elements
            to overflow.
          </p>
        </div>

        <div class="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
          <div class="flex-shrink--none">
            Some long text to make everything overflow.
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>.flex-grow--none</h2>
          <p>
            Target element will not grow according to its flex container size.
            It will accomodate its content's size, but not fill its container.
          </p>
        </div>

        <div class="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex">
          <div class="flex-grow--none">Some short text.</div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>
            .flex-align--(start<span class="muted">,</span> center
            <span class="muted">,</span> end)
          </h2>
          <p>For vertical alignment.</p>
        </div>

        <div class="demo-only-helper-box-container flex">
          <div class="flex flex-align--start">
            <span>Start</span>
          </div>

          <div class="flex flex-align--center">
            <span>Center</span>
          </div>

          <div class="flex flex-align--end">
            <span>End</span>
          </div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>
            .flex-justified--(start <span class="muted">,</span> center{" "}
            <span class="muted">,</span> end)
          </h2>
          <p>For horizontal alignment.</p>
        </div>
        <div class="demo-only-helper-box-container flex">
          <div class="flex flex-justified--start">
            <span>Start</span>
          </div>
          <div class="flex flex-justified--center">
            <span>Center</span>
          </div>
          <div class="flex flex-justified--end">
            <span>End</span>
          </div>
        </div>
      </section>

      <section class="example">
        <div class="flex">
          <div class="flex--1">
            <h2>.flex-wrap</h2>
            <p>Apply flex-wrap to a container and all child elements will wrap around in the container.</p>
          </div>
          <div class="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex flex-wrap">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
        <div class="demo-only-subsection flex">
          <div class="flex--1">
            <h2>.flex-wrap--reverse</h2>
            <p>Will wrap in reverse</p>
          </div>
          <div class="demo-only-helper-box-container demo-only-helper-box-container--width-300 flex flex-wrap--reverse">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
      </section>

      <section class="example flex">
        <div class="flex--1">
          <h2>.flex--dead-center</h2>
          <p>
            Easy vertical and horizontal centering, no parent .flex necessary.
          </p>
        </div>

        <div class="demo-only-helper-box-container">
          <div class="flex--dead-center">1</div>
        </div>
      </section>

      <section class="example">
        <div class="flex">
          <div class="flex--1">
            <h2>.flex, .anchor--right</h2>
            <p>Move element without modifying width.</p>
          </div>
          <div class="width--250">
            <div class="flex flex-align--center">
              <div class="flush--bottom box-1">Changes</div>
              <div class="box-2 anchor--right">
                <ul class="lego-badge">
                  <li class="badge__live">4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="example">
        <h2>.flex--1, .flex-align--center x2</h2>
        <p>
          This combines flex--1 to fill the gap while pushing the tiny button
          right, then employs two flex-align--center helper classes for inner
          text and button alignment.
        </p>
        <ol class="lego-form-fields">
          <li class="lego-form-field__item">
            <ul class="lego-block-list push-double--bottom ui-sortable">
              <li class="draggable-token hard--sides">
                <div class="flex flex-align--center">
                  <div class="flex--1 box-1">
                    <div class="lego-token-wrap">
                      <div class="push--right push-half--left flex flex-align--center">
                        Audience Name
                      </div>
                      <div class="lego-token lego-token--secondary">
                        <div class="lego-token__text push--right">
                          {" "}
                          Token Component{" "}
                        </div>
                      </div>
                    </div>
                    <span class="box-2 soft--sides">
                      <button
                        class="lego-button lego-button--tiny lego-button--outline"
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

      <section class="example">
        <div class="flex">
          <div class="flex--1">
            <h2>Flex all the things</h2>
            <p>
              PreviewUI is our most complicated Flexbox use to date with many
              nested flexboxes combinations, including scrolling.
            </p>
          </div>
          <div class="width--300">
            <div class="flex flex--column">
              <div class="flex flex--row box-1 border--bottom soft--ends soft-double--sides">
                <div class="flex--1">Overview</div>
                <div class="">x</div>
              </div>

              <div class="flex flex--row box-2 border--bottom">
                <div class="flex--1 box-2 flex--dead-center soft">
                  <button class="lego-button lego-button--outline">1</button>
                </div>
                <div class="flex--1 box-2 flex--dead-center soft">
                  <button class="lego-button lego-button--outline">2</button>
                </div>
                <div class="flex--1 box-2 flex--dead-center soft">
                  <button class="lego-button lego-button--outline">3</button>
                </div>
                <div class="flex--1 box-2 flex--dead-center soft">
                  <button class="lego-button lego-button--outline">4</button>
                </div>
              </div>

              <div class="flex flex--column height--150 overflow-y--scroll">
                <div class="flex--1 box-2 flex--dead-center soft-double">
                  ...
                </div>
                <div class="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div class="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div class="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div class="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
                <div class="flex--1 box-2 border--top flex--dead-center soft-double">
                  ...
                </div>
              </div>

              <div class="flex soft-double box-1 border--top">
                <button class="lego-button lego-button--outline flex--1">
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
