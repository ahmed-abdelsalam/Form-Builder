import { Button, Flex, Heading } from "components";
import { Icon } from "components/atoms";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeGetFormByName, makeGetNamedForms } from "state/selectors";
import styled from "styled-components";
import { palette } from "styled-theme";

const Container = styled.div`
  background: ${palette("grayscale", 0, true)};
  padding: 2rem;
  max-height: 25%;
  overflow-y: auto;
`;
const Wrapper = styled(Flex)`
  margin-bottom: 1rem;
  border-width: 0;
`;
const Item = styled(Button)`
  border-width: 0;
`;
const RightIcon = styled(Icon)`
  float: right;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const ItemPreview = ({ name, ...props }) => {
  const dispatch = useDispatch();
  const curForm = useSelector(makeGetFormByName(name));
  return (
    <Item
      palette="grayscale"
      reverse
      onClick={() => {
        dispatch({
          type: "VIEW_FORM",
          payload: { name, layout: curForm },
        });
      }}
    >
      {name}
    </Item>
  );
};
export const SaveList = (props) => {
  const dispatch = useDispatch();
  const savedList = useSelector(makeGetNamedForms);
  return (
    <Container>
      <Heading level={1}>
        Forms
        <RightIcon
          icon="add"
          palette="grayscale"
          reverse
          size={1.5}
          onClick={() => {
            dispatch({
              type: "CREATE_FORM",
            });
          }}
        ></RightIcon>
      </Heading>
      <Wrapper justify="center" direction="column" {...props}>
        {savedList.map((r, i) => (
          <ItemPreview name={r.name} key={`saved-form-${i}`} />
        ))}
      </Wrapper>
    </Container>
  );
};
