import styled from "styled-components";
import { palette } from "styled-theme";
import { ifProp } from "styled-tools";

const color = ifProp(
  "palette",
  palette({ graysclae: 0 }, 2),
  palette("graysclae", 1, true)
);
export const HorizontalRule = styled.hr`
  border: 0.1rem solid ${color};
  border-width: 0rem 0rem 0.15rem 0rem;
  background: transparent;
  width: 100%;
`;
