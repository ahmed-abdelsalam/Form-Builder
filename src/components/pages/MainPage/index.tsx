import {
  Flex,
  FormList,
  Heading,
  IconButton,
  LayoutBuilder,
  SaveList,
  Sidebar,
  SidebarMainContainer,
} from "components";
import { FormPreview } from "components/templates";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAllForms, makeGetUI } from "state/selectors";
import styled from "styled-components";

const FLB = styled(Flex)`
  height: calc(100vh - 4rem);
  border-width: 0;
  overflow-x: hidden;
`;
const FL = styled(Flex)`
  height: 4rem;
  border-width: 0;
`;

export const MainPage = (props) => {
  const dispatch = useDispatch();
  const allForms = useSelector(makeAllForms);
  const currentUI = useSelector(makeGetUI);
  return (
    <Flex justify="flex-start">
      <Sidebar>
        <SaveList />
        <FormList />
      </Sidebar>
      <SidebarMainContainer>
        <FLB
          justify="flex-start"
          direction="column"
          items="stretch"
          content="stretch"
        >
          {currentUI.mode === "show" ? (
            <>
              <Heading level={2} palette="grayscale" center>
                {currentUI.currentForm.name}
              </Heading>
              <FormPreview
                layout={currentUI.currentForm.layout}
                name={currentUI.currentForm.name}
              />
            </>
          ) : (
            <>
              <Heading level={2} palette="grayscale" center>
                Drop & Create
              </Heading>
              <LayoutBuilder />
            </>
          )}
        </FLB>
        <FL
          justify="center"
          direction="row"
          content="center"
          items="center"
          style={{ height: "4rem" }}
        >
          <IconButton
            icon="copy"
            onClick={() => dispatch({ type: "SAVE", payload: allForms })}
          >
            Save
          </IconButton>
          <IconButton icon="edit">Validate</IconButton>
        </FL>
      </SidebarMainContainer>
    </Flex>
  );
};
