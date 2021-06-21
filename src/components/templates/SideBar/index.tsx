import { Flex } from "components";
import styled from "styled-components";
import { palette } from "styled-theme";

const sidebarWidth = 25;
export const Wrapper = styled(Flex)`
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  width: ${sidebarWidth}rem;
  min-width: ${sidebarWidth}rem;
  background: ${palette("primary", 0)};
`;
export const Sidebar = (props) => (
  <Wrapper
    direction="column"
    justify="flex-start"
    items="stretch"
    content="center"
  >
    {props.children}
  </Wrapper>
);

export const SidebarMainContainer = styled.div`
  width: calc(100% - ${sidebarWidth || 0}rem);
  margin: 0rem 7%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  @media (max-width: 60rem) {
    margin: 0px;
  }
`;
