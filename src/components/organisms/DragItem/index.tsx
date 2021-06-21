import { IconButton } from "components";

export const DragItem = ({ children, ...props }) => {
  const dragStart = (e) => {
    e.dataTransfer.setData(
      "card-id",
      JSON.stringify({ card: props.card, name: props.name })
    );
    e.dataTransfer.setData("text/plain", "");
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <IconButton
      className="droppable-element"
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={true}
      unselectable="on"
      {...props}
    >
      {children}
    </IconButton>
  );
};
