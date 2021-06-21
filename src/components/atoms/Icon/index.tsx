import styled, { css } from "styled-components";
import { palette } from "styled-theme";
import { ifProp } from "styled-tools";
const sizeStyle = ({ size }: { size?: number }) =>
  css`
    font-size: ${size / 16 || 1}rem;
    width: ${size || 1}rem;
    height: ${size || 1}rem;
  `;

type IconProps = {
  icon: string;
  size?: number;
  palette?: string;
  reverse?: boolean;
};

const Wrapper = styled.span`
  display: inline-block;
  color: ${ifProp(
    "palette",
    palette({ grayscale: 0 }, 1, true),
    palette("grayscale", 1, true)
  )};
  ${sizeStyle}
  margin: 0em;
  box-sizing: border-box;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${ifProp(
      "palette",
      palette({ grayscale: 0 }, 1, true),
      palette("grayscale", 1, true)
    )};
    stroke: ${ifProp(
      "palette",
      palette({ grayscale: 0 }, 1, true),
      palette("grayscale", 1, true)
    )};
  }
`;

export const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`).default;
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};
