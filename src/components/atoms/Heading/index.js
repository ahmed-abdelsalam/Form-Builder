import React from "react";
import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";
import { ifProp } from "styled-tools";

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`;

const styles = css `
  font-family: ${font("primary")};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  text-align: ${ifProp("center", "center", "start")};
  color: ${(props) =>
    props.palette ? palette({ grayscale: 5 }, 1) : palette("grayscale", 1)};
`;

export const Heading = styled(
    ({ level = 1, children, reverse, palette, theme, center, ...props }) =>
    React.createElement(`h${level}`, props, children)
)
`
  ${styles}
`;