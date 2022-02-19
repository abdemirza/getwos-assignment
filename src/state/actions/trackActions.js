export const trackAction = (payload) => (dispatch) => {
  dispatch({ type: "SET_TRACK", payload: payload });
};
export const loadingAction = () => (dispatch) => {
  dispatch({ type: "SET_LOADING" });
};
