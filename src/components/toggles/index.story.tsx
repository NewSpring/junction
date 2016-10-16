import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";

import Toggle from "./index.tsx";

const story = storiesOf("Toggles", module);

story.add(
  "Basic Toggle", () => (
    <Toggle className="toggle__item" />
  )
);

story.add(
  "Toggle Active", () => (
    <Toggle className="toggle__item--active" />
  )
);

story.add(
  "Toggle Arrow", () => (
    <Toggle className="toggle__item toggle-arrow__item" />
  )
)

story.add(
  "Toggle Active & Arrow", () => (
    <Toggle className="toggle__item--active toggle-arrow__item" />
  )
)
