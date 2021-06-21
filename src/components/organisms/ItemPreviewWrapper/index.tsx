import { FormItem } from "components/molecules/FormItem";
import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  /* position: relative; */
  border-width: 0px;
  /* margin: 3rem; */
  /* padding: 3rem; */
  min-height: 3rem;
  min-width: 3rem;
`;

const Content = styled(FormItem)`
  width: 100%;
  height: 100%;
`;
export const ItemPreviewWrapper = forwardRef(
  (
    props: {
      cardName: string;
      label?: string;
    } & HTMLAttributes<HTMLDivElement>,
    ref: any
  ) => {
    return (
      <Wrapper {...props}>
        <Content type={props.cardName} label={props.label || "Form Item"} />
      </Wrapper>
    );
  }
);
