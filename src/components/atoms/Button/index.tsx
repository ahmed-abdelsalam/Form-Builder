import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";

export interface ButtonProps {
  disabled?: boolean;
  dashed?: boolean;
  active?: boolean;
  palette?: string;
  height?: number;
  font?: string;
  size?: number;
}

export const styling = css<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 20rem;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  font-family: ${font("primary")};
  font-size: ${(props) => props.size || 1}rem;
  height: ${(props) => (props.height ? props.height + "rem" : "initial")};
  background: ${(props) =>
    props.disabled
      ? palette({ grayscale: 0 }, 2)
      : palette({ grayscale: 0 }, 1)};
  color: ${(props) =>
    props.disabled
      ? palette({ grayscale: 0 }, 0, true)
      : palette("grayscale", 0, true)};
  border: 1px ${(props) => (props.dashed ? "dashed" : "solid")} ${(porps) => palette({ grayscale: 0 }, 0, true)};
  transition: all 0.15s ease-in;
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
`;

const Link = styled(({ disabled, reverse, palette, height, ...props }) => (
  <Link {...props} />
))`
  ${styling}
`;
const Anchor = styled.a`
  ${styling}
`;
const Btn = styled.button`
  ${styling}
`;

export const Button = ({ palette = "primary", ...props }) => {
  const { to, href } = props;
  if (to) {
    return <Link palette={palette} {...props} />;
  }
  if (href) {
    return <Anchor palette={palette} {...props} />;
  }
  return <Btn palette={palette} {...props} />;
};
