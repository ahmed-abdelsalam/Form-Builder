import { storiesOf } from "@storybook/react";
import { Button } from "components";
import React from "react";

storiesOf("MyButton", module)
  .add("default", () => <Button>Hello</Button>)
  .add("reverse", () => <Button palette="primary">Hello</Button>)
  .add("dashed", () => (
    <Button dashed size="large">
      Hello
    </Button>
  ));
