export interface LayoutItemProps {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
    resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;
    isBounded?: boolean;
    props: {
        cardName: string;
        label?: string;
    };
}

const intialState = {
    lg: [],
};

export interface BuilderReducerStateType {
    lg: LayoutItemProps[]
}

export const builderReducer = (state: BuilderReducerStateType = intialState, action) => {
    switch (action.type) {
        case 'UPDATE_BUILDER': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

