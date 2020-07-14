export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => {
    // action object (the returned object)
    return { type: ADD_FEATURE, payload: feature};
  };