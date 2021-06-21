import { ItemPreviewWrapper } from "components/organisms";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { LayoutItemProps } from "state";
const ResponsiveRGL = WidthProvider(Responsive);

export const FormPreview = ({ layout, name }) => {
  const generateDOM = () =>
    layout.lg.map((l: LayoutItemProps) => {
      return (
        <ItemPreviewWrapper
          cardName={l.props.cardName}
          label={l.props.label}
          key={l.i}
          id={`drag-card-${l.i}`}
        />
      );
    });

  return (
    <ResponsiveRGL
      className="layout-builder"
      layouts={layout}
      margin={[16, 32]}
      containerPadding={[0, 16]}
      rowHeight={16}
      cols={{ lg: 24, md: 20, sm: 12, xs: 8, xxs: 4 }}
      width={1200}
      isDroppable={false}
      isResizable={false}
      isBounded
      // compactType="vertical"
      autoSize
      draggableHandle=".dragging"
      useCSSTransforms
      resizeHandles={["se"]}
    >
      {generateDOM()}
    </ResponsiveRGL>
  );
};
