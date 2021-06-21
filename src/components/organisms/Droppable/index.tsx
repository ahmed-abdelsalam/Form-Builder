import React from "react";
import styled from "styled-components";

const Drop = styled.div`
  margin: 0px;
  padding: 0px;
  broder-width: 0px;
`;

export const Droppable = (props) => {
  const drop = (e) => {
    const cardId = e.dataTransfer.getData("card-id");
    var card = document.getElementById(cardId);
    card.style.display = "inline-block";
    e.target.appendChild(card);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <Drop id="testDrop" onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </Drop>
  );
};
