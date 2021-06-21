import { Flex, Icon } from "components";
import { FlexProps } from "components/atoms";
import { FormItem } from "components/molecules/FormItem";
import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
export interface DragWrapperProps {
  delete?: (e: Event) => void;
  copy?: (e: Event) => void;
  edit?: (e: Event) => void;
  cardName?: string;
  label?: string;
  // children?: ReactNode;
}

const Wrapper = styled.div`
  border-radius: 0.5rem;
  /* position: relative; */
  border-width: 0px;
  /* margin: 3rem; */
  /* padding: 3rem; */
  min-height: 3rem;
  min-width: 3rem;
`;
const HoverIcon = styled(Icon)`
  cursor: pointer;
`;

const IconList = [
  { icon: "drag" },
  { icon: "edit" },
  { icon: "trash" },
  { icon: "copy" },
];

const RightFloat = styled(Flex)<FlexProps>`
  padding: 0.5rem 0.25rem;
  position: absolute;
  top: 0.75rem;
  right: -0.5rem;
  width: ${IconList.length * 2}rem;
  background: ${palette("grayscale", 0, true)};
  z-index: 2;
`;
const Content = styled(FormItem)`
  width: 100%;
  height: 100%;
`;
export const DragWrapper = forwardRef(
  (props: DragWrapperProps & HTMLAttributes<HTMLDivElement>, ref: any) => {
    return (
      <Wrapper {...props} ref={ref}>
        <RightFloat items="center" content="center" round>
          {IconList.map((r, i) => (
            <HoverIcon
              icon={r.icon}
              size={1.25}
              className={r.icon === "drag" ? "dragging" : null}
              onClick={
                r.icon === "trash"
                  ? props.delete
                  : r.icon === "edit"
                  ? props.edit
                  : r.icon === "copy"
                  ? props.copy
                  : null
              }
              key={i}
              reverse
            />
          ))}
        </RightFloat>
        <Content type={props.cardName} label={props.label || "Form Item"} />
        {props.children}
      </Wrapper>
    );
  }
);
