import { BuilderReducerStateType } from './builderReducer';

type UIStateType = {
    mode: "create" | "view",
    currentForm: {
        name: string,
        layout: BuilderReducerStateType
    }
}

const intialState: UIStateType = {
    mode: 'create',
    currentForm: null
};

export type LayoutReducerStateType = BuilderReducerStateType[];
export const uiReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'CREATE_FORM':
            return { ...state, mode: 'create' }
        case 'VIEW_FORM':
            return { ...state, mode: 'show', currentForm: action.payload }
        default:
            return state
    }
}

