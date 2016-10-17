import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import Form, { FieldSet, Legend, FormButton } from "./index.tsx";

const story = storiesOf("Form", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors))
  ;

story.add(
  "Empty Form",
  () => (
    <Form></Form>
  )
);

story.add(
  "With fieldsets and legend",
  () => (
    <Form>
      <FieldSet>
        <Legend>
          This is the legend
        </Legend>
        <input type="text" value="sample input"></input>
        <input type="text" value="sample text field"></input>
      </FieldSet>
      <FieldSet>
        <Legend>
          Another Fieldset and Legend
        </Legend>
        <input type="text" value="sample input"></input>
        <input type="text" value="sample text field"></input>
      </FieldSet>
    </Form>
  )
);

story.add(
  "Form with icon button",
  () => (
    <Form>
      <FieldSet>
        <Legend>Legend</Legend>
        <FormButton className="fa fa-thumbs-up"></FormButton>
      </FieldSet>
    </Form>
  )
);
