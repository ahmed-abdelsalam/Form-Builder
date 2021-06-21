import styled from "styled-components";

export const Col = styled.div<{
  size?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}>`
  ${(props) => `flex:0 0 ${((props.size || 1) / 12) * 100}%;`}
  ${(props) =>
    props.xl
      ? `@media  (min-width: 1200px){flex:0 0 ${(props.xl / 12) * 100}%;`
      : ""}
${(props) =>
    props.lg
      ? `@media  (min-width: 992px) and (max-width: 1199.98px){flex:0 0 ${(props.lg / 12) * 100
      }%;`
      : ""}
    ${(props) =>
    props.md
      ? `@media  (min-width: 768px) and (max-width: 991.98px){flex:0 0 ${(props.md / 12) * 100
      }%;`
      : ""}
    ${(props) =>
    props.sm
      ? `@media  (min-width: 576px) and (max-width: 767.98px) {flex:0 0 ${(props.sm / 12) * 100
      }%;`
      : ""}
    ${(props) =>
    props.xs
      ? `@media  (max-width: 575.98px){flex:0 0 ${(props.xs / 12) * 100}%;`
      : ""}
`;
export const Grid = styled.div`
  display: grid;
`;

// export Button;
export * from "./Button";
export * from "./CheckBox";
export * from "./Flex";
export * from "./Heading";
export * from "./HorizontalRule";
export * from "./Icon";
export * from "./Input";
export * from "./Label";

