import { DragWrapper } from "components";
import { FormItemDetails, FormItemType } from "components/organisms";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import "react-resizable/css/styles.css";
import { LayoutItemProps } from "state";
import { makeGetBuilder } from "state/selectors";
import "./index.css";
const ResponsiveRGL = WidthProvider(Responsive);

const intialCardSize = (card: FormItemType): { w: number; h: number } => {
  switch (card) {
    case "HorizontalRule":
      return { w: 24, h: 1 };
    case "Fileuploader":
      return { w: 4, h: 2 };
    case "CheckBox":
      return { w: 2, h: 2 };
    default:
      return { w: 12, h: 4 };
  }
};

export const LayoutBuilder = () => {
  const dispatch = useDispatch();
  // const [layout, setLayout] = useState({ lg: [] });
  const layout = useSelector(makeGetBuilder);
  const llayout = useSelector(
    (state: { builder: any; savedForms: any[] }) => state.builder
  );

  const setLayout = (data) => {
    dispatch({ type: "UPDATE_BUILDER", payload: data });
  };

  const onDrop = (_, layoutItem, _event) => {
    const card: FormItemDetails = JSON.parse(
      _event.dataTransfer.getData("card-id")
    );
    if (!card) return;
    const newItem = {
      ...layoutItem,
      ...intialCardSize(card.card),
      i: `${layout.lg.length}`,
      isResizable: true,
      resizeHandles: ["se"],
      props: {
        cardName: card.card,
        label: card.name,
      },
    };
    setLayout({
      lg: [...layout.lg, newItem],
    });
  };
  const generateDOM = () =>
    layout.lg.map((l: LayoutItemProps) => {
      return (
        <DragWrapper
          key={l.i}
          id={`drag-card-${l.i}`}
          delete={onClose}
          copy={onCopy}
          {...l.props}
        />
      );
    });

  const onClose = (e: Event) => {
    const card = (e.target as HTMLElement).closest(".react-grid-item");
    setLayout({
      lg: [...layout.lg.filter((r) => `drag-card-${r.i}` !== card.id)],
    });
  };
  const onCopy = (e) => {
    const card = (e.target as HTMLElement).closest(".react-grid-item");
    const key = card.id.replace("drag-card-", "");
    let filtered = layout.lg.filter((r) => r.i === key);
    if (filtered?.length) {
      setLayout({
        lg: [
          ...layout.lg,
          {
            ...filtered[0],
            i: "" + layout.lg.length,
            y: filtered[0].y + 1,
          },
        ],
      });
    }
  };
  const layoutChange = (l) => {
    // console.log(JSON.stringify(l));
    setLayout({
      lg: [
        ...layout.lg.map((r, i) => ({
          ...r,
          ...l[i],
        })),
      ],
    });
  };

  return (
    <ResponsiveRGL
      className="layout-builder"
      layouts={layout}
      margin={[16, 32]}
      containerPadding={[0, 16]}
      rowHeight={16}
      cols={{ lg: 24, md: 20, sm: 12, xs: 8, xxs: 4 }}
      width={1200}
      isDroppable
      isResizable
      isBounded
      // compactType="vertical"
      autoSize
      draggableHandle=".dragging"
      useCSSTransforms
      onDrop={onDrop}
      resizeHandles={["se"]}
      onLayoutChange={layoutChange}
    >
      {generateDOM()}
    </ResponsiveRGL>
  );
};
