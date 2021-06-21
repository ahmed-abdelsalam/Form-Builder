import { FC, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";
import { ifProp } from "styled-tools";

export interface InputProps extends HTMLAttributes<HTMLElement> {
  cardType?: string;
  type?: string;
}

const fontSize = ({ height }) => `${height / 35.5}rem`;

const styles = css`
  font-family: ${font("primary")};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp({ type: "textarea" }, "0.44em", "0 0.44em")};
  height: ${ifProp({ type: "textarea" }, "auto", "2.22em")};
  color: ${palette("grayscale", 0)};
  background-color: ${palette("grayscale", 0, true)};
  border: 1px solid
    ${ifProp("invalid", palette("danger", 2), palette("grayscale", 4))};
  border-radius: 0.5rem;
  &[type="checkbox"],
  &[type="radio"] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
  &focus {
    border: 1px solid
      ${ifProp("invalid", palette("danger", 2), palette("grayscale", 2))};
  }
`;

const StyledTextarea = styled.textarea<InputProps>`
  ${styles}
  resize: none;
`;
const StyledSelect = styled.select<InputProps>`
  ${styles}
`;
const StyledInput = styled.input<InputProps>`
  ${styles}
`;

export const Input: FC<InputProps> = ({ ...props }: InputProps) => {
  const { cardType, ...rest } = props;
  if (cardType === "textarea") {
    return <StyledTextarea {...rest} />;
  }
  if (cardType === "select") {
    return <StyledSelect {...rest} />;
  }
  return <StyledInput {...rest} />;
};

// Input.propTypes = {
//   type: PropTypes.string,
//   reverse: PropTypes.bool,
//   height: PropTypes.number,
//   invalid: PropTypes.bool,
// }

// Input.defaultProps = {
//   type: 'text',
//   height: 40,
// }

// default Input
