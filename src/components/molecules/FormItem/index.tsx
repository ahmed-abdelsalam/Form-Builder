import { FileUploader, Flex, HorizontalRule, Input, Label } from "components";
import { CheckBox } from "components/atoms";
import { FC } from "react";
import styled from "styled-components";

export interface FormItemProps {
  label?: string;
  type?: string;
  className?: string;
  id?: string;
}

const InputStretch = styled(Input)`
  flex-grow: 1;
`;

const cardSwitcher = (p) => {
  const { type, ...props } = p;
  switch (type) {
    case "Input":
      return <InputStretch {...props} />;
    case "CheckBox":
      return <CheckBox />;
    case "Fileuploader":
      return <FileUploader {...props} palette="grayscale" reverse />;
    case "Text":
      return <InputStretch {...props} cardType="textarea" />;
    case "Select":
      return <InputStretch {...props} cardType="select" />;
    case "HorizontalRule": {
      return <HorizontalRule {...props} palette="primary" />;
    }
    default:
      return <Input type="number" />;
  }
};

const labelValue = (props) => {
  if (props.type === "HorizontalRule") return;
  if (props.label in [undefined, null]) return <Label>Form Item</Label>;
  return <Label>{props.label}</Label>;
};

export const FormItem: FC<FormItemProps> = ({ className, ...props }) => {
  return (
    <Flex
      justify="flex-start"
      items="stretch"
      content="flex-start"
      direction="column"
      borderWidth={0}
      className={className}
      {...props}
    >
      {labelValue(props)}
      {cardSwitcher(props)}
    </Flex>
  );
};
