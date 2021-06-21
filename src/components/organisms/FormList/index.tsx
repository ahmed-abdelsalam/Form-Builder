import { DragItem, Flex, Heading } from "components";
import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";

const Container = styled.div`
  background: ${palette("primary", 0)};
  padding: 2rem;
  max-height: 75%;
  overflow-y: auto;
`;
const Wrapper = styled(Flex)`
  margin-bottom: 1rem;
  border-width: 0;
`;
export type FormItemType =
  | "Input"
  | "CheckBox"
  | "Fileuploader"
  | "Text"
  | "HorizontalRule"
  | "Select";

export type FormItemDetails = { name: string; card: FormItemType };

const AvailableFormItems: FormItemDetails[] = [
  { name: "input", card: "Input" },
  { name: "Select", card: "Select" },
  { name: "CheckBox", card: "CheckBox" },
  { name: "File Uploader", card: "Fileuploader" },
  { name: "Text", card: "Text" },
  { name: "Divider", card: "HorizontalRule" },
];
const AvailableCellItems = [{ name: "Table", card: "ResizableTable" }];

export const FormList = (props) => (
  <Container>
    <Heading level={2} palette="grayscale">
      Cell Layout
    </Heading>
    <Wrapper justify="center" direction="column" {...props}>
      {AvailableCellItems.map((r, i) => (
        <DragItem
          style={{ margin: "0.5rem" }}
          key={i}
          icon="drag"
          dashed
          size={1.1}
          font="primary"
        >
          {r.name}
        </DragItem>
      ))}
    </Wrapper>
    <Heading level={2} palette="grayscale">
      Form Components
    </Heading>
    <Wrapper justify="center" direction="column" {...props}>
      {AvailableFormItems.map((r, i) => (
        <DragItem
          style={{ margin: "0.5rem" }}
          card={r.card}
          name={r.name}
          key={i}
          icon="drag"
          dashed
          size={1.1}
          font="primary"
        >
          {r.name}
        </DragItem>
      ))}
    </Wrapper>
  </Container>
);
