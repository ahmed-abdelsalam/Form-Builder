import { createSelector } from "reselect";

export const makeGetBuilder = (state) => state.builder;
export const makeGetSavedForms = (state) => state.savedForms;
export const makeGetUI = (state) => state.ui;

export const makeGetNamedForms = createSelector(makeGetSavedForms, (a) =>
    a.map((r, i) => ({ name: `Form ${i}` }))
);
export const makeAllForms = createSelector(
    [makeGetBuilder, makeGetSavedForms],
    (b, f) => [...f, b]
);
export const makeGetFormByName = (name) => {
    return createSelector(makeGetSavedForms, (a) => {
        let id = parseInt(name.replace("Form ", ""));
        if (id >= 0) return a[id];
        return null;
    });
};