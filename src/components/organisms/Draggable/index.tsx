import React from "react";
import styled from "styled-components";

const Drag = styled.div`
  display: inline-block;
  background: transparent;
  cursor: move;
  margin: 0px;
  padding: 0px;
  broder-width: 0px;
  &:focus {
    cursor: grabbing;
  }
`;

export const Draggable = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card-id", { card: props.card, name: props.name });
    e.dataTransfer.setData("text/plain", "");
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <Drag
      className="droppable-element"
      draggable={true}
      unselectable="on"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </Drag>
  );
};
