import { BuilderReducerStateType } from './builderReducer';
const initialLayouts = [];

export type LayoutReducerStateType = BuilderReducerStateType[];
export const layoutReducer = (state = initialLayouts, action) => {
    switch (action.type) {
        case 'SAVE':
            return action.payload
        case 'ADD':
            return [...state, action.payload]
        default:
            return state
    }
}

