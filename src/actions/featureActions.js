export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
    // action object (the returned object)
    return { type: ADD_FEATURE, payload: feature};
};

export const removeFeature = feature => {
// action object (the returned object)
    return { type: REMOVE_FEATURE, payload: feature};
};