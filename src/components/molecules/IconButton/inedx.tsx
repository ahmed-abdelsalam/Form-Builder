import { Button, ButtonProps, Icon } from "components";
import { DragEventHandler } from "react";
import styled from "styled-components";

export interface IconButtonProps extends ButtonProps {
  icon?: string;
  reverse?: boolean;
  children?: any;
  className?: string;
  onDragStart?: DragEventHandler;
  onDragOver?: DragEventHandler;
  draggable?: boolean;
  unselectable?: string;
  onClick?: (Event) => void;
}

const MarginedIcon = styled(Icon)<IconButtonProps>`
  margin-right: 1rem !important;
  margin-left: -0.5rem !important;
  ${(props) =>
    props.height
      ? `height:${props.height / 2}rem;width:${props.height / 2}rem;`
      : ""}
`;
const IconButton = ({ icon = "edit", children, ...props }: IconButtonProps) => {
  return (
    <Button {...props}>
      <MarginedIcon icon={icon} {...props} />
      {children}
    </Button>
  );
};
export { IconButton };
