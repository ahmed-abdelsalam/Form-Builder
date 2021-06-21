import styled from "styled-components";
import { font, palette } from "styled-theme";

export const Label = styled.label<{
  size?: number;
  palette?: string;
  font?: string;
  reverse?: boolean;
}>`
  font-family: ${font("primary", 0)};
  color: ${palette("grayscale", 1)};
  font-size: ${(props) => props.size || 1}rem;
  line-height: 2em;
`;

// export const Label = ({ size, ...props }) => <Wrapper {...props} />;
