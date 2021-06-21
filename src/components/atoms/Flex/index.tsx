import styled, { css } from "styled-components";
import { palette } from "styled-theme";

export interface FlexProps {
  direction?: string;
  items?: string;
  content?: string;
  justify?: string;
  round?: boolean;
  dashed?: boolean;
  borderWidth?: number;
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  ${(props) =>
    css`
      flex-direction: ${props.direction || "row"};
      align-items: ${props.items || "stretch"};
      align-content: ${props.content || "flex-start"};
      justify-content: ${props.justify || " space-evenly"};
      ${props.round ? "border-radius:20rem;" : ""};
      border: ${props.borderWidth >= 0 ? props.borderWidth : 1}px
        ${props.dashed ? "dashed" : "solid"} ${palette("grayscale", 5)};
      padding: 0;
    `}
`;
