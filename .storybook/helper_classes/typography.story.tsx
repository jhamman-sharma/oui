import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import "./index.scss";

import { Typography } from "./typography";

const stories = storiesOf("HelperClasses/Typography", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <Typography/>
    </div>
  );
});
